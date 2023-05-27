// eslint-disable-next-line
import React from "react";
import { useLocation } from "react-router";

export default function SaleBook() {
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
        d="M7.79102 13.0625C7.79102 14.8225 9.23935 16.2708 10.9993 16.2708C12.7593 16.2708 14.2077 14.8225 14.2077 13.0625"
        stroke={pathname === "/sale-books" ? "#0D3B66" : "#757575"}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.07615 1.8335L4.75781 5.161"
        stroke={pathname === "/sale-books" ? "#0D3B66" : "#757575"}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.9238 1.8335L17.2422 5.161"
        stroke={pathname === "/sale-books" ? "#0D3B66" : "#757575"}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1.83398 7.19564C1.83398 5.4998 2.74148 5.3623 3.86898 5.3623H18.1323C19.2598 5.3623 20.1673 5.4998 20.1673 7.19564C20.1673 9.16647 19.2598 9.02897 18.1323 9.02897H3.86898C2.74148 9.02897 1.83398 9.16647 1.83398 7.19564Z"
        stroke={pathname === "/sale-books" ? "#0D3B66" : "#757575"}
        strokeWidth="1.5"
      />
      <path
        d="M3.20898 9.1665L4.50148 17.0865C4.79482 18.8648 5.50065 20.1665 8.12232 20.1665H13.6498C16.5007 20.1665 16.9223 18.9198 17.2523 17.1965L18.7923 9.1665"
        stroke={pathname === "/sale-books" ? "#0D3B66" : "#757575"}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
