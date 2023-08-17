'use client'

import { Canvas } from '@react-three/fiber'
import { Center, Environment } from '@react-three/drei'
import Shirt from '@/components/Shirt'
import Backdrop from '@/components/Backdrop'
import CameraRig from '@/components/CameraRig'

export default function App( { position = [-1,0,2.5], fov = 25} ) {
    return (
        <Canvas
            shadows
            camera={{position, fov}}>
            <ambientLight intensity={0.75} />
            <Environment preset="city" />
                <CameraRig>
                    <Center>
                        <Shirt />
                        <Backdrop />
                    </Center>
                </CameraRig>
        </Canvas>
    )
}