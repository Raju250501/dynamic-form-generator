import React, { useState } from "react";
import JSONEditor from "./components/JSONEditor";
import FormPreview from "./components/FormPreview";
import { FormSchema } from "./types/schema";

const App: React.FC = () => {
  const [schema, setSchema] = useState<FormSchema | null>(null);

  return (
    <div className="flex flex-col md:flex-row">
      <div className="w-full md:w-1/2">
        <JSONEditor onChange={setSchema} />
      </div>
      <div className="w-full md:w-1/2">
        <FormPreview schema={schema} />
      </div>
    </div>
  );
};

export default App;
