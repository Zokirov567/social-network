import { SCAppInput } from "./AppInput.styled";

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string;
  isError?: boolean;
}

export const AppInput = ({
  type,
  placeholder,
  required,
  ...props
}: IInputProps) => {
  return (
    <SCAppInput
      type={type}
      placeholder={placeholder}
      required={required}
      {...props}
    />
  );
};
