import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { db } from "../../utils/firebase";
import { doc, getDoc } from "@/utils/firebase/firestore";
import MetaHead from "@/components/MetaHead";
import BaseLayout from "@/components/layouts/BaseLayout";
import VideoSingle from "./elements/VideoSingle";

type Video = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  videoUrl: string;
  episode: string;
  author: string;
  details: string;
};

const VideoPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [video, setVideo] = useState<Video | null>(null);

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const docRef = doc(db, "Videos", id as string); // Cast id to string
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const data = docSnap.data() as Video;
          setVideo(data);
        } else {
          console.error("Video not found");
        }
      } catch (error) {
        console.error("Error fetching video:", error);
      }
    };

    if (id) {
      fetchVideo();
    }
  }, [id]);

  if (!video) {
    return (
      <div className="flex flex-col justify-center items-center align-middle text-2xl">
        <div>Loading...</div>
      </div>
    );
  }

  return (
    <>
      <MetaHead
        title={video.title}
        description={video.description}
        image={video.imageUrl}
      />
      <BaseLayout>
        <VideoSingle
          details={video.details}
          id={video.id}
          title={video.title}
          description={video.description}
          imageUrl={video.imageUrl}
          videoUrl={video.videoUrl}
          episode={video.episode}
          author={video.author}
        />
      </BaseLayout>
    </>
  );
};

export default VideoPage;
