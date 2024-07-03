import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Register = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-6">
      <h1 className="text-3xl font-bold">Register</h1>
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Create a New Account</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input placeholder="Name" />
          <Input placeholder="Email" type="email" />
          <Input placeholder="Password" type="password" />
          <Input placeholder="Confirm Password" type="password" />
          <Button className="w-full">Register</Button>
        </CardContent>
      </Card>
      <p>
        Already have an account? <a href="/sign-in" className="text-primary">Sign In</a>
      </p>
    </div>
  );
};

export default Register;