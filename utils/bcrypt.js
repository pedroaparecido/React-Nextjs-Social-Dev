import bcryptjs from "bcryptjs"

export const hashPassword = (password) =>
    bcryptjs.hashSync(password)

export const comparePasswword = (password, hash) =>
    bcryptjs.compareSync(password, hash)
