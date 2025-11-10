import { Card, Descriptions } from 'antd';
import type { GeneralInfo } from '../api/generalInfo.api';

type PersonalInfoCardProps = {
  data: GeneralInfo;
};

const PersonalInfoCard = ({ data }: PersonalInfoCardProps) => {
  return (
    <Card title="Datos del Cliente" bordered={false} size="small">
      <Descriptions column={4} bordered size="small">
        <Descriptions.Item label="Nombre completo" span={4}>
          {data.nombreCompleto}
        </Descriptions.Item>
        <Descriptions.Item label="Edad">{data.edad} años</Descriptions.Item>
        <Descriptions.Item label="Sexo">
          {data.sexo === 'M' ? 'Masculino' : data.sexo === 'F' ? 'Femenino' : 'Otro'}
        </Descriptions.Item>
        <Descriptions.Item label="CURP" span={2}>
          {data.curp}
        </Descriptions.Item>
        <Descriptions.Item label="Teléfono celular" span={2}>{data.telefonoCelular}</Descriptions.Item>
        <Descriptions.Item label="Teléfono secundario" span={2}>
          {data.telefonoSecundario || 'No registrado'}
        </Descriptions.Item>
        <Descriptions.Item label="Correo electrónico" span={4}>
          {data.correoElectronico}
        </Descriptions.Item>
        <Descriptions.Item label="Domicilio" span={4}>
          {data.domicilio}
        </Descriptions.Item>
      </Descriptions>
    </Card>
  );
};

export default PersonalInfoCard;
