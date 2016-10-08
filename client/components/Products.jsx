import React, { Component, PropTypes } from 'react';

/* eslint-disable */
const products = [
  {
    "id": "1",
    "name": "Apples",
    "description": "The apple tree is a deciduous tree in the rose family best known for its sweet, pomaceous fruit, the apple. Don't accept from snakes.",
    "image": "apple.png",
    "nutrition": ["Vitamin C", "Fiber"],
    "price": 0.50
  }
];
/* eslint-enable */

export default class Products extends Component {
  render() {
    return (
      <div className='products'>
        {
          products.map(item => (
            <div
              key={ item.id }
              >
              { item.name }
            </div>
          ))
        }
      </div>
    );
  }
}

Products.displayName = 'Products';
// Products.propTypes = propTypes;