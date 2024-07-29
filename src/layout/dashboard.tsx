import { Outlet } from "react-router-dom";
import Admin from "./dashboard/admin";
type Props = {};

const Dashboard = (props: Props) => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default Dashboard;
