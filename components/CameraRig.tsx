import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { easing } from 'maath'

export default function CameraRig({ children }){
    const groupRef = useRef()

    useFrame((state,delta) => {
        easing.dampE(
            groupRef.current.rotation,
            [state.pointer.y / 10, (state.pointer.x-2) / 5, 0],
            0.25,
            delta
        )
        //console.log(state.pointer.x, state.pointer.y)
    })

    return (
        <group ref={groupRef}>
            { children }
        </group>
    )
}