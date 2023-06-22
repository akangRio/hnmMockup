const axios = require("axios");
// const userUrl = `http://localhost:4001`;
const userUrl = process.env.URL_USERS;
// const appUrl = `http://localhost:4002`;
const appUrl = process.env.URL_APP;
const Redis = require("ioredis");
const redis = new Redis(process.env.REDIS_PORT, process.env.REDIS_URL);

const userResolver = {
  Query: {
    users: async () => {
      try {
        const users = await redis.get("Users");
        if (!users) {
          const { data } = await axios.get(`${userUrl}`);
          redis.set("Users", JSON.stringify(data));
          return data;
        } else {
          return JSON.parse(users);
        }
      } catch (err) {
        console.log(err);
      }
    },
    user: async (_, { _id }) => {
      try {
        const { data } = await axios.get(`${userUrl}/${_id}`);
        return data;
      } catch (err) {
        console.log(err);
      }
    },
  },

  Mutation: {
    user: async (
      _,
      { email, username, password, role, phoneNumber, address }
    ) => {
      try {
        const { data } = await axios.post(`${userUrl}`, {
          email,
          username,
          password,
          role,
          phoneNumber,
          address,
        });
        redis.del("Users");
        return data;
      } catch (err) {
        console.log(err);
      }
    },
    delUser: async (_, { _id }) => {
      try {
        const { data } = await axios.delete(`${userUrl}/${_id}`);
        redis.del("Users");
        return data.delUser;
      } catch (err) {
        console.log(err);
      }
    },
  },
};

const productResolver = {
  Query: {
    product: async () => {
      try {
        const products = await redis.get("products");
        if (!products) {
          const { data } = await axios.get(`${appUrl}/Product`);

          const includeUser = await Promise.all(
            data.map(async (e) => {
              const { data } = await axios.get(`${userUrl}/${e.authorId}`);
              e.User = data;
              delete e.User.password; //secure include
              // console.log(e);
              return e;
            })
          );

          redis.set("products", JSON.stringify(includeUser));
          return includeUser;
        } else {
          return JSON.parse(products);
        }
      } catch (err) {
        console.log(err);
      }
    },
    oneProduct: async (_, { id }) => {
      try {
        const { data } = await axios.get(`${appUrl}/Product/detail/${id}`);
        return data;
      } catch (err) {
        console.log(err);
      }
    },
    category: async () => {
      try {
        const categories = await redis.get("categories");
        if (!categories) {
          const { data } = await axios.get(`${appUrl}/Category`);
          redis.set("categories", JSON.stringify(data));
          return data;
        } else {
          return JSON.parse(categories);
        }
      } catch (err) {
        console.log(err);
      }
    },
    images: async () => {
      try {
        const { data } = await axios.get(`${appUrl}/Images`);
        return data;
      } catch (err) {
        console.log(err);
      }
    },
  },

  Mutation: {
    addProduct: async (
      _,
      { name, description, price, mainImg, categoryId, imgUrl, authorId }
    ) => {
      try {
        const response = await axios.get(`${userUrl}/${authorId}`);
        const user = response.data;
        console.log(user);
        if (!user) {
          throw { name: "Not Found" };
        }
        const { data } = await axios.post(`${appUrl}/Product/add`, {
          name,
          description,
          price,
          mainImg,
          categoryId,
          imgUrl,
          authorId,
        });

        redis.del("products");
        return data;
      } catch (err) {
        console.log(err);
      }
    },
    delProduct: async (_, { id }) => {
      try {
        const { data } = await axios.delete(`${appUrl}/Product/delete/${id}`);
        redis.del("products");
        return data;
      } catch (err) {
        console.log(err);
      }
    },
    editProduct: async (
      _,
      { name, slug, description, price, mainImg, categoryId, id, productId }
    ) => {
      try {
        const { data } = await axios.put(
          `${appUrl}/Product/edit/${productId}`,
          {
            name,
            slug,
            description,
            price,
            mainImg,
            categoryId,
            id,
          }
        );
        redis.del("products");
        return data;
      } catch (err) {
        console.log(err);
      }
    },
  },
};

module.exports = { userResolver, productResolver };
