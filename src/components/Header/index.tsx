"use client";

import { RootState } from "@/redux/features/tabmenu";
import { setMyVariable } from "@/redux/features/tabmenu/tabmenuSlice";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const myVariable = useSelector(
    (state: RootState) => state.counter.myVariable
  );
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setMyVariable("home"));
  };
  const handleClick2 = () => {
    dispatch(setMyVariable("peminjaman"));
  };

  console.log(`cekkk ${myVariable}`);
  console.log(`cesghdskj ${myVariable == "peminjaman" ? "active" : "nono"}`);
  return (
    <>
      <button onClick={handleClick}>peminjam</button>
      <button onClick={handleClick2}>{myVariable}</button>
      {/* +         (myVariable === "peminjaman" ? "inline-block p-4 text-blue-600 bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500" : "inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300") */}
      <ul className="flex flex-wrap border-b border-gray-200">
        <li className="mr-2">
          <Link
            href="/"
            aria-current="page"
            className={
              myVariable === "home"
                ? "inline-block p-4 text-blue-600 bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500"
                : "inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"
            }
          >
            Buku
          </Link>
        </li>
        <li className="mr-2">
          <Link
            href="/peminjaman"
            className={
              myVariable === "peminjaman"
                ? "inline-block p-4 text-blue-600 bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500"
                : "inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"
            }
          >
            Peminjaman
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Header;
