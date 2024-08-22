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
        <div className="flex flex-col justify-center items-center gap-4">
        <Image src="/logo-light.svg" alt="" width={400} height={60} className="animate-ping" />
        {/* <CircularProgress /> */}
        </div>

      </Box>
    </>
  );
};

export default LoadingSpinner;
