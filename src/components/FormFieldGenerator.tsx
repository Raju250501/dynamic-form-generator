import React from "react";
import { useFormContext } from "react-hook-form";
import { FormField } from "../types/schema";

const FormFieldGenerator: React.FC<{ field: FormField }> = ({ field }) => {
  const { register, formState: { errors } } = useFormContext();

  switch (field.type) {
    case "text":
    case "email":
    case "textarea":
      return (
        <div>
          <label>{field.label}</label>
          <input
            type={field.type}
            placeholder={field.placeholder}
            {...register(field.id, { required: field.required })}
          />
          {errors[field.id] && <span>{field.label} is required</span>}
        </div>
      );
    case "select":
      return (
        <div>
          <label>{field.label}</label>
          <select {...register(field.id, { required: field.required })}>
            {field.options?.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {errors[field.id] && <span>{field.label} is required</span>}
        </div>
      );
    case "radio":
      return (
        <div>
          <label>{field.label}</label>
          {field.options?.map((option) => (
            <label key={option.value}>
              <input
                type="radio"
                value={option.value}
                {...register(field.id, { required: field.required })}
              />
              {option.label}
            </label>
          ))}
          {errors[field.id] && <span>{field.label} is required</span>}
        </div>
      );
    default:
      return null;
  }
};

export default FormFieldGenerator;
