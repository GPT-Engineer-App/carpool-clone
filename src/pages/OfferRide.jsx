import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const OfferRide = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-6">
      <h1 className="text-3xl font-bold">Offer a Ride</h1>
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Ride Details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input placeholder="Leaving from" />
          <Input placeholder="Going to" />
          <Input type="date" />
          <Input type="time" />
          <Input placeholder="Number of seats" type="number" />
          <Input placeholder="Price per seat" type="number" />
          <Input placeholder="Car details" />
          <Button className="w-full">Offer Ride</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default OfferRide;