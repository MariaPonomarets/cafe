const isEmail = (email) => {
  const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return pattern.test(email);
};

const isLength = (str, ln) => {
  return str.length > ln;
};

export default ({ email, password }) => {
  const errors = {};

  if (!email) {
    errors.email = 'Email is required.';
  }

  if (email && !isEmail(email)) {
    errors.email = 'Invalid email.';
  }

  if (!password) {
    errors.password = 'Password is required.';
  }

  if (password && !isLength(password, 4)) {
    errors.password = 'Password must contain minimum 4 symbols.';
  }

  return Object.keys(errors).length ? errors : null;
}
