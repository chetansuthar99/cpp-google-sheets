/**
 * Chetan Portfolio Pro (CPP)
 * Application entry point.
 *
 * Version: 0.1.0-alpha
 */

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
  SpreadsheetApp.getUi().alert(
    "Chetan Portfolio Pro (CPP)",
    "CPP Foundation is ready for initialization.",
    SpreadsheetApp.getUi().ButtonSet.OK
  );
}
