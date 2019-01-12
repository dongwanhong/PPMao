import React, { Fragment } from 'react';
import {
  Form,
  Input,
} from 'antd';
import ItemMap from '../map';

const { Item } = Form;

const FormInputs = (props) => {
  const {
    form: {
      getFieldDecorator,
      getFieldError,
      isFieldTouched,
    },
  } = props;

  return (
    <Fragment>
      {Object.keys(ItemMap).map((key) => {
        const { props: { id, ...restProps }, rules = null } = ItemMap[key];
        // Only show error after a field is touched.
        const error = isFieldTouched(id) && getFieldError(id);

        return (
          <Item
            key={key}
            validateStatus={error ? 'error' : 'validating'}
            help={error || ''}
          >
            {getFieldDecorator(id, {
              rules,
            })(<Input {...restProps} />)}
          </Item>
        );
      })}
    </Fragment>);
};

export default FormInputs;
