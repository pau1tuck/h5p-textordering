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
    this.element = document.createElement("div");
    this.element.innerText = params.question;
    this.element.append("Arnooser");

    // Create render root
    this.root = document.createElement("div");

    this.reactDom = (
      <div>
        <p>Dogshaver</p>
      </div>
    );

    /**
     * Attach library to wrapper.
     *
     * @param {jQuery} $wrapper Content's container.
     */
    this.attach = (wrapper: JQuery) => {
      wrapper.get(0)?.appendChild(this.root);

      // We render an initial state of the content type here. It will be updated
      // later when the data from the server has arrived.
      ReactDOM.render(<div>Hello, {this.params.question}.</div>, this.root);
      this.triggerResize();
    };
  }
}
