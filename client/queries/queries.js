import { gql } from "@apollo/client";

// TODO: Define the query needed here (don't forget to export)
export const GET_PRODUCTS = gql`
  query Query {
    product {
      id
      name
      slug
      description
      price
      mainImg
      categoryId
      authorId
      Category {
        id
        name
      }
      Images {
        id
        imgUrl
        productId
      }
      User {
        _id
        username
        email
        role
        phoneNumber
        address
      }
    }
  }
`;

//password not included so its secure
