import React from "react";
import { AiOutlineLeft } from "react-icons/ai";

import TopBarStyles from "../styles/TopBarStyles";
import ProfileSummary from "../components/ProfileSummary";


export default function userProfile(props) {

  let profileSummaryData;

  props.profileData.map(profile => {
   if(profile.id === parseInt(props.match.params.id))
   {
     let obj = {}
     obj.firstName = profile.firstName;
     obj.lastName = profile.lastName;
     obj.email = profile.email;
     obj.phoneCode = profile.phoneCode;
     obj.mobile = profile.mobile;
     obj.addressLineOne = profile.address.addressLineOne;
     obj.postCode = profile.address.postCode;
     obj.url = props.match.url;
     obj.setPassword = false;
     profileSummaryData = obj;
   }
   return true;
 });

 if(!profileSummaryData) {
   props.history.push("/account");
 }

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

        <div className="page-name"> user profile </div>
      </TopBarStyles>

      <ProfileSummary {...profileSummaryData} />
    </>
  );
}
