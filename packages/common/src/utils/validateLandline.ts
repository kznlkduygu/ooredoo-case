export const validateLandlineNumber = (number: any) => {
  const landlineRegex = /^4\d{7}$/;
  return landlineRegex.test(number);
};
