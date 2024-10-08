const increment = (num) => {
  return {
    type: "INCREMENT",
    payload: num,
  };
};

const decrement = (num) => {
  return {
    type: "DECREMENT",
    payload: num,
  };
};

const magicToggle = () => {
  return {
    type: "toggle",
  };
};

export { increment, decrement, magicToggle };
