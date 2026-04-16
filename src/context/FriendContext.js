'use client';
import { createContext, useContext, useState, useEffect } from 'react';

const FriendContext = createContext();

export function FriendProvider({ children }) {
  // We initialize the timeline with an empty array
  const [timeline, setTimeline] = useState([]);

  // Requirement 6: Function to add a new interaction (Call, Text, Video)
  const addTimelineEntry = (friendName, type) => {
    const newEntry = {
      id: Date.now(), // Unique ID based on time
      friendName,
      type, // 'Call', 'Text', or 'Video'
      date: new Date().toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      }),
    };

    // Add the new entry to the top of the list (newest first)
    setTimeline((prevTimeline) => [newEntry, ...prevTimeline]);
  };

  return (
    <FriendContext.Provider value={{ timeline, addTimelineEntry }}>
      {children}
    </FriendContext.Provider>
  );
}

// Custom hook so we can easily use this data in any component
export const useFriends = () => {
  const context = useContext(FriendContext);
  if (!context) {
    throw new Error('useFriends must be used within a FriendProvider');
  }
  return context;
};