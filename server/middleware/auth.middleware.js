

const {verifyToken} = require('../services/authentication.js');


function checkForAuthenticationCookie(cookie){
     return (req,res,next)=>{
        const tokenCookieValue=req.cookies[cookie];
        if(!tokenCookieValue)  return next();
        try{

            const userPayload=verifyToken(tokenCookieValue);
            // console.log(userPayload);
            req.user=userPayload;
            
            
        }catch(err){};
        return next();

     }
}

module.exports={checkForAuthenticationCookie};


// import { verifyToken } from "../services/authentication.js";

// export function checkForAuthenticationCookie(cookie) {
//   return (req, res, next) => {
//     const tokenCookieValue = req.cookies[cookie];

//     if (!tokenCookieValue) return next();

//     try {
//       const userPayload = verifyToken(tokenCookieValue);
//       if (userPayload) {
//         req.user = userPayload;
//       }
//     } catch (err) {
//       console.error("Authentication error:", err.message);
//     }

//     return next();
//   };
// }
