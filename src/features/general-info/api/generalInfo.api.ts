// Tipos de datos
export type Adicional = {
  id: string;
  nombre: string;
  numeroCuenta: string;
};

export type Beneficiario = {
  id: string;
  nombre: string;
  porcentaje: number;
};

export type GeneralInfo = {
  nombreCompleto: string;
  edad: number;
  sexo: 'M' | 'F' | 'Otro';
  curp: string;
  telefonoCelular: string;
  telefonoSecundario?: string;
  correoElectronico: string;
  domicilio: string;
  adicionales: Adicional[];
  beneficiarios: Beneficiario[];
};

// API Mock - Simula la llamada a un endpoint
export const fetchGeneralInfo = async (): Promise<GeneralInfo> => {
  // Simular latencia de red (3 segundos para demostrar que la app está esperando datos)
  await new Promise((resolve) => setTimeout(resolve, 3000));

  // Datos mockeados
  return {
    nombreCompleto: 'Juan Carlos Pérez García',
    edad: 35,
    sexo: 'M',
    curp: 'PEGJ880523HDFRNN09',
    telefonoCelular: '+52 55 1234 5678',
    telefonoSecundario: '+52 55 8765 4321',
    correoElectronico: 'juan.perez@email.com',
    domicilio: 'Av. Insurgentes Sur 1234, Col. Del Valle, CDMX, C.P. 03100',
    adicionales: [
      { id: '1', nombre: 'María Pérez García', numeroCuenta: '4152-3456-7890-1234' },
      { id: '2', nombre: 'Carlos Pérez Gómez', numeroCuenta: '4152-3456-7890-5678' },
    ],
    beneficiarios: [
      { id: '1', nombre: 'Ana Laura Pérez Martínez', porcentaje: 50 },
      { id: '2', nombre: 'Roberto Pérez Martínez', porcentaje: 30 },
      { id: '3', nombre: 'Carmen García Vega', porcentaje: 20 },
    ],
  };
};
