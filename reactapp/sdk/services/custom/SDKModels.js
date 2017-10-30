import { User } from '../../models/User';
export class SDKModels {
  models = {
    User: User,
    
  };

  get(modelName) {
    return this.models[modelName];
  }

  getAll() {
    return this.models;
  }

  getModelNames() {
    return Object.keys(this.models);
  }
}
