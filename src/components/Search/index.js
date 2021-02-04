import React from 'react';
import {
    Form,
    InputGroup
} from 'react-bootstrap';

// Search text is propagated to the Home view
const Search = ({ searchTextUpdated }) => {
    return (
        <div className='search-container'>
            <Form>
                <Form.Row>
                        <Form.Group>
                            <InputGroup>
                                <Form.Control
                                    className='search-box'
                                    type="text"
                                    placeholder="Search"
                                    onChange={event => searchTextUpdated(event.target.value)}
                                />
                            </InputGroup>
                        </Form.Group>
                    </Form.Row>
            </Form>
        </div>
    )
}

export default Search;