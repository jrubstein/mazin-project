import {
    graphql,
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLNonNull,
    GraphQLID,
    GraphQLList,
    GraphQLInputObjectType
  } from 'graphql';

export const UserType = new GraphQLObjectType({
    name: 'user',
    fields: {
        _id: {
            type: new GraphQLNonNull(GraphQLID)
        },
        name: {
            type: GraphQLString
        },
        description: {
            type: GraphQLString
        }
    }
})

export const UsersType = new GraphQLList(UserType)

export const UserDTO = new GraphQLInputObjectType({
    name: 'userDTO',
    fields: {
        _id: {
            type: GraphQLID
        },
        name: {
            type: new GraphQLNonNull(GraphQLString)
        },
        description: {
            type: new GraphQLNonNull(GraphQLString)
        }
    }
})