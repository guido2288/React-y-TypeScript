import type { MenuItem } from "../types"

type MenuItemProps = {
  item: MenuItem,
  addItem: (item : MenuItem) => void
}

const MenuItems = ({ item, addItem }: MenuItemProps) => {
  return (
    <button
      className="text-[#333333] border-2 border-[#8E44AD] w-full p-3 flex justify-between hover:bg-[#cc9ae2] cursor-pointer italic"
      onClick={() => addItem(item)}
    >
      <p>{item.name}</p>
      <p className="font-black text-[#333333]">${item.price}</p>
    </button>
  )
}

export default MenuItems