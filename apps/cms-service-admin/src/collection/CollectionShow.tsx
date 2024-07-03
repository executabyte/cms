import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { COLLECTION_TITLE_FIELD } from "./CollectionTitle";

export const CollectionShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <TextField label="slug" source="slug" />
        <TextField label="structure" source="structure" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Record"
          target="collectionId"
          label="Records"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Collection"
              source="collection.id"
              reference="Collection"
            >
              <TextField source={COLLECTION_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="data" source="data" />
            <TextField label="ID" source="id" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
