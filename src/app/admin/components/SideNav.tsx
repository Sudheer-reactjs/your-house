"use client";
import { useState } from "react";
import { usePathname } from 'next/navigation';
import Link from "next/link";
import './SideNav.css';
import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";

const SideNav = () => {
  const router = useRouter();

  // const handleLogout = () => {
  //   localStorage.removeItem('authToken');
  //   router.push('https://blacktherapy.vercel.app/');
  // };

  const [isCollapsed, setIsCollapsed] = useState(false);


  const pathname = usePathname();

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };
  const isActive = (path: string) => pathname === path ? 'active' : '';
  const handleLogout = async () => {
    await signOut({ redirect: false })
    router.push('/');
  }
  return (
    <div className={`sideNav ${isCollapsed ? 'collapsed' : ''} h-[100%] overflo-custom`}>
      <div className="">
        <div className="header min-h-[46px] justify-between gap-[10px]">
          {!isCollapsed && (
            <div className="logoContainer">
              <Link href="/admin/dashboard">
              </Link>
            </div>
          )}
          <button onClick={toggleSidebar} className="hamburgerButton">
          </button>
        </div>
        <ul className="navList">
          <li className={isActive('/admin/dashboard')}>
            <Link href="/admin/dashboard">
              {!isCollapsed && <span>Dashboard</span>}
            </Link>
          </li>
          <li className={isActive('/admin/assignments')}>
            <Link href="/admin/assignments">
              {!isCollapsed && <span>Assignments</span>}
            </Link>
          </li>
          <li className={isActive('/admin/clinician')}>
            <Link href="/admin/clinician">
              {!isCollapsed && <span>Clinician</span>}
            </Link>
          </li>
          <li className={isActive('/admin/new-clinician')}>
            <Link href="/admin/new-clinician">
              {!isCollapsed && <span>Add New Clinician</span>}
            </Link>
          </li>
          <li className={isActive('/admin/client-page')}>
            <Link href="/admin/client-page">
              {!isCollapsed && <span>Client</span>}
            </Link>
          </li>
          <li className={isActive('/admin/addnew-client')}>
            <Link href="/admin/addnew-client">
              {!isCollapsed && <span>Add New Client</span>}
            </Link>
          </li>
          <li className={isActive('/admin/client-wellness')}>
            <Link href="/admin/client-wellness">
              {!isCollapsed && <span>Client Wellness</span>}
            </Link>
          </li>
          <li className={isActive('/admin/add-users')}>
            <Link href="/admin/add-users">
              {!isCollapsed && <span>Add Users</span>}
            </Link>
          </li>
          <li className={isActive('/admin/payment-request')}>
            <Link href="/admin/payment-request">
              {!isCollapsed && <span>Payment Requests</span>}
            </Link>
          </li>
          <li className={isActive('/admin/view-task')}>
            <Link href="/admin/view-task">
              {!isCollapsed && <span>View Tasks</span>}
            </Link>
          </li>
          {/* <li className={isActive('/call-logs')}>
          <Link href="/call-logs">
              <CallIcon />
              {!isCollapsed && <span>Call Log</span>}
            </Link>
          </li> */}
        </ul>
      </div>
      <div className="">
        <ul className="navList">
          <li className="!m-0 cursor-pointer flex items-center gap-2" onClick={handleLogout} >
            <span className="text-[#283C63] text-[600]">Log Out</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideNav;
