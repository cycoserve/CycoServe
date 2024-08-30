"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";

// Define the type for channel data
interface ChannelData {
  snippet: {
    title: string;
    description: string;
    thumbnails: {
      default: {
        url: string;
      };
    };
  };
}

const YouTubeChannelData = () => {
  // State to store the channel data
  const [channelData, setChannelData] = useState<ChannelData | null>(null);
  // Replace 'YOUR_API_KEY' with your actual YouTube API key
  const apiKey = "";
  // Replace 'CHANNEL_ID' with the ID of the YouTube channel you want to fetch data from
  const channelId = "";

  useEffect(() => {
    // Function to fetch channel data
    const fetchChannelData = async () => {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${channelId}&key=${apiKey}`
        );
        // Set the channel data in state
        setChannelData(response.data.items[0]);
      } catch (error) {
        console.error("Error fetching channel data:", error);
      }
    };

    // Call the fetchChannelData function
    fetchChannelData();
  }, [apiKey, channelId]);

  return (
    <div>
      {channelData && (
        <div className="container px-4 border mx-auto mb-4 py-4">
          <img
            src={channelData.snippet.thumbnails.default.url}
            alt="Channel Thumbnail"
          />
          <h2 className="text-xl">{channelData.snippet.title}</h2>
          <p>{channelData.snippet.description}</p>
        </div>
      )}
    </div>
  );
};

export default YouTubeChannelData;
