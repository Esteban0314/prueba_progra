import Image from "next/image";
import img from '../../public/fotoejercicio.jpg'; 

export default function ImagenEjercicio() {
  return (
    <Image
      src={img}
      alt="Ejercicio Pélvico"
      className="rounded-t-lg w-full h-auto object-cover"
    />
  );
}
