export const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

export const isValidPhoneNumber = (phone: string): boolean => {
    // const trimmedInput = phone.trim().replace(/ /g, '');
    const phoneRegex = /^[+\d-]*$/;
    return phoneRegex.test(phone);
}