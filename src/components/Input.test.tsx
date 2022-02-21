import { render, screen } from "@testing-library/react";
import { createFormField } from "../form/state/FormField";
import { Input } from "./Input";
import "@testing-library/jest-dom";

const id = "example";

describe("Form field with input", () => {
  describe("with textbox", () => {
    it("to render", () => {
      const state = createFormField({
        declaration: { id, fieldType: "input", label: "Message" },
      });
      const { container } = render(<Input state={state} onChange={() => {}} />);

      const formField = container.querySelector(":only-child");

      expect(formField).toBeInTheDocument();

      const textbox = screen.getByRole("textbox", {
        name: "Message",
      });

      expect(textbox).toBeInTheDocument();
    });
  });

  describe("with textarea", () => {
    it("to render", () => {
      const state = createFormField({
        declaration: { id, fieldType: "textarea", label: "Message" },
      });
      const { container } = render(<Input state={state} onChange={() => {}} />);

      const formField = container.querySelector(":only-child");

      expect(formField).toBeInTheDocument();

      const textarea = screen.getByRole("textbox", {
        name: "Message",
      });

      expect(textarea).toBeInTheDocument();
    });
  });

  describe("with checkbox", () => {
    it("to render", () => {
      const state = createFormField({
        declaration: { id, fieldType: "checkbox", label: "Receive spam" },
      });
      const { container } = render(<Input state={state} onChange={() => {}} />);

      const formField = container.querySelector(":only-child");

      expect(formField).toBeInTheDocument();

      const checkbox = screen.getByRole("checkbox", {
        name: "Receive spam",
      });

      expect(checkbox).toBeInTheDocument();
    });
  });

  describe("with radio group", () => {
    it("to render", () => {
      const state = createFormField({
        declaration: { id, fieldType: "radiogroup", label: "Are you OK?" },
        definition: {
          options: [
            { id: "feeling-1", label: "Yes", value: "Y" },
            { id: "feeling-2", label: "No", value: "N" },
          ],
        },
      });
      const { container } = render(<Input state={state} onChange={() => {}} />);

      const formField = container.querySelector(":only-child");

      expect(formField).toBeInTheDocument();

      const radiogroup = screen.getByRole("radiogroup", {
        name: "Are you OK?",
      });

      expect(radiogroup).toBeInTheDocument();

      const radio = screen.getByRole("radio", {
        name: "Yes",
      });

      expect(radio).toBeInTheDocument();
    });
  });

  describe("with checkbox group", () => {
    it("to render", () => {
      const state = createFormField({
        declaration: { id, fieldType: "checkboxgroup", label: "Toppings" },
        definition: {
          options: [
            { id: "topping-1", label: "Cheese", value: "cheese" },
            { id: "topping-2", label: "Basil", value: "basil" },
          ],
        },
      });
      const { container } = render(<Input state={state} onChange={() => {}} />);

      const formField = container.querySelector(":only-child");

      expect(formField).toBeInTheDocument();

      const group = screen.getByRole("group", {
        name: "Toppings",
      });

      expect(group).toBeInTheDocument();

      const checkbox = screen.getByRole("checkbox", {
        name: "Cheese",
      });

      expect(checkbox).toBeInTheDocument();
    });
  });

  describe("with combobox", () => {
    it("to render", () => {
      const state = createFormField({
        declaration: { id, fieldType: "select", label: "Favourite topping" },
        definition: {
          options: [
            { id: "topping-1", label: "Cheese", value: "cheese" },
            { id: "topping-2", label: "Basil", value: "basil" },
          ],
        },
      });
      const { container } = render(<Input state={state} onChange={() => {}} />);

      const formField = container.querySelector(":only-child");

      expect(formField).toBeInTheDocument();

      const group = screen.getByRole("combobox", {
        name: "Favourite topping",
      });

      expect(group).toBeInTheDocument();

      const option = screen.getByRole("option", {
        name: "Cheese",
      });

      expect(option).toBeInTheDocument();
    });
  });
});
