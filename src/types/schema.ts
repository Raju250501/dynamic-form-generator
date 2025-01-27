export interface FormField {
    id: string;
    type: 'text' | 'email' | 'textarea' | 'select' | 'radio';
    label: string;
    required: boolean;
    placeholder?: string;
    options?: { value: string; label: string }[];
    validation?: {
      pattern?: string;
      message?: string;
    };
  }
  

  export interface FormSchema {
    formTitle: string;
    formDescription?: string;
    fields: FormField[];
  
  }
  