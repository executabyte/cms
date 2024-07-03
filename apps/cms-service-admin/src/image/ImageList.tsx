import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const ImageList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Images"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="filename" source="filename" />
        <TextField label="ID" source="id" />
        <TextField label="mimetype" source="mimetype" />
        <TextField label="path" source="path" />
        <TextField label="size" source="size" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="url" source="url" />
      </Datagrid>
    </List>
  );
};
