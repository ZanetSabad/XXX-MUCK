import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import Loader from '../../components/Loader'

const ProductPage = () => {
    const { id } = useParams()

    const [loading, setLoading] = useState(true)
    const [productInfo, setProductInfo] = useState([])

    const url = `https://apps.kodim.cz/react-2/xxxmuck/products/${id}`

    useEffect(() => {
      setLoading(true)
        fetch(url)
        .then ((response) => response.json())
        .then ((data) => {
            setProductInfo(data)
            setLoading(false)
        })
    }, [])


  return (
    <main>
      {loading ?
      <div>
        <Loader />
      </div>
      :
      <>
      
      <img src={productInfo.image} alt={productInfo.name}/>
      <p>{productInfo.name}</p>
      
      </>
      }

      <NavLink to="/" >Vrať se na úvodní stránku</NavLink>
    </main>
  )
}

export default ProductPage
