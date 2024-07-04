import { writeFileSync } from "fs";
import { WorkBook, readFile, utils } from "xlsx";

export class Xlsx {
  private filepath: string;
  private workbook: WorkBook;

  constructor(filepath: string) {
    this.filepath = filepath;
    this.workbook = readFile(this.filepath);
  }

  convert() {
    const sheetNames = this.workbook.SheetNames;

    const json = utils.sheet_to_json(this.workbook.Sheets[sheetNames[0]]);

    writeFileSync("output.json", JSON.stringify(json), "utf-8");
  }
}
