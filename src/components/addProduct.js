import React, { Component } from 'react';
import { Grid, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import ReactDOM from 'react-dom';

class AddProduct extends Component {

    constructor(props) {
        super(props);
        this.id = props.id;
        this.handleChangeNome = this.handleChangeNome.bind(this);
        this.handleChangeCodigoBarras = this.handleChangeCodigoBarras.bind(this);
        this.handleChangeFabricante = this.handleChangeFabricante.bind(this);
        this.handleChangeCategoria = this.handleChangeCategoria.bind(this);
        this.addProduct = this.addProduct.bind(this);


        this.state = {
            nome: '',
            codigoBarras: '',
            fabricante: '',
            categoria: '',
            situacao: ''
        };
    }

    

    addProduct(){
        
        const product = {
            nome: this.state.nome,
            codigoBarras: this.state.codigoBarras,
            fabricante: this.state.fabricante,
            categoria:this.state.categoria,
            situacao: this.state.situacao
        };

    }

    handleChangeNome(e) {
        this.setState({ nome: e.target.value });
    }
    handleChangeCodigoBarras(e) {
        this.setState({ codigoBarras: e.target.value });
    }
    handleChangeFabricante(e) {
        this.setState({ fabricante: e.target.value });
    }
    handleChangeCategoria(e) {
        this.setState({ categoria: e.target.value });
    }

    getSelectValue = () => {
        console.log(ReactDOM.findDOMNode(this.select).value)
    }


    render() {
        return (
            <Grid>
                <form>
                    <FormGroup
                        controlId="nomeProduto"

                    >
                        <ControlLabel>Nome do Produto</ControlLabel>
                        <FormControl
                            style={{ marginBottom: 10 }}
                            type="text"
                            value={this.state.nome}
                            placeholder="Digite o nome do Produto ..."
                            onChange={this.handleChangeNome}
                        />
                        <FormControl.Feedback />

                    </FormGroup>

                    <FormGroup
                        controlId="codigoBarras"

                    >


                        <ControlLabel>Código de Barras</ControlLabel>
                        <FormControl
                            style={{ marginBottom: 10 }}
                            type="text"
                            value={this.state.codigoBarras}
                            placeholder="Digite o Código de Barras ..."
                            onChange={this.handleChangeCodigoBarras}
                        />
                        <FormControl.Feedback />

                    </FormGroup>

                    <FormGroup
                        controlId="fabricante"

                    >


                        <ControlLabel>Fabricante</ControlLabel>
                        <FormControl
                            style={{ marginBottom: 10 }}
                            type="text"
                            value={this.state.fabricante}
                            placeholder="Digite o Nome do Fabricante ..."
                            onChange={this.handleChangeFabricante}
                        />
                        <FormControl.Feedback />

                    </FormGroup>

                    <FormGroup
                        controlId="categoria"

                    >


                        <ControlLabel>Categoria</ControlLabel>
                        <FormControl
                            style={{ marginBottom: 10 }}
                            type="text"
                            value={this.state.categoria}
                            placeholder="Digite o Nome da Categoria ..."
                            onChange={this.handleChangeCategoria}
                        />
                        <FormControl.Feedback />

                    </FormGroup>


                    <FormGroup controlId="formControlsSelect">
                        <ControlLabel >Situação</ControlLabel>
                        <FormControl
                            componentClass="select"
                            placeholder="select"
                            ref={select => { this.select = select }}

                        >
                            <option value="Disponível">Disponível</option>
                            <option value="Indisponível">Indisponível</option>
                        </FormControl>
                    </FormGroup>

                    <Button
                        bsStyle="primary"
                        type="submit"
                        onClick={this.getSelectValue}>

                        Cadastrar
                    </Button>

                </form>

            </Grid>

        );
    }
}


export default AddProduct;