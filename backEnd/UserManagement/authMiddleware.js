const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config"); 

const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res
      .status(401)
      .json({ message: "Unauthorized: Token not provided" });
  }

  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Unauthorized: Invalid token" });
    }

    req.userId = decoded.userId;
    next();
  });
};

module.exports = verifyToken;
