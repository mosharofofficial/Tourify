export const validate = (password) => {
  const lowerCase = /[a-z]/;
  const upperCase = /[A-Z]/;
  const length = /.{6,}/;

  if (!lowerCase.test(password)) {
    return "Password must contain at least 1 lower case character";
  }
  if (!upperCase.test(password)) {
    return "Password must contain at least 1 upper  case character";
  }
  if (!length.test(password)) {
    return "Password must be at least 6 characters long";
  }

  return false;
};
