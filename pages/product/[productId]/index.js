import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function ProductDetail() {
  const router = useRouter();
  const productId = router.query.productId;


  return (
    <div>
      <Link href="/product" >
        <h3>Product Home Page</h3>
      </Link>
      <h1>Product Detail Page {productId} </h1>;
    </div>
  );
}
