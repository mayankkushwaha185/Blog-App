import React from "react";

const RegisterPage = () => {
  return (
    <div>
      <div className="items-center justify-center flex h-[calc(100vh-80px)]">
        <SignUp signInUrl="/login" />
      </div>
    </div>
  );
};

export default RegisterPage;
