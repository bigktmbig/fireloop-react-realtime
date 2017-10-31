
import {
  BigUser,
  Room
} from '../index';


export class House {
  "name";
  "address";
  "latitude";
  "longitude";
  "radius";
  "owner_id";
  "id";
  "createdAt";
  "updatedAt";
  user;
  rooms;
  constructor(data) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `House`.
   */
  static getModelName() {
    return "House";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of House for dynamic purposes.
  **/
  static factory(data) {
    return new House(data);
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
      name: 'House',
      plural: 'houses',
      path: 'houses',
      properties: {
        "name": {
          name: 'name',
          type: 'string',
          default: 'my house'
        },
        "address": {
          name: 'address',
          type: 'string',
          default: '666 Ngo quyen'
        },
        "latitude": {
          name: 'latitude',
          type: 'number',
          default: 16.057683
        },
        "longitude": {
          name: 'longitude',
          type: 'number',
          default: 108.219415
        },
        "radius": {
          name: 'radius',
          type: 'number',
          default: 10
        },
        "owner_id": {
          name: 'owner_id',
          type: 'any'
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
      },
      relations: {
        user: {
          name: 'user',
          type: 'BigUser',
          model: 'BigUser'
        },
        rooms: {
          name: 'rooms',
          type: 'Room[]',
          model: 'Room'
        },
      }
    }
  }
}
