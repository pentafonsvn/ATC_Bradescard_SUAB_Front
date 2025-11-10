import { Control, Controller } from 'react-hook-form';
import { Input } from 'antd';

export const ControlledInput = ({ name, control, ...rest }: { name: string; control: Control<any>; [k: string]: any }) => (
  <Controller name={name} control={control} render={({ field }) => <Input {...field} {...rest} />} />
);
export default ControlledInput;
