import { useMemo } from "react"
import { OrderItem } from "../types"
import { formatCurrency } from "../helpers"

type OrderTotalsProps = {
    order: OrderItem[],
    tip: number,
    placeOrder: () => void
}
function OrderTotals({order, tip, placeOrder}: OrderTotalsProps) {

    const subTotal = useMemo(() => order.reduce((total, item) => total + (item.price * item.quantity), 0) ,[order])

    const tipAmount = useMemo(() => subTotal * tip, [tip,order])

    const totalAmount = subTotal + tipAmount;
  return (
    <>
        <div className=" space-y-3">
            <h2 className=" font-black text-2xl">Totales y propina</h2>

            <p>
                Subtotal a pagar: {" "}
                <span className=" font-bold">{formatCurrency(subTotal)}</span>
            </p>
            <p>
                Propina: {" "}
                <span className=" font-bold">{formatCurrency(tipAmount)}</span>
            </p>
            <p>
                Total a pagar: {" "}
                <span className=" font-bold">{formatCurrency(totalAmount)}</span>
            </p>

        </div>

        <button
        className="w-full bg-black p-3 uppercase text-white font-bold mt-10"
            disabled ={totalAmount === 0}
            onClick={placeOrder}
        >
            Guardar Orden
        </button>
    </>
  )
}

export default OrderTotals