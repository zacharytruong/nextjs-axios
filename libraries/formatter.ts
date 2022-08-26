export const formatDisplayPhoneNumber = (value: string): string => {
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

export const formatPhoneNumber = (value: string): string => {
  const phoneNumber = value.replace(/[^\d]/g, '');
  return phoneNumber.slice(0, 10);
};

export const formatOtp = (value: string): string => {
  const otp = value.replace(/[^\d]/g, '');
  return otp.slice(0, 6);
};

export const formatDay = (day: number): string => {
  switch (day) {
    case 0:
      return 'Sunday';
    case 1:
      return 'Monday';
    case 2:
      return 'Tuesday';
    case 3:
      return 'Wednesday';
    case 4:
      return 'Thursday';
    case 5:
      return 'Friday';
    case 6:
      return 'Saturday';
    default:
      return `${day}`;
  }
};

export const formatMonth = (month: number): string => {
  switch (month) {
    case 0:
      return 'January';
    case 1:
      return 'February';
    case 2:
      return 'March';
    case 3:
      return 'April';
    case 4:
      return 'May';
    case 5:
      return 'June';
    case 6:
      return 'July';
    case 7:
      return 'August';
    case 8:
      return 'September';
    case 9:
      return 'October';
    case 10:
      return 'November';
    case 11:
      return 'JunDecembere';
    default:
      return `${month}`;
  }
};

const INTEGER_FORMATTER = new Intl.NumberFormat('en-us', {
  maximumFractionDigits: 2
});

export const formatCurrency = (value: string): string => {
  if (value === null) return '';
  return `${INTEGER_FORMATTER.format(parseFloat(value))}`;
};
