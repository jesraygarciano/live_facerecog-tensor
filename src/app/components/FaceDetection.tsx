import React, { useEffect } from "react";
import Camera from "./Camera";
import { setupDatGui } from "../shared/option_panel";
import { setupStats } from "../shared/stats_panel";
import { createDetector, STATE } from "../shared/params";
import { setBackendAndEnvFlags } from "../shared/util";

const FaceDetection: React.FC = () => {
  useEffect(() => {
    const init = async () => {
      await setupDatGui(new URLSearchParams(window.location.search));
      const stats = setupStats();
      const camera = await Camera.setupCamera(STATE.camera);
      await setBackendAndEnvFlags(STATE.flags, STATE.backend);
      const detector = await createDetector();
      // Add renderPrediction logic here
    };
    init();
  }, []);

  return (
    <div>
      <div id="stats"></div>
      <Camera />
    </div>
  );
};

export default FaceDetection;
