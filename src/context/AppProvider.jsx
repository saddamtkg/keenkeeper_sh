'use client';

import React, { useMemo, useState } from 'react';
import { FriendsContext } from './FriendsContext';

const AppProvider = ({ children }) => {
  const [isFriend, setIsFriend] = useState(true);

  const data = useMemo(
    () => ({
      isFriend,
      setIsFriend,
    }),
    [isFriend, setIsFriend]
  );

  return (
    <FriendsContext.Provider value={data}>{children}</FriendsContext.Provider>
  );
};

export default AppProvider;
