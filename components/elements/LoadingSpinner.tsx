// components/LoadingSpinner.tsx
import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Image from "next/image";

const LoadingSpinner: React.FC = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          background: "#000000",
        }}
      >
        <div className="relative w-24 h-24">
          {/* Circle Loader */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 bg-[url('/circle-loader-1.svg')] bg-contain bg-center animate-ping"></div>
          </div>

          {/* Spinner on Top */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 bg-[url('/c-spinner.svg')] bg-contain bg-center rounded-full animate-spin-reverse"></div>
          </div>

             {/* Spinner in middle */}
             <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-6 h-6 bg-[url('/c-spinner-middle.svg')] bg-contain bg-center rounded-full animate-spin"></div>
          </div>
        </div>
      </Box>
    </>
  );
};

export default LoadingSpinner;
