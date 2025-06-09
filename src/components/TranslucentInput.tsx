import { translucentTexture } from "../constants/translucent";

const inputStyle: React.CSSProperties = {
  ...structuredClone(translucentTexture),
  width: "300px",
};

type TranslucentInputProps = {
  inputType: React.HTMLProps<HTMLInputElement>["type"];
  value: React.HTMLProps<HTMLInputElement>["value"];
  onChangeHandler: React.HTMLProps<HTMLInputElement>["onChange"];
  placeholder: React.HTMLProps<HTMLInputElement>["placeholder"];
  onFocus?: React.HTMLProps<HTMLInputElement>["onFocus"];
  autoComplete?: React.HTMLProps<HTMLInputElement>["autoComplete"];
  readonly?: React.HTMLProps<HTMLInputElement>["readOnly"];
  name: React.HTMLProps<HTMLInputElement>["name"];
};


export default function TranslucentInput({
  inputType,
  value,
  onChangeHandler,
  placeholder,
  onFocus,
  name,
  autoComplete,
  readonly,
}: TranslucentInputProps) {
  return (
    <input
      name={name}
      type={inputType}
      className="form-control"
      id={name}
      placeholder={placeholder}
      onFocus={onFocus}
      readOnly={readonly}
      autoComplete={autoComplete}
      required
      value={value}
      onChange={onChangeHandler}
      style={inputStyle}
    />
  );
}

