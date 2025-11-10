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
  numeroCuenta: string;
  estatusCuenta: 'activa' | 'inactiva' | 'bloqueada' | 'suspendida';
  nombreCompleto: string;
  edad: number;
  sexo: 'M' | 'F' | 'Otro';
  curp: string;
  telefonoCelular: string;
  telefonoSecundario?: string;
  correoElectronico: string;
  domicilio: string;
  clienteDesde: string;
  fechaUltimoContacto?: string;
  adicionales: Adicional[];
  beneficiarios: Beneficiario[];
};

export const fetchGeneralInfo = async (): Promise<GeneralInfo> => {
  // TODO: Reemplazar con llamada real al backend
  // const { data } = await apiClient.get(`/clientes/${clienteId}/informacion-general`);
  // return data; 
  
  // ============ MOCK - Simula la llamada a un endpoint ============
  await new Promise((resolve) => setTimeout(resolve, 3000));

  // Datos mockeados (simulando respuesta del backend)
  return {
    numeroCuenta: '4152-3456-7890-1234',
    estatusCuenta: 'activa',
    nombreCompleto: 'Juan Carlos Pérez García',
    edad: 35,
    sexo: 'M',
    curp: 'PEGJ880523HDFRNN09',
    telefonoCelular: '+52 55 1234 5678',
    telefonoSecundario: '+52 55 8765 4321',
    correoElectronico: 'juan.perez@email.com',
    domicilio: 'Av. Insurgentes Sur 1234, Col. Del Valle, CDMX, C.P. 03100',
    clienteDesde: '2020-01-15',
    fechaUltimoContacto: '2025-11-10T14:30:00Z',
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
  // ============ FIN MOCK ============
};
