import xl, { WorkBook } from "xlsx";

export class Xlsx {
  private filepath: string;
  private workbook: WorkBook;

  constructor(filepath: string) {
    this.filepath = filepath;
    this.workbook = xl.read(this.filepath);
  }

  convert() {
    return xl.utils.sheet_to_json(this.workbook);
  }
}
