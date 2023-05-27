import Items from "../../Assets/Icons/Items";
import Zone from "../../Assets/Icons/Zone";
import Salesman from "../../Assets/Icons/Salesman";
import Dashboard from "../../Assets/Icons/Dashboard";

const menuConfig = [
  {
    id: 1,
    title: "Dashboard",
    link: "/",
    icon: <Dashboard />,
  },
  {
    id: 2,
    title: "All Books",
    link: "/all-books",
    icon: <Items />,
  },
  {
    id: 3,
    title: "Add Books",
    link: "/add-books",
    icon: <Salesman />,
  },
  {
    id: 4,
    title: "Sale Books",
    link: "/sale-books",
    icon: <Zone />,
  }
];

export default menuConfig;