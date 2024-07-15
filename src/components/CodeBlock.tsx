import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

const CodeBlock = ({ code }: { code: string }) => {
  const [copy, setCopy] = useState(false);
  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopy(true);
    setTimeout(() => {
      setCopy(false);
    }, 3000);
  };
  return (
    <div
      className="max-w-2x1 min-w-[25rem] bg-[#3a404d] rounded-md
  overflow-hidden"
    >
      <div className="flex justify-between px-4 text-white text-xs items-center">
        <p className="text-sm">Expamle Code</p>
        {!copy ? (
          <button className="text-sm" onClick={copyToClipboard}>
            Copy
          </button>
        ) : (
          <p className="text-sm">Copied</p>
        )}
      </div>
      <SyntaxHighlighter
        customStyle={{ padding: "25px" }}
        language="jsx"
        style={dracula}
        wrapLines={true}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlock;
