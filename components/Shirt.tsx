import { useGLTF } from "@react-three/drei"

export default function Shirt(props) {
    const { nodes, materials } = useGLTF("/shirt_baked_collapsed.glb")
    return (
        <group {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.T_Shirt_male.geometry}
                material={materials.lambert1}
            />
        </group>
    )
}

useGLTF.preload("shirt_baked_collapsed.glb")