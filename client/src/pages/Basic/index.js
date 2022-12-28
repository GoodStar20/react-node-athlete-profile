import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { Multiselect } from "react-widgets";

import { updateProfile } from "../../redux/user/action";
import { getFormattedDate } from "../../utils/functions";
import { sportsData } from "../../utils/contants";

export default function Basic() {
  const dispatch = useDispatch();
  const { id } = useParams();

  const navigate = useNavigate();
  const { user } = useSelector((state) => state);

  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("Male");
  const [sports, setSports] = useState([]);

  const next = () => {
    if (!name) {
      toast.warn("Please input Name.");
      return;
    }
    if (!dob) {
      toast.warn("Please input Date of Birth.");
      return;
    }
    if (!gender) {
      toast.warn("Please select Gender.");
      return;
    }
    if (!sports.length) {
      toast.warn("Please select Sports.");
      return;
    }

    dispatch(
      updateProfile({
        name,
        dob,
        gender,
        sports,
      }),
    );

    if (id) {
      navigate(`/profile/${id}/about`);
    } else {
      navigate("/new/about");
    }
  };

  const back = () => {
    navigate(`/`);
  };

  useEffect(() => {
    setName(user.name);
    setDob(getFormattedDate(user.dob));
    setGender(user.gender);
    setSports(user.sports);
  }, [user]);

  return (
    <div className="user-form">
      <ToastContainer />
      <div className="title">Register a New Player</div>
      <div className="mt-5">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-control"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="mt-3">
        <label htmlFor="dob" className="form-label">
          Date of Birth
        </label>
        <input
          type="date"
          className="form-control"
          id="dob"
          value={dob}
          max={new Date()}
          onChange={(e) => setDob(e.target.value)}
        />
      </div>
      <div className="mt-3">
        <div className="form-label">Gender</div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            id="male"
            value="Male"
            checked={gender === "Male"}
            onChange={(e) => setGender(e.target.value)}
          />
          <label className="form-check-label" htmlFor="male">
            Male
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            id="female"
            value="Female"
            checked={gender === "Female"}
            onChange={(e) => setGender(e.target.value)}
          />
          <label className="form-check-label" htmlFor="female">
            Female
          </label>
        </div>
      </div>
      <div className="mt-3">
        <div className="form-label">Sports</div>
        <Multiselect
          value={sports}
          data={sportsData}
          onChange={(value) => setSports(value)}
        />
      </div>
      <div className="mt-5 text-end">
        <button type="button" className="btn btn-secondary me-3" onClick={back}>
          Back
        </button>
        <button type="button" className="btn btn-primary" onClick={next}>
          Next
        </button>
      </div>
    </div>
  );
}
