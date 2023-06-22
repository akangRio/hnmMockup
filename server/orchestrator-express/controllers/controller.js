const { default: axios } = require("axios");
const Redis = require("ioredis");

const redis = new Redis(
  16911,
  "redis://default:aMxEV2Rp2tHjT2jjunXfjipQvlPA09yp@redis-16911.c252.ap-southeast-1-1.ec2.cloud.redislabs.com:16911"
);

const msUserUrl = `http://localhost:4001`;
const msAppUrl = `http://localhost:4002`;

class Controller {
  static async oGetUser(req, res, next) {
    let users;
    try {
      users = JSON.parse(await redis.get("Users"));
      if (!users) {
        const { data } = await axios.get(`${msUserUrl}`);
        redis.set("Users", JSON.stringify(data));
        users = data;
      }

      res.status(200).json(users);
    } catch (err) {
      console.log(err);
      next(err);
    }
  }

  static async oPostUser(req, res, next) {
    try {
      const data = req.body;
      const response = await axios.post(`${msUserUrl}`, data);

      redis.del("Users");
      res.status(201).json(response.data);
    } catch (err) {
      console.log(err);
      next(err);
    }
  }

  static async oDelUser(req, res, next) {
    try {
      const { id } = req.params;
      const response = await axios.delete(`${msUserUrl}/${id}`);
      redis.del("Users");
      res.status(200).json(response.data);
    } catch (err) {
      console.log(err);
      next(err);
    }
  }

  static async oGetProducts(req, res, next) {
    try {
      let products = JSON.parse(await redis.get("products"));
      if (!products) {
        const { data } = await axios.get(`${msAppUrl}/Product`);
        redis.set("products", JSON.stringify(data));
        products = data;
      }
      res.status(200).json(products);
    } catch (err) {
      console.log(err);
    }
  }

  static async oPostProduct(req, res, next) {
    try {
      const { data } = await axios.post(`${msAppUrl}/Product/add`, req.body);
      redis.del("products");
      res.status(201).json(data);
    } catch (err) {
      console.log(err);
      next(err);
    }
  }

  static async oEditProduct(req, res, next) {
    try {
      const { id } = req.body;
      const { data } = await axios.put(
        `${msAppUrl}/Product/edit/${id}`,
        req.body
      );
      res.status(200).json(data);
    } catch (err) {
      next(err);
    }
  }

  static async oDeleteProduct(req, res, next) {
    try {
      const { id } = req.params;
      const { data } = await axios.delete(`${msAppUrl}/Product/delete/${id}`);
      res.status(200).json(data);
    } catch (err) {
      console.log(err);
      next(err);
    }
  }

  static async oGetByidP(req, res, next) {
    try {
      const { id } = req.params;
      const { data } = await axios.get(`${msAppUrl}/Product/detail/${id}`);
      res.status(200).json(data);
    } catch (err) {
      console.log(err);
      next(err);
    }
  }
}

module.exports = Controller;
