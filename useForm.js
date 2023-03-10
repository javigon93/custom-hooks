import { useState } from "react";


export const useForm = ( initialForm = {}) => {
  const [formState, setformState] = useState(initialForm);

  // username: 'Pepe88',
  // email: 'pepe@gmail.com',
  // password: ''

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setformState({
      ...formState,
      [name]: value
    })
  }

  const onResetForm = () => {
    setformState(initialForm);
  }

  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm,
  }
}
