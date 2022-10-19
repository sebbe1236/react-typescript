import React from "react";

type Props = {
  children?: string;
};

function Heading({ children }: Props) {
  return <h2>{children}</h2>;
}

export default Heading;
