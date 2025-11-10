import { Control, Controller } from 'react-hook-form';
import { Select } from 'antd';

export const ControlledSelect = ({ name, control, ...rest }: { name: string; control: Control<any>; [k: string]: any }) => (
  <Controller name={name} control={control} render={({ field }) => <Select {...field} {...rest} />} />
);
export default ControlledSelect;
