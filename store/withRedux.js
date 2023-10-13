"use client";

import { Provider, useDispatch } from "react-redux";
import { store } from "store";

const withProvider = (Component) => (props) => {
  return (
    <Provider store={store}>
      <Component {...props} />
    </Provider>
  );
};

const withDispatch = (Component) => (props) => {
  const dispatch = useDispatch();

  const newProps = {
    ...props,
    dispatch,
  };

  return <Component {...newProps} />;
};

const withRedux = (Component) => withProvider(withDispatch(Component));

export default withRedux;
