import { useAuthForm } from "../../hooks/useAuthForm";

export const Form = () => {
  const { email, setEmail, error, handleSubmit } = useAuthForm();
  return (
    <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
      <label>Github Username/Email</label>
      <input
        type="text"
        className="input"
        placeholder="Enter your GitHub username or email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button type="submit" className="btn btn-gradient m-10">
        Submit
      </button>
      {error && <p style={{color: 'red', textAlign:'center'}}>{error}</p>}
    </form>
  );
};
