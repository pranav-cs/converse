const generateMessage = (name, message) => {
  return {
    name,
    message,
    time: new Date().getTime()
  };
};

module.exports = { generateMessage };
