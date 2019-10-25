import React from 'react'

import SignIn from '../../components/sign-in/sign-in'
import SignUp from '../../components/sign-up/sign-up'

import './signing-forms.scss'


const SigningForms = () => (
  <div className ='signing-forms'>
    <SignIn />
    <SignUp />
  </div>
)


export default  SigningForms