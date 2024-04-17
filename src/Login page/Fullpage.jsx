import React, { useEffect, useState }  from 'react'
import Allpages from './Allpages'

const Fullpage = () => {
    const [authenticated, setauthenticated] = useState(null);
  useEffect(() => {
    const loggedInUser = localStorage.getItem("authenticated");
    if (loggedInUser) {
      setauthenticated(loggedInUser);
    }
  }, []);

  if (!authenticated) {
  // Redirect
  } else return (
    <div>
        <Allpages />
    </div>
  )
}

export default Fullpage