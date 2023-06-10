// import '../styles/globals.css'
// import { Inter } from 'next/font/google'
import { Fragment, ReactNode, useState } from "react";
import { Web3Button, Web3NetworkSwitch } from "@web3modal/react";
import Link from "next/link";
import { useRouter } from "next/router";

// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Solar Fund",
  description: "Created during EthPRague '23",
};

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export default function Layout({ children, className }: ContainerProps) {
  const router = useRouter();

  const handleClick = (e: any, href) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <div className="w-full navbar bg-base-300">
          <div className="flex-none lg:hidden">
            <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="flex-1 px-2 mx-2">Solar Fund</div>
          <div className="flex-none hidden lg:block">
            <ul className="menu menu-horizontal gap-2">
              <li>
                <Link href="/">
                  <a onClick={(event) => handleClick(event, "/")}>Home</a>
                </Link>
              </li>
              <li>
                <Link href="/charities">
                  <a onClick={(event) => handleClick(event, "/charities")}>
                    Charities
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/hunt">
                  <a onClick={(event) => handleClick(event, "/hunt")}>
                    Treasure Hunts
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="mr-2">
                  <a onClick={(event) => handleClick(event, "/dashboard")}>
                    Dashboard
                  </a>
                </Link>
              </li>

              <Web3Button icon="show" label="Connect Wallet" balance="show" />
            </ul>
          </div>
        </div>
        <div className="">{children}</div>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-base-200 gap-2">
          <li>
            <Link href="/">
              <a onClick={(event) => handleClick(event, "/")}>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/charities">
              <a onClick={(event) => handleClick(event, "/charities")}>
                Charities
              </a>
            </Link>
          </li>
          <li>
            <Link href="/hunt">
              <a onClick={(event) => handleClick(event, "/hunt")}>
                Treasure Hunts
              </a>
            </Link>
          </li>
          <li>
            <Link href="/dashboard" className="mr-2">
              <a onClick={(event) => handleClick(event, "/dashboard")}>
                Dashboard
              </a>
            </Link>
          </li>

          <Web3Button icon="show" label="Connect Wallet" balance="show" />
        </ul>
      </div>
    </div>
  );
}
