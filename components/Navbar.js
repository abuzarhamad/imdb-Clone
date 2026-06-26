import React, { Suspense } from "react";
import Navbaritems from "./Navbaritems";

export default function Navbar() {
  return (
    <div className="flex gap-5 bg-gray-500 text-white py-3 justify-center">
      <Suspense fallback={<div>Loading...</div>}>
        <Navbaritems title="Trending" param="fetchTrending" />
        <Navbaritems title="Top Rating" param="fetchTopRating" />
      </Suspense>
    </div>
  );
}