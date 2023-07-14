import React from "react";
import {
  signInWithGoogle,
  creteUserDocFromAuth,
} from "../../utlis/firebase.utlis";
const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGoogle();
    console.log(user);
    creteUserDocFromAuth(user);
  };

  return (
    <div>
      <h1>SignIn</h1>
      <button onClick={logGoogleUser}>Sign In with google</button>
    </div>
  );
};

export default SignIn;
