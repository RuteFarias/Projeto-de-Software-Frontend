import React, { Component } from 'react';
import { Panel, Col, Row, Grid, FormControl, FormGroup, Button } from 'react-bootstrap';


class Login extends Component {

    constructor(props) {
        super(props);

        this.handleChangeUsername = this.handleChangeUsername.bind(this);
        this.handleChangePassword= this.handleChangePassword.bind(this);
        this.login = this.login.bind(this);


        this.state = {
            username: '',
            password: '',
            isAdmin: false
        };
    }

    handleChangeUsername(e) {
        this.setState({ username: e.target.value });
    }
    handleChangePassword(e) {
        this.setState({ password: e.target.value });
    }


    login(){
        
        if(this.state.username === 'yally' && this.state.password === '1234'){
            localStorage.setItem('user',this.state.username);
            localStorage.setItem('admin',true);
            alert("Login realizado com Sucesso!");
        }

        else{
            localStorage.setItem('user',this.state.username);
        }

    }

    


    render() {
        return (
            <div>
                <Grid>



                    <Row className="show-grid" style={{marginTop:40}}>

                        <Col xs={6} md={4} style={{ alignContent: 'center' }}></Col>
                        <Col xs={8} md={4} style={{ alignContent: 'center' }}>
                            <Panel >
                                <Panel.Heading>
                                    <Panel.Title componentClass="h3"> Login </Panel.Title>
                                </Panel.Heading>
                                <Panel.Body>

                                    <form>
                                        <FormGroup
                                            controlId="username"

                                        >

                                            <FormControl
                                                style={{ marginBottom: 10 }}
                                                type="text"
                                                value={this.state.username}
                                                placeholder="Login"
                                                onChange={this.handleChangeUsername}
                                            />
                                            <FormControl.Feedback />

                                        </FormGroup>


                                        <FormGroup
                                            controlId="password"

                                        >

                                            <FormControl
                                                style={{ marginBottom: 10 }}
                                                type="password"
                                                value={this.state.password}
                                                placeholder="Senha"
                                                onChange={this.handleChangePassword}
                                            />
                                            <FormControl.Feedback />

                                        </FormGroup>

                                        <Button
                                            bsStyle="primary"
                                            type="submit"
                                            onClick={this.login}
                                        >

                                            Entrar
                                         </Button>
                                    </form>

                                </Panel.Body>
                            </Panel></Col>

                        <Col xs={6} md={4} style={{ alignContent: 'center' }}></Col>


                    </Row></Grid>
            </div>
        );
    }
}

export default Login;