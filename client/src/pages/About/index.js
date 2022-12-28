import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import { updateProfile } from "../../redux/user/action";

export default function About() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const { user } = useSelector((state) => state);

  const [about, setAbout] = useState("");
  const [location, setLocation] = useState("");
  const [team, setTeam] = useState("");
  const [interests, setInterests] = useState("");

  const back = () => {
    if (id) {
      navigate(`/profile/${id}/basic`);
    } else {
      navigate("/new/basic");
    }
  };

  const next = () => {
    if (!location) {
      toast.warn("Please input Location.");
      return;
    }

    dispatch(
      updateProfile({
        about,
        location,
        team,
        interests,
      }),
    );

    if (id) {
      navigate(`/profile/${id}/preview`);
    } else {
      navigate("/new/preview");
    }
  };

  useEffect(() => {
    setAbout(user.about);
    setLocation(user.location);
    setTeam(user.team);
    setInterests(user.interests);
  }, [user]);

  return (
    <div className="user-form">
      <ToastContainer />
      <div className="title">Register a New Player</div>
      <div className="mt-5">
        <label htmlFor="about" className="form-label">
          About
        </label>
        <input
          type="text"
          className="form-control"
          id="about"
          value={about}
          onChange={(e) => setAbout(e.target.value)}
        />
      </div>
      <div className="mt-3">
        <label htmlFor="location" className="form-label">
          Location
        </label>
        <input
          type="text"
          className="form-control"
          id="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>
      <div className="mt-3">
        <label htmlFor="location" className="form-label">
          Team
        </label>
        <input
          type="text"
          className="form-control"
          id="location"
          value={team}
          onChange={(e) => setTeam(e.target.value)}
        />
      </div>
      <div className="mt-3">
        <label htmlFor="interests" className="form-label">
          Interests
        </label>
        <input
          type="text"
          className="form-control"
          id="interests"
          value={interests}
          onChange={(e) => setInterests(e.target.value)}
        />
      </div>

      <div className="mt-5 text-end">
        <button type="button" className="btn btn-secondary me-3" onClick={back}>
          Back
        </button>
        <button type="button" className="btn btn-primary" onClick={next}>
          Preview
        </button>
      </div>
    </div>
  );
}
