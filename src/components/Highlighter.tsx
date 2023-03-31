import { FC, ReactNode } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

type Props = {
  children: string | string[]
}

const Highlighter: FC<Props> = ({ children }) => {
  return (
    <SyntaxHighlighter language="javascript" style={atomDark}>
      {children}
    </SyntaxHighlighter>
  );
};

export default Highlighter;