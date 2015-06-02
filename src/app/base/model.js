'use strict';

/**
 * Abstract properties and methods of all models
 *
 * @abstract
 * @class Model
 * @author gfiuza
 */
class Model {

  /**
   * @returns {Model} instance of the model object
   */
  constructor (data={}) {

    for ( let field in data ) {
      if (this.properties[field]) {
        this[field] = m.prop(data[field]);
      }
    }

  }

  /**
   * list
   * @returns {m.prop} with promise interface
   */
  list (data={}) {
    return m.request({method: 'GET', url: this.URL, data: data});
  }

  /**
   * save
   */
  // TODO: Implement
  save () {
    m.request({method: 'POST', url: this.URL, data: this.toJSON});
  }

  /**
   * toJSON
   * @returns {JSON}
   */
  // TODO: Implement
  toJSON () {
    return {};
  }

  /**
   * make
   * @static
   */
  static make (MClass) {

    // Make list static function
    MClass.list = MClass.list || ((...args) => {
      let mClass = new MClass();
      return mClass.list(...args);
    });

    // Make save static function
    MClass.save = MClass.save || ((data, ...args) => {
      let mClass = new MClass(data);
      return mClass.save(...args);
    });
    
  }

}

export default Model;
