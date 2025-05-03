import Titulo from "../atomos/Titulo";
import Subtitulo from "../atomos/Subtitulo";
import BotonPlay from "../atomos/Play";

interface TarjetaContenidoProps {
  titulo: string;
  subtitulo: string;
}

export default function TarjetaContenido({ titulo, subtitulo }: TarjetaContenidoProps) {
  return (
    <div className="relative bg-[#2E2E46] p-4 rounded-b-lg">
      <Titulo texto={titulo} />
      <Subtitulo texto={subtitulo} />
      <BotonPlay />
    </div>
  );
}
