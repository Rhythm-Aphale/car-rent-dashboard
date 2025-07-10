'use client';

import { useState, useEffect } from 'react';
import { useAuthStore } from '@/store/useAuthStore';
import { useToastStore } from '@/store/useToastStore';
import { Listing } from '@/lib/listingsData';
import Navbar from '@/components/Navbar';
import ListingTable from '@/components/ListingTable';
import Toast from '@/components/Toast';
import { BarChart3, Users, Car, CheckCircle } from 'lucide-react';

export default function DashboardPage() {
  const [listings, setListings] = useState<Listing[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { isAuthenticated } = useAuthStore();
  const { addToast } = useToastStore();

  const fetchListings = async () => {
    try {
      const response = await fetch('/api/listings');
      if (response.ok) {
        const data = await response.json();
        setListings(data);
      } else {
        throw new Error('Failed to fetch listings');
      }
    } catch (error) {
      addToast({
        title: 'Error fetching listings',
        type: 'error'
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchListings();
  }, []);

  const stats = [
    {
      title: 'Total Listings',
      value: listings.length,
      icon: Car,
      color: 'bg-blue-500'
    },
    {
      title: 'Approved',
      value: listings.filter(l => l.status === 'approved').length,
      icon: CheckCircle,
      color: 'bg-green-500'
    },
    {
      title: 'Pending',
      value: listings.filter(l => l.status === 'pending').length,
      icon: BarChart3,
      color: 'bg-yellow-500'
    },
    {
      title: 'Rejected',
      value: listings.filter(l => l.status === 'rejected').length,
      icon: Users,
      color: 'bg-red-500'
    }
  ];

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading dashboard...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Toast />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
          <p className="text-gray-600">Manage your car rental listings</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                  <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                </div>
                <div className={`p-3 rounded-full ${stat.color}`}>
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Listings Table */}
        <ListingTable listings={listings} onUpdate={fetchListings} />
      </div>
    </div>
  );
}