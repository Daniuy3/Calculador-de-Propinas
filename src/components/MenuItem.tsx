import type { MenuItem } from "../types"

type MenuItemProps = {
    item: MenuItem,
    addItem: (addItem: MenuItem) => void 
}

function MenuItem({item, addItem} : MenuItemProps) {
  return (
    <button
        className=" border-2 border-teal-400 w-full p-3 flex justify-between hover:bg-teal-100 transition-colors duration-300"

        onClick={() => addItem(item)}
    >
        <p>{item.name}</p>
        <p className=" font-black">${item.price}</p>
    </button>
  )
}

export default MenuItem