import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaAngleDoubleLeft } from 'react-icons/fa';
import { Container } from './../../components/Container';
import { Header } from './../../components/Header';
import { List, Footer, SubmitButton } from './styles';

import api from '../../services/api';

export default class CartLess extends Component {
  state = {
    items: [],
    total: 0
  };

  componentDidMount() {
    api.get('/cartLess').then(res => {
      this.setState({ items: res.data.items });

      const cartPrice = res.data.items.reduce(
        (prevPrice, currentItem) => prevPrice + currentItem.sellingPrice,
        0
      );

      this.setState({ total: cartPrice });
    });
  }

  maskMoney(value) {
    const price = value.toString();
    return price.slice(0, price.length - 2) === ''
      ? '0' + ',' + price.slice(price.length - 2)
      : price.slice(0, price.length - 2) + ',' + price.slice(price.length - 2);
  }

  render() {
    return (
      <Container>
        <Header>
          <Link to="/" attr="data-header">
            <FaAngleDoubleLeft />
          </Link>
          <h1>Meu carrinho</h1>
        </Header>

        <List>
          {this.state.items.map(item => (
            <li key={item.id}>
              <img src={item.imageUrl} alt={item.name} />
              <div>
                <label>{item.name}</label>
                <br />
                <small>R$ {this.maskMoney(item.price)}</small>
                <br />
                <span>R$ {this.maskMoney(item.sellingPrice)}</span>
              </div>
            </li>
          ))}
        </List>

        <Footer>
          <div>
            <label>Total</label>
            <label>R$ {this.maskMoney(this.state.total)}</label>
          </div>

          <SubmitButton>Finalizar compra</SubmitButton>
        </Footer>
      </Container>
    );
  }
}
