import { FormValidationError } from "./input/model";

export const ValidationIcon = ({ errors }: { errors?: FormValidationError[] }) => {
  // Icon that can be displayed in the form label,
  // just in case the validation messages fall outside of the viewport.
  // Perhaps if you click the icon (should be large enough)
  // the browser should scroll to the validation messages, ideally keeping the
  // form input visible too.
  return errors && errors.length > 0 ? (
    <>
      <span title="has validation message" aria-hidden="true">
        ⚠️
      </span>
    </>
  ) : null;
};
