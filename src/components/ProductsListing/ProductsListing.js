import React, { useContext } from "react";

import { ProductsContext } from "../../context/ProductsContext";
import ItemCard from "../ItemCard";

function ProductsListing() {
  const { products } = useContext(ProductsContext);
  return (
    <section className="row">
      {products.map((product) => (
        <ItemCard
          key={product.id}
          id={product.id}
          img={product.img}
          title={product.title}
          shortDescription={product.shortDescription}
          upVotes={product.votes.upVotes}
          downVotes={product.votes.downVotes}
          isFavorite={product.isFavorite}
        />
      ))}
    </section>
  );
}

export default ProductsListing;
