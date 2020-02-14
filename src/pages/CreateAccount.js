import React from "react";
import { AiOutlineLeft } from "react-icons/ai";

import TopBarStyles from "../styles/TopBarStyles";
import ProfileSummary from "../components/ProfileSummary";

export default function CreateAccount(props) {
  let newProfileObj = JSON.parse(JSON.stringify(props.newProfileData));
  let profileSummaryData;
  profileSummaryData = newProfileObj;
  profileSummaryData.url = props.match.url;
  profileSummaryData.setPassword = true;
  profileSummaryData.id = props.profileData.length + 1;

  const handleAddProfile = () => {
    if(!profileSummaryData.address.addressLineOne || !profileSummaryData.address.postCode) {
      alert("Fill adress to contine")
    }
    props.setProfileData(prev => {
      prev.push(profileSummaryData);
      return prev;
    });
    props.setNewProfileData({})
    props.history.push(`/account/profile/${profileSummaryData.id}`);
  };

  return (
    <>
      <TopBarStyles>
        <div
          className="back-operation"
          onClick={() => props.history.push("/account")}
        >
          <span className="icon">
            <AiOutlineLeft />
          </span>
          <span className="icon-text">account</span>
        </div>

        <div className="page-name"> Create Account </div>
        <div className="page-action" onClick={handleAddProfile}>
          Done
        </div>
      </TopBarStyles>

      <ProfileSummary
        {...profileSummaryData}
        newProfileData={props.newProfileData}
      />
    </>
  );
}
