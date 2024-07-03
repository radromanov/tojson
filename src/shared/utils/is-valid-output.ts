import { ALLOWED_OUTPUT_TYPES } from "../constants/allowed-output-types";
import { Output } from "../types/Output";

export function isValidOutput(type: Output) {
  return ALLOWED_OUTPUT_TYPES.includes(type) ? true : false;
}
