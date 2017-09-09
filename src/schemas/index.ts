import {
    GraphQLObjectType,
    GraphQLSchema
  } from 'graphql';

import { AddUSer } from './mutations';
import { UserQuery, UsersQuery } from './queries';

export const Schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'users',
    fields: {
        user: UserQuery,
        users: UsersQuery
    }
  }),
  mutation: new GraphQLObjectType({
    name: 'newUsers',
    fields: {
        addUSer: AddUSer
    }
  })
});