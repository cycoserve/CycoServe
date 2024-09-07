import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { db } from "../../utils/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import Pagination from "./elements/Pagination"; // Import the Pagination component


type Video = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  videoUrl: string;
  episode: string;
  author: string;
};

const ITEMS_PER_PAGE = 12;

const VideoList = () => {
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(0);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const videosCollection = collection(db, "Videos");

        const q = query(
          videosCollection,
          where("published", "==", true) // Add condition for published
        );

        const snapshot = await getDocs(videosCollection);
        const videoData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Video[];

        // const sortedVideos = videoData.sort(
        //   (a, b) => parseInt(a.episode) - parseInt(b.episode)
        // );
        setVideos(videoData);
        setLoading(false); // Set loading to false once videos are fetched
      } catch (error) {
        console.error("Error fetching videos:", error);
        setLoading(false); // Set loading to false in case of error
      }
    };

    fetchVideos();
  }, []);

  const handlePageChange = (selectedItem: { selected: number }) => {
    setCurrentPage(selectedItem.selected);
  };

  useEffect(() => {
    // Scroll to the top of the page whenever currentPage changes
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  const offset = currentPage * ITEMS_PER_PAGE;
  const paginatedVideos = videos.slice(offset, offset + ITEMS_PER_PAGE);

  return (
    <>
 
        <div className="mx-auto max-w-7xl px-4 py-8">
          <ul className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-auto">
            {loading // Render skeleton loader while loading
              ? Array.from({ length: ITEMS_PER_PAGE }).map((_, index) => (
                  <li
                    key={index}
                    className="mb-8 shadow-md border rounded-md aspect-video hover:bg-slate-50"
                  >
                    <div className="animate-pulse bg-gray-200 rounded-md">
                      <div className="overflow-hidden aspect-w-16 aspect-h-9">
                        <div className="overflow-hidden bg-gray-300 h-full w-full"></div>
                      </div>
                      <div className="overflow-hidden aspect-w-16 aspect-h-9">
                        <div className="overflow-hidden bg-gray-300 h-full w-full"></div>
                      </div>
                      <div className="p-4">
                        <div className="h-6 bg-gray-300 rounded w-3/4 mb-2"></div>
                        <div className="h-4 bg-gray-300 rounded w-2/4"></div>
                      </div>
                      <div className="flex items-center justify-between px-4 py-2 bg-gray-100">
                        <div className="h-6 bg-gray-300 rounded w-1/4"></div>
                        <div className="h-6 bg-gray-300 rounded w-1/4"></div>
                      </div>
                    </div>
                  </li>
                ))
              : paginatedVideos.map((video) => (
                  <li
                    key={video.id}
                    className="mb-8 shadow-md hover:shadow-xl border rounded-md aspect-video hover:bg-slate-50"
                  >
                    <Link href={`/videos/${video.id}`}>
                      <div className="overflow-hidden">
                        <div className="overflow-hidden">
                          <Image
                            src={video.imageUrl}
                            alt={video.title}
                            width={500}
                            height={200}
                            className="aspect-video"
                          />
                        </div>
                        <div className="p-4">
                          <h2 className="text-lg leading-5 font-semibold mb-1 truncate">
                            {video.title}
                          </h2>
                          <p className="truncate">{video.description}</p>
                        </div>
                      </div>
                      <div className="flex flex-row justify-between items-center mx-auto px-4 mb-2">
                        <div className="inline-flex gap-2">
                          <div className="font-semibold text-sm">Author</div>
                        </div>
                        <div className="font-semibold">{video.author}</div>
                      </div>
                    </Link>
                  </li>
                ))}
          </ul>
          <Pagination
            pageCount={Math.ceil(videos.length / ITEMS_PER_PAGE)}
            onPageChange={handlePageChange}
            currentPage={currentPage}
          />
        </div>
  
    </>
  );
};

export default VideoList;
