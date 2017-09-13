import {
    graphql,
    GraphQLID,
    GraphQLInputObjectType,
    GraphQLList,
    GraphQLNonNull,
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLString,
  } from 'graphql'
import { GraphQLDate } from 'graphql-date'

export const Task = new GraphQLObjectType({
    fields: {
        _id: {
            description: 'The unique id',
            type: new GraphQLNonNull(GraphQLID),
        },
        // createdDate: {
        //     description: 'The date this task was created',
        //     type: GraphQLDate,
        // },
        content: {
            type: GraphQLString,
        },
        description: {
            type: GraphQLString,
        },
        // modifiedDate: {
        //     type: GraphQLDate,
        // },
        title: {
            type: GraphQLString,
        },
    },
    name: 'Task',
})

export const Tasks = new GraphQLList(Task)

export const TaskDTO = new GraphQLInputObjectType({
    fields: {
        _id: {
            type: GraphQLID,
        },
        // createdDate: {
        //     type: GraphQLDate,
        // },
        content: {
            type: new GraphQLNonNull(GraphQLString),
        },
        description: {
            type: new GraphQLNonNull(GraphQLString),
        },
        title: {
            type: new GraphQLNonNull(GraphQLString),
        },
    },
    name: 'TaskDTO',
})
