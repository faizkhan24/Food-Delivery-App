import React from 'react';
import Pizza from '../components/Pizza';
import { pizzas } from '../screens\itemsData.js';

const PizzaPage = () => {
  console.log('arrived at pizzapage')
  console.log('pizzapage',pizzas);
  return (
    <>
      {pizzas.map((pizza) => {
            return (
              <div className="custom-column" key={pizza.id}>
                <div className="items-container">
                  <Pizza pizza={pizza} />
                </div>
              </div>
            );
          })}
    </>
  )
}

export default PizzaPage
