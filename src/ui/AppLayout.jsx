import { Outlet } from "react-router";
import Header from "./Header";

function AppLayout() {
  return (
    <div className="mx-auto flex h-screen max-w-4xl flex-col p-6">
      <Header />
      <div className="mt-6">
        <Outlet />
      </div>
    </div>
  );
}

export default AppLayout;
