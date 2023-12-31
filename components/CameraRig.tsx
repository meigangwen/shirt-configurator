import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { easing } from 'maath'
import { useSnapshot } from 'valtio'
import { state } from '@/app/store'

export default function CameraRig({ children }){
    const groupRef = useRef()
    const snap = useSnapshot(state)

    useFrame((state, delta) => {
        easing.damp3(
          state.camera.position,
          [snap.intro ? -state.viewport.width / 4 : 0, 0, 2],
          0.25,
          delta
        )
        easing.dampE(
          groupRef.current.rotation,
          [state.pointer.y / 10, -state.pointer.x / 5, 0],
          0.25,
          delta
        )
    })

    return (
        <group ref={groupRef}>
            { children }
        </group>
    )
}