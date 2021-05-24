import { Canvas } from '@react-three/fiber';
import React, { useState } from 'react';
import { Box } from './components/Box';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import House from './components/House';
import { Vector3 } from 'three';
import { CameraController } from './components/CameraController';
import Sphere from './components/Sphere';

function App() {
  return (
    <div id="App">
      <Canvas id="main-canvas">
        <CameraController />
        <ambientLight />
        <pointLight position={new Vector3(undefined, undefined, 50)} />
        <React.Suspense fallback="loading...">
          <House />
        </React.Suspense>
        <Sphere />
        {/* <Box /> */}
      </Canvas>
    </div>
  );
}

export default App;
