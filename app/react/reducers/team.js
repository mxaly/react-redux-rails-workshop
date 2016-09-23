export default (state = [], action) => {
  switch (action.type) {
    case 'TEAM/ADD':
      return [
        ...state,
        action.name,
      ];
    default:
      return state;
  }
};
