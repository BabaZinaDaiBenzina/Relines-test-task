import { useEffect, useState } from "react";
import { Modal } from "../common/modal";
import { Product } from "../../../models";
import { useLessThenMediaQuery } from "../../hooks/media-query";

export const Related = ({ product }: { product: Product }) => {
  const [isModalActive, setModalActive] = useState(false);
  const mobileWidth = useLessThenMediaQuery(450);

  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      if (!event.state || !event.state.modalOpened) {
        setModalActive(false);
      }
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  const handleModalOpen = () => {
    mobileWidth && window.history.pushState({ modalOpened: true }, "", "");
    setModalActive(true);
    console.log("Пользователь открыл модальное окно сопутствующего товара");
  };
  const handleModalClose = () => {
    mobileWidth && window.history.replaceState({ modalOpened: false }, "", "");
    setModalActive(false);
    console.log("Пользователь закрыл модальное окно сопутствующего товара");
  };
  return (
    <div className="modalProduct">
      Сопутствующий товар:
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
