'use client'

import { Canvas } from '@react-three/fiber'
import { Center, Environment } from '@react-three/drei'
import Shirt from '@/components/Shirt'
import Backdrop from '@/components/Backdrop'
import CameraRig from '@/components/CameraRig'
import Overlay from '@/components/Overlay'

export default function App( { position = [0, 0, 2.5], fov = 25} ) {
    return (
        <>
            <Canvas
                shadows
                gl={{ preserveDrawingBuffer: true }}
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
            <Overlay />
        </>
    )
}