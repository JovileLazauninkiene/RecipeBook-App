import CardItem from "./CardItem";

import styles from "./Cards.module.css";

const Cards = () => {
  return (
    <div className={styles.cards}>
      <div className={styles.container}>
        <h2 className={styles.highlight}>Here is some inspiration</h2>
        <div className={styles.wrapper}>
          <ul className={styles.items}>
            <CardItem
              src="/images/food-2.jpg"
              text="Creamy Tuscan chicken"
              path="/recipes"
              label="Chicken"
            />
            <CardItem
              src="/images/food-3.jpg"
              text="Easter salad"
              path="/recipes"
              label="Salad"
            />
            <CardItem
              src="/images/food-4.jpg"
              text="Italian salad"
              path="/recipes"
              label="Salad"
            />
          </ul>
          <ul className={styles.items}>
            <CardItem
              src="/images/food-5.jpg"
              text="Turkish kabobs"
              path="/recipes"
              label="Grilled meat"
            />
            <CardItem
              src="/images/food-6.jpg"
              text="Breakfast smoothie bowl"
              path="/recipes"
              label="Breakfast"
            />
            <CardItem
              src="/images/food-7.jpg"
              text="Prosciutto pizza"
              path="/recipes"
              label="Pizza"
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Cards;
