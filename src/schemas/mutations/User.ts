import { GraphQLFieldConfig, GraphQLNonNull, GraphQLID } from 'graphql';
import { UserType, UserDTO } from '../types/User';

export const AddUSer: GraphQLFieldConfig<any, any> = {
    type: UserType,
    description: 'Add user',
    args: {
        user: { type: UserDTO}
    },
    resolve (root, { user }, options) {
      console.log(JSON.stringify(user))
      return user
    }
  }