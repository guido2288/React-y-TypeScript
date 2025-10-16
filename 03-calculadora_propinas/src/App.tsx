import MenuItems from "./components/MenuItems"
import OrdersContent from "./components/OrdersContent";
import OrderTotal from "./components/OrderTotal";
import TipPercentage from "./components/TipPercentage";
import { menuItems } from "./data/db"
import { useReducer } from "react";
import { initialState, orderReducer } from "./reducers/order-reducer";

function App() {

  const [ state, dispatch ] = useReducer(orderReducer, initialState);

  return (
    <>
      <header className="bg-[#8E44AD] py-5">
        <h1 className="text-center text-4xl font-black text-[#333333] font-[serif]">Calculadora de Propinas y Consumo</h1>
      </header>

      <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2">

        <div className="p-5">
          <h2 className=" text-4xl font-black text-[#333333] font-[sans-serif] italic">Menu</h2>

          <div className="space-y-3 mt-10">
            {
              menuItems.map(item => (
                <MenuItems
                  key={item.id}
                  item={item}
                  dispatch={dispatch}
                />
              ))
            }
          </div>

        </div>

        <div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-10 text-[#333333] font-[sans-serif]">

          {
            state.order.length > 0 ?
            <>
              <OrdersContent
                order={state.order}
                dispatch={dispatch}
              />

              <TipPercentage
                dispatch={dispatch}
                tip={state.tip}
              />

              <OrderTotal
                order={state.order}
                tip={state.tip}
                dispatch={dispatch}
              />
            </>

            : <p className="text-center font-[sans-serif]">La orden esta vacia</p>
          }

        </div>

      </main>
    </>
  )
}

export default App
