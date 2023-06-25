interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {}

export const Form: React.FC<FormProps> = ({ ...props }) => {
  return <form {...props} />;
};
