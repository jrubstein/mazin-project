import {
    GraphQLFieldConfig,
    GraphQLID,
    GraphQLList,
    GraphQLNonNull,
  } from 'graphql'

import { Task, Tasks } from '../types/Task'

export const getTaskQuery: GraphQLFieldConfig<any, any> = {
    args: {
        _id: {
            type: new GraphQLNonNull(GraphQLID),
        },
    },
    resolve: () => {
      return {
          _id: 1,
          content: 'content',
          description: 'description',
          title: 'Title',
      }
    },
    type: Task,
}

export const getTasksQuery: GraphQLFieldConfig<any, any> = {
    args: {},
    resolve: () => {
      return [{
        _id: 1,
        content: 'content',
        description: 'description',
        title: 'Title',
    }]
    },
    type: Tasks,
}
