import { Listing } from '@/lib/listingsData';

export const formatPrice = (price: number): string => {
  return `₹${price}/day`;
};

export const formatDate = (dateString: string): string => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
};

export const getStatusColor = (status: Listing['status']): string => {
  switch (status) {
    case 'approved':
      return 'bg-green-100 text-green-800';
    case 'rejected':
      return 'bg-red-100 text-red-800';
    case 'pending':
      return 'bg-yellow-100 text-yellow-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

export const getStatusIcon = (status: Listing['status']): string => {
  switch (status) {
    case 'approved':
      return '✅';
    case 'rejected':
      return '❌';
    case 'pending':
      return '⏳';
    default:
      return '❓';
  }
};

export const filterListings = (listings: Listing[], filter: string): Listing[] => {
  if (filter === 'all') return listings;
  return listings.filter(listing => listing.status === filter);
};