import { LoginTitle } from "../atoms/title"
import { LoginLogo } from "../molecules/login_logo"
import { Form } from "../organisms/form"

export const Auth = () => {
  return (
    <section className="auth card">
      <LoginLogo />
      <LoginTitle />
      <Form />
    </section>
  )
}
