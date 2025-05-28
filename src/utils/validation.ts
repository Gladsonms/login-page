import { REGEX } from "./regex";

 export const validatePassword = (password: string) => {
    return REGEX.PASSWORD.test(password);
  };

export const validateEmail = (email: string) => {
  return REGEX.EMAIL.test(email);
}