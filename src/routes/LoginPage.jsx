import { SignIn } from "@clerk/clerk-react";
import React from "react";

const LoginPage = () => {
  return (
    <div className="items-center justify-center flex h-[calc(100vh-80px)]">
      <SignIn signInUrl="/register" />
    </div>
  );
};

export default LoginPage;
