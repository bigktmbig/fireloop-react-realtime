
import {
  House
} from '../index';


export class BigUser {
  "name";
  "code";
  "phone";
  "onOff";
  "firstName";
  "lastName";
  "realm";
  "username";
  "email";
  "emailVerified";
  "id";
  "createdAt";
  "updatedAt";
  "password";
  accessTokens;
  roles;
  houses;
  constructor(data) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `BigUser`.
   */
  static getModelName() {
    return "BigUser";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of BigUser for dynamic purposes.
  **/
  static factory(data) {
    return new BigUser(data);
  }
  /**
  * @method getModelDefinition
  * @author Julien Ledun
  * @license MIT
  * This method returns an object that represents some of the model
  * definitions.
  **/
  static getModelDefinition() {
    return {
      name: 'BigUser',
      plural: 'big-users',
      path: 'big-users',
      properties: {
        "name": {
          name: 'name',
          type: 'string'
        },
        "code": {
          name: 'code',
          type: 'string'
        },
        "phone": {
          name: 'phone',
          type: 'string'
        },
        "onOff": {
          name: 'onOff',
          type: 'boolean'
        },
        "firstName": {
          name: 'firstName',
          type: 'string'
        },
        "lastName": {
          name: 'lastName',
          type: 'string'
        },
        "realm": {
          name: 'realm',
          type: 'string'
        },
        "username": {
          name: 'username',
          type: 'string'
        },
        "email": {
          name: 'email',
          type: 'string'
        },
        "emailVerified": {
          name: 'emailVerified',
          type: 'boolean'
        },
        "id": {
          name: 'id',
          type: 'any'
        },
        "createdAt": {
          name: 'createdAt',
          type: 'Date'
        },
        "updatedAt": {
          name: 'updatedAt',
          type: 'Date'
        },
        "password": {
          name: 'password',
          type: 'string'
        },
      },
      relations: {
        accessTokens: {
          name: 'accessTokens',
          type: 'any[]',
          model: ''
        },
        roles: {
          name: 'roles',
          type: 'any[]',
          model: ''
        },
        houses: {
          name: 'houses',
          type: 'House[]',
          model: 'House'
        },
      }
    }
  }
}
