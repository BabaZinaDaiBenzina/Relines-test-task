import { useState } from "react";
import { Modal } from "../common/modal";
import { Product } from "../../../models";

export const OtherProduct = ({ product }: { product: Product }) => {
  const [isModalActive, setModalActive] = useState(false);

  const handleModalOpen = () => {
    setModalActive(true);
    console.log("Пользователь открыл модальное окно другого товара")
  };
  const handleModalClose = () => {
    setModalActive(false);
  };
  return (
    <div className="modalProduct">
      <button onClick={handleModalOpen}> {product.name}</button>
      <div>
        {isModalActive && (
          <Modal onClose={handleModalClose}>
            {
              <div>
                <div className="">товар:{product?.name}</div>
                <div className="">цена:{product?.price}</div>
              </div>
            }
          </Modal>
        )}
      </div>
    </div>
  );
};
