import bcrypt from "bcrypt";

export const registerFunc = async (req, res) => {
  const { username, email, pass } = req.body;
  const hashedPass = await bcrypt.hash(pass,7)
  console.log(hashedPass)
};
export const loginFunc = (req, res) => {
  // db operations
};
export const logoutFunc = (req, res) => {
  // db operations
}