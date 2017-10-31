
import {
  House,
  BigUser
} from '../index';


export class Room {
  "name";
  "square";
  "cost";
  "note";
  "number_of_people";
  "is_toilet";
  "house_id";
  "owner_id";
  "id";
  "createdAt";
  "updatedAt";
  house;
  user;
  constructor(data) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Room`.
   */
  static getModelName() {
    return "Room";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Room for dynamic purposes.
  **/
  static factory(data) {
    return new Room(data);
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
      name: 'Room',
      plural: 'rooms',
      path: 'rooms',
      properties: {
        "name": {
          name: 'name',
          type: 'string'
        },
        "square": {
          name: 'square',
          type: 'number',
          default: 0
        },
        "cost": {
          name: 'cost',
          type: 'string',
          default: '0'
        },
        "note": {
          name: 'note',
          type: 'string'
        },
        "number_of_people": {
          name: 'number_of_people',
          type: 'number'
        },
        "is_toilet": {
          name: 'is_toilet',
          type: 'boolean'
        },
        "house_id": {
          name: 'house_id',
          type: 'any'
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
        house: {
          name: 'house',
          type: 'House',
          model: 'House'
        },
        user: {
          name: 'user',
          type: 'BigUser',
          model: 'BigUser'
        },
      }
    }
  }
}
