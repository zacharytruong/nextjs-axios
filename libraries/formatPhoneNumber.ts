const formatDisplayPhoneNumber = (value: string): string => {
  const phoneNumber = value.replace(/[^\d]/g, '');
  const phoneNumberLength = phoneNumber.length;
  if (phoneNumberLength < 4) return phoneNumber;
  if (phoneNumberLength < 7) {
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}`;
  }
  return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
    3,
    6
  )}-${phoneNumber.slice(6, 10)}`;
};

const formatPhoneNumber = (value: string): string => {
  const phoneNumber = value.replace(/[^\d]/g, '');
  return phoneNumber.slice(0, 10);
};

export { formatDisplayPhoneNumber, formatPhoneNumber };
