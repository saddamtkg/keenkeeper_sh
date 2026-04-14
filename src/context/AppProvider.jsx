'use client';

import React, { useMemo, useState } from 'react';
import { FriendsContext } from './FriendsContext';
import initialFriends from '@/data/friends.json';

const AppProvider = ({ children }) => {
  const [friends, setFriends] = useState(initialFriends);
  const [timeline, setTimeline] = useState([]);

  const addInteraction = ({ friendId, friendName, type }) => {
    const newItem = {
      id: Date.now(),
      friendId,
      friendName,
      type,
      createdAt: new Date().toISOString(),
    };
    setTimeline(prev => [newItem, ...prev]);
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
