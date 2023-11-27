import React from "react";
import { UserContext } from "../context/AuthContext";
import { useContext } from "react";

export default function Vehicles() {
  const { user } = useContext(UserContext);
  return (
    <>
      <div>Vehicles</div>
      <p>{user ? `Username: ${user.displayName}` : ""}</p>
    </>
  );
}
