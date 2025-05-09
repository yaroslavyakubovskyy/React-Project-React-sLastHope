import React, { useState } from "react";
import s from "./UserSetsModal.module.css";
const UserSetsModal = ({ user, onClose }) => {
  const [name, setName] = useState(user?.name || "");
  const [currency, setCurrency] = useState(user?.currency || "USD");
  const [avatar, setAvatar] = useState(null);

  const handleSave = (e) => {
    e.preventDefault();
    console.log({ name, currency, avatar });
    onClose();
  };

  return (
    <div className={s.user_sets_modal}>
      <div className={s.backdrop} onClick={onClose}></div>
      <form onSubmit={handleSave} className={s.modal_content}>
        <label>
          Name:
          <input value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          Currency:
          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
          >
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
          </select>
        </label>
        <label>
          Avatar:
          <input type="file" onChange={(e) => setAvatar(e.target.files[0])} />
        </label>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default UserSetsModal;
