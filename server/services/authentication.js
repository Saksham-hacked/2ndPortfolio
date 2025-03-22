// const JWT = require('jsonwebtoken');

// const secret = "$upersecretFightClub@##";

// // Function to create a token
// function createTokenForUser(user) {  // ✅ Fix function name casing
//    const payload = {
//         name : user.fullName,
//          _id: user._id,
//          email: user.email,
//          profileImageURL: user.profileImageUrl,
//          role: user.role
//    };

//    const token = JWT.sign(payload, secret, { expiresIn: "1h" }); 
//     // ✅ Add expiration
//     console.log(token);

//    return token;
// }

// // Function to verify a token
// function verifyToken(token) {
//     try {
//         if (!token) {  // ✅ Check for undefined or empty token
//             throw new Error("Token is missing or invalid.");
//         }

//         const decoded = JWT.verify(token, secret);
//         return decoded;
//     } catch (error) {
//         console.error("Token verification failed:", error.message);
//         return null;
//     }
// }

// module.exports = { createTokenForUser, verifyToken };


import jwt from "jsonwebtoken";

const secret = "$upersecretFightClub@##";

// Function to create a token
export function createTokenForUser(user) {
  const payload = {
    name: user.fullName,
    _id: user._id,
    email: user.email,
    profileImageURL: user.profileImageUrl,
    role: user.role,
  };

  const token = jwt.sign(payload, secret, { expiresIn: "1h" });
  console.log(token);

  return token;
}

// Function to verify a token
export function verifyToken(token) {
  try {
    if (!token) {
      throw new Error("Token is missing or invalid.");
    }

    const decoded = jwt.verify(token, secret);
    return decoded;
  } catch (error) {
    console.error("Token verification failed:", error.message);
    return null;
  }
}
