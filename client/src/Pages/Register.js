import React, { useState } from 'react';

function Register() {
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
    reEnterPassword: '',
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
      <h1>Register</h1>
      <form>
        {console.log(user)}
        <label>Username</label>
        <input
          type="text"
          name="username"
          value={user.username}
          placeholder="Enter username"
          onChange={handleChange}
        />
        <br />
        <label>email</label>
        <input
          type="text"
          name="email"
          value={user.email}
          placeholder="Enter email"
          onChange={handleChange}
        />
        <br />
        <label>Password</label>
        <input
          type="text"
          name="password"
          value={user.password}
          placeholder="Enter password"
          onChange={handleChange}
        />
        <br />
        <label>Re-Password</label>
        <input
          type="text"
          name="reEnterPassword"
          value={user.reEnterPassword}
          placeholder="Re enter password"
          onChange={handleChange}
        />
        <br />
        <div className="submit-btn">
          <button className="border py-2 text-white bg-indigo-500 w-20">
            sign Up
          </button>
        </div>
        <p>Already have an account ?</p>
        <div className="submit-btn">
          <button className="border py-2 text-white bg-indigo-500 w-20">
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default Register;
