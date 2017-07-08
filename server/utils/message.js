const generateMessage = (from, message) => {
  return {
    from,
    message,
    time: new Date().getTime()
  };
};

module.exports = { generateMessage };
