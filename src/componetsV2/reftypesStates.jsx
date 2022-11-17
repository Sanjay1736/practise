import { isContentEditable } from "@testing-library/user-event/dist/utils";
import React from "react";
import { useState } from "react";
export const RefTypesStates = () => {
  let user = {
    name: "#####",
    address: "#####",
    role: "####",
  };
  const [userInfo, setUserInfo] = useState(user);
  const updateName = () => {
    setUserInfo({
      ...userInfo,
      name: "Sanjay",
    });
  };
  const updateAddress = () => {
    setUserInfo({
      ...userInfo,
      address: "India",
    });
  };
  const updateRole = () => {
    setUserInfo({
      ...userInfo,
      role: "Student",
    });
  };
  return (
    <>
      <div>
        <h3>UserInfo</h3>
        <div>Name:{userInfo.name}</div>
        <div>Address:{userInfo.address}</div>
        <div>Role:{userInfo.role}</div>
        <button onClick={updateName}>UpdateName</button>
        <button onClick={updateAddress}>UpdateAdress</button>
        <button onClick={updateRole}>UpdateRole</button>
      </div>
    </>
  );
};
