export const isMobileReducer = (state = true, action) => {
  switch (action.type) {
    case 'UPDATE_IS_MOBILE':
      return action.isMobile;
    default:
      return state;
  }
};
