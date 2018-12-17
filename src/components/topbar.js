import React, { Component } from 'react';
import { Navbar, Nav, NavItem ,Button} from 'react-bootstrap';
import { Redirect } from 'react-router-dom'


 
class TopBar extends Component {

  constructor(props) {
    super(props);

    this.logout = this.logout.bind(this);
    this.isLogged = this.isLogged.bind(this);

    this.state ={
      logged : false
    }
  }

  async componentDidMount() {
    this.setState({logged: this.isLogged()});
  }

  isLogged(){
    return localStorage.getItem('user');
  }


  logout (){

    localStorage.removeItem('user');
    localStorage.removeItem('admin');
    this.setState({logged: false});

    alert('Logout efetuado com Sucesso!');
    document.location.reload(true);
   


  }


  render () {
    return (
      <div>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
            <img src= '/images/cpharma.png' style={{width:180, marginTop: -7, height:80}} alt="CCC Pharma" />
            </Navbar.Brand>
          </Navbar.Header>

          <Nav pullRight>
            <NavItem eventKey={1} href="/">
              Home
            </NavItem>

            { localStorage.getItem("admin") &&
            <NavItem eventKey={2} href="/AddProduct">
              Cadastrar Produto
            </NavItem>
            }

            {
            !this.state.logged ?
              <NavItem eventKey={3} href="/Login">
              Login
            </NavItem>

            :
            <NavItem eventKey={4} >
            <Button  type='submit' onClick={this.logout}>Logout</Button>
          </NavItem>

          }
            
          



          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default TopBar;