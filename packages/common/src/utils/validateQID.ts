export const validateQID = (kik: string) => {
  const kikRegex = /^(2|3)\d{10}$/;
  return kikRegex.test(kik);
};
