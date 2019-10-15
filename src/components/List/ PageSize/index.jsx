import React from 'react'
import { Form } from 'react-bootstrap';
import style from './Select.module.scss';

const PageSize = ({ changePageSizeAction, pageSize }) => {
    return (
        <Form.Control as="select"
            className={style.select}
            defaultValue={pageSize} onChange={(e) => changePageSizeAction(e.target.value)}>
            <option value={2}>2</option>
            <option value={5}>5</option>
            <option value={10}>10</option>
        </Form.Control>
    )
}

export default PageSize