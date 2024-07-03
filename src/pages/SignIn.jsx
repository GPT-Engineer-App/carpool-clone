import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const SignIn = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-6">
      <h1 className="text-3xl font-bold">Sign In</h1>
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Sign In to Your Account</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input placeholder="Email" type="email" />
          <Input placeholder="Password" type="password" />
          <Button className="w-full">Sign In</Button>
        </CardContent>
      </Card>
      <p>
        Don't have an account? <a href="/register" className="text-primary">Register</a>
      </p>
    </div>
  );
};

export default SignIn;