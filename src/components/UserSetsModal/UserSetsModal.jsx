import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import s from "./UserSetsModal.module.css";
import {
  updateUserInfo,
  updateUserAvatar,
  deleteUserAvatar,
  fetchCurrentUser,
} from "../../redux/user/operations";
import { selectUser } from "../../redux/user/selectors";
import toast from "react-hot-toast";
import { Icon } from "../Icon/Icon";

const getAvatarId = (url) => {
  if (!url) return null;
  const match = url.match(/\/([^/]+)\.webp$/);
  return match ? match[1] : null;
};

const UserSetsModal = ({ onClose }) => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const [name, setName] = useState("");
  const [currency, setCurrency] = useState("USD");
  const [avatar, setAvatar] = useState(null);
  const [avatarPreview, setAvatarPreview] = useState(null);
  const [isAvatarLoading, setIsAvatarLoading] = useState(false);

  const fileInputRef = useRef(null);

  useEffect(() => {
    setName(user.name || "");
    setCurrency(user.currency || "USD");
    setAvatarPreview(user.avatarUrl || null);
  }, [user]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  useEffect(() => {
    return () => {
      if (avatarPreview) {
        URL.revokeObjectURL(avatarPreview);
      }
    };
  }, [avatarPreview]);

  const handleBackdropClick = (e) => {
    if (e.target.classList.contains(s.backdrop)) onClose();
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setAvatar(file);
    const previewURL = URL.createObjectURL(file);
    setAvatarPreview(previewURL);
  };

  const handleAvatarUpload = async () => {
    if (!avatar) {
      fileInputRef.current?.click();
      return;
    }

    setIsAvatarLoading(true);
    try {
      await dispatch(updateUserAvatar(avatar)).unwrap();
      toast.success("Avatar updated!");
      setAvatar(null);
      dispatch(fetchCurrentUser());
    } catch (err) {
      console.log(err);
      toast.error("Failed to upload avatar");
    } finally {
      setIsAvatarLoading(false);
    }
  };

  const handleAvatarRemove = async () => {
    const avatarId = getAvatarId(user.avatarUrl);
    if (!avatarId) return;

    setIsAvatarLoading(true);
    try {
      await dispatch(deleteUserAvatar(avatarId)).unwrap();
      toast.success("Avatar removed!");
      setAvatarPreview(null);
      dispatch(fetchCurrentUser());
    } catch (err) {
      console.log(err);
      toast.error("Failed to delete avatar");
    } finally {
      setIsAvatarLoading(false);
    }
  };

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      await dispatch(updateUserInfo({ name, currency })).unwrap();
      toast.success("User info updated!");
      dispatch(fetchCurrentUser());
      onClose();
    } catch (err) {
      console.error(err);
      toast.error("Failed to update user info");
    }
  };

  return (
    <div className={s.backdrop} onClick={handleBackdropClick}>
      <form onSubmit={handleSave} className={s.modalForm}>
        <h3 className={s.modalTitle}>Profile settings</h3>
        <button className={s.modalCloseBtn} onClick={onClose}>
          <Icon
            name="close"
            className={s.bgImageWrapper__iconItem20}
            size="24"
          />
        </button>

        <div className={s.modalAvatarPreviewWrap}>
          {avatarPreview ? (
            <img
              className={s.modalAvatarPreviewImg}
              src={avatarPreview}
              alt="User avatar"
              width={100}
            />
          ) : (
            <Icon
              name="user"
              className={s.bgImageWrapper__iconItem7}
              size="38"
            />
          )}
        </div>

        <div className={s.avatarChangeWrap}>
          <button
            className={s.modalUplAvaBtn}
            type="button"
            onClick={handleAvatarUpload}
            disabled={isAvatarLoading}
          >
            Upload new photo
          </button>

          <input
            className={s.modalUplInput}
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            ref={fileInputRef}
            onChange={handleAvatarChange}
            disabled={isAvatarLoading}
          />

          <button
            className={s.modalRemAvaBtn}
            type="button"
            onClick={handleAvatarRemove}
            disabled={isAvatarLoading}
          >
            Remove
          </button>
        </div>

        <div className={s.modalNameCurrWrap}>
          <label className={s.modalCurrChangeLabel}>
            <select
              className={s.modalCurrChangeSelect}
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
            >
              <option value="uah">UAH</option>
              <option value="usd">USD</option>
              <option value="eur">EUR</option>
            </select>
          </label>
          <label className={s.modalNameChangeLabel}>
            <input
              className={s.modalNameChangeInput}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
        </div>

        <button className={s.modalSaveBtn} type="submit">
          Save
        </button>
      </form>
    </div>
  );
};

export default UserSetsModal;
