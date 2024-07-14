import { formatCurrency } from "../helpers";
import { MenuItem, OrderItem } from "../types"

/* Este tipo indica que el valor order que recibe la funcion es un arreglo de orderItem */
type OrderContentsProps = {
    order: OrderItem[];
    removeItem: (id: MenuItem["id"]) => void
}

export default function OrderContents({order, removeItem} : OrderContentsProps) {
  return (
    <div>
        <h2 className=" font-black text-4xl">Consumo</h2>

        <div className=" space-y-3 mt-10">
            {order.length === 0?
                <p className=" text-center">La orden Esta vacia</p>
               : 
               (
                order.map(item => (
                    <div 
                        className=" flex justify-between py-5 border-t border-gray-200 last-of-type:border-b items-center" 
                        key={item.id}
                    >
                        <div>
                            <p className=" text-lg">
                               {item.name} - {formatCurrency(item.price)}
                            </p>
                            <p className=" font-black">
                                Cantidad: {item.quantity} - {formatCurrency(item.price * item.quantity)}
                            </p>
                        </div>

                        <button 
                            className=" bg-red-600 h-8 w-8 rounded-full text-white font-black hover:bg-red-900 transition-colors duration-300"
                            onClick = {() => removeItem(item.id)}
                        >
                            X
                        </button>
                    </div>

                ))
               )
                    
        }
        </div>
    </div>
  )
}
