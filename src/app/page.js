'use client';
import { useState, useEffect } from 'react';
import Banner from '@/components/homePage/Banner';
import FriendsSection from '@/components/homePage/FriendsSection';
import Loading from './loading';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="py-20">
      <Banner />
      <FriendsSection />
    </div>
  );
}
