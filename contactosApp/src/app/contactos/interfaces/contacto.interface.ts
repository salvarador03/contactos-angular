export interface Contacto {
    datos: any;
    ok: number;
    id?:       number;
    nombre:    string;
    apellidos: string;
    empresa?:   string;
    puesto?:    string;
    web?:       string;
    notas?:     string;
    direccion?: string;
    Poblacion?: string;
    Provincia?: string;
    CP?:        number;
}
