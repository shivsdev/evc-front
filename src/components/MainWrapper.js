import React, { useState } from "react";

import AllRoutes from "../routes";

const userProfile = [{
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
    postCode: "RG12 6NQ"
  }
}];

const vehicles = [
  {
    id: 1,
    country: "united kingdom",
    registration: "WY501",
    description: "Black Ford Focus"
  },
  {
    id: 2,
    country: "united kingdom",
    registration: "XYR23",
    description: "White ford focus"
  }
];

const paymentMethods = {
  cards: [
    {
      id: 1,
      cardType: "debit",
      number: "●●●● ●●●● ●●●● 4746",
      issuedBy: "visa",
      expiryMonth: "●●",
      expiryYear: "●●●●",
      cvv: "●●●"
    },
    {
      id: 2,
      cardType: "credit",
      number: "●●●● ●●●● ●●●● 5757",
      issuedBy: "master",
      expiryMonth: "●●",
      expiryYear: "●●●●",
      cvv: "●●●"
    }
  ],
  applePay: {
    enabled: true
  }
};

export default function MainWrapper(props) {
  const [profileData, setProfileData] = useState(userProfile);
  const [vehiclesData, setVehiclesData] = useState(vehicles);
  const [newProfileData, setNewProfileData] = useState({})
  const [paymentMethodsData, setPaymentMethodsData] = useState(paymentMethods);

  const extraProps = {
    profileData,
    setProfileData,
    vehiclesData,
    setVehiclesData,
    paymentMethodsData,
    setPaymentMethodsData,
    newProfileData,
    setNewProfileData
  };

  return <AllRoutes {...extraProps} />;
}
