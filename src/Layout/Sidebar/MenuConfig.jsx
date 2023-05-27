import Dashboard from "../../Assets/Icons/Dashboard";
import AddBook from "../../assets/Icons/AddBook";
import AllBook from "../../assets/Icons/AllBook";
import SaleBook from "../../assets/Icons/SaleBook";

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
    icon: <AllBook />,
  },
  {
    id: 3,
    title: "Add Books",
    link: "/add-books",
    icon: <AddBook />,
  },
  {
    id: 4,
    title: "Sale Books",
    link: "/sale-books",
    icon: <SaleBook />,
  }
];

export default menuConfig;