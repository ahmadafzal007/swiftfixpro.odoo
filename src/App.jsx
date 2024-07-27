import { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Leva } from "leva";
import { Experience } from "./components/Experience";
import { UI } from "./components/UI";
import { ModelUI } from "./components/ModelUI";
import { MdSwapHoriz } from "react-icons/md"; // Import the icon
import CustomLoader from './CustomLoader'; // Import the custom loader
import './styles.css'; // Import the custom loader CSS


function App() {
  const [showUI, setShowUI] = useState(false);
  const [showLoader, setShowLoader] = useState(true); // State for loader visibility

  const toggleComponent = () => {
    setShowUI((prev) => !prev);
  };


  useEffect(() => {
    // Hide the loader after 2 seconds
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 1000);

    // Cleanup timer on component unmount
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showLoader && <CustomLoader />} {/* Show loader conditionally */}

      <Leva hidden />
      <Canvas shadows camera={{ position: [0, 0, 1], fov: 30 }}>
        <Experience />
      </Canvas>
      {showUI ? <UI /> : <ModelUI />}
      <button
        onClick={toggleComponent}
        style={{
          position: "fixed",
          top: "10px",
          right: "10px",
          backgroundColor: "#f77035",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          padding: "10px",
          cursor: "pointer",
          zIndex: 500,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <MdSwapHoriz size={24} /> {/* Use the icon here */}
      </button>
    </>
  );
}

export default App;
