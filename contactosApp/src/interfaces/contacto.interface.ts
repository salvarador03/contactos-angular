export interface TaskmanListaContactosResponse {
    ok:      number;
    mensaje: string;
    datos:   Contacto[];
}

export interface Contacto {
    id?:    number;
    nombre?: string;
    apellidos?: string;
    empresa?: string;
    puesto?: string;
    web?: string;
    notas?: string;
    direccion?: string;
    poblacion?: string;
    provincia?: string;
    cp?: number;
}