import { PuffLoader } from "react-spinners";
import styles from "./LoaderSpinner.module.css";

const LoaderSpinner = () => {
  return (
    <div className={styles.loaderWrapper}>
      <PuffLoader color="#0EBB69" loading size={60} speedMultiplier={2} />
    </div>
  );
};

export default LoaderSpinner;
