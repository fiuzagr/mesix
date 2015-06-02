'use strict';

import PageCtrl from 'base/page.controller';

class AnotherCtrl extends PageCtrl {

  constructor (...args) {

    super(...args);

    this.prop = m.prop('Another page on Mithril ES6');

  }

}

export default AnotherCtrl;
