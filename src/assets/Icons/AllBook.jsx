// eslint-disable-next-line
import React from "react";
import { useLocation } from "react-router";

export default function AllBook() {
  const { pathname } = useLocation();

  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.1673 15.3449V4.28072C20.1673 3.18072 19.269 2.36489 18.1782 2.45655H18.1232C16.1982 2.62155 13.274 3.60239 11.6423 4.62906L11.4865 4.72989C11.2207 4.89489 10.7807 4.89489 10.5148 4.72989L10.2857 4.59239C8.65398 3.57489 5.73898 2.60322 3.81398 2.44739C2.72315 2.35572 1.83398 3.18072 1.83398 4.27155V15.3449C1.83398 16.2249 2.54898 17.0499 3.42898 17.1599L3.69482 17.1966C5.68398 17.4624 8.75482 18.4707 10.5148 19.4332L10.5515 19.4516C10.799 19.5891 11.1932 19.5891 11.4315 19.4516C13.1915 18.4799 16.2715 17.4624 18.2698 17.1966L18.5723 17.1599C19.4523 17.0499 20.1673 16.2249 20.1673 15.3449Z"
        stroke={pathname === "/all-books" ? "#0D3B66" : "#757575"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11 5.03271V18.7827"
        stroke={pathname === "/all-books" ? "#0D3B66" : "#757575"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.10352 7.78271H5.04102"
        stroke={pathname === "/all-books" ? "#0D3B66" : "#757575"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.79102 10.5327H5.04102"
        stroke={pathname === "/all-books" ? "#0D3B66" : "#757575"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
