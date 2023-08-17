'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, Center, Environment } from '@react-three/drei'
import Shirt from '@/components/Shirt'
import Backdrop from '@/components/Backdrop'

export default function App( { position = [-1,0,2.5], fov = 25} ) {
    //const root = document.getElementById('root')
    return (
        <Canvas
            shadows
            //eventSource={root}
            //eventPrefix="client" 
            camera={{position, fov}}>
            <ambientLight intensity={0.75} />
            <Environment preset="city" />
            <Center>
                <Shirt />
                <Backdrop />
            </Center>
            <OrbitControls />
        </Canvas>
    )
}