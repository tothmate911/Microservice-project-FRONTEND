import React from "react";
import Auth from "../layout/Auth";

function LoginPage() {
  const content = (
    <div>
      <Auth key="registration" operation="Sign Up" />;
    </div>
  );

  return content;
}

export default LoginPage;
