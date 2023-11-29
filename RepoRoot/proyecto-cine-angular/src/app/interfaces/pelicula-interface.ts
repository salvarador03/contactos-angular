export interface Pelicula {
    id?:    number;
    titulo: string;
    genero?: string;
    ano?: number;
    director: string;
    precio: number;
    descuento: number;
}