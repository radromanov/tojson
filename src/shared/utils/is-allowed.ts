import { ALLOWED_EXTENSIONS } from "../constants/allowed-extensions";
import { Extension } from "../types/Extension";

export function isAllowed(ext: Extension) {
  if (ALLOWED_EXTENSIONS.includes(ext)) {
    return true;
  }

  return false;
}
