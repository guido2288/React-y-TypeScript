import { useEffect, useMemo } from "react"
import Form from "./components/Form"
import ActivityList from "./components/ActivityList";
import CalorieTracker from "./components/CalorieTracker";
import { useActivity } from "./hooks/useActivity";

function App() {

  const { state, dispatch } = useActivity()

  useEffect(() => {
    localStorage.setItem('activities', JSON.stringify(state.activities))
  }, [state.activities])

  const canResetApp = () => useMemo(() => state.activities.length > 0, [state.activities])


  return (
    <>
      <header className=" border-b-[1px] border-[#273342] py-3">
        <div className="max-w-4xl mx-auto flex justify-between">
          <h1 className="text-center text-lg font-bold text-white uppercase">Contador de Calorias</h1>

          <button
            className="bg-blue-500 cursor-pointer hover:bg-blue-400 rounded-lg p-2 font-bold uppercase text-white disabled:opacity-10 disabled:cursor-not-allowed"
            disabled={!canResetApp()}
            onClick={() => dispatch({ type: 'restart-app' })}
          >Reiniciar</button>
        </div>
      </header>
      <section className="py-20 px-5">
        <div className="max-w-4xl mx-auto">
          <Form />
        </div>
      </section>

      <section className="mx-auto max-w-4xl mb-5 bg-[#1e2939] border-[#273342] border-[1px] shadow p-10 rounded-lg drop-shadow-xl">
        <CalorieTracker />
      </section>

      <section className="mx-auto max-w-4xl ">
        <ActivityList />
      </section>
    </>
  )
}

export default App
