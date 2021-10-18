import {ModelCrudRestApiConfig} from '@loopback/rest-crud';
import {User} from '../models';

const config: ModelCrudRestApiConfig = {
  model: User,
  pattern: 'CrudRest',
  dataSource: 'dbgame',
  basePath: '/users',
};
module.exports = config;
