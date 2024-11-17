import { ConvexError } from "convex/values";
import { Password } from "@convex-dev/auth/providers/Password";
 
export default Password({
  validatePasswordRequirements: (password: string) => {
    if (
      password.length < 8 ||
      !/\d/.test(password) ||
      !/[a-z]/.test(password) ||
      !/[A-Z]/.test(password)
    ) {
      throw new ConvexError("Invalid password.");
    }
  },
});