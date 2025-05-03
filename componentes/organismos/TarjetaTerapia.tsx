import ImagenEjercicio from "../atomos/Image";
import TarjetaContenido from "../moleculas/TarjetaContenido";

interface TarjetaTerapiaProps {
  titulo: string;
  subtitulo: string;
}

export default function TarjetaTerapia({ titulo, subtitulo }: TarjetaTerapiaProps) {
  return (
    <div className="w-64 rounded-lg overflow-hidden shadow-lg">
      <ImagenEjercicio />
      <TarjetaContenido titulo={titulo} subtitulo={subtitulo} />
    </div>
  );
}
