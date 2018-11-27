import React from "react";
import Loadable from "react-loadable";

const LoadableResults = Loadable({
  loader: () => import("./Results"),
  loading: () => null,
  render(loaded, props) {
    let Component = loaded.default;
    return <Component {...props} />;
  }
});

const LoadableSearch = Loadable({
  loader: () => import("./SearchVideo"),
  loading: () => null
});

export default function index() {
  return (
    <div>
      <LoadableSearch />
      <LoadableResults />
    </div>
  );
}
