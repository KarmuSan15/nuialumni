import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment,OrbitControls } from '@react-three/drei'
import ToruhModel2 from './ToruhModel2';

export default function EjARToruh() {
  return (
    <div className="App">
      <Canvas>
        <Suspense fallback={null}>
          <ToruhModel2 />
          <Environment preset="sunset" background/>
          <OrbitControls />
        </Suspense>
      </Canvas>
    </div>
  )
}
