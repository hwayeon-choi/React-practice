import { Component } from 'react';
import PropTypes from 'prop-types';

class MyComponent extends Component {
  render() {
    const { name, favoriteNumber, children } = this.props; 
    return (
      <div>
        My name is {name}. <br />
        Children value is {children}. <br />
        My favorite number is {favoriteNumber}.
      </div>
    );
  }
};

MyComponent.defaultProps = {
  name: 'undefined'
};

MyComponent.propTypes = {
  name: PropTypes.string,
  favoriteNumber: PropTypes.number.isRequired
};

export default MyComponent;