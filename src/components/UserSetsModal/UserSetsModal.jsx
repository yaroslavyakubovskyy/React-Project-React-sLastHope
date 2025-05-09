// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import s from "./UserSetsModal.module.css";
// import {
//   updateUserInfo,
//   updateUserAvatar,
//   deleteUserAvatar,
//   fetchCurrentUser,
// } from "../../redux/user/operations";
// import { selectUser } from "../../redux/user/selectors";
// import toast from "react-hot-toast";

// const UserSetsModal = ({ onClose }) => {
//   const dispatch = useDispatch();
//   const user = useSelector(selectUser);

//   const [name, setName] = useState("");
//   const [currency, setCurrency] = useState("USD");
//   const [avatar, setAvatar] = useState(null);
//   const [preview, setPreview] = useState(null);

//   useEffect(() => {
//     setName(user.name || "");
//     setCurrency(user.currency || "USD");
//     setPreview(user.avatarUrl || null);
//   }, [user]);

//   const handleBackdropClick = (e) => {
//     if (e.target.classList.contains(s.backdrop)) onClose();
//   };

//   const handleKeyDown = (e) => {
//     if (e.key === "Escape") onClose();
//   };

//   useEffect(() => {
//     document.addEventListener("keydown", handleKeyDown);
//     return () => document.removeEventListener("keydown", handleKeyDown);
//   }, []);

//   const handleAvatarChange = (e) => {
//     const file = e.target.files[0];
//     if (!file) return;
//     setAvatar(file);
//     setPreview(URL.createObjectURL(file));
//   };

//   const handleAvatarUpload = async () => {
//     if (!avatar) return;
//     const formData = new FormData();
//     formData.append("avatar", avatar);
//     try {
//       await dispatch(updateUserAvatar(formData)).unwrap();
//       toast.success("Avatar updated!");
//       dispatch(fetchCurrentUser());
//     } catch (err) {
//       console.log(err);
//       toast.error("Failed to upload avatar");
//     }
//   };

//   const handleAvatarRemove = async () => {
//     const url = user.avatarUrl;
//     const parts = url?.split("/");
//     const filename = parts?.[parts.length - 1]?.split(".")[0];

//     if (!filename) return;

//     try {
//       await dispatch(deleteUserAvatar(filename)).unwrap();
//       setPreview(null);
//       setAvatar(null);
//       toast.success("Avatar removed!");
//       dispatch(fetchCurrentUser());
//     } catch (err) {
//       console.log(err);
//       toast.error("Failed to delete avatar");
//     }
//   };

//   const handleSave = async (e) => {
//     e.preventDefault();
//     try {
//       await dispatch(updateUserInfo({ name, currency })).unwrap();
//       toast.success("User info updated!");
//       dispatch(fetchCurrentUser());
//       onClose();
//     } catch (err) {
//       console.log(err);
//       toast.error("Failed to update user info");
//     }
//   };

//   return (
//     <div className={s.backdrop} onClick={handleBackdropClick}>
//       <form onSubmit={handleSave} className={s.modal_content}>
//         <label>
//           Name:
//           <input value={name} onChange={(e) => setName(e.target.value)} />
//         </label>

//         <label>
//           Currency:
//           <select
//             value={currency}
//             onChange={(e) => setCurrency(e.target.value)}
//           >
//             <option value="uah">UAH</option>
//             <option value="usd">USD</option>
//             <option value="eur">EUR</option>
//           </select>
//         </label>

//         <div className={s.avatar_section}>
//           {preview && <img src={preview} alt="avatar" width={80} />}
//           <input type="file" accept="image/*" onChange={handleAvatarChange} />
//           <button type="button" onClick={handleAvatarUpload}>
//             Upload new photo
//           </button>
//           <button type="button" onClick={handleAvatarRemove}>
//             Remove
//           </button>
//         </div>

//         <button type="submit">Save</button>
//       </form>
//     </div>
//   );
// };

// export default UserSetsModal;
import React, { useEffect, useState } from "react";
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

// функція для отримання avatarId з URL
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
  const [preview, setPreview] = useState(null);

  useEffect(() => {
    setName(user.name || "");
    setCurrency(user.currency || "USD");
    setPreview(user.avatarUrl || null);
  }, [user]);

  const handleBackdropClick = (e) => {
    if (e.target.classList.contains(s.backdrop)) onClose();
  };

  const handleKeyDown = (e) => {
    if (e.key === "Escape") onClose();
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setAvatar(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleAvatarUpload = async () => {
    if (!avatar) return;
    try {
      await dispatch(updateUserAvatar(avatar)).unwrap();
      toast.success("Avatar updated!");
      setAvatar(null);
      dispatch(fetchCurrentUser());
    } catch (err) {
      console.log(err);
      toast.error("Failed to upload avatar");
    }
  };

  const handleAvatarRemove = async () => {
    const avatarId = getAvatarId(user.avatarUrl);
    if (!avatarId) return;

    try {
      await dispatch(deleteUserAvatar(avatarId)).unwrap();
      toast.success("Avatar removed!");
      setPreview(null);
      dispatch(fetchCurrentUser());
    } catch (err) {
      console.log(err);
      toast.error("Failed to delete avatar");
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
      console.log(err);
      toast.error("Failed to update user info");
    }
  };

  return (
    <div className={s.backdrop} onClick={handleBackdropClick}>
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
            <option value="uah">UAH</option>
            <option value="usd">USD</option>
            <option value="eur">EUR</option>
          </select>
        </label>

        <div className={s.avatar_section}>
          {preview && <img src={preview} alt="avatar" width={80} />}
          <input type="file" accept="image/*" onChange={handleAvatarChange} />
          <button type="button" onClick={handleAvatarUpload}>
            Upload new photo
          </button>
          <button type="button" onClick={handleAvatarRemove}>
            Remove
          </button>
        </div>

        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default UserSetsModal;
