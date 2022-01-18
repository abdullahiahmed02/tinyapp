const getUserByEmail = function(email, database) {
  for(let userId in database){
    if(database[userId].email === email){
      return database[userId]
    }
  }
  return false;
};

const urlsForUser = function(userID, urlDatabase) {
  let usersObject = {};
  for (const shortURL in urlDatabase) {
    if(urlDatabase[shortURL].userID === userID) {
      usersObject[shortURL] = urlDatabase[shortURL]
    }
  }
  return usersObject;
}

const getUserById = function(userDB, userID) {
  if (userDB[userID]) {
    return userDB[userID]
  } else {
    return null;
  }
}

const createUser = function(email, password, users) {
  const userID = generateRandomString();
  users[userID] = {
    id: userID,
    email,
    password
  };
  return userID
}

function generateRandomString() {
  let result = '';
  let characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
  let charactersLength = characters.length;
  for (let i = 0; i < 6; i ++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

module.exports = {
  generateRandomString,
  getUserByEmail,
  urlsForUser,
  getUserById,
  createUser
}