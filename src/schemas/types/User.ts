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

export const UserType = new GraphQLObjectType({
    fields: {
        _id: {
            type: new GraphQLNonNull(GraphQLID),
        },
        description: {
            type: GraphQLString,
        },
        name: {
            type: GraphQLString,
        },
    },
    name: 'user',
})

export const UsersType = new GraphQLList(UserType)

export const UserDTO = new GraphQLInputObjectType({
    fields: {
        _id: {
            type: GraphQLID,
        },
        description: {
            type: new GraphQLNonNull(GraphQLString),
        },
        name: {
            type: new GraphQLNonNull(GraphQLString),
        },
    },
    name: 'userDTO',
})
