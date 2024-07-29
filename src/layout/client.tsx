import React from "react";
import Header from "./client/header";
import Footer from "./client/footer";

import { Outlet } from "react-router-dom";

type Props = {};

const Client = (props: Props) => {
  return (
    <>
      <Header />

      <Outlet />

      <div className="mt-[px]">
        <Footer />
      </div>
    </>
  );
};

export default Client;
