import { FieldValues } from "react-hook-form";
import TextInputController, { TextInputControllerProps } from "../TextInputController/TextInputController";

export type TextAreaControllerProps<T extends FieldValues> = TextInputControllerProps<T>;

const TextAreaController = <T extends FieldValues>(props: TextAreaControllerProps<T>) => (
  <TextInputController
    multiline
    rows={4}
    sx={{ "& .MuiInputBase-root": { minHeight: "100px" } }}
    {...props}
  />
);

export default TextAreaController;
