'use strict';

import Controller from './controller';

/**
 * Abstract properties and methods of the controllers of components
 *
 * @abstract
 * @class ComponentCtrl
 * @author gfiuza
 */
class ComponentCtrl extends Controller {

  /**
   * @returns {ComponentCtrl} instance of the controller object
   */
  constructor (...args) {
    super(...args);
  }

}

export default ComponentCtrl;
