'use client';

import { FriendsContext } from '@/context/FriendsContext';
import { useContext } from 'react';

const useFriends = () => {
  const context = useContext(FriendsContext);
  if (!context) {
    throw new Error('useFriends must be used within AppProvider');
  }

  return context;
};

export default useFriends;
