const userTypeDef = `#graphql
  type User {
    _id: ID!
    username: String
    email: String
    password: String
    role: String
    phoneNumber: String
    address: String
  }

  type UserMutationResult{
    message: String
  }

  type Query {
    users: [User]
    user(_id: ID!): User 
  }

  type Mutation {
    user(email: String!, username: String!, password: String!, role: String!, phoneNumber: Int!, address: String!): UserMutationResult
    delUser(_id: ID!) : UserMutationResult
  }
`;

module.exports = userTypeDef;
