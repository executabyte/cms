import { Record } from "../record/Record";
import { JsonValue } from "type-fest";

export type Collection = {
  createdAt: Date;
  id: string;
  name: string | null;
  records?: Array<Record>;
  slug: string | null;
  structure: JsonValue;
  updatedAt: Date;
};
