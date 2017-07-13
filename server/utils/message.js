const generateMessage = (name, message, room) => {
  return {
    name,
    message,
    room,
    time: new Date().getTime()
  };
};

module.exports = { generateMessage };
