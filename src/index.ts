import { Command } from "commander";
import { extname, isAbsolute } from "path";
import { isAllowed } from "./shared/utils/is-allowed";
import { ALLOWED_EXTENSIONS } from "./shared/constants/allowed-extensions";
import { Extension } from "./shared/types/Extension";

const cli = new Command();

cli.requiredOption("-f, --filepath <string>", "absolute path to non-json file");

cli.parse(process.argv);

cli.action(() => {
  const { filepath } = cli.opts();

  if (!isAbsolute(filepath))
    cli.error(
      "error: please provide an absolute path (e.g. `/path/to/file.xlsx`)"
    );

  const extension = extname(filepath).split(".")[1] as Extension;

  if (!isAllowed(extension)) {
    cli.error(
      `error: please provide a valid extension (${ALLOWED_EXTENSIONS.join(
        " | "
      )})`
    );
  }

  // Extension controller
  switch (extension) {
    case "xlsx":
      // Some .xlsx specific call...
      break;
    default:
      break;
  }
});

cli.parse();
