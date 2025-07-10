import { NextRequest, NextResponse } from 'next/server';
import { getListingById, updateListing } from '@/lib/listingsData';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const listing = getListingById(params.id);
    
    if (!listing) {
      return NextResponse.json(
        { error: 'Listing not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(listing);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch listing' },
      { status: 500 }
    );
  }
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const updates = await request.json();
    const updatedListing = updateListing(params.id, updates);
    
    if (!updatedListing) {
      return NextResponse.json(
        { error: 'Listing not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(updatedListing);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to update listing' },
      { status: 500 }
    );
  }
}