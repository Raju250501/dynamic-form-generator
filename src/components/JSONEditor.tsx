import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { FormSchema } from "../types/schema";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

interface JSONEditorProps {
  onChange: (schema: FormSchema) => void;
}

const JSONEditor: React.FC<JSONEditorProps> = ({ onChange }) => {
  const [json, setJson] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const updatedJson = e.target.value;
    setJson(updatedJson);

    try {
      const parsed = JSON.parse(updatedJson) as FormSchema;
      onChange(parsed); // Pass valid schema to parent
    } catch {
      // Ignore invalid JSON
    }
  };

  return (
    <div className="w-full p-4">
      <textarea
        className="w-full h-64 p-2 border rounded-md"
        placeholder="Enter JSON schema here..."
        value={json}
        onChange={handleChange}
      />
      <SyntaxHighlighter language="json" style={dracula}>
        {json || "{}"}
      </SyntaxHighlighter>
    </div>
  );
};

export default JSONEditor;
