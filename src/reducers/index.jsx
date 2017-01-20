let nextFeature = 1;
export const featureReducer = (state = [], action) => {
  switch (action.type) {
    case 'NEW_FEATURE':
      return [
        ...state,
        {
          id: nextFeature++,
          feature: action.feature
        }
      ];
    default:
      return state;
  }
};
