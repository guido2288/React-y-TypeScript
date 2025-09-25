import { formatCurrency } from "../helpers"
import type { MenuItem, OrderItem } from "../types"

type OrdersContentProps = {
    order: OrderItem[]
    removeItem: (id: MenuItem['id']) => void
};



const OrdersContent = ({ order, removeItem }: OrdersContentProps) => {
    return (
        <div>
            <h2 className="font-black text-4xl">Consumo</h2>

            <div className=" space-y-3 mt-10">
                {

                    order.map(item => (
                        <div className="flex justify-between items-center border-t border-gray-200 py-5 last-of-type:border-b" key={item.id}>
                            <div>
                                <p className="text-lg">{item.name} - {formatCurrency(item.price)}</p>
                                <p className="font-black">Cantidad: {item.quantity} - {formatCurrency(item.price * item.quantity)}</p>
                            </div>
                            <button
                                className=" bg-red-600 w-8 h-8 rounded-full text-white font-black cursor-pointer"
                                onClick={() => removeItem(item.id)}
                            >X</button>
                        </div>
                    ))

                }
            </div>
        </div>
    )
}

export default OrdersContent