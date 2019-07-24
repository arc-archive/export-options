/**
 * DO NOT EDIT
 *
 * This file was automatically generated by
 *   https://github.com/Polymer/tools/tree/master/packages/gen-typescript-declarations
 *
 * To modify these typings, edit the source file(s):
 *   export-options.js
 */


// tslint:disable:variable-name Describing an API that's defined elsewhere.
// tslint:disable:no-any describes the API as best we are able today

import {LitElement, html, css} from 'lit-element';

declare namespace ApiElements {

  /**
   * `export-options`
   *
   * Export options dialog for ARC.
   *
   * Listen for (non-bubbling) `accept` or `cancel` custom events.
   *
   * The detail on the `accept` event has the following values:
   *
   * ```json
   * {
   *  "options": {
   *    "file": "my-demo-file.json",
   *    "provider": "drive",
   *    "skipImport": true
   *  }
   * }
   * ```
   *
   * Additionally it can contain provider specific options:
   *
   * ```json
   * {
   *  "providerOptions": {
   *    "parents": [
   *      {
   *        "name": "Existing folder",
   *        "id": "folder2"
   *      },
   *      {
   *        "name": "Create folder",
   *      }
   *   ]
   * }
   * ```
   *
   * ## Styling
   *
   * `<export-options>` provides the following custom properties and mixins for styling:
   *
   * Custom property | Description | Default
   * ----------------|-------------|----------
   * `--primary-color` | Theme property, button color or action button background color | ``
   * `--primary-action-color` | Theme property, action button color | `#fff`
   */
  class ExportOptions extends LitElement {

    /**
     * Export provider. By default it is `drive` or `file`.
     */
    provider: string|null|undefined;
    driveFolders: any[]|null|undefined;
    ongoogledrivelistappfolders: Function|null;
    onaccept: Function|null;
    oncancel: Function|null;
    onironresize: Function|null;
    readonly _form: any;

    /**
     * Export file name.
     */
    file: string|null|undefined;

    /**
     * Google Drive export options. Only relevant when `file` is set to
     * `drive`.
     *
     * The object contains `parents` property which is an array of provided
     * by the user names of folder to create or IDs of already created
     * folders.
     *
     * The `accept` event will contain processed lsit of parents where
     * each item is an object with `name` and optional `id` property.
     * If the `id` property is not set then new folder to be created when
     * uploading the item to Google Drive.
     */
    providerOptions: object|null|undefined;

    /**
     * Tells the application to set configuration on the export file to
     * skip import and insert project directly into workspace.
     */
    skipImport: boolean|null|undefined;

    /**
     * Computed value, true when current provider is Google Drive.
     */
    isDrive: boolean|null|undefined;
    _driveSuggestions: any[]|null|undefined;
    constructor();
    connectedCallback(): void;
    render(): any;
    _registerCallback(eventType: any, value: any): void;
    confirm(): void;
    cancel(): void;
    _validateProvider(e: any): void;
    _getValues(): any;

    /**
     * Computes return valye for Gogole Drive folder.
     * It creates a list of objects with `name` and optional `id` property
     * which indicates whether the folder has to be created or not.
     *
     * @returns Parent folders definition.
     */
    _getDriveFolders(): Array<object|null>|null;
    _findFolder(folders: any, id: any): any;

    /**
     * Called automatically when `isDrive` property change.
     * Dispatches `iron-resize` custom event so parent elements can position this element
     * in e.g dialogs.
     */
    _isDriveChanged(): void;

    /**
     * Attempts to read application settings by dispatching `settings-read`
     * with type `google-drive`. It expects to return `appFolders` with a list
     * of folder created by the app. This value is set as a suggestions on
     * folder input.
     *
     * @returns This function is called automatically, this returns is
     * for tests.
     */
    _listDriveFolders(): Promise<any>|null;

    /**
     * Dispatches `settings-read` custom event with type `google-drive`
     *
     * @returns e
     */
    _dispatchReadDriveSettings(): CustomEvent|null;

    /**
     * Transforms meta data related to created by the application Google Drive
     * folders to a list of suggestions.
     *
     * Google Drive folders meta are stores in the following structure:
     *
     * ```json
     * {
     *   "id": "Drive id",
     *   "name": "Folder name"
     * }
     * ```
     *
     * This produces suggestions for paper-chip-input in form:
     * ```json
     * {
     *   "value": "Folder name",
     *   "id": "Drive id"
     * }
     * ```
     *
     * @param folders List of folder.
     */
    _driveFoldersChanged(folders: Array<object|null>|null): void;
    _stopEvent(e: any): void;
    _fileNameChanged(e: any): void;
    _providerParentsHandler(e: any): void;
    _skipImportChanged(e: any): void;
  }
}

declare global {

  interface HTMLElementTagNameMap {
    "export-options": ApiElements.ExportOptions;
  }
}
