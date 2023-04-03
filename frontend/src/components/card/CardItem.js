import { Link } from "react-router-dom";

import styles from "./CardItem.module.css";

const CardItem = (props) => {
  return (
    <>
      <li className={styles.item}>
        <Link className={styles.itemLink} to={props.path}>
          <figure className={styles.imageWraps} data-category={props.label}>
            <img className={styles.image} alt="Food" src={props.src} />
          </figure>
          <div className={styles.itemInfo}>
            <h5 className={styles.text}>{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
};

export default CardItem;
