import { useEffect, useState } from "react";
import { Alerta } from "./Alerta";


export const SimpleForm = () => {

  const [formState, setFormState] = useState({
    username: "Carlos",
    email: "carlos@gmail.com",
  });

  const { username, email } = formState;

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    console.log({ name, value });
    setFormState({
      ...formState,
      [name]: value,
    });
  };


  useEffect(() => {
    // console.log("useEffect called!");
  }, []);
  useEffect(() => {
    // console.log("coco called!");
  }, [formState]);
  useEffect(() => {
    // console.log("email changed!");
  }, [email]);
  return (
    <>
      <h1>Formulario simple</h1>
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
      {
        (username === 'Carlos2') && <Alerta/>
      }
      
    </>
  );
};
