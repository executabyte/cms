import { CollectionWhereUniqueInput } from "../collection/CollectionWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type RecordUpdateInput = {
  collection?: CollectionWhereUniqueInput | null;
  data?: InputJsonValue;
};
