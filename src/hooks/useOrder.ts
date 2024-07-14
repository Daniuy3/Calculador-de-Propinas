import { useState } from "react"
import type { MenuItem, OrderItem } from "../types"

 export default function useOrder() {

    const [order, setOrder] = useState<OrderItem[]>([])
    const [tip, setTip] = useState(0);

    const addItem = (item : MenuItem) => {
        const itemExist = order.find(orderItem => orderItem.id === item.id)
        if(itemExist){
            
            /* Se crea una copia del carrito */
            const updatedItem = [...order];

            /* Se busca el elemento para aumentar su cantidad */
            updatedItem.forEach(orderItem => {
                if(orderItem.id === item.id){
                    orderItem.quantity++
                }
            })

            /* Se actualiza la orden con la cantidad modificada */
            setOrder(updatedItem);
        }
        else{
            /* Como el item no existe en la orden se inicializa con cantidad de 1 y se añade al arreglo */
            const newItem = {...item, quantity:1}
            setOrder([...order, newItem])
        }
    }

     const removeItem =  (id : MenuItem["id"]) =>{
         setOrder(order.filter(item => item.id !== id))
    }

    const placeOrder = () => {
        setOrder([])
        setTip(0)
    }

  return {
    addItem,
    tip,
    setTip,
    order, 
    removeItem,
    placeOrder
  }
}
