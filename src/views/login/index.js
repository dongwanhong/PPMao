import React, { Fragment } from 'react';
import DocumentTitle from 'react-document-title';
import login from '../../api/user';
import Login from './components/LoginForm';

class Product extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      errorText: '',
    };
  }

  componentDidMount() {
    login({ username: 'Anani' }).then((res) => {
      if (res.data.error) {
        this.setState({
          errorText: res.data.error,
        });
        return;
      }
      const { name } = res.data[0];
      this.setState({
        name,
      });
    });
  }

  render() {
    const { name, errorText } = this.state;
    return (
      <DocumentTitle title="登录-票票猫">
        <Fragment>
          <div>{name} &gt; {errorText}</div>
          <Login />
        </Fragment>
      </DocumentTitle>
    );
  }
}

export default Product;
