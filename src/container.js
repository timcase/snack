import React, { Component } from 'react';
import ShoppingCart from './shopping_cart';
import Snack from './snack';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

class Container extends Component {
  render() {
    return(
      <div>
        <Snackname='Chips'/>
        <Snackname='Cupcake'/>
        <Snackname='Donut'/>
        <Snackname='Doritos'/>
        <Snackname='Popcorn'/>
        <ShoppingCart/>
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(Container);
