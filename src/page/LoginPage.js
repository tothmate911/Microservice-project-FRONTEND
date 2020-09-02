import React from "react";
import Auth from "../layout/Auth";

function LoginPage() {
  const content = (
    <div>
      <Auth
        key="login"
        operation="Sign In"
        url="http://localhost:8762/auth/login"
      />
      ;
    </div>
  );

  return content;
}

export default LoginPage;
