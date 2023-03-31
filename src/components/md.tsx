/**
 * create a component that renders from a markdown file passed as a prop
 */
// Path: src/components/md.tsx
// import ReactMarkdown from "react-markdown";
// import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// import { dark } from "react-syntax-highlighter/dist/cjs/styles/prism";
//
// const components = {
//   code({ node, inline, className, children, ...props }) {
//     const match = /language-(\w+)/.exec(className || "");
//     return !inline && match ? (
//       <SyntaxHighlighter
//         children={String(children).replace(/\n$/, "")}
//         style={dark}
//         language={match[1]}
//         PreTag="div"
//         {...props}
//       />
//     ) : (
//       <code className={className} {...props}>
//         {children}
//       </code>
//     );
//   },
// };
//
// const Md = ({ children }) => {
//   return <ReactMarkdown components={components}>{children}</ReactMarkdown>;
// };
//
// export default Md;
