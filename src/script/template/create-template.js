const createLoginForm = () => `
  <h1 class="header-page">Login</h1>
  <form action="" class="form" id="login-form">
    <label for="username-form" class="form-label">Username</label>
    <input type="text" class="form-input" id="username-form" placeholder="Type username">
    <label for="password-form" class="form-label">Password</label>
    <input type="password" class="form-input" id="password-form" placeholder="Type password">
    <button type="submit" class="btn-submit" id="btn-submit-login">SUBMIT</button>
  </form>
`;

const createRegisterForm = () => `
  <h1 class="header-page">Register</h1>
  <form action="" class="form" id="register-form">
    <label for="username-form" class="form-label">Username</label>
    <input type="text" class="form-input" id="username-form" placeholder="Type username">
    <label for="email-form" class="form-label">Email</label>
    <input type="text" class="form-input" id="email-form" placeholder="Type email">
    <label for="password-form" class="form-label">Password</label>
    <input type="password" class="form-input" id="password-form" placeholder="Type password">
    <label for="confirm-password-form" class="form-label">Confirm password</label>
    <input type="password" class="form-input" id="confirm-password-form" placeholder="Confirm password">
    <button type="submit" class="btn-submit" id="btn-submit-login">REGISTER</button>
  </form>
`;

export {
  createLoginForm,
  createRegisterForm,
}