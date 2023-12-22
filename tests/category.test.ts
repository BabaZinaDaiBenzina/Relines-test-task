import getCategories from '../src/services/product-page/categories'

describe('getCategories function', () => {
 test('возвращает массив ID категорий', () => {
   const categories = [
    {
      id: '1',
      name: 'Категория 1',
      children: [],
    },
    {
      id: '2',
      name: 'Категория 2',
      children: [],
    },
  ];

   const expectedResult = ['1', '2'];

   expect(getCategories(categories)).toEqual(expectedResult);
 });

 test('возвращает массив из ID категорий даже для вложенных категий', () => {
   const categories = [
    {
      id: '1',
      name: 'Категория 1',
      children: [
        {
          id: '1.1',
          name: 'Категория 1.1',
          children: [
            {
              id: '1.1.1',
              name: 'Категория 1.1.1',
            },
          ],
        },
        {
          id: '1.2',
          name: 'Категория 1.2',
        },
      ],
    },
    {
      id: '2',
      name: 'Категория 2',
      children: [
        {
          id: '2.1',
          name: 'Категория 2.1',
        },
      ],
    },
  ];;

   const expectedResult = ["1", "1.1", "1.1.1", "1.2", "2", "2.1"];

   expect(getCategories(categories)).toEqual(expectedResult);
 });
});

