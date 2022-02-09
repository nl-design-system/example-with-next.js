import { FormFieldState } from "./model";
import { InputHTMLAttributes } from "react";

interface InputInspectorProps extends InputHTMLAttributes<HTMLInputElement> {
  state: FormFieldState;
}

export const InputInspector = ({
  state: {
    labelKey,
    inputState,
    required,
    definition: { autoComplete, spellCheck, minLength, maxLength, pattern, maskOutput },
  },
}: InputInspectorProps) => (
  <details>
    <summary>{labelKey} settings</summary>
    <h3>Constraints</h3>
    <dl>
      <dt>required</dt>
      <dd>{required ? "yes" : "no"}</dd>
      <dt>minLength</dt>
      <dd>{typeof minLength == "number" ? minLength : "-"}</dd>
      <dt>maxLength</dt>
      <dd>{typeof maxLength == "number" ? maxLength : "-"}</dd>
      <dt>pattern</dt>
      <dd>
        <code>{pattern ? pattern : ""}</code>
      </dd>
    </dl>
    <h3>Input State</h3>
    <dl>
      <dt>current input</dt>
      <dd>{typeof inputState.value == "string" ? inputState.value : ""}</dd>
      <dt>current input length</dt>
      <dd>{typeof inputState.value == "string" ? inputState.value.length : 0}</dd>
    </dl>
    <h3>Data Settings</h3>
    <dl>
      <dt>mask output</dt>
      <dd>{maskOutput ? "yes" : "no"}</dd>
      <dt>spell check</dt>
      <dd>{spellCheck ? "yes" : "no"}</dd>
      <dt>autocomplete</dt>
      <dd>{autoComplete ? autoComplete : "no"}</dd>
    </dl>
    <h3>Validity State</h3>
    <dl>
      <dt>deferred validation</dt>
      <dd>
        <ul>
          {inputState.deferInvalid ? <li>defer invalid</li> : ""}
          {inputState.deferValueMissing ? <li>defer required</li> : ""}
          {inputState.deferTooShort ? <li>defer too short</li> : ""}
          {inputState.deferTooLong ? <li>defer too long</li> : ""}
        </ul>
      </dd>
      <dt>invalid</dt>
      <dd>{inputState.invalid ? "yes" : "no"}</dd>
    </dl>
  </details>
);
