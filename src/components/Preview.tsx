'use client';

import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import Highlighter from "./Highlighter";

const Preview = () => {
  const code = `
    import { ReactNode } from "react";
    type Props = {
      children: ReactNode;
      onClick: () => void;
    }
    const Button : React.FC<Props> = ({ children, onClick }) => {
      return (
        <button onClick={onClick}>{children}</button>
      );
    }
    export default Button;
  `;
  return (
    <Highlighter>
      {code}
    </Highlighter>
  );
};

export default Preview;
