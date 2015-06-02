'use strict';

/**
 * @const {Set} TARGETS Stores targets with event binded
 */
const TARGETS = new Set();


/**
 * Abstract properties and methods of all controllers
 *
 * @abstract
 * @class Controller
 * @author gfiuza
 */
class Controller {

  /**
   * @property {Class} classReference Reference to the current class
   */
  get classReference () {
    return this.constructor.name;
  }

  /**
   * @returns {Controller} instance of the controller object
   */
  constructor () {
  }

  /**
   * This function encapsulates a bind event function
   */
  bind (method, ...args) {
    // preserve scope
    let self = this;
    return (e) => {
      // it ensures that the target is stored
      self._pushTarget(e.target);
      if (self[method]) {
        // TODO: issue self[method](...args)
        self[[method]](...args);
      }
    };
  }

  /**
   * This function destroys the instance of the view
   */
  destroy () {
    this._clearTargets();
    //delete this;
  }
  // alias to destroy
  onunload () {
    this.destroy();
  }


  /**
   * This function pushes target element on TARGETS constant
   *
   * @private
   */
  _pushTarget (target) {
    TARGETS.add(target);
  }

  /**
   * This function clear TARGETS constant and ensures that
   * the element is removed from DOM. And events are removed too :)
   *
   * @private
   */
  _clearTargets () {
    for (let target of TARGETS) {
      if (target.parentNode) {
        target.parentNode.removeChild(target);
      } else if (target.remove) {
        target.remove();
      }
    }
    TARGETS.clear();
  }

}

export default Controller;
