import {connect} from 'dva';
import {Row, Col, Progress, Timeline, Icon} from 'antd';
import ProductList from '../components/ProductList';
import AddProductForm from '../components/AddProductForm';
import DrawerExample from '../components/DrawerExample';


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
          <h2><Icon type="bars"/> List of Products</h2>
          <AddProductForm handleAdd={handleAdd}/>
          <ProductList onDelete={handleDelete} products={products}/>
        </Col>
        <Col span={12}>
          <Row>
            <Col span={12}>
              <h2><Icon type="check"/> Hit 100% by adding products</h2>
              <Progress type="circle" percent={products.length * 10}/>
            </Col>
            <Col span={12}>
              <h2><Icon type="schedule"/> The Timeline</h2>
              <Timeline style={{marginTop: '10px'}}>
                <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
                <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
                <Timeline.Item dot={<Icon type="clock-circle-o" style={{fontSize: '16px'}}/>} color="red">Technical
                  testing 2015-09-01</Timeline.Item>
                <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
              </Timeline>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <h2><Icon type="project"/> The Drawer</h2>
              <DrawerExample/>
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
