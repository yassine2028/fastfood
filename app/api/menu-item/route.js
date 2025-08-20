import { connectToDatabase } from '../../../lib/mongoose'
import { Meal } from '../../../models/Meal'
import { NextResponse } from 'next/server'
import { Category } from '../../../models/Category';

export async function GET() {
    await connectToDatabase();
    const meals = await Meal.find().populate('category');
    return NextResponse.json(meals);
}