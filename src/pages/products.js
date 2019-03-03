import {connect} from 'dva';
import {Row, Col, Statistic, Icon} from 'antd';
import ProductList from '../components/ProductList';
import AddProductForm from '../components/AddProductForm';


const Products = ({dispatch, products}) => {
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
      <Row>
        <Col span={12}>
          <h2>List of Products</h2>
          <Row gutter={16}>
            <Col span={12}>
              <Statistic title="Feedback" value={1128} prefix={<Icon type="like" />} />
            </Col>
            <Col span={12}>
              <Statistic title="Unmerged" value={93} suffix="/ 100" />
            </Col>
          </Row>
          <AddProductForm handleAdd={handleAdd}/>
          <ProductList onDelete={handleDelete} products={products}/>

        </Col>
        <Col span={12}>
          <Row>
            <Col span={24}>

            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default connect(({products}) => ({
  products,
}))(Products);
