import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { RecordListRelationFilter } from "../record/RecordListRelationFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type CollectionWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  records?: RecordListRelationFilter;
  slug?: StringNullableFilter;
  structure?: JsonFilter;
};
