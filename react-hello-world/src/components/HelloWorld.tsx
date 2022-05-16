import { useState } from "react";

interface IHelloWorldProps {
  msg: string;
}

export function HelloWorld(props: IHelloWorldProps) {
  // const [msg, setMsg] = useState("Hello world");

  return (
    <>
      <p>{props.msg}</p>
    </>
  );
}
