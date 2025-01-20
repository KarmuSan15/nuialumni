//Ejemplo de un cubo en RA
/*
import { Canvas} from "@react-three/fiber";
import XrCube from './XrCube';
import { ARButton, XR } from "@react-three/xr";


function EjAR(){


    return(
        <>
            <ARButton/>
            <Canvas>
                <XR>
                    <XrCube />
                   
                </XR>
            </Canvas>
        </>
)

}

export default EjAR;*/

//& CODIGO MODIFICADO PARA TRIANGULO


import { Canvas } from "@react-three/fiber";
import XrCube from './XrCube'; // Cambiado para usar XrTriangle
import { ARButton, XR } from "@react-three/xr";

function EjAR() {
    return (
        <>
            <ARButton />
            <Canvas>
                <XR>
                    <XrCube /> {/* Cambiado para usar el componente del triángulo */}
                </XR>
            </Canvas>
        </>
    );
}

export default EjAR;



