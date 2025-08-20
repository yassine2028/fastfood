import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongoose';
import { Order } from '../../../models/Orders';
import { Meal } from '../../../models/Meal'

export async function POST(req) {
    try {
        await connectToDatabase();
        const data = await req.json();
        const order = await Order.create(data);
        return NextResponse.json(order);
    } catch (err) {
        console.error('Order creation failed:', err);
        return NextResponse.json(
            { error: 'Failed to create order' },
            { status: 500 }
        );
    }
  }



export async function GET() {
  await connectToDatabase();
  const orders = await Order.find().populate('items.product','name imageUrl').sort({ createdAt: -1 });
    // .populate('items.product','name imageUrl')
    
  return NextResponse.json(orders);
}

export async function DELETE() {
  try {
    await connectToDatabase();
    await Order.deleteMany({});
    return NextResponse.json({ message: 'All orders deleted successfully' });
  } catch (err) {
    console.error('Failed to delete orders:', err);
    return NextResponse.json({ error: 'Failed to delete orders' }, { status: 500 });
  }
}
