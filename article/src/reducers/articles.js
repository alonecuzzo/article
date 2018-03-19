const articles = (state = [], action) => {
  switch (action.type) {
    case "ADD_ARTICLE":
    console.log(state)
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          read: false
        }
      ];
    default:
      return state;
  }
};

export default articles;
