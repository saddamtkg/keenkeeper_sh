'use client';

import React, { useMemo, useState } from 'react';
import { FriendsContext } from './FriendsContext';
import initialFriends from '@/data/friends.json';

const AppProvider = ({ children }) => {
  const [friends, setFriends] = useState(initialFriends);
  const [timeline, setTimeline] = useState(() => {
    if (typeof window === 'undefined') return [];
    return JSON.parse(localStorage.getItem('timeline') || '[]');
  });

  const addInteraction = ({ friendId, friendName, type }) => {
    const newItem = {
      id: Date.now(),
      friendId,
      friendName,
      type,
      createdAt: new Date().toISOString(),
    };
    setTimeline(prev => {
      const updated = [newItem, ...prev];
      localStorage.setItem('timeline', JSON.stringify(updated));
      return updated;
    });
  };
  const data = useMemo(
    () => ({
      friends,
      setFriends,
      timeline,
      addInteraction,
    }),
    [friends, timeline]
  );

  return (
    <FriendsContext.Provider value={data}>{children}</FriendsContext.Provider>
  );
};

export default AppProvider;
