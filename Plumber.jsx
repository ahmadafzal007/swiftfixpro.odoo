/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.4.1 public/models/plumber.glb 
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/plumber.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[-0.03, 1.739, 0.058]} rotation={[-Math.PI / 2, 0, 0]} scale={0.002}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[18.796, 44.708, -16.034]} rotation={[-Math.PI / 2, 0, -Math.PI]}>
            <mesh geometry={nodes.GOLD_RUSH_HARD_HAT_GOLD_RUSH_HARD_HAT_0.geometry} material={materials.GOLD_RUSH_HARD_HAT} position={[2.405, 1.108, -15.214]} rotation={[0.092, 0, 0]} scale={0.846} />
          </group>
        </group>
      </group>
      <mesh geometry={nodes.Wolf3D_Body.geometry} material={materials.Wolf3D_Body} />
      <mesh geometry={nodes.Wolf3D_Glasses.geometry} material={materials.Wolf3D_Glasses} />
      <mesh geometry={nodes.Wolf3D_Outfit_Bottom.geometry} material={materials.Wolf3D_Outfit_Bottom} />
      <mesh geometry={nodes.Wolf3D_Outfit_Footwear.geometry} material={materials.Wolf3D_Outfit_Footwear} />
      <mesh geometry={nodes.Wolf3D_Outfit_Top.geometry} material={materials.Wolf3D_Outfit_Top} />
      <mesh name="EyeLeft" geometry={nodes.EyeLeft.geometry} material={materials.Wolf3D_Eye} morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary} morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences} />
      <mesh name="EyeRight" geometry={nodes.EyeRight.geometry} material={materials.Wolf3D_Eye} morphTargetDictionary={nodes.EyeRight.morphTargetDictionary} morphTargetInfluences={nodes.EyeRight.morphTargetInfluences} />
      <mesh name="Wolf3D_Head" geometry={nodes.Wolf3D_Head.geometry} material={materials.Wolf3D_Skin} morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary} morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences} />
      <mesh name="Wolf3D_Teeth" geometry={nodes.Wolf3D_Teeth.geometry} material={materials.Wolf3D_Teeth} morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary} morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences} />
    </group>
  )
}

useGLTF.preload('/plumber.glb')