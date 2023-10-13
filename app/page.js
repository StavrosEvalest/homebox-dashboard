"use client";

import { useEffect } from "react";
import { useSelector } from "react-redux";
import { appInit } from "store/features/app";
import withRedux from "store/withRedux";

function Page({ dispatch }) {
  const { loaded } = useSelector((state) => state?.app);

  useEffect(() => {
    dispatch(appInit(true));
  }, []);

  return (
    <section>
      <h1>Dashboard {loaded && "loaded"}</h1>
    </section>
  );
}

export default withRedux(Page);
