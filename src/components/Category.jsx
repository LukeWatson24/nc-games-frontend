import { Link } from "react-router-dom";
import styles from "../styles/home.module.scss";

function Category({ category }) {
  return (
    <Link to={`/reviews?category=${category.slug}`} className={styles.category}>
      <h3>{category.slug}</h3>
      <p>{category.description}</p>
    </Link>
  );
}

export default Category;
