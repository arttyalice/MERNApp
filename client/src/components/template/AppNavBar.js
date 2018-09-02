import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container} from 'reactstrap';

class AppNavbar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false
        }

    }

    toggle = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }

    render() {
        return(
            <Navbar expand="sm" dark className="mb-5"> 
                <Container>
                    <NavbarBrand href="/">
                        Shopping!
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggle} ></NavbarToggler>
                    <Collapse isOpen = {this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="https://github.com/arttyalice">
                                Github
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        )  
    }
}



export default AppNavbar;