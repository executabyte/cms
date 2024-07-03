import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const ImageCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="filename" source="filename" />
        <TextInput label="mimetype" source="mimetype" />
        <TextInput label="path" source="path" />
        <NumberInput step={1} label="size" source="size" />
        <TextInput label="url" source="url" />
      </SimpleForm>
    </Create>
  );
};
