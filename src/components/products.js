import React, { Component } from 'react';
import { Grid,  Col } from 'react-bootstrap';
import Product from './product';

class Products extends Component {

  constructor(props) {
    super(props);

    this.state = {
      products: []
    };
  }

  async componentDidMount() {
    this.setState({ products:[
      {id: 1, nome: 'Talco', codigoDeBarras: 1234, fabricante: 'Johnson', situacao: 'Disponivel',categoria : 'Higiene'},
      {id: 2, nome: 'Paracetamol', codigoDeBarras: 1234, fabricante: 'Bayer', situacao: 'Disponivel',categoria : 'Drogas'},
      {id: 3, nome: 'Paracetamol', codigoDeBarras: 1234, fabricante: 'Bayer', situacao: 'Disponivel',categoria : 'Drogas'},
      {id: 4, nome: 'Paracetamol', codigoDeBarras: 1234, fabricante: 'Bayer', situacao: 'Disponivel',categoria : 'Drogas'},
      {id: 5, nome: 'Paracetamol', codigoDeBarras: 1234, fabricante: 'Bayer', situacao: 'Disponivel',categoria : 'Drogas'},
      {id: 6, nome: 'Paracetamol', codigoDeBarras: 1234, fabricante: 'Bayer', situacao: 'Disponivel',categoria : 'Drogas'},
    
    ] });

  }

renderCard(produto){
  return <Col md={3}> <Product produto={produto} key={produto.id} /> </Col>
}


  render() {
    return (
      <Grid>

        {this.state.products.map(this.renderCard)}
        
        </Grid>
        
    );
  }
}

export default Products;
