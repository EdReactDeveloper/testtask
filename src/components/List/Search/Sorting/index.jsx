import React from 'react'

const Sorting = ({sortAction}) => {
    return (
        <div>
            <select onChange={(e)=> sortAction(e.target.value)}>
                <option value="id">sort by id</option>
                <option value="title">sort by title</option>
            </select>
        </div>
    )
}

export default Sorting