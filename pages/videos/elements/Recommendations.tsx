import React, { useEffect, useState } from "react";
import { db } from "../../../utils/firebase";
import { collection, getDocs } from "firebase/firestore";
import Image from "next/image";
import Link from "next/link";

type Video = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
};

const Recommendations: React.FC = () => {
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const videosCollection = collection(db, "Videos");
        const snapshot = await getDocs(videosCollection);
        const videoData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Video[];

        setVideos(videoData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching videos:", error);
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  return (
    <div className="flex flex-col mt-0 border rounded-lg p-1 shadow-md">
      <div className="h-[940px] w-full overflow-y-scroll ">
        {loading
          ? Array.from({ length: 5 }).map((_, index) => (
              <div key={index} className="flex items-center mb-4">
                <div className="w-20 h-20 bg-gray-200 rounded-md mr-4"></div>
                <div className="flex-1">
                  <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                  <div className="h-3 bg-gray-200 rounded w-2/4"></div>
                </div>
              </div>
            ))
          : videos.map((video) => (
              <Link
                href={`/videos/${video.id}`}
                key={video.id}
                className="flex items-center mb-4 cursor-pointer "
              >
                <div className="relative w-32 h-16 mr-4">
                  <Image
                    src={video.imageUrl}
                    alt={video.title}
                    width={300}
                    height={150}
                    objectFit="cover"
                    className="rounded-md aspect-video"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-medium font-serif mb-1 line-clamp-2">
                    {video.title}
                  </h3>
                  <p className="text-xs text-gray-500 line-clamp-2">
                    {video.description}
                  </p>
                </div>
              </Link>
            ))}
      </div>
    </div>
  );
};

export default Recommendations;
