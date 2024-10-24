'use client'; // This line marks the file as a Client Component

import dynamic from 'next/dynamic';

const DynamicCanvas = dynamic(() => import('@react-three/fiber').then((mod) => mod.Canvas), {
  ssr: false
});

const DynamicOrbitControls = dynamic(() => import('@react-three/drei').then((mod) => mod.OrbitControls), {
  ssr: false
});

const DynamicBox = dynamic(() => import('@react-three/drei').then((mod) => mod.Box), {
  ssr: false
});

const DynamicSphere = dynamic(() => import('@react-three/drei').then((mod) => mod.Sphere), {
  ssr: false
});

const DynamicCylinder = dynamic(() => import('@react-three/drei').then((mod) => mod.Cylinder), {
  ssr: false
});

// Export the components
export { DynamicCanvas, DynamicOrbitControls, DynamicBox, DynamicSphere, DynamicCylinder };

