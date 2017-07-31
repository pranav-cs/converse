export const findIfMobile = () => {
  return {
    type: 'UPDATE_IS_MOBILE',
    isMobile: window.matchMedia('(max-width: 767px)').matches
  };
};
