import React, { useEffect } from "react";
import FaceDetection from "./components/FaceDetection";

const HomePage: React.FC = () => {
  useEffect(() => {
    // Initialize face detection
  }, []);

  return (
    <div>
      <FaceDetection />
    </div>
  );
};

export default HomePage;
