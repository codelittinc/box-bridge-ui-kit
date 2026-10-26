import { FieldValues } from 'react-hook-form';
import { TextInputControllerProps } from '../TextInputController/TextInputController';
export type TextAreaControllerProps<T extends FieldValues> = TextInputControllerProps<T>;
declare const TextAreaController: <T extends FieldValues>(props: TextAreaControllerProps<T>) => import('react').JSX.Element;
export default TextAreaController;
