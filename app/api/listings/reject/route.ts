import { NextRequest, NextResponse } from 'next/server';
import { updateListingStatus } from '@/lib/listingsData';

export async function POST(request: NextRequest) {
  try {
    const { id } = await request.json();
    
    if (!id) {
      return NextResponse.json(
        { error: 'Listing ID is required' },
        { status: 400 }
      );
    }

    const updatedListing = updateListingStatus(id, 'rejected');
    
    if (!updatedListing) {
      return NextResponse.json(
        { error: 'Listing not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(updatedListing);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to reject listing' },
      { status: 500 }
    );
  }
}