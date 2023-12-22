import "./style/productPage.css";
import { FC, useLayoutEffect, useState } from "react";
import { setProduct } from "../../../store/actions/product-page";
import {
  compareListSelector,
  productSelector,
} from "../../../store/selectors/product-page";
import { useSelector } from "react-redux";
import { dispatch } from "../../../store";
import { Category, Product } from "../../../models";
import getCategories from "../../../services/product-page/categories";
import { Related } from "./related";
import { Analog } from "./analog";
import { useParams } from "react-router-dom";
import { OtherProduct } from "./otherProduct";
import * as api from "../../../services/product-page/api";
import * as productFunction from "../../../services/product-page/productFunction";
import { CompareProduct } from "./compareProduct";

export const ProductPage: FC = () => {
  const product = useSelector(productSelector);
  const compareProduct = useSelector(compareListSelector);
  const { productId } = useParams();

  const [relatedProduct, setRelatedProduct] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);

  useLayoutEffect(() => {
    productId &&
      api.loadProduct(productId).then((data) => dispatch(setProduct(data)));
    productId &&
      api.linckedProduct(productId).then((data) => setRelatedProduct(data));
    api.getCategories().then((data) => setCategories(data));
  }, [productId]);

  let analog = productFunction.getAnalog(relatedProduct, product);

  /*
    получаем список категорий
    */
  let categoryArray = getCategories(categories);

  /*
    получаем список сопутствующих товаров
    */
  let related = productFunction.getRelatedProduct(
    relatedProduct,
    categoryArray,
    product
  );

  /*
    получаем список товаров не вощедших ни в одну категорию
    */
  let otherProduct = productFunction.getOtherProduct(
    relatedProduct,
    categoryArray,
    product
  );

  return (
    <div className="box">
      <div className="products">
        <div className="productCard">
          <div className="product">товар:{product?.name}</div>
          <div className="product">цена:{product?.price}</div>
        </div>
        <div className="related">
          <div>
            <ul>
              {analog.map((el) => (
                <li key={el.id}>
                  <Analog product={el} />
                </li>
              ))}
              {related.map((el) => (
                <li key={el.id}>
                  <Related key={el.id} product={el} />
                </li>
              ))}
              {otherProduct.map((el) => (
                <li key={el.id}>
                  <OtherProduct key={el.id} product={el} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div>
        <div className="compare-name">Сравнение:</div>
        <div className="compare">
          {compareProduct &&
            compareProduct.map((el) => (
              <CompareProduct key={el.id} product={el} />
            ))}
        </div>
      </div>
    </div>
  );
};
