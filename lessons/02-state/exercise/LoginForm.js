import React, { useState } from "react"
import VisuallyHidden from "@reach/visually-hidden"
import { FaSignInAlt } from "react-icons/fa"
import TabsButton from "app/TabsButton"
import { login } from "app/utils"

// import LoginFormFinal from './LoginForm.final'
// export default LoginFormFinal

export default function LoginForm() {
  const [shouldShowPassword, setShouldShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleShowPasswordTap = (evt) => {
    setShouldShowPassword(evt.target.checked)
  };

  const handleSubmit = (evt) => {
    console.log('evt', evt)
    evt.preventDefault();
    setIsLoading(true);
    const [emailNode, passwordNode] = evt.target.elements;
    login(emailNode.value, passwordNode.value)
      .then(() => {
        // all done
        setErrorMessage(null);
        setIsLoading(false);
      })
      .catch(err => {
        // error
        setErrorMessage(err.message);
        setIsLoading(false);
      });
  };

  return (
    <form
      onSubmit={handleSubmit}  
    >
      <VisuallyHidden>
        <label htmlFor="login:email">Email:</label>
      </VisuallyHidden>
      <input
        type="text"
        id="login:email"
        className="inputField"
        placeholder="you@example.com"
      />

      <VisuallyHidden>
        <label htmlFor="login:password">Password:</label>
      </VisuallyHidden>
      <input
        id="login:password"
        type={shouldShowPassword ? "text" : "password" }
        className="inputField"
        placeholder="Password"
      />

      <div>
        <label>
          <input
            className="passwordCheckbox"
            type="checkbox"
            defaultChecked={shouldShowPassword}
            onClick={handleShowPasswordTap}
          />{" "}
          show password
        </label>
      </div>

      {errorMessage && (
        <div>
          <label style={{ color: 'red'}}>
             {errorMessage}
          </label>
        </div>
      )}

      <TabsButton>
        <FaSignInAlt />
        <span>{isLoading ? 'loading...' : 'Login'}</span>
      </TabsButton>
    </form>
  )
}
