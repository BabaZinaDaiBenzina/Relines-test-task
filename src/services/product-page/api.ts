import { MockProductPageGateway } from "../../gateways/product-page";

const productPage = new MockProductPageGateway();

/**
 * Возвращает данные о товаре для страницы товара
 */
export async function loadProduct(productId: string) {
  const data = await productPage.getProduct(productId);
  return data;
}
/**
 * Возвращает связанные товары для товара с идентификатором productId
 */
export async function linckedProduct(productId: string) {
  const data = await productPage.getLinkedProducts(productId);
  return data;
}
/**
 * Возвращает список категорий
 */
export async function getCategories() {
  const data = await productPage.getCategories().then();
  return data;
}
