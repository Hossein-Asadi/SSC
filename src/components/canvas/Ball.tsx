import React, {Suspense} from 'react';
import {Canvas} from '@react-three/fiber';
import {Decal, Float, OrbitControls, Preload, useTexture} from '@react-three/drei';

import CanvasLoader from '../layout/Loader';

const Ball = (props: any) => {
    const [decal] = useTexture([props.imgUrl]);

    return (
        <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
            <ambientLight intensity={3}/>
            <mesh  scale={2.75}>
                <icosahedronGeometry args={[1, 1]}/>
                <meshStandardMaterial color={props.bg} polygonOffset polygonOffsetFactor={-5} flatShading/>
                <Decal
                    position={[0, 0, 1]}
                    rotation={[2 * Math.PI, 0, 6.25]}
                    scale={1}
                    map={decal}
                    // @ts-expect-error
                    flatShading
                />
            </mesh>
        </Float>
    );
};

const BallCanvas: React.FC<{ icon: string; bg: string }> = ({icon, bg}) => {
    return (
        <Canvas frameloop="demand" dpr={[1, 2]} gl={{preserveDrawingBuffer: true}}>
            <Suspense fallback={<CanvasLoader/>}>
                <OrbitControls enableZoom={false}/>
                <Ball imgUrl={icon} bg={bg}/>
            </Suspense>

            <Preload all/>
        </Canvas>
    );
};

export default BallCanvas;
