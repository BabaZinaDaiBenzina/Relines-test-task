import { Product } from "../../../models";
import { cutProductFromCompareList } from "../../../store/actions/product-page";
import { dispatch } from "../../../store";

export const CompareProduct = ({ product }: { product: Product }) => {
  const cutProduct = () => {
    dispatch(cutProductFromCompareList(product));
    console.log("Пользователь удалил товар из сравнения")
  };

  return (
    <div className="compareProductCard" key={product.id}>
      <div className="compareProduct">товар:{product.name}</div>
      <div className="compareProduct">цена:{product.price}</div>
      <button onClick={cutProduct}>x</button>
    </div>
  );
};
