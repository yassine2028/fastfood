import { NextResponse } from "next/server";
import { Readable } from "stream";
import { cloudinary } from '../../../../lib/cloudinary'
import { connectToDatabase } from '../../../../lib/mongoose'
import { Meal } from '../../../../models/Meal'

export async function POST(req) {
    try {
        const formData = await req.formData();
        const name = formData.get('name');
        const description = formData.get('description');
        const price = formData.get('price');
        const category = formData.get('category');
        const sizes = JSON.parse(formData.get('sizes'));
        const extras = JSON.parse(formData.get('extras'));
        const file = formData.get('image');

        if (!file || typeof file === 'string') {
            return NextResponse.json({ error: 'Invalid Image File' }, { status: 400 })
        }

        const buffer = Buffer.from(await file.arrayBuffer());
        const stream = Readable.from(buffer);

        const uploadResult = await new Promise((resolve, reject) => {
            const uploadStream = cloudinary.uploader.upload_stream(
                { folder: 'menu_item' },
                (error, result) => {
                    if (error) reject(error);
                    else resolve(result);
                }
            )
            stream.pipe(uploadStream);
        })

        await connectToDatabase();
        const meal = await Meal.create({
            name, description, price, category, sizes, extras, imageUrl: uploadResult.secure_url,
        });

        return NextResponse.json(meal);
    }   catch (error) {
        console.error('Upload error:', err);
        return NextResponse.json({ error: 'Upload failed' }, { status: 500})
    } 
}