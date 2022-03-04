/* eslint-disable no-console */
import React from "react";
import ReactDOM from "react-dom";

export default class TextOrdering extends (H5P.EventDispatcher as {
  new (): any;
}) {
  /**
   * @constructor
   *
   * @param {object} params Parameters passed by the editor.
   * @param {number} contentId Content's id.
   * @param {object} [extras] Saved state, metadata, etc.
   */
  constructor(private params: any, private id: string, private extras = {}) {
    super();
    // this.params.$extend({});
    this.root = document.createElement("div");

    console.log(params.listItems);
    this.newList = this.shuffleItems(params.listItems);
    console.log(this.newList);

    /**
     * Attach library to wrapper
     *
     * @param {jQuery} $wrapper Content's container
     */
    this.attach = (wrapper: JQuery) => {
      wrapper.get(0)?.appendChild(this.root);

      ReactDOM.render(
        <div>Hello, {this.params.taskDescription}</div>,
        this.root,
      );
    };
  }

  private shuffleItems = (list: string[]): string[] => {
    // Schwartzian transform in ES6
    const shuffled = list
      .map(value => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
    return shuffled;
  };
}
