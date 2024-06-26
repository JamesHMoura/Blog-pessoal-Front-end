import Tema from './Tema';
import Usuario from './Usuario';

export default interface Postagem {
  id: number;
  titulo: string;
  texto: string;
  time: string ;
  tema: Tema | null;
  usuario: Usuario | null;
}