import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function LoginPage() {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);  // State to toggle between login and register

  const handleLogin = () => {
    // In a real app, validate login credentials here.
    navigate('/home');
  };

  const handleRegister = () => {
    // In a real app, handle registration logic here.
    navigate('/home');
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="login-container">
      <h2>{isLogin ? 'Login' : 'Register'}</h2>
      <div className="form-container">
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        {!isLogin && (
          <input type="password" placeholder="Confirm Password" />
        )}
        <div className="forgot-password">
          {isLogin ? (
            <span onClick={() => navigate('/forgot-password')}>Forgot Password?</span>
          ) : (
            <span>By signing up, you agree to our Terms and Conditions</span>
          )}
        </div>

        <button onClick={isLogin ? handleLogin : handleRegister}>
          {isLogin ? 'Login' : 'Register'}
        </button>
        <div className="toggle-form">
          {isLogin ? (
            <span>
              Don't have an account?{' '}
              <span className="toggle-link" onClick={toggleForm}>
                Register
              </span>
            </span>
          ) : (
            <span>
              Already have an account?{' '}
              <span className="toggle-link" onClick={toggleForm}>
                Login
              </span>
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
