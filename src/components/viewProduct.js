import React, { Component } from 'react';
import { Grid,Panel, ListGroup, ListGroupItem } from 'react-bootstrap';


class ViewProduct extends Component {

    constructor(props) {
        super(props);
        this.id = props.id;

        this.state = {
            produto: ""
        };
    }

    async componentDidMount() {

        // Aqui um Fetch pra pegar o Produto pelo o ID do Back e setar aqui abaixo

        const produtoFake = {id: 1, nome: 'Talco', codigoDeBarras: 1234, fabricante: 'Johnson', situacao: 'Disponivel',categoria : 'Higiene'};


        // Atualizar Produto Fake pelo Produto recebido do Back
        this.setState({produto: produtoFake});
    
      }


    render() {
        return (

            <Grid>

            <Panel>
                <Panel.Heading>
                    <Panel.Title componentClass="h3"> {this.state.produto.nome} </Panel.Title>

                </Panel.Heading>
                <Panel.Body>
                    <ListGroup>
                        <ListGroupItem>{this.state.produto.categoria}</ListGroupItem>
                    </ListGroup>

                    <p>Fabricante: {this.state.produto.fabricante}</p>
                    {localStorage.getItem('admin') &&
                <p>Código de Barras : {this.state.produto.codigoDeBarras}</p>
                
                }
                    <p> Situação: {this.state.produto.situacao}</p>


                </Panel.Body>
            </Panel>
            </Grid>







        );
    }
}


export default ViewProduct;