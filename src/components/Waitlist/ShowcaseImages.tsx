import React from "react";
import Image from "next/image";
const ShowcaseImages = () => {
  return (
    <div className="flex gap-6 items-center justify-evenly relative top-6">
      <Image src={"/lystraweb1.png"} alt="lystra" width={250} height={250} className="shadow-lg shadow-purple-100  image-card-smaller" />
      <Image src={"/shottss.png"} alt="card" width={300} height={300} className="shadow-lg shadow-black/20 image-card-larger"/>
      <Image src={"/khronaweb1.png"} alt="khrona" width={250} height={250} className="shadow-lg shadow-orange-100  image-card-smaller"/>
    </div>
  );
};

export default ShowcaseImages;
