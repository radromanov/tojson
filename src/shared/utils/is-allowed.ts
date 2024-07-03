import { ALLOWED_EXTENSIONS } from "../constants/allowed-extensions";
import { Extension } from "../types/Extension";

export function isAllowed(ext: Extension) {
  return ALLOWED_EXTENSIONS.includes(ext) ? true : false;
}
