import { CollectionWhereUniqueInput } from "../collection/CollectionWhereUniqueInput";
import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";

export type RecordWhereInput = {
  collection?: CollectionWhereUniqueInput;
  data?: JsonFilter;
  id?: StringFilter;
};
