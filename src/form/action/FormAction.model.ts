import { FormResetAction } from './FormResetAction.model';
import { FormSubmitAction } from './FormSubmitAction.model';
import { FormSubmitFailureAction } from './FormSubmitFailureAction.model';
import { FormSubmitSuccessAction } from './FormSubmitSuccessAction.model';
import { InputChangeAction } from './InputChangeAction.model';
import { InputOptionSelectAction } from './InputOptionSelectAction.model';
import { InputOptionUnselectAction } from './InputOptionUnselectAction.model';
import { InputTouchAction } from './InputTouchAction.model';

export type FormAction =
  | FormResetAction
  | FormSubmitAction
  | FormSubmitFailureAction
  | FormSubmitSuccessAction
  | InputChangeAction
  | InputOptionSelectAction
  | InputOptionUnselectAction
  | InputTouchAction;
