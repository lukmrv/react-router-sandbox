import React from "react";
import { useNavigate, useParams } from "react-router-dom";

function Profile() {
  let navigate = useNavigate();
  //   useParams accepts parameters from the url, specified in the path or the top-level component
  let { username } = useParams();

  // instead of username a usecase could be id, where we use id to redirect to specific user page and acces data using user id

  return (
    <div>
      PROFILE PAGE of {username}
      <button onClick={() => navigate("/about")}>
        Go to about page (on submit, for example)
      </button>
    </div>
  );
}

export default Profile;
