import {
  GraphQLObjectType,
  GraphQLSchema,
} from 'graphql'

import {
  AddUSer,
} from './mutations'
import {
  getTaskQuery,
  getTasksQuery,
  UserQuery,
  UsersQuery,
} from './queries'

export const Schema = new GraphQLSchema({
  mutation: new GraphQLObjectType({
    fields: {
      addUSer: AddUSer,
    },
    name: 'newUsers',
  }),
  query: new GraphQLObjectType({
    fields: {
      task: getTaskQuery,
      tasks: getTasksQuery,
      user: UserQuery,
      users: UsersQuery,
    },
    name: 'rootQuery',
  }),
})
