import { connect } from 'dva';
import ProductList from '../components/ProductList';
import AddProductForm from '../components/AddProductForm';


const Products = ({ dispatch, products }) => {
  function handleDelete(id) {
    dispatch({
      type: 'products/delete',
      payload: id,
    });
  }
  function handleAdd(name) {
    dispatch({
      type: 'products/add',
      payload: name,
    });
  }

  return (
    <div>
      <h2>List of Products</h2>
      <AddProductForm handleAdd={handleAdd}/>
      <ProductList onDelete={handleDelete} products={products} />
    </div>
  );
};

export default connect(({ products }) => ({
  products,
}))(Products);
