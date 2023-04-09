import React from 'react'
import { useRouter } from 'next/router';

export const ProductItem = () => {
  // const router = useRouter()
  const { query: { productId } } = useRouter()

  return (
    // <div>roductItem : { Router.query.productId }</div>
    <div>roductItem : { productId }</div>
  )
}

export default ProductItem;
