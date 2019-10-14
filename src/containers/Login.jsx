import React, { Component } from 'react';
import Login from '../components/Auth/LoginForm';
import { connect } from 'react-redux';
import { formFieldAction, touchAction } from '../store/actions/form'
import { loginAction } from '../store/actions/auth';
import {toArray} from '../components/misc/toArray';

class LoginContainer extends Component {

  submitHandler = e => {
    e.preventDefault()
    const { loginAction, form, history } = this.props
    const {email, password} = form
    const payload = {email: email.value, password: password.value}
      loginAction(payload, history)
  }

  fieldHandler = e => {
    const { formFieldAction } = this.props
    const key = e.target.name
    const value = e.target.value
    formFieldAction(key, value)
  }
 

  render() {
    const { form, touchAction } = this.props
    return <Login
      fieldHandler={this.fieldHandler}
      form={toArray(form)}
      submitHandler={this.submitHandler}
      touchHandler={touchAction}
    />
  }
}

const mapStateToProps = state => ({
  form: state.form,
  token: state.auth.token
})

export default connect(mapStateToProps, { formFieldAction, loginAction, touchAction })(LoginContainer);