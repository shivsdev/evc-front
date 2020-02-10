import React, { useState } from "react";

import AllRoutes from "../routes";

const userProfile = {
  id: 1,
  firstName: "paul",
  lastName: "smith",
  email: "p.smith@hotmail.com",
  mobile: 7851782536,
  phoneCode: 44,
  address: {
    addressLineOne: "29 Acacia Road",
    addressLineTwo: "",
    city: "London",
    country: "United Kingdom",
    postcode: "RG12 6NQ"
  }
};

export default function(props) {
  const [profileData, setProfileData] = useState(userProfile);

  return (
    <AllRoutes profileData={profileData} setProfileData={setProfileData} />
  );
}
