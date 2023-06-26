import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter()

  const handleClick = () => {
    console.log('Placing your order');
    // router.push('/product')
    router.replace('/product')
  }
  return (
    <div>
      <h2>Home Page</h2>
      <Link href="/blog">Blog</Link><br/>
      <Link href="/product">Products</Link>
      <br/>
      <button onClick={handleClick}>
        place order
      </button>
    </div>
  );
}
