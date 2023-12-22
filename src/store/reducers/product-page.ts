import { createReducer } from "@reduxjs/toolkit";
import { LinkedProduct, Product } from "../../models";
import { addProductToCompareList, cutProductFromCompareList, setProduct } from "../actions/product-page";

type CatalogPageState = {
  product: Product | undefined;
  linkedProducts: LinkedProduct[] | undefined;
  comparingProducts: Product[] | undefined;
};

const defaultState: CatalogPageState = {
  product: undefined,
  linkedProducts: undefined,
  comparingProducts: undefined,
};

export const productPageReducer = createReducer<CatalogPageState>(
  defaultState,
  (builder) => {
    builder
    // добавлние продукта в state
      .addCase(setProduct, (state, action) => {
        state.product = action.payload;
      })
      // добавление элемента в сравнение
      .addCase(addProductToCompareList, (state, action) => {
        const product = action.payload;
        if (!state.comparingProducts) {
          state.comparingProducts = [product];
        } else {
          if (!state.comparingProducts.find((el) => el.id === product.id)) {
            state.comparingProducts.push(product);
          }
        }
      })
      //удаление элемента из сравнения
      .addCase(cutProductFromCompareList, (state, action) => {
        const product = action.payload;
        if (state.comparingProducts) {
          
          state.comparingProducts = state.comparingProducts.filter((el)=>(el.id !== product.id))
        }
        
      });
  }
);
