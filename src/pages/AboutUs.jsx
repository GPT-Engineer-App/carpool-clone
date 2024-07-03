import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AboutUs = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-6">
      <h1 className="text-3xl font-bold">About Us</h1>
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>About ShaRECarTriP</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>ShaRECarTriP is a ride-sharing platform that connects drivers with passengers looking for a ride. Our mission is to make transportation more accessible, affordable, and sustainable by promoting carpooling and reducing the number of vehicles on the road.</p>
          <p>We believe in creating a community of responsible and eco-conscious travelers who are committed to making a positive impact on the environment.</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default AboutUs;