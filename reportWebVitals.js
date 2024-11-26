const loyaltyPoints = {
  user1: 100,
  user2: 200,
};

exports.getLoyaltyPoints = (userID) => {
  return new Promise((resolve, reject) => {
      if (loyaltyPoints[userID] !== undefined) {
          resolve({ userID, points: loyaltyPoints[userID] });
      } else {
          reject(new Error('User not found'));
      }
  });
};

exports.transferPoints = (fromUser, toUser, points) => {
  return new Promise((resolve, reject) => {
      if (loyaltyPoints[fromUser] !== undefined && loyaltyPoints[toUser] !== undefined) {
          if (loyaltyPoints[fromUser] >= points) {
              loyaltyPoints[fromUser] -= points;
              loyaltyPoints[toUser] += points;
              resolve({ fromUser, toUser, points });
          } else {
              reject(new Error('Insufficient points'));
          }
      } else {
          reject(new Error('User not found'));
      }
  });
};