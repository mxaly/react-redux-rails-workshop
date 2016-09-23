export addMember = (name) => {
  return {
    type: 'TEAM/ADD',
    name: name,
  };
};
