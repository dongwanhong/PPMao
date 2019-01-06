import React from 'react';
import PropTypes from 'prop-types';
import login from '../../api/user';

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
    const { typeCheck } = this.props;
    return <div>{name} &gt; {errorText} &gt; {typeCheck}</div>;
  }
}

Product.propTypes = {
  typeCheck: PropTypes.string.isRequired,
};

export default Product;
