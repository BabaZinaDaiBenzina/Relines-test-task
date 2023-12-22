import { Product } from "../../../models";
import { dispatch } from "../../../store";
import { addProductToCompareList } from "../../../store/actions/product-page";


export const Analog = ({ product }: { product: Product }): JSX.Element => {
  const getToCompare = () => {
    dispatch(addProductToCompareList(product));
    console.log("Пользователь добавил товар в сравние")
  };

  return (
    <div>
      Аналог:
      <button onClick={getToCompare}>{product.name} </button>
    </div>
  );
};
