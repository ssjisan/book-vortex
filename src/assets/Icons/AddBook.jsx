// eslint-disable-next-line
import React from "react";
import { useLocation } from "react-router";

export default function AddBook() {
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
        d="M1.83398 12.833V4.27155C1.83398 3.18072 2.72315 2.35572 3.81398 2.44739C5.73898 2.60322 8.65398 3.57489 10.2857 4.59239L10.5148 4.72989C10.7807 4.89489 11.2207 4.89489 11.4865 4.72989L11.6423 4.62906C13.274 3.60239 16.1982 2.62155 18.1232 2.45655H18.1782C19.269 2.36489 20.1673 3.18072 20.1673 4.28072V15.3449C20.1673 16.2249 19.4523 17.0499 18.5723 17.1599L18.2698 17.1966C16.2715 17.4624 13.1915 18.4799 11.4315 19.4516C11.1932 19.5891 10.799 19.5891 10.5515 19.4516L10.5148 19.4332"
        stroke={pathname === "/add-books" ? "#0D3B66" : "#757575"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11 5.03271V18.7827"
        stroke={pathname === "/add-books" ? "#0D3B66" : "#757575"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.10352 7.78271H5.04102"
        stroke={pathname === "/add-books" ? "#0D3B66" : "#757575"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.79102 10.5327H5.04102"
        stroke={pathname === "/add-books" ? "#0D3B66" : "#757575"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.16732 17.4167C9.16732 18.1042 8.9748 18.7551 8.63564 19.3051C8.46147 19.5984 8.25063 19.8642 8.00313 20.075C7.97563 20.1117 7.94816 20.1392 7.91149 20.1667C7.26982 20.7442 6.42648 21.0833 5.50065 21.0833C4.38232 21.0833 3.38312 20.5791 2.72312 19.7908C2.70479 19.7633 2.67734 19.745 2.65901 19.7175C2.54901 19.5892 2.44817 19.4517 2.36567 19.3051C2.0265 18.7551 1.83398 18.1042 1.83398 17.4167C1.83398 16.2617 2.36565 15.2258 3.20898 14.5567C3.36482 14.4283 3.5298 14.3184 3.70396 14.2267C4.23563 13.9242 4.84982 13.75 5.50065 13.75C6.41732 13.75 7.2423 14.08 7.88396 14.6391C7.99396 14.7216 8.09481 14.8225 8.18648 14.9234C8.79148 15.5834 9.16732 16.4542 9.16732 17.4167Z"
        stroke={pathname === "/add-books" ? "#0D3B66" : "#757575"}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.86641 17.3984H4.13477"
        stroke={pathname === "/add-books" ? "#0D3B66" : "#757575"}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.5 16.0601V18.8009"
        stroke={pathname === "/add-books" ? "#0D3B66" : "#757575"}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
