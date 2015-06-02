'use strict';

import PageCtrl from 'base/page.controller';
import User from 'models/user';


/**
 * @class HomeCtrl
 * @author gfiuza
 */
class HomeCtrl extends PageCtrl {

  /**
   * @returns {HomeCtrl} instance of the controller object
   */
  constructor (...args) {

    super(...args);

    this.user = new User({name: 'Mithril ES6'});

    this.prop = m.prop('Home on ' + this.user.name());

  }

  changeProp (prop) {
    this.prop('Home is cool in ES6! Event triggered with ' + prop);
  }

}

export default HomeCtrl;
