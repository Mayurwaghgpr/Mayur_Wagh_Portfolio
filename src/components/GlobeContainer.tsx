import React, { useState } from "react";
import Globe from "react-globe.gl";
interface GlobeContainerProps {
  handleGlobeClick: (point: { lat: number; lng: number } | null) =>void;
}

interface PostcardPoint {
  lat: number;
  lng: number;
  title: string;
  message: string;
}

const GlobeContainer: React.FC<GlobeContainerProps> = ({ handleGlobeClick }) => {
  const [postcards] = useState<PostcardPoint[]>([
    {
      lat: 37.7749,
      lng: -122.4194,
      title: "San Francisco",
      message: "Hello from SF!",
    },
    {
      lat: 51.5074,
      lng: -0.1278,
      title: "London",
      message: "Greetings from London!",
    },
  ]);
  return (
    <div
      className="  relative flex items-center justify-center w-1/2 z-10 "
      style={{
        width: "600px", // fixed width
        height: "600px", // fixed height
        maxWidth: "90vw", // responsive fallback
        maxHeight: "80vh",
      }}
    >
      <Globe
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
        pointsData={postcards}
        pointLat={(d: object) => (d as PostcardPoint).lat}
        backgroundColor="rgba(0,0,0,0)"
        pointLng={(d: object) => (d as PostcardPoint).lng}
        pointLabel={(d: object) => `${(d as PostcardPoint).title}: ${(d as PostcardPoint).message}`}
        pointColor={() => "orange"}
        pointRadius={0.6}
        onGlobeClick={handleGlobeClick}
      />
    </div>
  );
};


export default GlobeContainer;
