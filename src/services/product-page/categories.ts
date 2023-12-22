import { Category } from "../../models";

/** 
функция возвращает массив с ID категорий 
*/
export default function getCategories(categories: Category[]) {
  const ids: string[] = [];

  function traverseCategories(category: Category) {
    ids.push(category.id);

    if (category.children && category.children.length > 0) {
      category.children.forEach((child) => {
        traverseCategories(child);
      });
    }
  }

  categories.forEach((category) => {
    traverseCategories(category);
  });

  return ids;
}
