import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import api from '../../../api/category';

function Category() {
    const [category, setCategory] = useState('');

    const handleCategorySubmit = async (e)=>{
        e.preventDefault();
        try {
            const res = await api.get('/stdCreate');
            const result = await res.json();
            console.log(result);
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className='category-form-container'>
            <Form className='category-form' onSubmit={handleCategorySubmit}>
                <h1>Add standard</h1>

                {/* add category */}
                <Form.Group className='signup-form-input-container' controlId="formBasicEmail">
                    <Form.Label>Education name</Form.Label>
                    <Form.Control
                        className=''
                        type="text"
                        placeholder="1st stdandard or b.com"
                        value={category}
                        name='category'
                        onChange={(e)=> setCategory(e.target.value)}
                    />
                </Form.Group>


                {/* submit button */}
                <Form.Group className=''>
                    <Button variant="primary" type="submit" className=''>
                        Add standard
                    </Button>
                </Form.Group>
            </Form>
        </div>
    )
}

export default Category;