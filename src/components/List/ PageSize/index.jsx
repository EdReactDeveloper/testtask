import React from 'react'

const PageSize = ({changePageSizeAction, pageSize}) => {
    return (
        <div>
            <select defaultValue={pageSize} onChange={(e)=> changePageSizeAction(e.target.value)}>
            <option value={2}>2</option>
            <option value={5}>5</option>
            <option value={10}>10</option>
            </select>
        </div>
    )
}

export default PageSize