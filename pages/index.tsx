import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar/Navbar'

const HomePage = () => {

  const [productList, setProductList] = useState<TProduct[]>([])
  useEffect(() => {
    window.fetch('/api/avo')
      .then((response) => response.json())
      .then(({ data, length }) => {
        setProductList(data)
      })
  }, [])

  return (
    <div>
      <p>
        Esta es la pagina de home
      </p>
      {productList.map((product) => (
        <div>{product.name} </div>
      ))}
    </div>
  )
}

export default HomePage