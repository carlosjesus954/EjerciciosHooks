import { useEffect, useState } from "react";
import { useForm } from "../hooks/useForm";

export const FormularioHooks = () => {
  const { formState, onInputChange,onResetForm, username, email, password } = useForm({
    username: "",
    email: "",
    password: "",
  });


  return (
    <>
      <h1>Formulario Hooks</h1>
      <hr />
      <input
        type="text"
        name="username"
        className="form--input"
        placeholder="Username"
        value={username}
        onChange={onInputChange}
      />
      <input
        type="email"
        name="email"
        className="form--input"
        placeholder="Email"
        value={email}
        onChange={onInputChange}
      />
      <input
        type="password"
        name="password"
        className="form--input"
        placeholder="Password"
        value={password}
        onChange={onInputChange}
      />
      <button onClick={onResetForm} type="reset">Borrar</button>
    </>
  );
};
