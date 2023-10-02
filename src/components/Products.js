import React from 'react'
import {getFirestore, collection, addDoc} from 'firebase/firestore'
import data from '../data';
import { tienda } from '../utils/Store';
import appFirebase from '../credenciales'
import { useContext} from 'react';



export const Products = () => {
    const basedatos = getFirestore(appFirebase)
const {state, dispatch} = useContext(tienda)
  const {
    cart: { cartItems },
  } = state;

  const addToCart = (id)=>{

    const product = data.products.find(x => x.id === id)
    const existItem = state.cart.cartItems.find(x => x.id === product.id)
    const quantity = existItem ? existItem.quantity + 1 : 1

    dispatch({type: 'ADD_TO_CART', payload: { ...product, quantity}})
  }

  const delToCart = (id)=>{
    dispatch({type: 'CART_REMOVE_ITEM', payload: id})
  }

  //esta funcion es para guardar la venta en la api o base de datos
  const saveInfo = async()=>{
    try { 
      await addDoc(collection(basedatos, 'ventas'),{
        ...arreglo, subtotal
      })
      
    } catch (error) {
      alert('Error')
      console.log(error);
    }
    dispatch({type: 'REMOVE_CART'})
    alert('Se envio tu pedido')
  }

  const subtotal = cartItems.reduce((a,c)=> a+c.quantity*c.precio,0);
  const arreglo = cartItems;
  return (
    <div>
        <div className="container">
        <div className="row">
          <div className="col-md-8">
            {/* esta seccion es para la parte de los productos */}
            <h1 className="text-center mt-4 mb-5">🌮 Menú "taconmadre" 🌮</h1>
            <div className="row row-cols-1 row-cols-md-3 g-3">
              {data.products.map((product) => (
                <div key={product.id}>
                  <img
                    src={product.image}
                    alt=""
                    height={250}
                    width="100%"
                  />
                  <h3>{product.name}</h3>
                  <h5>{product.precio}$</h5>
                  <button
                    className="btn btn-primary"
                    onClick={() => addToCart(product.id)}
                  >
                    Agregar
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="col-md-4 ">
            {/* esta seccion es para la orden de compra */}
            <div className="card card-body mt-5 pago">
              <h3 className="text-center">Orden de compra</h3>
              {cartItems.map((item) => (
                <div key={item.id}>
                  <p>
                    <strong>{item.name}</strong> {''}
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => delToCart(item)}
                    >
                      Eliminar
                    </button>
                  </p>
                  <p>Cantidad: {item.quantity}</p>
                </div>
              ))}

              <div>
                Subtotal: ({cartItems.reduce((a, c) => a + c.quantity, 0)}) : $
                {cartItems.reduce((a, c) => a + c.quantity * c.precio, 0)}
              </div>

              {cartItems.length ? (
                <button className="btn btn-success" onClick={saveInfo}>
                  Enviar pedido
                </button>
              ) : (
                <button className="btn btn-secondary">Enviar pedido</button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products;