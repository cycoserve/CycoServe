import React from "react";
import ReactPlayer from "react-player";
import SideBar from "./SideBar";
import Link from "next/link";
import Recommendations from "./Recommendations";
import VideoSingleTab from "./Tabs";

interface VideoSingleProps {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  videoUrl: string;
  episode: string;
  author: string;
  details: string;
}

const VideoSingle: React.FC<VideoSingleProps> = ({
  id,
  title,
  description,
  imageUrl,
  videoUrl,
  episode,
  author,
  details,
}) => {
  return (
    <>
      <div className="container py-4 mx-auto my-2">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-2/3">
            <div className="video aspect-video">
              <ReactPlayer
                width={"100%"}
                height={"100%"}
                url={videoUrl}
                pip={true}
                controls={true}
              />
            </div>

            <div className="info flex flex-row justify-between items-center gap-2 mt-1 rounded-xl ">
              <div className="font-semibold bg-blue-700 text-white px-1 rounded-md ">
                Episode {episode}
              </div>
              <div className="font-semibold ">
                Uploaded by |{" "}
                <Link href="/about-us" className="hover:underline">
                  {author}
                </Link>
              </div>
            </div>
            <div className="link border border-b-slate-400 my-2 "></div>
            <div className="text-3xl font-serif my-2">{title}</div>
           {/* <div className="details"><Details htmlContent={details} /></div> */}
           <VideoSingleTab details={details} summary={description} title={title} />
           <div className="block md:hidden"><Recommendations  /></div>
          </div>
          <div className="md:w-1/3 hidden md:block px-4">
            {/* <SideBar image={imageUrl} title={title} advertUrl={videoUrl} /> */}
            <Recommendations  />
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoSingle;
