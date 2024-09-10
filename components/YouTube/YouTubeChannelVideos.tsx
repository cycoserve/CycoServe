"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';

// Define the type for video data
interface VideoData {
  id: string;
  snippet: {
    title: string;
    thumbnails: {
      default: {
        url: string;
      };
    };
  };
}

const YouTubeChannelVideos = () => {
  // State to store the list of videos
  const [videos, setVideos] = useState<VideoData[]>([]);
  // Replace 'YOUR_API_KEY' with your actual YouTube API key
  const apiKey = "";
  // Replace 'CHANNEL_ID' with the ID of the YouTube channel you want to fetch data from
  const channelId = "UCqADe-i3_vGhJxzq4UXOsVQ";

  useEffect(() => {
    // Function to fetch channel videos
    const fetchChannelVideos = async () => {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&maxResults=100&type=video&key=${apiKey}`
        );
        // Set the list of videos in state
        setVideos(response.data.items);
      } catch (error) {
        console.error('Error fetching channel videos:', error);
      }
    };

    // Call the fetchChannelVideos function
    fetchChannelVideos();
  }, [apiKey, channelId]);

  return (
    <div className='container border py-4 px-4 mb-4 mx-auto'>
      <h2>Videos from the Channel</h2>
      <div>
        {videos.map((video) => (
          <div className='border p-2' key={video.id}>
            <h3>{video.snippet.title}</h3>
            <img src={video.snippet.thumbnails.default.url} alt="Video Thumbnail" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default YouTubeChannelVideos;
