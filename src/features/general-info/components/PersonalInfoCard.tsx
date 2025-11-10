import { Card, Descriptions } from 'antd';
import type { GeneralInfo } from '../api/generalInfo.api';

type PersonalInfoCardProps = {
  data: GeneralInfo;
};

const PersonalInfoCard = ({ data }: PersonalInfoCardProps) => {
  return (
    <Card title="Datos Personales" bordered={false} size="small">
      <Descriptions column={3} bordered size="small">
        <Descriptions.Item label="Nombre completo" span={3}>
          {data.nombreCompleto}
        </Descriptions.Item>
        <Descriptions.Item label="Edad">{data.edad} años</Descriptions.Item>
        <Descriptions.Item label="Sexo">
          {data.sexo === 'M' ? 'Masculino' : data.sexo === 'F' ? 'Femenino' : 'Otro'}
        </Descriptions.Item>
        <Descriptions.Item label="CURP">
          {data.curp}
        </Descriptions.Item>
        <Descriptions.Item label="Teléfono celular" span={2}>{data.telefonoCelular}</Descriptions.Item>
        <Descriptions.Item label="Teléfono secundario">
          {data.telefonoSecundario || 'No registrado'}
        </Descriptions.Item>
        <Descriptions.Item label="Correo electrónico" span={3}>
          {data.correoElectronico}
        </Descriptions.Item>
        <Descriptions.Item label="Domicilio" span={3}>
          {data.domicilio}
        </Descriptions.Item>
      </Descriptions>
    </Card>
  );
};

export default PersonalInfoCard;
