import { AccumulativeShadows, RandomizedLight } from '@react-three/drei'
import { useSnapshot } from 'valtio'
import { state } from '@/app/store'
import { easing } from 'maath'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

export default function Backdrop() {
    const shadowRef = useRef()
    const snap = useSnapshot(state)
    useFrame((state, delta) => {
        easing.dampC(
            shadowRef.current.getMesh().material.color,
            snap.selectedColor,
            0.25,
            delta
        )
    })

    return (
        <AccumulativeShadows
            temporal
            ref={shadowRef}
            frames = {60}
            alphaTest = {0.85}
            scale = {10}
            rotation = {[Math.PI/2,0,0]}
            position = {[0,0,-0.15]}
        >
            <RandomizedLight
                amount = {4}
                radius = {9}
                intensity = {1.1}
                ambient = {0.5}
                position = {[5,5,-10]} 
            />
            <RandomizedLight
                amount = {4}
                radius = {5}
                intensity = {0.5}
                ambient = {1.1}
                position = {[-5,5,-9]} 
            />
        </AccumulativeShadows>
    )
}