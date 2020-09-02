import React from "react";
import Auth from "../layout/Auth";

function LoginPage() {
  const content = (
    <div>
      <Auth
        key="registration"
        operation="Sign Up"
        url="http://localhost:8762/user-service/user/registration"
      />
      ;
    </div>
  );

  return content;
}

export default LoginPage;
