import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const ImageEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="filename" source="filename" />
        <TextInput label="mimetype" source="mimetype" />
        <TextInput label="path" source="path" />
        <NumberInput step={1} label="size" source="size" />
        <TextInput label="url" source="url" />
      </SimpleForm>
    </Edit>
  );
};
