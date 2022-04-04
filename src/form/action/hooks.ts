import { ChangeEvent } from 'react';
import { FormField } from '../state/FormField.model';
import { FormAction } from './FormAction.model';
import { InputChangeAction } from './InputChangeAction.model';
import { InputOptionSelectAction } from './InputOptionSelectAction.model';
import { InputOptionUnselectAction } from './InputOptionUnselectAction.model';
import { InputTouchAction } from './InputTouchAction.model';

type SomeInputProps = {
  onBlur?: (_event: any) => void;
  onChange: (_event: any) => void;
};

export type FormStateDispatch = (_action: FormAction) => void;

const handleTextboxChange = (textbox: HTMLInputElement | HTMLTextAreaElement, dispatch: FormStateDispatch) => {
  if (typeof textbox.dataset.id === 'string') {
    // Textarea
    const change: InputChangeAction = {
      type: 'change',
      id: textbox.dataset.id,
      value: textbox.value,
    };

    dispatch(change);
  }
};

const handleSelectChange = (select: HTMLSelectElement, dispatch: FormStateDispatch) => {
  if (typeof select.dataset.id === 'string') {
    const selectedOptions = Array.from(select.options)
      .filter((option) => option.selected && typeof option.dataset.optionId === 'string')
      .map((option) => ({ optionId: option.dataset.optionId || '', value: option.value }));

    selectedOptions
      .map(
        ({ optionId }): InputOptionSelectAction => ({
          type: 'select-option',
          id: select.dataset.id || '',
          optionId,
        }),
      )
      .forEach(dispatch);
  }
};

const handleCheckboxChange = (input: HTMLInputElement, dispatch: FormStateDispatch) => {
  if (typeof input.dataset.id === 'string' && typeof input.dataset.optionId === 'string') {
    // Radio button and checkbox
    const optionId = input.dataset.optionId || '';
    if (input.checked) {
      const action: InputOptionSelectAction = {
        type: 'select-option',
        id: input.dataset.id,
        optionId,
      };
      dispatch(action);
    } else {
      const action: InputOptionUnselectAction = {
        type: 'unselect-option',
        id: input.dataset.id,
        optionId,
      };
      dispatch(action);
    }
  }
};

export const useInput = (field: FormField, dispatch: FormStateDispatch): SomeInputProps => {
  return {
    onBlur: (event: FocusEvent) => {
      const input =
        (event.target as HTMLInputElement)?.localName === 'input' ? (event.target as HTMLInputElement) : null;

      // TODO: Radio group / checkbox group
      if (typeof input?.dataset.id === 'string') {
        const touchAction: InputTouchAction = {
          type: 'touch-input',
          id: input.dataset.id,
        };

        dispatch(touchAction);
      }
    },
    onChange: (event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      const input = event.target.localName === 'input' ? (event.target as HTMLInputElement) : null;
      const select = event.target.localName === 'select' ? (event.target as HTMLSelectElement) : null;
      const textarea = event.target.localName === 'textarea' ? (event.target as HTMLTextAreaElement) : null;

      if (input) {
        if (
          (input.type === 'checkbox' || input.type === 'radio') &&
          typeof input.dataset.id === 'string' &&
          typeof input.dataset.optionId === 'string'
        ) {
          handleCheckboxChange(input, dispatch);
        } else if (typeof input.dataset.id === 'string') {
          handleTextboxChange(input, dispatch);
        } else {
          throw new Error('element must have data-id attribute');
        }
      }
      if (select) {
        handleSelectChange(select, dispatch);
      } else if (textarea) {
        handleTextboxChange(textarea, dispatch);
      }
    },
  };
};
