import React, { Component } from 'react';
import Register from '../components/Auth/RegisterForm';
import { connect } from 'react-redux';
import { formFieldAction } from '../store/actions/form';
import { registerAction } from '../store/actions/auth';
import { hashIt } from '../components/misc/hash';

class RegisterContainer extends Component {

  submitHandler = e => {
    e.preventDefault()
    const { form, registerAction, history } = this.props
    if (form.password.toString() === form.password2.toString()) {
      const password = hashIt(form.password)
      const email = hashIt(form.email)
      const data = email + password
      registerAction(data, history)
    } else {
      alert('passwords should match')
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
    return <Register
      submitHandler={this.submitHandler}
      filedHandler={this.filedHandler}
      form={form}
    />
  }
}

const mapStateToProps = state => ({
  form: state.form
})

export default connect(mapStateToProps, { formFieldAction, registerAction })(RegisterContainer);