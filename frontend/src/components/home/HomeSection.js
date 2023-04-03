import styles from "./HomeSection.module.css";

const HomeSection = () => {
  return (
    <div className={styles.homeContainer}>
      <h1>Welcome to your recipe book</h1>
      <p className={styles.homeText}>Let's get started!</p>
    </div>
  );
};

export default HomeSection;
