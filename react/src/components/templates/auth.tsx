import { LoginTitle } from "../atoms/title"
import {AuthForm } from "../molecules/form"
import { LoginLogo } from "../molecules/login_logo"

export const AuthTemplates = () => {
  return (
    <section className="auth card">
      <LoginLogo />
      <LoginTitle />
      <AuthForm />
    </section>
  )
}
