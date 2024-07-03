import { SortOrder } from "../../util/SortOrder";

export type RecordOrderByInput = {
  collectionId?: SortOrder;
  createdAt?: SortOrder;
  data?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
