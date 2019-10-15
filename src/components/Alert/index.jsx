import React from 'react'
import { Alert } from 'react-bootstrap';

const AlertComponent = ({ alerts }) => alerts !== null && alerts.length > 0 && alerts.map(alert =>
    <Alert key={alert.id} variant={alert.status}>{alert.msg}</Alert>
)

export default AlertComponent