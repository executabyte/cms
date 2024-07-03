import { SortOrder } from "../../util/SortOrder";

export type ImageOrderByInput = {
  createdAt?: SortOrder;
  filename?: SortOrder;
  id?: SortOrder;
  mimetype?: SortOrder;
  path?: SortOrder;
  size?: SortOrder;
  updatedAt?: SortOrder;
  url?: SortOrder;
};
