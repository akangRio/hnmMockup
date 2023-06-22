const { Product, Category, Image, sequelize } = require("../models/index");

class Controller {
  static async getProducts(req, res, next) {
    try {
      const products = await Product.findAll({
        include: [
          {
            model: Category,
          },
          {
            model: Image,
          },
        ],
      });

      res.status(200).json(products);
    } catch (err) {
      next(err);
    }
  }

  static async getCategories(req, res, next) {
    try {
      const categories = await Category.findAll({
        include: [
          {
            model: Product,
          },
        ],
      });

      res.status(200).json(categories);
    } catch (err) {
      next(err);
    }
  }

  static async getImages(req, res, next) {
    try {
      const images = await Image.findAll({
        include: [
          {
            model: Product,
          },
        ],
      });

      res.status(200).json(images);
    } catch (err) {
      next(err);
    }
  }

  static async addProduct(req, res, next) {
    console.log(req.body);
    try {
      const {
        name,
        slug,
        description,
        price,
        mainImg,
        categoryId,
        imgUrl,
        authorId,
      } = req.body;
      // const authorId = req.identity.payload.id;

      const result = await sequelize.transaction(async (t) => {
        const createProduct = await Product.create(
          {
            name,
            slug: `Product-${name}`,
            description,
            price,
            mainImg,
            categoryId,
            authorId,
          },
          {
            transaction: t,
          }
        );
        if (!imgUrl) {
          throw { name: "Bad Request" };
        }
        const createImage = await Image.create(
          {
            imgUrl,
            productId: createProduct.id,
          },
          { transaction: t }
        );

        return { createImage, createProduct };
      });
      console.log(result);

      res.status(201).json({
        message: "Product Created",
      });
    } catch (err) {
      next(err);
    }
  }

  static async delProduct(req, res, next) {
    try {
      const { id } = req.params;
      const delPro = await Product.destroy({
        where: { id },
      });

      if (!delPro > 0) {
        throw { name: "Not Found" };
      }

      res.status(200).json({
        message: "deleted",
      });
    } catch (err) {
      next(err);
    }
  }

  static async editProduct(req, res, next) {
    try {
      const { name, slug, description, price, mainImg, categoryId, id } =
        req.body;
      // console.log(req.body, "<<<<");
      // const { id } = req.params;
      const updateProduct = await Product.update(
        {
          name,
          slug,
          description,
          price,
          mainImg,
          categoryId: +categoryId,
        },
        {
          where: { id },
        }
      );
      if (!updateProduct > 0) {
        throw { name: "Not Found" };
      }

      res.status(200).json({
        message: "Product updated",
      });
    } catch (err) {
      next(err);
    }
  }

  static async detailProduct(req, res, next) {
    try {
      const { id } = req.params;
      const product = await Product.findByPk(id);

      if (!product) {
        throw { name: "Not Found" };
      }

      res.status(200).json(product);
    } catch (err) {
      next(err);
    }
  }

  static async addCategory(req, res, next) {
    try {
      const { name } = req.body;
      const newCat = await Category.create({
        name,
      });

      res.status(201).json({ message: "New category has been added" });
    } catch (err) {
      next(err);
    }
  }

  static async delCategory(req, res, next) {
    try {
      const { id } = req.params;
      const deleteCat = await Category.destroy({
        where: { id },
      });

      if (!deleteCat > 0) {
        throw { name: "Not Found" };
      }

      res.status(200).json({
        message: "category has been deleted",
      });
    } catch (err) {
      next(err);
    }
  }

  static async editCategory(req, res, next) {
    try {
      const { id } = req.params;
      const { name } = req.body;
      const editCat = await Category.update(
        {
          name,
        },
        {
          where: {
            id,
          },
        }
      );
      if (!editCat > 0) {
        throw { name: "Not Found" };
      }

      res.status(200).json({
        message: "Category has been updated",
      });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = Controller;
