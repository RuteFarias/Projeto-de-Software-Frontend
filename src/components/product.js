import React, { Component,Button} from 'react';
import { Panel,ListGroup,ListGroupItem} from 'react-bootstrap';
import {Link} from 'react-router-dom'

class Product extends Component {

  render() {
    return (
      <div>
        <Panel>
          <Panel.Heading>
          <Panel.Title componentClass="h3"> {this.props.produto.nome} </Panel.Title>
            
          
          
          </Panel.Heading>
          <Panel.Body>
            <ListGroup>
              <ListGroupItem>{this.props.produto.categoria}</ListGroupItem>
            </ListGroup>

           <p>Fabricante: {this.props.produto.fabricante}</p>
           <p> Situação: {this.props.produto.situacao}</p>


         <Link to={'ViewProduct/' + this.props.produto.id}>Ver Mais</Link>



          </Panel.Body>
        </Panel>
      </div>
    );
  }
}

export default Product;