import React from 'react'

const ProductItem = ({ data, addToCart }) => {
  let { id, name, image, descripcion, price } = data;
  return (

    <>

      <div className='card'>

        <img src={image} />

        <div className='card-title'>
          <h4 >{name}</h4>
        </div>

        <div className='card-details'>

          <button onClick={() => addToCart(id)}>Agregar</button>

          <div className='details'>
            <h4 >{name}</h4>
            <p>{descripcion}</p>
            <h3>${price}.00</h3>
          </div>

        </div>
      </div>


    </>


  )
}

export default ProductItem