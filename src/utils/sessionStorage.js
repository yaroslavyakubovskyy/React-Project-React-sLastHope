export const setItem = (password) => {
  try {
    console.log(password);
    sessionStorage.setItem("password", JSON.stringify(password));
  } catch (error) {
    console.log(error);
  }
};

export const getPassword = () => {
  try {
    const pass = JSON.parse(sessionStorage.getItem("password"));
    if (!pass) {
      return;
    }
    return pass;
  } catch (error) {
    console.log(error);
  }
};
