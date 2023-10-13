"use client";

import { useMemo } from "react";
import { useSelector } from "react-redux";
import useInfiniteScroll from "react-infinite-scroll-hook";
import { getCustomers } from "store/features/customers";
import withRedux from "store/withRedux";
import List from "./components/List";
import Filters from "./components/Filters";

function Customers({ dispatch }) {
  const { customers, loading, error, total } = useSelector(
    (state) => state?.customers
  );

  const hasNextPage = useMemo(
    () => customers?.length < total || customers?.length === 0,
    [customers, total]
  );

  const onLoadMore = () => dispatch(getCustomers());

  const [sentryRef] = useInfiniteScroll({
    loading,
    hasNextPage,
    onLoadMore,
    disabled: !!error,
  });

  return (
    <div className="overflow-auto h-[75vh]">
      <Filters />
      <List />
      {loading || (hasNextPage && <div ref={sentryRef}>Loading...</div>)}
    </div>
  );
}

export default withRedux(Customers);
