import * as Yup from 'yup';

interface Errors {
  [key: string]: string;
}

const signUpValidator = Yup.object().shape({
  name: Yup.string().min(3, 'Name must have at least 3 characters'),
  email: Yup.string()
    .required('Email is required')
    .email('Enter a valid email address'),
  password: Yup.string().min(6, 'Password must have at least 6 characters'),
});

const signInValidator = Yup.object().shape({
  email: Yup.string()
    .required('Email is required')
    .email('Enter a valid email address'),
  password: Yup.string().min(6, 'Password must have at least 6 characters'),
});
const forgotPasswordValidator = Yup.object().shape({
  email: Yup.string()
    .required('Email is required')
    .email('Enter a valid email address'),
});
const resetPasswordValidator = Yup.object().shape({
  password: Yup.string().required('This field is required'),
  passwordConfirmation: Yup.string().oneOf(
    [Yup.ref('password')],
    'Passwords must match',
  ),
});

const getValidationErrors = (error: Yup.ValidationError): Errors => {
  const validationErrors: Errors = {};
  error.inner.forEach(element => {
    validationErrors[element.path] = element.message;
  });
  return validationErrors;
};

export {
  signUpValidator,
  signInValidator,
  forgotPasswordValidator,
  resetPasswordValidator,
  getValidationErrors,
};
