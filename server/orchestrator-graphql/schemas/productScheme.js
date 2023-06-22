const appTypeDef = `#graphql
 type Product {
    id: ID
    name: String
    slug: String
    description: String
    price: Int
    mainImg: String
    categoryId: String
    authorId: String
    Category: Category
    Images: [Image]
    User:User
  }
  

  type Category{
    id: ID
    name: String
  }

  type Image{
    id: ID
    imgUrl: String
    productId: Int
  }

  type Response{
    message: String
  }

  type Query{
    product: [Product]
    oneProduct(id: ID!): Product
    category: [Category]
    images: [Image]
  }

  type Mutation{
    addProduct(name:String!, description:String!, price:Int!, mainImg:String!, categoryId:Int!, imgUrl:String!, authorId:String!): Response
    delProduct(id:ID!):Response
    editProduct(name:String!, slug:String!, description:String!, price:Int!, mainImg:String!, categoryId:Int!, id:Int!, productId:String): Response
  }

`;

module.exports = appTypeDef;
