import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { submitProfile, editProfile } from "../../redux/user/action";
import { getFormattedDate } from "../../utils/functions";

export default function Summary() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const location = useLocation();
  const { user } = useSelector((state) => state);

  const back = () => {
    if (location.pathname.includes("/preview")) {
      navigate("/new/about");
    } else {
      navigate("/");
    }
  };

  const submit = () => {
    if (id) {
      dispatch(editProfile(id));
    } else {
      dispatch(submitProfile());
    }
    navigate("/");
  };

  return (
    <div className="user-form">
      <ToastContainer />
      <div className="title">User Profile</div>
      <div className="mt-5">
        <div className="form-label">Name</div>
        <div className="description">{user?.name}</div>
      </div>
      <div className="mt-3">
        <div className="form-label">Date of Birth</div>
        <div className="description">{getFormattedDate(user?.dob)}</div>
      </div>
      <div className="mt-3">
        <div className="form-label">Gender</div>
        <div className="description">{user?.gender}</div>
      </div>
      <div className="mt-3">
        <div className="form-label">Sports</div>
        <div className="description">
          {user?.sports?.length > 0 && user.sports.map((sport) => sport + ", ")}
        </div>
      </div>
      <div className="mt-3">
        <div className="form-label">About</div>
        <div className="description">{user?.about}</div>
      </div>
      <div className="mt-3">
        <div className="form-label">Location</div>
        <div className="description">{user?.location}</div>
      </div>
      <div className="mt-3">
        <div className="form-label">Team</div>
        <div className="description">{user?.team}</div>
      </div>
      <div className="mt-3">
        <div className="form-label">Interests</div>
        <div className="description">{user?.interests}</div>
      </div>

      <div className="mt-5 text-end">
        <button type="button" className="btn btn-secondary me-3" onClick={back}>
          Back
        </button>
        {location.pathname.includes("/preview") && (
          <button type="button" className="btn btn-primary" onClick={submit}>
            Submit
          </button>
        )}
      </div>
    </div>
  );
}
