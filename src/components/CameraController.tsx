import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { useThree } from '@react-three/fiber';
import { useEffect } from 'react';

export const CameraController = () => {
  const { camera, gl } = useThree();
  useEffect(() => {
    const controls = new OrbitControls(camera, gl.domElement);
    camera.position.y = 200;
    camera.position.z = 900;
    return () => {
      controls.dispose();
    };
  }, [camera, gl]);
  return null;
};
