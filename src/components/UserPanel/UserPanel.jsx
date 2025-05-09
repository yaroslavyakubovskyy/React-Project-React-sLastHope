// import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logOut } from "../../redux/auth/slice";
import UserSetsModal from "../UserSetsModal/UserSetsModal";

const UserPanel = ({ onOpenModal }) => {
  // const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);
  console.log("User:", user);

  const handleLogout = () => {
    dispatch(logOut());
    navigate("/");
  };

  // const handleOpenModal = () => {
  //   console.log("Opening modal...");
  //   setIsModalOpen(true);
  // };
  // const handleCloseModal = () => setIsModalOpen(false);
  // console.log("Modal open?", isModalOpen);
  return (
    <div className="user-panel">
      <button onClick={onOpenModal}>Profile settings</button>
      <button onClick={handleLogout}>Log out</button>
    </div>
  );
};

export default UserPanel;
