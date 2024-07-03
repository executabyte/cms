import { CollectionWhereUniqueInput } from "../collection/CollectionWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type RecordCreateInput = {
  collection?: CollectionWhereUniqueInput | null;
  data?: InputJsonValue;
};
