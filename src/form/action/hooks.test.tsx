import { fireEvent, render, screen } from "@testing-library/react";
import { Input } from "../../components/Input";
import { FormAction } from "../action/FormAction.model";
import { FormStateDispatch, useInput } from "../action/hooks";
import { createFormField } from "../state/FormField";
import "@testing-library/jest-dom";

describe("Form state hook for <Input>", () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const fakeDispatch: FormStateDispatch = (_action: FormAction) => undefined;
  const id = "f870a988-95b4-4a90-9699-fec4cb2ccbab";
  const formField = createFormField({
    declaration: { id, fieldType: "input", label: "Name", labelKey: "name" },
    defaultState: { value: "Bobby Tables" },
  });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let useTranslationMock: any;

  beforeAll(() => {
    useTranslationMock = jest.mock("react-i18next", () => ({
      useTranslation: () => {
        return {
          t: (str: string): string => str,
        };
      },
    }));
  });

  afterAll(() => {
    console.log(useTranslationMock);
    // useTranslationMock?.mockRestore();
  });

  describe("textbox", () => {
    it("renders without side effects", () => {
      const dispatch = jest.fn(fakeDispatch);
      render(<Input state={formField} {...useInput(formField, dispatch)} />);
      const textbox = screen.getByRole<HTMLInputElement>("textbox");

      expect(textbox).toBeInTheDocument();
      expect(dispatch).not.toHaveBeenCalled();
    });

    it("change event results in a change action", () => {
      const dispatch = jest.fn(fakeDispatch);
      render(<Input state={formField} {...useInput(formField, dispatch)} />);
      const textbox = screen.getByRole<HTMLInputElement>("textbox");

      fireEvent.change(textbox, {
        target: { value: "" },
      });

      expect(dispatch).toHaveBeenCalledTimes(1);

      const firstCall = dispatch.mock.calls[0];

      expect(firstCall[0].type).toBe("change");

      if (firstCall[0]?.type === "change") {
        expect(firstCall[0]?.value).toBe("");
      }
    });
  });

  describe.skip("single select", () => {
    it("change event results in a change action", () => {
      const dispatch = jest.fn(fakeDispatch);
      const formField = createFormField({
        declaration: { id, fieldType: "select", label: "What number is an odd number?", labelKey: "question-odd" },
        definition: {
          options: [
            { id: "5c6a6655-4369-4194-833b-4165bd0d1353", label: "One", labelKey: "number-1", value: "1" },
            { id: "3a85c16e-55bc-4d0f-b129-3136fdf51058", label: "Two", labelKey: "number-2", value: "2" },
          ],
        },
        defaultState: {
          selectedOptions: ["3a85c16e-55bc-4d0f-b129-3136fdf51058"],
        },
      });
      render(<Input state={formField} {...useInput(formField, dispatch)} />);
      const combobox = screen.getByRole<HTMLInputElement>("combobox");
      const option = screen.getByRole<HTMLInputElement>("option", { name: "One" });

      fireEvent.change(combobox, {
        target: { value: option.value },
      });

      expect(dispatch).toHaveBeenCalledTimes(1);

      const firstCall = dispatch.mock.calls[0];

      expect(firstCall[0]?.type).toBe("change");

      if (firstCall[0]?.type === "change") {
        expect(firstCall[0]?.value).toBe("1");
      }
      expect(firstCall[0]?.type).toBe("select-option");

      // TODO: Refactor `change` to `select-option`
      if (firstCall[0]?.type === "select-option") {
        expect(firstCall[0]?.optionId).toBe("5c6a6655-4369-4194-833b-4165bd0d1353");
      }
    });
  });

  describe.skip("multiple select", () => {
    it("change event results in a select option action", () => undefined);
    it("change event results in a unselect option action", () => undefined);
  });

  describe("checkbox", () => {
    it("dispatches a select option action", () => {
      const dispatch = jest.fn(fakeDispatch);
      const formField = createFormField({
        declaration: { id, fieldType: "checkbox", label: "Sign up for the newsletter", labelKey: "option-newsletter" },
      });
      render(<Input state={formField} {...useInput(formField, dispatch)} />);
      const checkbox = screen.getByRole<HTMLInputElement>("checkbox");

      expect(checkbox.checked).toBe(false);

      checkbox.click();

      expect(dispatch).toHaveBeenCalledTimes(1);

      const firstCall = dispatch.mock.calls[0];

      expect(firstCall[0]?.type).toBe("change");
    });

    it("dispatches a unselect option action", () => {
      const dispatch = jest.fn(fakeDispatch);
      const formField = createFormField({
        declaration: { id, fieldType: "checkbox", label: "Sign up for the newsletter", labelKey: "option-newsletter" },
        defaultState: {
          value: "true",
        },
      });
      render(<Input state={formField} {...useInput(formField, dispatch)} />);
      const checkbox = screen.getByRole<HTMLInputElement>("checkbox");

      expect(checkbox.checked).toBe(true);

      checkbox.click();

      expect(dispatch).toHaveBeenCalledTimes(1);

      const firstCall = dispatch.mock.calls[0];

      expect(firstCall[0]?.type).toBe("change");
    });
  });

  describe("radio group", () => {
    it("dispatches a change action", () => {
      const dispatch = jest.fn(fakeDispatch);
      const formField = createFormField({
        declaration: { id, fieldType: "radiogroup", label: "What number is an odd number?", labelKey: "question-odd" },
        definition: {
          options: [
            { id: "5c6a6655-4369-4194-833b-4165bd0d1353", label: "One", labelKey: "number-1", value: "1" },
            { id: "3a85c16e-55bc-4d0f-b129-3136fdf51058", label: "Two", labelKey: "number-2", value: "2" },
          ],
        },
        defaultState: {
          selectedOptions: ["3a85c16e-55bc-4d0f-b129-3136fdf51058"],
        },
      });
      render(<Input state={formField} {...useInput(formField, dispatch)} />);
      const radioButton = screen.getByRole<HTMLInputElement>("radio", { name: "One" });

      expect(dispatch).not.toHaveBeenCalled();

      radioButton.click();

      expect(dispatch).toHaveBeenCalledTimes(1);

      const firstCall = dispatch.mock.calls[0];

      expect(firstCall[0]?.type).toBe("select-option");

      if (firstCall[0]?.type === "select-option") {
        expect(firstCall[0]?.optionId).toBe("5c6a6655-4369-4194-833b-4165bd0d1353");
      }
    });
  });
});
