import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { updateProfile, initalProfile } from "../../redux/user/action";
import { getUsers } from "../../redux/users/action";
import { getFormattedDate } from "../../utils/functions";

import "./index.scss";

export default function Lists() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state);

  const [profiles, setProfiles] = useState([]);

  const createNewProfile = async () => {
    dispatch(initalProfile());
    navigate("/new");
  };

  const viewProfile = (profile) => {
    dispatch(
      updateProfile({
        name: profile.name,
        dob: profile.dob,
        gender: profile.gender,
        sports: profile.sports,
        about: profile.about,
        location: profile.location,
        team: profile.team,
        interests: profile.interests,
      }),
    );
    navigate("/summary");
  };

  const editProfile = (profile) => {
    dispatch(
      updateProfile({
        name: profile.name,
        dob: profile.dob,
        gender: profile.gender,
        sports: profile.sports,
        about: profile.about,
        location: profile.location,
        team: profile.team,
        interests: profile.interests,
      }),
    );
    navigate(`/profile/${profile._id}`);
  };

  useEffect(() => {
    dispatch(getUsers());
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    setProfiles(users);
    // eslint-disable-next-line
  }, [users]);

  return (
    <div className="profile-list container mt-5">
      <div className="title">Profiles</div>
      <div className="text-end mt-3 mb-3">
        <button type="button" className="btn btn-success" onClick={createNewProfile}>
          Create New Profile
        </button>
      </div>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th scope="col" className="text-center">
              #
            </th>
            <th scope="col" className="text-center">
              Name
            </th>
            <th scope="col" className="text-center">
              Date of Birth
            </th>
            <th scope="col" className="text-center">
              Gender
            </th>
            <th scope="col" className="text-center">
              Location
            </th>
            <th scope="col" className="text-center">
              View
            </th>
            <th scope="col" className="text-center">
              Edit
            </th>
          </tr>
        </thead>
        <tbody data-testid="table-tbody">
          {profiles.length > 0 ? (
            profiles.map((profile, index) => (
              <tr key={index}>
                <td className="text-center">{index + 1}</td>
                <td className="text-center">{profile.name}</td>
                <td className="text-center">{getFormattedDate(profile.dob)}</td>
                <td className="text-center">{profile.gender}</td>
                <td className="text-center">{profile.location}</td>
                <td className="text-center">
                  <i
                    className="fa-solid fa-eye"
                    onClick={() => viewProfile(profile)}
                  ></i>
                </td>
                <td className="text-center">
                  <i
                    className="fa-solid fa-edit"
                    onClick={() => editProfile(profile)}
                  ></i>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={9}>There is no result</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
