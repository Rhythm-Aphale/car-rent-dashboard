import { NextResponse } from 'next/server';
import { getAllListings } from '@/lib/listingsData';

export async function GET() {
  try {
    const listings = getAllListings();
    return NextResponse.json(listings);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch listings' },
      { status: 500 }
    );
  }
}