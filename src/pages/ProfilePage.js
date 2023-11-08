import React, { useContext } from "react";
import Header from "../components/Header";
import { ContextProvider } from "../contexts/BooksContext";

const ProfilePage = () => {
  const { userObj } = useContext(ContextProvider);
  const { name, bio, img } = userObj;
  return (
    <div>
      <Header />
      <h1>Profile</h1>
      <img src={img} alt="userImage" width="300px" />
      <p>
        <b>Name: {name}</b>
      </p>
      <p>
        <b>Bio: </b>
        <i>{bio}</i>
      </p>
    </div>
  );
};

export default ProfilePage;
