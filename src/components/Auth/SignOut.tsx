import { Button } from "../ui/button";
import { useAuthActions } from "@convex-dev/auth/react";

export default function SignOut() {
  const { signOut } = useAuthActions();
  return <Button onClick={() => void signOut()}>Sign out</Button>;
}
