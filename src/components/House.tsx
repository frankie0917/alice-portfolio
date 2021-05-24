import { useLoader } from '@react-three/fiber';
import React, { useMemo, useState } from 'react';
import { GLTF, GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const House = () => {
  const [gltf, set] = useState<GLTF | null>(null);
  useMemo(
    () =>
      new GLTFLoader().load(
        'src/models/viking_carrot_farm/scene.gltf',
        (gltf) => {
          gltf.scene.scale.setScalar(0.5);
          set(gltf);
        },
      ),
    ['src/models/viking_carrot_farm/scene.gltf'],
  );
  return gltf && <primitive object={gltf.scene} />;
};

export default House;
