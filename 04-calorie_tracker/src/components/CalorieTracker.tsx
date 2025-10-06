import { useMemo } from "react"
import type { Activity } from "../types"

type CalorieTrackerProps = {
    activities : Activity[]
}

const CalorieTracker = ({ activities } : CalorieTrackerProps ) => {

    const caloriesConsumed = useMemo( () => activities.reduce(( total, activity ) => activity.category == 1 ? total + activity.calories : total, 0) , [activities] );
    const caloriesBurned = useMemo( () => activities.reduce(( total, activity ) => activity.category == 2 ? total + activity.calories : total, 0) , [activities] );
    const netCalories = useMemo( () => caloriesConsumed - caloriesBurned  , [activities] );

  return (
    
    <>
        <h2 className="text-5xl font-black text-center text-white">Resumen de Calorias</h2>

        <div className="flex justify-around items-center  mt-10">
            
            <p className="text-2xl font-black text-white">Consumidas <span className="text-2xl font-black text-pink-400">{caloriesConsumed}</span></p>

            <p className="text-2xl font-black text-white">Quemadas <span className="text-2xl font-black text-teal-200">{caloriesBurned}</span></p>

            <p className="text-2xl font-black text-white">Diferencia <span className="text-2xl font-black text-blue-500">{netCalories}</span></p>
        </div>

        
    </>
  )
}

export default CalorieTracker