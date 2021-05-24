import React from 'react';
import { Vector3 } from 'three';

const Sphere = () => {
  return (
    <mesh position={new Vector3(undefined, -250)}>
      <sphereGeometry args={[250, 32, 32]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
};

export default Sphere;
