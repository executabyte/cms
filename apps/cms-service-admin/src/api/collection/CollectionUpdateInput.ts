import { RecordUpdateManyWithoutCollectionsInput } from "./RecordUpdateManyWithoutCollectionsInput";
import { InputJsonValue } from "../../types";

export type CollectionUpdateInput = {
  name?: string | null;
  records?: RecordUpdateManyWithoutCollectionsInput;
  slug?: string | null;
  structure?: InputJsonValue;
};
