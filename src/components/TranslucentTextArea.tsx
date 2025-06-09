import { translucentTexture as textAreaStyle } from "../constants/translucent";

type TranslucentTextAreaProps = {
  name: React.HTMLProps<HTMLTextAreaElement>["name"],
  rows: React.HTMLProps<HTMLTextAreaElement>["rows"],
  placeholder: React.HTMLProps<HTMLTextAreaElement>["placeholder"],
  value: React.HTMLProps<HTMLTextAreaElement>["value"],
  onChangeHandler: React.HTMLProps<HTMLTextAreaElement>["onChange"],
}

export default function TranslucentTextArea({
  name,
  rows,
  placeholder,
  value,
  onChangeHandler,
}: TranslucentTextAreaProps) {
  return (
    <textarea
      style={textAreaStyle}
      name={name}
      className="form-control"
      rows={rows}
      placeholder={placeholder}
      required
      value={value}
      onChange={onChangeHandler}
    />
  );
}

