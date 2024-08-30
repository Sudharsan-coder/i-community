const jwt = require("jsonwebtoken");

const TokenVerify = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  // console.log(authHeader);
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.ACCESS_TOKEN_SEC, (err, user) => {
      if (err) {
        if (err.name === "TokenExpiredError") {
          return res
            .status(401)
            .json({ message: "Token is expired. Please login again." });
        } else {
          return res
            .status(403)
            .json({ message: "Token is not valid. Please login." });
        }
      }
      req.user = user;
      next();
    });
  } else return res.status(401).json({ message: "You are not authenticated!" });
};

module.exports = TokenVerify;
