import React from "react";

export default function ProductCard({
  product: { image, name, price, category },
}) {
  return (
    <article className="group w-full h-full">
      <div className="w-full aspect-square mb-[12px] rounded-lg overflow-hidden">
        <img
          src={image[0]}
          alt={`${name}의 썸네일`}
          className="w-full h-full object-cover transition-transform group-hover:scale-110"
        />
      </div>

      <p className="text-[12px] text-gray-dark mb-[2px]">{category}</p>

      <div>
        <h3 className="text-[14px] text-secondary mb-[4px] line-clamp-2 transition-colors group-hover:text-gray-dark">
          {name}
        </h3>
        <strong className="text-[18px] text-dark">
          {price.toLocaleString()}
        </strong>
      </div>
    </article>
  );
}
