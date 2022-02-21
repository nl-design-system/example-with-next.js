import { FormFieldDeclaration } from './FormFieldDeclaration.model';

const createDeclaration = (arg: Partial<FormFieldDeclaration>): FormFieldDeclaration => ({
  ...arg,
  id: '95c4f597-99ab-4938-9c78-c4d81b75033b',
  label: 'example',
  name: 'example',
});

describe('Form control of a form field', () => {
  describe('form control types', () => {
    it('can be a textbox', () => {
      const field = createDeclaration({
        fieldType: 'input',
      });

      // TODO: We probably need a better name that `input`
      expect(field.fieldType).toBe('input');
    });

    it('can be a checkbox', () => {
      const field = createDeclaration({
        fieldType: 'checkbox',
      });

      expect(field.fieldType).toBe('checkbox');
    });

    it('can be a radio group', () => {
      const field = createDeclaration({
        fieldType: 'radiogroup',
      });

      expect(field.fieldType).toBe('radiogroup');
    });

    it('can be a date input', () => {
      const field = createDeclaration({
        fieldType: 'date',
      });

      expect(field.fieldType).toBe('date');
    });

    it('can be a date and time input', () => {
      const field = createDeclaration({
        fieldType: 'datetime',
      });

      expect(field.fieldType).toBe('datetime');
    });

    it('can be a time input', () => {
      const field = createDeclaration({
        fieldType: 'time',
      });

      expect(field.fieldType).toBe('time');
    });

    it('can be a checkbox group', () => {
      const field = createDeclaration({
        fieldType: 'checkboxgroup',
      });

      expect(field.fieldType).toBe('checkboxgroup');
    });

    it('can be a listbox', () => {
      const field = createDeclaration({
        fieldType: 'select',
      });

      // TODO: "listbox" or "select"?
      expect(field.fieldType).toBe('select');
    });
  });
});
