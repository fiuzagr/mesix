'use strict';

import Controller from './controller';

/**
 * Abstract properties and methods of the controllers of pages
 *
 * @abstract
 * @class PageCtrl
 * @author gfiuza
 */
class PageCtrl extends Controller {

  /**
   * @returns {PageCtrl} instance of the controller object
   */
  constructor (...args) {
    super(...args);
  }

}

export default PageCtrl;
