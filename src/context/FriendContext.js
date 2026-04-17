'use client';
import { createContext, useContext, useState, useEffect } from 'react';
import { toast } from 'react-toastify';
// Import directly from your data folder
import friendsData from '../data/friends.json'; 

const FriendContext = createContext();

export function FriendProvider({ children }) {
  const [friends, setFriends] = useState([]);
  const [timeline, setTimeline] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Since we are importing locally, we just set the state
    setFriends(friendsData);
    setLoading(false);
  }, []);

  const addInteraction = (friendName, type) => {
    const newEntry = {
      id: Date.now(),
      friendName,
      type,
      date: new Date().toLocaleDateString('en-US', { 
        month: 'long', 
        day: 'numeric', 
        year: 'numeric' 
      })
    };
    setTimeline(prev => [newEntry, ...prev]);
    toast.success(`Logged ${type} with ${friendName}!`);
  };

  return (
    <FriendContext.Provider value={{ friends, timeline, loading, addInteraction }}>
      {children}
    </FriendContext.Provider>
  );
}

export const useFriends = () => useContext(FriendContext);