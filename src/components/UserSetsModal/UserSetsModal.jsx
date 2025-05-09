import React, { useState, useEffect } from "react";
import s from "./UserSetsModal.module.css";

const UserSetsModal = ({ user, onClose }) => {
  const [name, setName] = useState(user?.name || "");
  const [currency, setCurrency] = useState(user?.currency || "USD");
  const [avatar, setAvatar] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Закриття модалки при натисканні клавіші Escape
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  const handleSave = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // Тут можна додати логіку для запиту на сервер
    try {
      console.log({ name, currency, avatar });
      // Якщо є аватар, обробляємо його окремо
      if (avatar) {
        // Логіка для відправки аватару на сервер
        // const avatarResponse = await uploadAvatar(avatar);
        // if (avatarResponse.error) {
        //   setError("Failed to upload avatar.");
        //   return;
        // }
      }

      // Оновлення інформації користувача на сервері (наприклад)
      // const updateResponse = await updateUser({ name, currency });
      // if (updateResponse.error) {
      //   setError("Failed to update user info.");
      //   return;
      // }

      // Якщо все успішно
      onClose();
    } catch (error) {
      console.log(error);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAvatar(file);
    }
  };

  return (
    <div className={s.user_sets_modal}>
      <div className={s.backdrop} onClick={onClose}></div>
      <form onSubmit={handleSave} className={s.modal_content}>
        <h2>Profile Settings</h2>
        {error && <div className={s.error}>{error}</div>}

        <label>
          Name:
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            disabled={loading}
          />
        </label>

        <label>
          Currency:
          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            disabled={loading}
          >
            <option value="UAH">UAH</option>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
          </select>
        </label>

        <label>
          Avatar:
          <div>
            {avatar ? (
              <>
                <img
                  src={URL.createObjectURL(avatar)}
                  alt="User Avatar"
                  className={s.avatarPreview}
                />
                <button type="button" onClick={() => setAvatar(null)}>
                  Remove Avatar
                </button>
              </>
            ) : (
              <span>No avatar selected</span>
            )}
          </div>
          <input type="file" onChange={handleAvatarChange} disabled={loading} />
        </label>

        <div>
          <button type="submit" disabled={loading}>
            {loading ? "Saving..." : "Save"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserSetsModal;
