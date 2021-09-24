export const makeRoomId = () => {
  var letters = "abcdefghijklmnopqrstuvwxyz";
  var numbers = "0123456789";

  var string = letters + letters.toUpperCase() + numbers;

  var len = 16;
  var roomID = "";

  for (var i = 0; i < len; i++) {
    roomID += string.charAt(Math.floor(Math.random() * string.length));
  }
  return roomID;
};
