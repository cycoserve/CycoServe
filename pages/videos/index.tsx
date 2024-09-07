import React from "react";
import VideoList from "./VideoList";
import RootLayout from "@/components/Layouts/RootLayout";

const VideoPage: React.FC = () => {
  return (
    <>
      <RootLayout>
        <VideoList />
      </RootLayout>
    </>
  );
};

export default VideoPage;
