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
    Poblacion?: string;
    Provincia?: string;
    CP?: number;
}