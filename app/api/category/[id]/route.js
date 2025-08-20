import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongoose';
import { Category } from '@/models/Category';

export async function DELETE(req, { params }) {
  try {
    const { id } = params;
    await connectToDatabase();
    const deleted = await Category.findByIdAndDelete(id);

    if (!deleted) {
      return NextResponse.json({ error: 'Category not found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Category deleted successfully' });
  } catch (err) {
    console.error('Delete category error:', err);
    return NextResponse.json({ error: 'Failed to delete category' }, { status: 500 });
  }
}
