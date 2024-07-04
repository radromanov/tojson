require("module-alias/register");

import { Command } from "commander";
import { extname, isAbsolute } from "path";
import { isAllowed, isValidOutput } from "./shared/utils";
import { Extension } from "./shared/types";
import { ALLOWED_EXTENSIONS, ALLOWED_OUTPUT_TYPES } from "./shared/constants";
import { Xlsx } from "./core/Xlsx";

const cli = new Command();

cli
  .requiredOption("-f, --filepath <string>", "absolute path to non-json file")
  .option("-t, --type <string>", "type to convert to", "json");

cli.parse(process.argv);

cli.action(() => {
  let { filepath, type } = cli.opts();

  // Ensure path is absolute
  if (!isAbsolute(filepath))
    cli.error(
      "error: please provide an absolute path (e.g. `/path/to/file.xlsx`)"
    );

  const extension = extname(filepath).split(".")[1].toLowerCase() as Extension;

  // Ensure the extension of the file is supported
  if (!isAllowed(extension)) {
    cli.error(
      `error: please provide a valid extension (${ALLOWED_EXTENSIONS.join(
        " | "
      )})`
    );
  }

  // Ensure is a valid output type
  if (!isValidOutput(type)) {
    cli.error(
      `error: please provide a valid output type (${ALLOWED_OUTPUT_TYPES.join(
        " | "
      )})`
    );
  }

  // Extension controller
  switch (extension) {
    case "xlsx":
      // Some .xlsx specific call...
      // TODO get user provided output path
      const xl = new Xlsx(filepath).convert("output.json");

      break;
    default:
      break;
  }
});

cli.parse();
