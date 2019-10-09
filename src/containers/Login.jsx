import React, { Component } from 'react';
import Login from '../components/Auth/LoginForm';
import { connect } from 'react-redux';
import { formFieldAction } from '../store/actions/form'
import { loginAction } from '../store/actions/auth';
import { hashIt } from '../components/misc/hash';
class LoginContainer extends Component {


  submitHandler = e => {
    e.preventDefault()
    const { loginAction, form, token, history } = this.props
    const email = hashIt(form.email)
    const password = hashIt(form.password)
    const data = email + password
    console.log('data ', data, 'token ', token)
    if (data === token) {
      loginAction(data, history)
    } else {
      alert('wrong credentials')
    }
  }


  filedHandler = e => {
    const { formFieldAction } = this.props
    const key = e.target.name
    const value = e.target.value
    formFieldAction(key, value)
  }

  render() {
    const { form } = this.props
    return <Login
      filedHandler={this.filedHandler}
      form={form}
      submitHandler={this.submitHandler}
    />
  }
}

const mapStateToProps = state => ({
  form: state.form,
  token: state.auth.token
})

export default connect(mapStateToProps, { formFieldAction, loginAction })(LoginContainer);