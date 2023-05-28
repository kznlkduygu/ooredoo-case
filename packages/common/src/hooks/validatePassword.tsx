import { useState } from "react";

const usePasswordValidation = () => {
  const minLength = 8;
  const maxLength = 20;
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const validatePassword = (password :any) => {
    let errors = [];

    if (password.length < minLength || password.length > maxLength) {
      errors.push(`Şifre en az ${minLength} karakterden oluşmalı, en fazla ${maxLength} karakter olmalıdır.`);
    }
    if (!/\d/.test(password)) {
      errors.push("En az bir sayı içermelidir.");
    }
    if (!/[a-z]/.test(password)) {
      errors.push("En az bir küçük harf içermelidir.");
    }
    if (!/[A-Z]/.test(password)) {
      errors.push("En az bir büyük harf içermelidir.");
    }
    if (!/[!@#.$%]/.test(password)) {
      errors.push("En az bir özel karakter içermelidir (! @ # . $ %).");
    }
    if (/\s/.test(password)) {
      errors.push("Boşluk içermemelidir.");
    }

    setPasswordError(errors.length > 0 ? errors.join("\n") : "");
    return errors.length === 0;
  };

  const handlePasswordChange = (text: any) => {
    setPassword(text);
    validatePassword(text);
  };

  return {
    password,
    passwordError,
    handlePasswordChange,
  };
};

export default usePasswordValidation;
