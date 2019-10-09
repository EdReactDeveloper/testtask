import React, { Component } from 'react';
import Login from '../components/Auth/LoginForm';
import { connect } from 'react-redux';
import { formFieldAction, touchAction } from '../store/actions/form'
import { loginAction } from '../store/actions/auth';
import { hashIt } from '../components/misc/hash';
import {toArray} from '../components/misc/toArray';
import { checkFields } from '../components/misc/checkFields';

class LoginContainer extends Component {

  submitHandler = e => {
    e.preventDefault()
    const { loginAction, form, token, history } = this.props
    const email = hashIt(form.email)
    const password = hashIt(form.password)
    const data = email + password
    const isValid = checkFields(form)
    if (data === token && isValid) {
      loginAction(data, history)
    } else {
      alert('wrong credentials')
    }
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