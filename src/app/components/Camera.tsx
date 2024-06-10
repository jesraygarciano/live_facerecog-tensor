import React, { useRef, useEffect } from "react";
import { Camera as CameraClass } from "../shared/util";

const Camera: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const setupCamera = async () => {
      if (videoRef.current && canvasRef.current) {
        const camera = new CameraClass(videoRef.current, canvasRef.current);
        await camera.setupCamera();
      }
    };
    setupCamera();
  }, []);

  return (
    <div className="canvas-wrapper">
      <canvas ref={canvasRef} id="output"></canvas>
      <video
        ref={videoRef}
        id="video"
        playsInline
        style={{ transform: "scaleX(-1)", visibility: "hidden" }}
      ></video>
    </div>
  );
};

export default Camera;
