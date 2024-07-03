import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-6">
      <h1 className="text-3xl font-bold">Welcome to ShaRECarTriP</h1>
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Search for a Ride</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input placeholder="Leaving from" />
          <Input placeholder="Going to" />
          <Input type="date" />
          <Button className="w-full">Search</Button>
        </CardContent>
      </Card>
      <div className="w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4">Popular Destinations</h2>
        <ul className="space-y-2">
          <li className="p-2 border rounded">Destination 1</li>
          <li className="p-2 border rounded">Destination 2</li>
          <li className="p-2 border rounded">Destination 3</li>
        </ul>
      </div>
    </div>
  );
};

export default Index;