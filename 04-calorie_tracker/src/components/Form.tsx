import { useState, type Dispatch, useEffect } from "react"
import { v4 as uuidV4} from 'uuid';
import { categories } from "../data/categories"
import type { Activity } from "../types";
import type { ActivityActions, ActivityState } from "../reducers/activityReducer";

type FormProps = {
    dispatch: Dispatch<ActivityActions>,
    state: ActivityState
}

const initialState : Activity = {
    id: uuidV4(),
    category: 1,
    name: '',
    calories: 0
}

const Form = ({ dispatch, state }: FormProps) => {

    const [activity, setActivity] = useState<Activity>(initialState);

    useEffect( () => {
      if(state.activeId){
        const selectedActivity = state.activities.filter( stateActivity => stateActivity.id === state.activeId )[0]
        setActivity(selectedActivity)
      }
    }, [state.activeId] )

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLInputElement>) => {
        const isNumberField = ['category', 'calories'].includes(e.target.id);

        setActivity({
            ...activity,
            [e.target.id]: isNumberField ? +e.target.value : e.target.value
        });
    }

    const isValidActivity = () => {
        const { name, calories } = activity;
        return name.trim() !== '' && calories > 0;
    }

    const handlesubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        dispatch({ type: 'save-activity', payload: { newActivity: activity } })

        setActivity({
            ...initialState,
            id: uuidV4()
        })
    }

    return (
        <form
            className="space-y-5 bg-[#1e2939] border-[#273342] border-[1px] shadow p-10 rounded-lg drop-shadow-xl"
            onSubmit={handlesubmit}
        >
            <div className="grid grid-cols-1 gap-3">
                <label htmlFor="category" className="text-[#5b6778] font-bold">Categoría:</label>
                <select
                    className="border-[#273342] border-[1px] p-2 rounded-lg w-full bg-[#333c4b] text-white font-bold"
                    id="category"
                    value={activity.category}
                    onChange={handleChange}
                >
                    {
                        categories.map(category => (
                            <option
                                key={category.id}
                                value={category.id}
                                className="text-white font-bold"
                            >
                                {category.name}
                            </option>
                        ))
                    }
                </select>
            </div>

            <div className="grid grid-cols-1 gap-3">
                <label htmlFor="name" className="text-[#5b6778] font-bold">Actividad:</label>
                <input
                    id="name"
                    type="text"
                    className="text-white border-[#273342] border-[1px] p-2 rounded-lg w-full bg-[#333c4b]"
                    placeholder="Ej. Comida, Jugo de Naranja, Ensalada, Ejercicio, Pesas, Bicicleta"
                    value={activity.name}
                    onChange={handleChange}
                />
            </div>

            <div className="grid grid-cols-1 gap-3">
                <label htmlFor="calories" className="text-[#5b6778] font-bold">Calorias:</label>
                <input
                    id="calories"
                    type="number"
                    className="text-white border-[#273342] border-[1px] p-2 rounded-lg w-full bg-[#333c4b]"
                    placeholder="Calorias Ej. 300 o 500"
                    value={activity.calories}
                    onChange={handleChange}
                />
            </div>

            <input
                type="submit"
                className="bg-blue-500 cursor-pointer hover:bg-blue-400 w-full p-2 font-bold uppercase text-white disabled:opacity-10 disabled:cursor-not-allowed"
                value={activity.category === 1 ? 'Guardar Comida' : 'Guardar Ejercicio'}
                disabled={!isValidActivity()}
            />
        </form>
    )
}

export default Form