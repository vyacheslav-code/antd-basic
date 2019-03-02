const uuid = require('uuid/v1');
export default {
  namespace: 'products',
  state: [],
  reducers: {
    'delete'(state, {payload: id}) {
      return state.filter(item => item.id !== id);
    },
    'add'(state, {payload: name}) {
      return [
        ...state,
        {
          name,
          id: uuid()
        }
      ]
    }
  },
};
