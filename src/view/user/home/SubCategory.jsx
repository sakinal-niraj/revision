import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function SubCategory() {
    return (
        <div className='subCategory-form-container'>
            <Form className='subCategory-form'>
                <h1>Add Subject</h1>

                {/* add subCategory */}
                <Form.Group className='signup-form-input-container' controlId="formBasicEmail">
                    <Form.Label>subject</Form.Label>
                    <Form.Control
                        className=''
                        type="text"
                        placeholder="maths"
                        // value={loginData.email}
                        name='subCategory'
                        // onChange={handleInputChange}
                    />
                </Form.Group>


                {/* submit button */}
                <Form.Group className=''>
                    <Button variant="primary" type="submit" className=''>
                        Add subject
                    </Button>
                </Form.Group>
            </Form>
        </div>
    )
}

export default SubCategory;