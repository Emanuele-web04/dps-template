import React from "react";
import Image from "next/image";
const ShowcaseImages = () => {
  return (
    <div className="flex gap-6 items-center justify-evenly relative top-6">
      <Image
        src={"/lystraweb1.webp"}
        alt="lystra"
        width={250}
        height={250}
        priority
        className="shadow-lg shadow-purple-100  image-card-smaller"
      />
      <Image
        src={"/shottss.webp"}
        alt="card"
        width={300}
        height={300}
        priority
        className="shadow-lg shadow-black/20 image-card-larger"
      />
      <Image
        src={"/khronaweb1.webp"}
        alt="khrona"
        width={250}
        height={250}
        priority
        className="shadow-lg shadow-orange-100  image-card-smaller"
      />
    </div>
  );
};

export default ShowcaseImages;
