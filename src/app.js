const uuid = require('uuid/v1');
export const dva = {
  config: {
    onError(err) {
      err.preventDefault();
      console.error(err.message);
    },
    initialState: {
      products: [
        { name: 'Product One', id: uuid() },
        { name: 'Product Two', id: uuid() },
      ],
    },
  },
};
