import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type ImageWhereInput = {
  filename?: StringNullableFilter;
  id?: StringFilter;
  mimetype?: StringNullableFilter;
  path?: StringNullableFilter;
  size?: IntNullableFilter;
  url?: StringNullableFilter;
};
