import React, { useState, useEffect } from 'react'

import { onAuthStateChanged } from 'app/utils'
import LoggedIn from 'app/LoggedIn'
import LoggedOut from 'app/LoggedOut'

// TO TEST ----------!
// function TestComponent(props) {
//   const { auth, authAttempted } = useAuth();
// }


// function useAuth() {
//   let auth = null; // won't preserve state
//   let authAttempted = false;
  
//   useEffect(() => {
//     return onAuthStateChanged(newAuth => {
//       auth = newAuth;
//       authAttempted = true;
//     });
//   }, []);

//   return {
//     auth,
//     authAttempted,
//   }
// }

function useAuth() {
  let [auth, setAuth] = useState(null);
  let [authAttempted, setAuthAttempted] = useState(false);
  
  useEffect(() => {
    const cleanupCallback = onAuthStateChanged(auth => {
      setAuth(auth);
      setAuthAttempted(true);
    });
    return cleanupCallback;
  }, []);

  return {
    auth,
    authAttempted,
  }
}

export default function App() {
  const {auth, authAttempted} = useAuth();

  if (!authAttempted) {
    return <p>Authenticating...</p>
  }

  return (
    <div className="Layout">
      {auth ? <LoggedIn auth={auth} /> : <LoggedOut />}
    </div>
  )
}
