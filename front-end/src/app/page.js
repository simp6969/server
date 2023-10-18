"use client";

import { useEffect, useState } from "react";

export default function App() {
  const [photo, setPhoto] = useState();

  useEffect(() => {
    fetch("http://localhost:8080")
      .then((res) => res.json())
      .then((data) => setPhoto(data));
  }, []);

  console.log(photo);
  if (!photo) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }
  console.log(photo);
  return (
    <div className="flex h-[70vh] w-[100vw] justify-center">
      <div className="flex h-[90%] gap-[10px] m-[30px] flex-wrap">
        <img src={photo.image2}></img>
        <div className="flex gap-[10px] m-[30px]"></div>
        <img src={photo.image1}></img>
      </div>
    </div>
  );
}
