declare const usePasswordValidation: () => {
    password: string;
    passwordError: string;
    handlePasswordChange: (text: any) => void;
};
export default usePasswordValidation;
