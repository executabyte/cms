import { RecordCreateNestedManyWithoutCollectionsInput } from "./RecordCreateNestedManyWithoutCollectionsInput";
import { InputJsonValue } from "../../types";

export type CollectionCreateInput = {
  name?: string | null;
  records?: RecordCreateNestedManyWithoutCollectionsInput;
  slug?: string | null;
  structure?: InputJsonValue;
};
