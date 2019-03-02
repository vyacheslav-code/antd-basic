import styles from './index.css';
import {
   Icon
} from 'antd';

function BasicLayout(props) {
  return (
    <div className={styles.normal}>
      <h1 className={styles.title}><Icon type="ant-design"/> Basic Ant Design Usage Example</h1>
      { props.children }
    </div>
  );
}

export default BasicLayout;
