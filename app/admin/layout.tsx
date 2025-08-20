import AdminSidebar from "@/components/SideBar";
import "../globals.css";
import { Toaster } from "react-hot-toast";
import { AppProvider } from "../../lib/AppContext";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <AppProvider>
          <Toaster />
          <div className="">
            <AdminSidebar />
            {children}
          </div>
        </AppProvider>
      </body>
    </html>
  );
};

export default Layout;
