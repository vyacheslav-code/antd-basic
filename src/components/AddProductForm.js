import {
  Form, Icon, Input, Button, Spin
} from 'antd';
import React from 'react'

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class HorizontalAddForm extends React.Component {
  state = {
    loading: false
  }

  componentDidMount() {
    // To disabled submit button at the beginning.
    this.props.form.validateFields();
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, {productName}) => {
      if (!err) {
        this.setState(() => ({loading: true}));
        setTimeout(() => {
          this.props.handleAdd(productName);
          this.setState(() => ({loading: false}))
        }, 1500)
      }
    });
  }

  render() {
    const {
      getFieldDecorator, getFieldsError, getFieldError, isFieldTouched,
    } = this.props.form;

    // Only show error after a field is touched.
    const nameError = isFieldTouched('productName') && getFieldError('productName');
    return (
      <Form layout="inline" onSubmit={this.handleSubmit}>
        <Form.Item
          validateStatus={nameError ? 'error' : ''}
          help={nameError || ''}
        >
          {getFieldDecorator('productName', {
            rules: [{required: true, message: 'Please input product name!'}],
          })(
            <Input prefix={<Icon type="plus" style={{color: 'rgba(0,0,0,.25)'}}/>} placeholder="Product Name"/>
          )}
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            disabled={hasErrors(getFieldsError())}
          >
            Add
          </Button>
        </Form.Item>
        <Spin spinning={this.state.loading}/>
      </Form>
    );
  }
}

export default Form.create({name: 'horizontal_add'})(HorizontalAddForm);

