import { Image as TImage } from "../api/image/Image";

export const IMAGE_TITLE_FIELD = "filename";

export const ImageTitle = (record: TImage): string => {
  return record.filename?.toString() || String(record.id);
};
