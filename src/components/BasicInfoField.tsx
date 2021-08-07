import { clamp } from '../helpers';

interface IBasicInfoProps {
  placeholder: string;
  field: string;
  type: string;
  handleChange: (text: string) => void;
  className?: string;
  max?: number;
  min?: number;
}

const BasicInfoField = (props: IBasicInfoProps) => {
  const { placeholder, field, type, handleChange, className, max, min } = props;
  return (
    <div className={className || ''}>
      <input
        className="basicInfoInput"
        type={type}
        min={min || '0'}
        max={max || ''}
        placeholder={placeholder}
        value={field || ''}
        onChange={(e) => {
          if (type === 'number' && max) {
            console.log(max);
            return handleChange(
              clamp(parseInt(e.currentTarget.value), 0, max).toString()
            );
          }
          return handleChange(e.currentTarget.value);
        }}
      />
    </div>
  );
};

export default BasicInfoField;
