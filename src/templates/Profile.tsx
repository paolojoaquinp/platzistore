import React from "react";
import "../styles/Profile.scss";

const Profile = () => {
  return (
    <div className="Profile">
      <div className="Profile-container">
        <h1 className="title">My account</h1>
        <form action="/" className="form">
          <div>
            <label htmlFor="name" className="label">
              Name
            </label>
            <p className="value">Camila Yokoo</p>
            <label htmlFor="email" className="label">
              Email
            </label>
            <p className="value">camilayokoo@gmail.com</p>
            <label htmlFor="password" className="label">
              Password
            </label>
            <p className="value">*********</p>
          </div>
          <input
            type="submit"
            defaultValue="Edit"
            className="secondary-button login-button"
          />
        </form>
      </div>
    </div>
  );
};

export default Profile;
