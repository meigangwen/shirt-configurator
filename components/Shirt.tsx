import { useGLTF, Decal, useTexture } from "@react-three/drei"
import { useFrame } from '@react-three/fiber'
import { useSnapshot } from 'valtio'
import { state } from '@/app/store'
import { easing } from 'maath'

export default function Shirt(props) {
    const snap = useSnapshot(state)

    const texture = useTexture(`/${snap.selectedDecal}.png`)

    const { nodes, materials } = useGLTF("/shirt_baked_collapsed.glb")
    
    //materials.lambert1.color = new THREE.Color(snap.selectedColor)
    useFrame((state, delta) => {
        easing.dampC(materials.lambert1.color, snap.selectedColor, 0.25, delta)
    })


    return (
        <group {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.T_Shirt_male.geometry}
                material={materials.lambert1}>
                <Decal
                    position={[0,0.02,0.15]}
                    rotation={[0,0,0]}
                    scale={0.15}
                    map={texture}
                />
            </mesh>
        </group>
    )
}

useGLTF.preload("shirt_baked_collapsed.glb")