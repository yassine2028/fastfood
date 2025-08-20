import mongoose from 'mongoose';
import { connectToDatabase } from '../../../lib/mongoose';
import { NextResponse } from 'next/server';
import { Category } from '../../../models/Category';
import { toast } from "react-hot-toast";


export async function POST(req) {
    try {
        await connectToDatabase();
        const { name } = await req.json();
        const categoryDoc = await Category.create({ name });
        return NextResponse.json(categoryDoc);
    } catch (error) {
        toast.error('Error creating category:', error);
        return NextResponse.json({ error: 'Failed to create Category' }, { status: 500 });
    }
}

export async function PUT(req) {
    await connectToDatabase();
    const { _id, name } = await req.json();
    await Category.updateOne({ _id }, { name });
    return Response.json(true);
}

export async function GET() {
    try {
        await connectToDatabase();
        const categories = await Category.find();
        return NextResponse.json(categories);
    } catch (error) {
        console.error('Error fetching categories:', error);
        return NextResponse.json({ error: 'Failed to fetch categories' }, { status: 500 });
    }
}

