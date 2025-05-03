interface SubtituloProps {
    texto: string;
  }
  
  export default function Subtitulo({ texto }: SubtituloProps) {
    return <p className="text-white text-sm">{texto}</p>;
  }
  