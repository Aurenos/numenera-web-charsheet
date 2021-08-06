interface IBasicInfoProps {
  placeholder: string;
  field: string;
  type: string;
  handleChange: (text: string) => void;
}

const BasicInfoField = (props: IBasicInfoProps) => {
  const { placeholder, field, type, handleChange } = props;

  return (
    <div>
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
