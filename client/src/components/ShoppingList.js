import React, { Component } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { 
        Container, 
        ListGroup, 
        ListGroupItem, 
        Modal,
        Row,
        ModalHeader,
        ModalBody,
        Form,
        FormGroup,
        Label,
        Input,
        Button
} from 'reactstrap'
import { connect } from 'react-redux';
import { getItems, deleteItem } from '../action/itemAction';
import PropTypes from 'prop-types'


class ShoppingList extends Component {
    state = {
        modalShow: false,
        name: null
    }

    componentDidMount() {
        this.props.getItems();
    }

    toggle = () => {
        this.setState({ modal: !this.state.modal })
    }

    onDeleteClick = (id) => {
        this.props.deleteItem(id);
    }

    onChange = e => {
        
    }

    onUpdateClick = id => {
        

        this.props.updateItem(id);
    }
    

    render() {
        const { items } = this.props.item;
        return (
            <Container>

                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}    
                >
                    <ModalHeader toggle={this.toggle}>
                        Update Shopping List Item
                    </ModalHeader>

                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for="item">Item</Label>
                                <Input
                                    type="text"
                                    name="name"
                                    id="item"
                                    placeholder="Item name"
                                    onChange={this.onChange}
                                >
                                </Input>
                                <Button 
                                    color="dark"
                                    style={{marginTop: '2rem'}}
                                    block
                                >
                                    Update Item
                                </Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>

                    <ListGroup>
                        <TransitionGroup className="shopping-list">
                            {items.map(({ _id, name }) => (
                                <CSSTransition key={_id} timeout={500} classNames="fade">
                                    <ListGroupItem>
                                        <Row>
                                            {name}

                                            <button
                                                className="remove-btn ml-auto"
                                                size="sm"
                                                onClick={this.onDeleteClick.bind(this, _id)}
                                            >
                                                Delete
                                            </button>

                                            {/*<button
                                                className="remove-btn"
                                                size="sm"
                                                onClick={this.toggle}
                                            >
                                                Update
                                            </button>*/}
                                        </Row>
                                    </ListGroupItem>
                                </CSSTransition>
                            ))}
                        </TransitionGroup>
                    </ListGroup>
            </Container>
        );
    }
}

ShoppingList.propTypes = {
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    item: state.item
})

export default connect(mapStateToProps, {getItems, deleteItem})(ShoppingList);