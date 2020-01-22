import middleware from '../middleware/thirdParty/sales';

class ShoppingCartController {
  async indexLess(req, res) {
    const response = await middleware.getSaleList('KJ7P');

    if (response.header !== 200) {
      return res
        .status(response.header)
        .json({ message: 'não foi possível recuperar as vendas.' });
    }

    return res.json(JSON.parse(response.body));
  }

  async indexGreater(req, res) {
    const response = await middleware.getSaleList('DEST');

    if (response.header !== 200) {
      return res
        .status(response.header)
        .json({ message: 'não foi possível recuperar as vendas.' });
    }

    return res.json(JSON.parse(response.body));
  }
}

export default new ShoppingCartController();
