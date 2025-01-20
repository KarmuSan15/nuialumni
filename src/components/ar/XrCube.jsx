/*
import { OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";


function XrCube() {

    //useRef: hook de react para darnos acceso directo a un elemento, en este
    //caso para darnos acceso directo al cubo (objeto 3D) que vamos a mostrar
    const cubeRef = useRef();
    
    
    //useFrame: hook de react-three/fiber (librería para trabajar en 3D) que
    //permite rotar el objeto 3D alrededor de un eje, x, y o z. 
    //En este ejemplo es en el eje y
    useFrame((state, delta) => {
        //console.log(cubeRef)    
        cubeRef.current.rotation.y += delta;
    
    });

return (<>
    {/*<OrbitControls /> permite mover los objetos con el ratón. 
    Sólo sirve para la web, pero no cuando estemos en RA}
    <OrbitControls />
    {/*<ambientLight es para poner luz a la escena}
    <ambientLight />
    {/*dentro del mesh se dibuja la figura, que en este caso es un cubo (box)}
    <mesh ref={cubeRef} position={[0, 0, -5]}>
        <boxGeometry args={[2, 2, 2]}/>
        <meshStandardMaterial color='hotpink' />
    </mesh>
     

    </>

)
}

export default XrCube;*/


//& CODIGO MODIFICADO PARA TRIANGULO

import { OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

function XrCube() {
    // Referencia al objeto 3D
    const triangleRef = useRef();

    // Rotación continua del objeto en el eje Y
    useFrame((state, delta) => {
        triangleRef.current.rotation.y += delta;
    });

    return (
        <>
            {/* Control de órbita para mover el objeto (opcional para pruebas en la web) */}
            <OrbitControls />
            {/* Luz ambiental para iluminar la escena */}
            <ambientLight />
            {/* Geometría del triángulo (tetraedro) */}
            <mesh ref={triangleRef} position={[0, 0, -5]}>
                <tetrahedronGeometry args={[2]} /> {/* Geometría del tetraedro */}
                <meshStandardMaterial color="orange" /> {/* Material con color naranja */}
            </mesh>
        </>
    );
}

export default XrCube;
