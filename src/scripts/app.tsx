export default class TextOrdering extends H5P.EventDispatcher {
  /**
   * @constructor
   *
   * @param {object} params Parameters passed by the editor.
   * @param {number} contentId Content's id.
   * @param {object} [extras] Saved state, metadata, etc.
   */
  constructor(params: any, id: string, extras = {}) {
    super();
    this.element = document.createElement("div");
    this.element.innerText = params.textField;

    /**
     * Attach library to wrapper.
     *
     * @param {jQuery} $wrapper Content's container.
     */
    this.attach = ($wrapper: JQuery) => {
      $wrapper.get(0).appendChild(this.element);
    };
  }
}
