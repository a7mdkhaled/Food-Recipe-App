/* eslint-disable linebreak-style */
export const FOOD_SCHEMA = 'food';
export const CATEGORIES_SCHEMA = 'categories';

export const foodsSchema = {
  name: FOOD_SCHEMA,
  properties: {
    id: 'int',
    food: 'string',
    image: 'string',
    category: 'string',
  },
};

export const categoriesSchema = {
  name: CATEGORIES_SCHEMA,
  properties: {
    id: 'int',
    title: 'string',
    image: 'string',
  },
};

export const databaseOptions = {
  path: 'realmNeww.realm',
  schema: [foodsSchema, categoriesSchema],
  schemaVersion: 0,
};
