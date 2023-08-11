export function validateEmail(email) {
  const regexSt =
    /^(?=.{1,256})(?=.{1,64}@.{1,255}$)(?=.{1,255}[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@.{1,255}[a-z0-9-]+\.(?:[a-z0-9-]{1,63}\.?)+[a-z]{2,63}$).*/;
  return regexSt.test(email);
}
