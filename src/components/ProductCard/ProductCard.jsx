import React from "react";
import { Link } from "react-router-dom";
import styles from "./ProductCard.module.scss";

export default function ProductCard({
  product: {
    image: [{ url }],
    name,
    price,
    category,
    id,
  },
  product,
}) {
  return (
    <article className={styles.card}>
      <Link className={styles.link} to={`/product/${id}`} state={{ product }}>
        <div className={styles["image-box"]}>
          <img src={url} alt={`${name}의 썸네일`} />
        </div>

        <p className={styles.category}>{category}</p>

        <div>
          <h3 className={styles.title}>{name}</h3>
          <strong className={styles.price}>{price.toLocaleString()}</strong>
        </div>
      </Link>
    </article>
  );
}
