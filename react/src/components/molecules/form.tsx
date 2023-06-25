import { useAuthForm } from "../../hooks/useAuthForm";
import { Button } from "../atoms/button";
import { Form } from "../atoms/form";
import { Input } from "../atoms/input";

export const AuthForm = () => {
  const { email, setEmail, error, handleSubmit } = useAuthForm();
  return (
    <Form className="flex flex-col gap-3" onSubmit={handleSubmit}>
      <label>Github Username/Email</label>
      <Input
        type="text"
        className="input"
        placeholder="Enter your GitHub username or email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <Button type="submit" className="btn btn-gradient m-10">
        Submit
      </Button>
      {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}
    </Form>
  );
};
