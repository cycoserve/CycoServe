import React from "react";
import Image from "next/image";
import Link from "next/link";




const SideBar:React.FC = () => {
  return (
    <div>
        <Link href={""}>
          <div className="h-24 w-full rounded-md border border-spacing-2 shadow-md">
            <Image
              src={""}
              alt={""}
              width={500}
              height={250}
            />
          </div>
        </Link>
    </div>
  );
};

export default SideBar;
