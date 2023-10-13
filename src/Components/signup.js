import React from 'react';
import 'styles.css';

const signup = () => {
  return (
    <>
        <div className="container">
    <form action="signup.php" method="POST">
      <h2>Sign Up</h2>
      <div className="form-group">
        <label for="username">Username</label>
        <input type="text" id="username" name="username" required/>
      </div>
      <div className="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" name="email" required/>
      </div>
      <div className="form-group">
        <label for="password">Password</label>
        <input type="password" id="password" name="password" required/>
      </div>
      <div className="form-group">
        <button type="submit">Sign Up</button>
      </div>
    </form>
  </div>

    </>
  )
}

export default signup
