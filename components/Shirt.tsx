import { useGLTF } from "@react-three/drei"

export default function Shirt(props) {
    const { nodes, materials } = useGLTF("/shirt_baked.glb")
    return (
        <group {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.T_Shirt_male.geometry}
                material={materials.lambert1}
                position={[0.49, -0.2, 0]}
                rotation={[Math.PI / 2, 0, 0]}
            />
        </group>
    )
}

useGLTF.preload("shirt_baked.glb")