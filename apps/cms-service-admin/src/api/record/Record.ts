import { Collection } from "../collection/Collection";
import { JsonValue } from "type-fest";

export type Record = {
  collection?: Collection | null;
  createdAt: Date;
  data: JsonValue;
  id: string;
  updatedAt: Date;
};
