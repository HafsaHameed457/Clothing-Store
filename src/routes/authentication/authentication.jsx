import React from "react";
import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import {
  auth,
  signInWithGoogle,
  signInWithGoogleRedirect,
  createUserDocFromAuth,
} from "../../utlis/firebase.utlis";

import SignUp from "../../components/signup/signup";

const Authentication = () => {
  //   useEffect(() => {
  //     const fetchData = async () => {
  //       const response = await getRedirectResult(auth);
  //       if (response) {
  //         const userDocRef = await createUserDocFromAuth(response.user);
  //       }
  //     };

  //     fetchData();
  //   }, []);

  const logGoogleUser = async () => {
    const { user } = await signInWithGoogle();
    const userDocRef = await createUserDocFromAuth(user);
  };

  return (
    <div>
      <h1>SignIn</h1>
      <button onClick={logGoogleUser}>Sign In with google</button>
      <SignUp />
    </div>
  );
};

export default Authentication;
