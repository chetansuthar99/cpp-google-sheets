/**
 * Chetan Portfolio Pro (CPP)
 * Creates and prepares the application worksheets.
 */

import { SHEET_NAMES } from "../config/SheetNames";

export class WorkbookBuilder {

  /**
   * Initializes all required CPP worksheets.
   */
  public initialize(): void {
    const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();

    this.ensureSheet(spreadsheet, SHEET_NAMES.DASHBOARD);
    this.ensureSheet(spreadsheet, SHEET_NAMES.PORTFOLIO);
    this.ensureSheet(spreadsheet, SHEET_NAMES.TRANSACTIONS);
    this.ensureSheet(spreadsheet, SHEET_NAMES.SCANNER);
    this.ensureSheet(spreadsheet, SHEET_NAMES.REPORTS);
    this.ensureSheet(spreadsheet, SHEET_NAMES.SETTINGS);

    this.ensureSheet(spreadsheet, SHEET_NAMES.PORTFOLIO_DATA);
    this.ensureSheet(spreadsheet, SHEET_NAMES.STOCK_MASTER);
    this.ensureSheet(spreadsheet, SHEET_NAMES.PRICE_DATA);
    this.ensureSheet(spreadsheet, SHEET_NAMES.CORPORATE_ACTIONS);
    this.ensureSheet(spreadsheet, SHEET_NAMES.LOGS);
  }

  /**
   * Returns an existing worksheet or creates it.
   */
  private ensureSheet(
    spreadsheet: GoogleAppsScript.Spreadsheet.Spreadsheet,
    sheetName: string
  ): GoogleAppsScript.Spreadsheet.Sheet {

    const existingSheet = spreadsheet.getSheetByName(sheetName);

    if (existingSheet) {
      return existingSheet;
    }

    return spreadsheet.insertSheet(sheetName);
  }
}
