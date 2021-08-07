interface IBasicInfoProps {
  placeholder: string;
  field: string;
  type: string;
  handleChange: (text: string) => void;
  className?: string;
}

const BasicInfoField = (props: IBasicInfoProps) => {
  const { placeholder, field, type, handleChange, className } = props;

  return (
    <div className={className || ''}>
      <input
        className="basicInfoInput"
        type={type}
        placeholder={placeholder}
        value={field || ''}
        onChange={(e) => handleChange(e.currentTarget.value)}
      />
    </div>
  );
};

export default BasicInfoField;
