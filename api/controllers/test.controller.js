import jwt from "jsonwebtoken";
export const loggedInFunc = async (req, res) => {
  console.log(req.userId)
  res.status(200).json({ message: "You are authenticated" });
};

export const adminFunc = (req, res) => {
  console.log("adminFunc called");
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ message: "Not Authenticated" });
  }

  jwt.verify(token, process.env.JWT_SECRET_KEY, (err, payload) => {
    if (err) {
      return res.status(403).json({ message: "Token is not valid" });
    }

    if (!payload.isAdmin) {
      return res.status(403).json({ message: "No authorization" });
    }

    // Only send the response after verification is complete
    res.status(200).json({ message: "You are authenticated as an admin" });
  });
};
