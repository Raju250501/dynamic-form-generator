import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import { FormSchema } from "../types/schema";
import FormFieldGenerator from "./FormFieldGenerator";

interface FormPreviewProps {
  schema: FormSchema | null;
}

const FormPreview: React.FC<FormPreviewProps> = ({ schema }) => {
  const methods = useForm();

  if (!schema) {
    return <div>Please provide a valid JSON schema.</div>;
  }

  const onSubmit = (data: any) => {
    console.log("Submitted Data:", data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-4">
        <h1 className="text-2xl font-bold">{schema.formTitle}</h1>
        <p className="text-gray-500">{schema.formDescription}</p>
        {schema.fields.map((field) => (
          <FormFieldGenerator key={field.id} field={field} />
        ))}
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md">
          Submit
        </button>
      </form>
    </FormProvider>
  );
};

export default FormPreview;
