export interface Listing {
  id: string;
  make: string;
  model: string;
  year: number;
  status: 'pending' | 'approved' | 'rejected';
  price: number;
  location: string;
  description: string;
  imageUrl: string;
  createdAt: string;
  updatedAt: string;
}

export const listingsData: Listing[] = [
  {
    id: '1',
    make: 'Tesla',
    model: 'Model 3',
    year: 2023,
    status: 'pending',
    price: 7387000, // ₹89,000 * 83
    location: 'Mumbai, MH',
    description: 'Premium electric sedan with autopilot capabilities',
    imageUrl: 'https://images.pexels.com/photos/919073/pexels-photo-919073.jpeg',
    createdAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-01-15T10:00:00Z'
  },
  {
    id: '2',
    make: 'BMW',
    model: 'X5',
    year: 2022,
    status: 'approved',
    price: 10375000, // ₹125,000 * 83
    location: 'Delhi, DL',
    description: 'Luxury SUV with premium interior and advanced safety features',
    imageUrl: 'https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg',
    createdAt: '2024-01-14T14:30:00Z',
    updatedAt: '2024-01-14T15:00:00Z'
  },
  {
    id: '3',
    make: 'Mercedes-Benz',
    model: 'C-Class',
    year: 2023,
    status: 'rejected',
    price: 7885000, // ₹95,000 * 83
    location: 'Bangalore, KA',
    description: 'Elegant sedan with luxury amenities and smooth performance',
    imageUrl: 'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg',
    createdAt: '2024-01-13T09:15:00Z',
    updatedAt: '2024-01-13T16:45:00Z'
  },
  {
    id: '4',
    make: 'Audi',
    model: 'A4',
    year: 2022,
    status: 'pending',
    price: 6474000, // ₹78,000 * 83
    location: 'Pune, MH',
    description: 'Sporty sedan with quattro all-wheel drive',
    imageUrl: 'https://images.pexels.com/photos/35967/mini-cooper-auto-model-vehicle.jpg',
    createdAt: '2024-01-12T11:20:00Z',
    updatedAt: '2024-01-12T11:20:00Z'
  },
  {
    id: '5',
    make: 'Porsche',
    model: 'Cayenne',
    year: 2023,
    status: 'approved',
    price: 15355000, // ₹185,000 * 83
    location: 'Hyderabad, TG',
    description: 'High-performance luxury SUV with sport package',
    imageUrl: 'https://images.pexels.com/photos/193999/pexels-photo-193999.jpeg',
    createdAt: '2024-01-11T16:00:00Z',
    updatedAt: '2024-01-11T17:30:00Z'
  },
  {
    id: '6',
    make: 'Lexus',
    model: 'ES 350',
    year: 2022,
    status: 'pending',
    price: 7055000, // ₹85,000 * 83
    location: 'Ahmedabad, GJ',
    description: 'Reliable luxury sedan with hybrid efficiency',
    imageUrl: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg',
    createdAt: '2024-01-10T13:45:00Z',
    updatedAt: '2024-01-10T13:45:00Z'
  }
]

// Helper function to get all listings
export const getAllListings = (): Listing[] => {
  return listingsData;
};

// Helper function to get a single listing
export const getListingById = (id: string): Listing | undefined => {
  return listingsData.find(listing => listing.id === id);
};

// Helper function to update a listing
export const updateListing = (id: string, updates: Partial<Listing>): Listing | null => {
  const index = listingsData.findIndex(listing => listing.id === id);
  if (index === -1) return null;
  
  listingsData[index] = {
    ...listingsData[index],
    ...updates,
    updatedAt: new Date().toISOString()
  };
  
  return listingsData[index];
};

// Helper function to update listing status
export const updateListingStatus = (id: string, status: 'approved' | 'rejected'): Listing | null => {
  return updateListing(id, { status });
};