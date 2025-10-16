import type { Dispatch } from "react"
import type { OrderActions } from "../reducers/order-reducer"
import type { MenuItem } from "../types"

type MenuItemProps = {
  item: MenuItem,
  dispatch :  Dispatch< OrderActions >
}

const MenuItems = ({ item, dispatch }: MenuItemProps) => {
  return (
    <button
      className="text-[#333333] border-2 border-[#8E44AD] w-full p-3 flex justify-between hover:bg-[#cc9ae2] cursor-pointer italic"
      onClick={() => dispatch( {type: 'add-item', payload: {item}} )}
    >
      <p>{item.name}</p>
      <p className="font-black text-[#333333]">${item.price}</p>
    </button>
  )
}

export default MenuItems