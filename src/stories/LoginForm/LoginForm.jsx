import PropTypes from 'prop-types';

import './login-form.css';

/**
 * Primary UI component for user interaction
 */
export const LoginForm = ({ onSubmit, forgotPasswordURL, registerURL, welcomeText }) => {
  return (
    <div className="form-container">
      {welcomeText && <h1 
        className="font-bold text-2xl"
      >
        {welcomeText}
      </h1>}
      <form 
        className="form"
        onSubmit={onSubmit}
      >
        <label 
          className="form-label" htmlFor="usernameField"
        >Username or Email</label>
        <input 
          className="form-input" 
          type="text"
        />
        <label 
          className="form-label mt-3" htmlFor="passwordField"
        >Password</label>
        <input 
          className="form-input"
          type="password"
        />
        <button 
          className="form-submit-btn"
        >Login</button>
        <div className="form-action">
          {forgotPasswordURL && <a 
            className="form-link" 
            href={forgotPasswordURL}>Forgot Password</a>}
          <span className="mx-2 text-gray-300">/</span>
          {registerURL && <a 
            className="form-link" 
            href={registerURL}>Sign Up</a>}
        </div>
      </form>
    </div>
  );
};

LoginForm.propTypes = {
  /**
   * Page welcome text
   */
  welcomeText: PropTypes.string,
  /**
   * Forgot password page url
   */
  forgotPasswordURL: PropTypes.string,
  /**
   * Registeration page url
   */
  registerURL: PropTypes.string,
  /**
   * Optional submit handler
   */
  onSubmit: PropTypes.func,
};

LoginForm.defaultProps = {
  welcomeText: null,
  forgotPasswordURL: '#',
  registerURL: '#',
  onSubmit: undefined,
};
