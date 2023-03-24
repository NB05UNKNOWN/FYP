import React, { useState } from 'react';

function Login() {
  const [user, setUser] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  return (
    <div>
      <h1>Login</h1>
      <form>
        {console.log(user)}
        <label>Username</label>
        <br />
        <input
          type="text"
          name="username"
          value={user.username}
          placeholder="Enter username"
          onChange={handleChange}
        />
        <br />
        <label>Password</label>
        <br />
        <input
          type="text"
          name="password"
          value={user.password}
          placeholder="Enter password"
          onChange={handleChange}
        />
        <br />
        <div className="submit-btn">
          <button className="border py-2 text-white bg-indigo-500 w-20">
            Login
          </button>
        </div>
        <p>Dont have an account ?</p>
        <div className="submit-btn">
          <button className="border py-2 text-white bg-indigo-500 w-20">
            Register
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
