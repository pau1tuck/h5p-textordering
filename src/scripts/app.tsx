import React from "react";
import ReactDOM from "react-dom";

export default class TextOrdering extends H5P.EventDispatcher {
  /**
   * @constructor
   *
   * @param {object} params Parameters passed by the editor.
   * @param {number} contentId Content's id.
   * @param {object} [extras] Saved state, metadata, etc.
   */
  constructor(private params: any, private id: string, private extras = {}) {
    super();
    this.root = document.createElement("div");

    /**
     * Attach library to wrapper.
     *
     * @param {jQuery} $wrapper Content's container.
     */
    this.attach = (wrapper: JQuery) => {
      wrapper.get(0)?.appendChild(this.root);

      ReactDOM.render(<div>Hello, {this.params.listItems}.</div>, this.root);
      this.triggerResize();
    };
  }
}
