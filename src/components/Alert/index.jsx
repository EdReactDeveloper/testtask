import React from 'react'

const Alert = ({ alerts }) => alerts !== null && alerts.length > 0 && alerts.map(alert =>
    <div key={alert.id}>{alert.msg}</div>
)

export default Alert