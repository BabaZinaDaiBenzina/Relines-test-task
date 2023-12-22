import { Product } from "../../models";

/**
 * Возвращает массив из сопутствующих продуктов
 */
export function getRelatedProduct(
  arr: Product[],
  categoryArray: string[],
  product: Product
) {
  return arr.filter(
    (el) =>
      categoryArray.includes(el.category.id) &&
      el.category?.id !== product?.category?.id
  );
}
/**
 * Возвращает массив из продуктов без прочих признаков
 */
export function getOtherProduct(
  relatedProduct: Product[],
  categoryArray: string[],
  product: Product
) {
  return relatedProduct.filter(
    (el) =>
      !categoryArray.includes(el.category.id) &&
      el.category?.id !== product?.category?.id
  );
}
/**
 * Возвращает массив из продуктов аналогов
 */
export function getAnalog(relatedProduct: Product[], product: Product) {
  return relatedProduct.filter(
    (el) => el.category?.id === product?.category?.id
  );
}
