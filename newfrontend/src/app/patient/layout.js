import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";
import { cookies } from "next/dist/client/components/headers";
import { redirect } from "next/navigation";

export default async function DashboardLayout({ children }) {
  return (
    <>
      <Sidebar role={"patient"} />
      <div className="p-[32px] grow flex-1 sm:ml-64 flex flex-col">
        {children}
        {/* <Footer /> */}
      </div>
    </>
  );
}
