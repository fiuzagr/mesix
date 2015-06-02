'use strict';

import Model from 'base/model';

/**
 * @class User
 * @author gfiuza
 */
class User extends Model {

  get URL () {
    return '/api/user';
  }

  get properties () {
    return {
      name: {
        type: 'string',
        size: 30,
        format: /\w{3,}(\s\w{2,})*/,
        required: true
      },
      age: 'integer'
    };
  }

  /**
   * @returns {User} instance of the model object
   */
  constructor (data={}) {
    super(data);
  }

}

/**
 * Add static methods: list, save, etc
 */
Model.make(User);

export default User;
