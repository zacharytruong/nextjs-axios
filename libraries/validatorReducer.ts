import {
  IPhoneNumberValidationAction,
  IPhoneNumberState
} from './globalInterfaces';

export const validatePhoneNumbersReducer = (
  state: IPhoneNumberState,
  { type, payload }: IPhoneNumberValidationAction
) => {
  switch (type) {
    case '+1':
      console.log(state.value.length)
      if (state.value.length === 10) return { ...state, value: payload, isValid: true };
      return {
        ...state,
        value: payload,
        isValid: false
      };
    case '+2':
      if (state.value.length === 10) return { ...state, value: payload, isValid: true };
      return {
        ...state,
        value: payload,
        isValid: false
      };
    default:
      return { ...state };
  }
};
