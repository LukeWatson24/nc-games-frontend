import { useEffect, useState } from "react";
import { getCategories } from "../utils/utils";
import styles from "../styles/home.module.scss";
import Category from "./Category";

function CategoriesContainer() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    getCategories().then((res) => {
      setLoading(false);
      setCategories(res);
    });
  }, []);
  return (
    <section className={styles.cat_container}>
      <h2>
        <span className={`material-symbols-outlined ${styles.icon}`}>
          folder_open
        </span>{" "}
        Browse by category
      </h2>
      {!loading ? (
        <div className={styles.cat_wrapper}>
          {categories.map((category) => (
            <Category key={category.slug} category={category} />
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </section>
  );
}

export default CategoriesContainer;
