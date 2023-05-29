export const validateMobileNumber = (number: string) => {
  const mobileNumberRegex = /^[3567]\d{7}$/;
  return mobileNumberRegex.test(number);
};
