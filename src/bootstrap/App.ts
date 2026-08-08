/**
 * Chetan Portfolio Pro (CPP)
 * Application entry point.
 *
 * Version: 0.1.0-alpha
 */

import { WorkbookBuilder } from "./WorkbookBuilder";

/**
 * Runs when the Google Sheet is opened.
 */
function onOpen(): void {
  SpreadsheetApp.getUi()
    .createMenu("CPP")
    .addItem("Initialize CPP", "initializeCPP")
    .addToUi();
}

/**
 * Initializes the CPP application.
 */
function initializeCPP(): void {
  const workbookBuilder = new WorkbookBuilder();

  workbookBuilder.initialize();

  SpreadsheetApp.getUi().alert(
    "Chetan Portfolio Pro (CPP)",
    "CPP has been initialized successfully.",
    SpreadsheetApp.getUi().ButtonSet.OK
  );
}
