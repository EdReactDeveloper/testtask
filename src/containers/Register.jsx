import React, { Component } from 'react';
import Register from '../components/Auth/RegisterForm';
import { connect } from 'react-redux';
import { formFieldAction } from '../store/actions/form';
import { registerAction } from '../store/actions/auth';
import { hashIt } from '../components/misc/hash';
import { touchAction } from '../store/actions/form';
import { toArray } from '../components/misc/toArray';

class RegisterContainer extends Component {

  submitHandler = e => {
    e.preventDefault()
    const { form, registerAction, history } = this.props
    const password = form.password.value
    const password2 = form.password2.value
    const email = form.email.value
    const payload = { email, password, password2 }
    registerAction(payload, history)
  }


  fieldHandler = e => {
    const { formFieldAction } = this.props
    const key = e.target.name
    const value = e.target.value
    formFieldAction(key, value)
  }

  render() {
    const { form, touchAction } = this.props
    return <Register
      submitHandler={this.submitHandler}
      fieldHandler={this.fieldHandler}
      form={toArray(form)}
      touchHandler={touchAction}
    />
  }
}

const mapStateToProps = state => ({
  form: state.form
})

export default connect(mapStateToProps, { formFieldAction, registerAction, touchAction })(RegisterContainer);