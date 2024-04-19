import { Layout as AntLayout } from "antd";
import { PropsWithChildren } from "react";

export default function Layout(props: PropsWithChildren) {
  return <AntLayout>{props.children}</AntLayout>;
}
