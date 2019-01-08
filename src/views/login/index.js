import React from 'react';
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
      <div>
        <div>{name} &gt; {errorText}</div>
        <Login />
      </div>
    );
  }
}

export default Product;
