import clsx from "clsx";
import { InputHTMLAttributes } from "react";

interface Props extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  id: string;
  invalid?: boolean;
}

export const DateInput = ({ disabled, invalid, readOnly, required, className, ...restProps }: Props) => (
  <input
    {...restProps}
    type="date"
    className={clsx(
      "utrecht-textbox",
      "utrecht-textbox--html-input",
      disabled && "utrecht-textbox--disabled",
      invalid && "utrecht-textbox--invalid",
      readOnly && "utrecht-textbox--readonly",
      required && "utrecht-textbox--required",
      className
    )}
    disabled={disabled}
    readOnly={readOnly}
    required={required}
    aria-invalid={invalid || undefined}
  />
);

/*


export const defaultArgs = {
  disabled: false,
  focus: false,
  invalid: false,
  readOnly: false,
  required: false,
  placeholder: '',
  value: '',
};

export const TextBox = ({
  disabled = false,
  focus = false,
  invalid = false,
  placeholder = '',
  readOnly = false,
  required = false,
  value = '',
}) =>
  `<input class="${clsx(
    'utrecht-textbox',
    'utrecht-textbox--html-input',
    disabled && 'utrecht-textbox--disabled',
    focus && 'utrecht-textbox--focus utrecht-textbox--focus-visible',
    invalid && 'utrecht-textbox--invalid',
    readOnly && 'utrecht-textbox--readonly',
    required && 'utrecht-textbox--required',
  )}"${disabled ? ' disabled' : ''}${invalid ? ' aria-invalid="true"' : ''}${
    placeholder ? ` placeholder="${placeholder}"` : ''
  }${readOnly ? ' readonly' : ''}${required ? ' required' : ''} value="${value}">`;
*/
