import {
  getRelatedProduct,
  getOtherProduct,
  getAnalog,
} from "../src/services/product-page/productFunction";

const products = [
  {
    id: "1",
    name: "Товар 1",
    price: 9.99,
    categoryId: "1.1.1",
  },
  {
    id: "2",
    name: "Товар 2",
    price: 109.9,
    categoryId: "1.1.1",
  },
  {
    id: "3",
    name: "Товар 3",
    price: 80,
    categoryId: "1.2",
  },
  {
    id: "4",
    name: "Товар 4",
    price: 200,
    categoryId: "2",
  },
  {
    id: "5",
    name: "Товар 5",
    price: 34.2,
    categoryId: "1.2",
  },
  {
    id: "6",
    name: "Товар 6",
    price: 666.7,
    categoryId: "3",
  },
];
const categoryArray = ["1", "1.1", "1.1.1", "1.2", "2", "2.1"];

const product = {
  id: "1",
  name: "Товар 1",
  price: 9.99,
  categoryId: "1.1.1",
};

describe("Тесты для фильтрации продуктов", () => {
  describe("getRelatedProduct", () => {
    test("returns related products", () => {
      const result = getRelatedProduct(products, categoryArray, product);
      expect(result).toEqual([products[2], products[3], products[4]]);
    });
  });

  describe("getOtherProduct", () => {
    test("returns other products", () => {
      const relatedProducts = getRelatedProduct(
        products,
        categoryArray,
        product
      );
      const result = getOtherProduct(relatedProducts, categoryArray, product);
      expect(result).toEqual([products[5]]);
    });
  });

  describe("getAnalog", () => {
    test("returns analog products", () => {
      const relatedProducts = getRelatedProduct(
        products,
        categoryArray,
        product
      );
      const result = getAnalog(relatedProducts, product);
      expect(result).toEqual([products[1]]);
    });
  });
});
