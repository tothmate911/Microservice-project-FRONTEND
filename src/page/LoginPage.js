import React from "react";
import Auth from "../layout/Auth";

function LoginPage() {
  const content = (
    <div>
      <Auth key="login" operation="Sign In" />;
    </div>
  );

  return content;
}

export default LoginPage;
