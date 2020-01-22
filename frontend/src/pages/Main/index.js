import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { SubmitButton } from './styles';
import { Container } from './../../components/Container';
import { Header } from './../../components/Header';

export default class Main extends Component {
  state = {};
  render() {
    return (
      <Container>
        <Header>
          <img
            src="https://cdn.shopify.com/s/files/1/0088/3579/3001/files/logo_300x300.jpg?v=1551180256"
            alt="Logo Codeby"
          />
        </Header>
        <Link to="/cartGreater">
          <SubmitButton>Meu Carrinho Maior 10</SubmitButton>
        </Link>

        <Link to="/cartLess">
          <SubmitButton>Meu Carrinho Menor 10</SubmitButton>
        </Link>
      </Container>
    );
  }
}
