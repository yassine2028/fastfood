import { NextResponse } from 'next/server';
import { Meal } from '../../../../models/Meal';
import { connectToDatabase } from '../../../../lib/mongoose'
import { Readable } from "stream";
import { cloudinary } from '../../../../lib/cloudinary'



export async function DELETE(req, context) {
    const { params } = context;
    const { id } = await params;

    await connectToDatabase();
    const deleted = await Meal.findByIdAndDelete(id);

    if (!deleted) {
        return NextResponse.json({ error: 'Product not Found' }, { status: 404 })
    }

    return NextResponse.json({ message: 'Product deleted Succesfully' });
}

export async function PUT(req, context) {
  const { params } = context;
  const { id } = await params;

  const formData = await req.formData();
  const name = formData.get('name');
  const description = formData.get('description');
  const price = Number(formData.get('price'));
  const category = formData.get('category');
  const sizes = JSON.parse(formData.get('sizes'));
  const extras = JSON.parse(formData.get('extras'));

  const updateData = { name, description, price, category, sizes, extras };

  const file = formData.get('image');
  if (file && typeof file !== 'string') {
    const buffer = Buffer.from(await file.arrayBuffer());
    const stream = Readable.from(buffer);

    const uploadResult = await new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        { folder: 'menu_item' },
        (error, result) => {
          if (error) reject(error);
          else resolve(result);
        }
      );
      stream.pipe(uploadStream);
    });

    updateData.imageUrl = uploadResult.secure_url;
  }

  await connectToDatabase();
  const updated = await Meal.findByIdAndUpdate(id, updateData, { new: true });

  return NextResponse.json(updated);
}
