import React, { useMemo } from "react"
import { PencilSquareIcon, XCircleIcon } from '@heroicons/react/24/outline'
import type { Activity } from "../types"
import { categories } from "../data/categories"
import type { ActivityActions } from "../reducers/activityReducer"

type ActivityListProps = {
  activities: Activity[],
  dispatch: React.Dispatch<ActivityActions>
}

const ActivityList = ({ activities, dispatch }: ActivityListProps) => {

  const categoryName = useMemo(() =>
    (category: Activity['category']) => categories.map(cat => cat.id === category ? cat.name : '')
    , [activities]);

  const isEmptyActivities = useMemo( () => activities.length ===0 , [activities] )

  return (
    <>
      <h2 className="text-lg font-bold text-white">Comida y Actividades</h2>
      {
        isEmptyActivities 
        ? <p className="text-center text-white">No hay actividades aún...</p> 
        :

        activities.map(activity => (
          <div key={activity.id} className=" mt-5 flex justify-between bg-[#1e2939] border-[#273342] border-[1px] shadow p-10 rounded-lg drop-shadow-xl">
            <div className="space-y-2 relative">
              <p className={`absolute -top-8 -left-8 px-10 py-2 text-[#1e2939] uppercase font-bold rounded-lg drop-shadow-xl ${activity.category === 1 ? 'bg-pink-400' : 'bg-teal-200'} `}>{categoryName(activity.category)}</p>
              <p className="font-bold mt-4 text-2xl text-white">{activity.name}</p>
              <p className="font-black text-4xl text-blue-500">{activity.calories} Calorias</p>
            </div>

            <div className="flex gap-5 items-center absolute top-2 right-2">
              <button
                onClick={() => dispatch({ type: "set-activeId", payload: { id: activity.id } })}
              >
                <PencilSquareIcon
                  className="h-6 w-6 text-blue-50 cursor-pointer"
                />
              </button>
              <button
                onClick={() => dispatch({ type: "delete-activity", payload: { id: activity.id } })}
              >
                <XCircleIcon
                  className="h-6 w-6 text-red-500 cursor-pointer"
                />
              </button>
            </div>

          </div>
        ))
      }
    </>
  )
}

export default ActivityList