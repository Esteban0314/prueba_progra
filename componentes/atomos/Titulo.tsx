interface TituloProps {
    texto: string;
  }
  
  export default function Titulo({ texto }: TituloProps) {
    return <h3 className="text-lg font-bold text-white">{texto}</h3>;
  }
  