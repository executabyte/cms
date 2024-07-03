import { SortOrder } from "../../util/SortOrder";

export type CollectionOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  slug?: SortOrder;
  structure?: SortOrder;
  updatedAt?: SortOrder;
};
