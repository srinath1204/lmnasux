import CollapseMenu from "./collapseMenu"
//Get Menuitems from Layout and build the navbar menu list
export default function MenuList({ menuItems }) {
  // Flex stacks the items by sideways. For Mobile we need the items to be stacked in row
  // We use flex-grow only for large devices
  return (
    <div className="text-md lg:flex-grow ">
      {
        //A Sub function to build individual menu
        menuItems.map((menuItem) => (
          <Menu key={menuItem.menu} menuItem={menuItem} />)

        )}
    </div>
  )
}
//Sub function to build the individual menu
function Menu({ menuItem }) {
  return (
    <a href={menuItem.target? menuItem.target : null} className="block ml-2 mt-4 lg:inline-block lg:mt-0 text-th-text-dark hover:text-th-background-cta mr-10">
      {menuItem.menu}
      {menuItem.subMenus ? (
        <CollapseMenu subMenus={menuItem.subMenus} />
        
      ) : null
      }
    </a>


  )
}