import {
    GraphQLList,
    GraphQLID,
    GraphQLNonNull,
    GraphQLFieldConfig
  } from 'graphql';

import { UserType, UsersType } from '../types/User'

export const UserQuery:GraphQLFieldConfig<any, any> = {
  type: UserType,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLID)
    }
  },
  resolve (root, params, options) {
    return {_id: '1', name: 'name', description: 'd'}
  }
};

export const UsersQuery:GraphQLFieldConfig<any, any> = {
  type: UsersType,
  resolve (root, params, options) {
    return [{_id: '1', name: 'name', description: 'd'}]
  }
}
