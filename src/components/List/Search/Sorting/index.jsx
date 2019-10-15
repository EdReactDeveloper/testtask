import React from 'react';
import style from './Select.module.scss';
import { Form } from 'react-bootstrap';

const options = [
    { value: 'id', text: 'sort by id' },
    { value: 'title', text: 'sort by title' },
]

const Sorting = ({ sortAction }) => {
    return (
        <Form.Control as="select" onChange={(e) => sortAction(e.target.value)} className={style.select}>
            {options.map(item => <option key={item.value} value={item.value}>{item.text}</option>)}
        </Form.Control >
    )
}

export default Sorting