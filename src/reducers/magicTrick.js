const magicTrick = (state = "green", action) => {
  switch (action.type) {
    case "toggle":
      if (state == "green") {
        state = "red";
      } else {
        state = "green";
      }
      return state;
    default:
      return state;
  }
};

export default magicTrick;
