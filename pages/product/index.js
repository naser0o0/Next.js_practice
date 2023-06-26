import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

export default function ProductList({productId = 100}) {

  const router = useRouter();

 const handlerBack = () => {
    router.push('/')
  }

  return (
    <>
      <button onClick={handlerBack} >
        {/* <Link href="/">Home</Link> */}
        Back Home
      </button>

      <Link href="/product/1">
        <h2>Product 1</h2>
      </Link>
      <Link href="/product/2">
        <h2>Product 2</h2>
      </Link>
      <Link href="/product/3" replace>
        <h2>Product 3</h2>
      </Link>
      <Link href={`/product/${productId}`}>
        <h2>Product {productId}</h2>
      </Link>
    </>
  );
}
