import type { Metadata } from "next";
import "./adminstyles.css";
import SideNav from "@/app/admin/components/SideNav";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import MobileHeader from "../customer/components/MobileHeader";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const session = await auth()
  // const notUserOrAdmin = ['therapist', 'client']

  // if (!session) {
  //   redirect("/login")
  // }
  // else if (!notUserOrAdmin.includes((session as any)?.user?.role)) {
    return (
      <html lang="en">
        <body>
          <div className="flex h-screen flex-col lg:flex-row lg:overflow-hidden">
            <div className="flex-none hidden h-[100vh] lg:block">
              <SideNav />
            </div>
            <div className="w-full lg:hidden">
              <MobileHeader />
            </div>
       
            <main className="flex-grow p-[15px] md:overflow-y-auto lg:p-[40px]">
              {children}
            </main>
          </div>
        </body>
      </html>
    );
  // } else {
  //   return (
  //     <div className="p-3 bg-black h-screen text-white">
  //       You are not authorized to view this page click
  //       <Link href={'/login'} className="p-3 text-black bg-white">
  //         Login
  //       </Link>
  //     </div>
  //   );
  // }
}
