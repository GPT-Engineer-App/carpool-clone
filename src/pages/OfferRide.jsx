import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { format } from "date-fns";
import { useState } from "react";

const OfferRide = () => {
  const [departureDate, setDepartureDate] = useState(null);
  const [departureTime, setDepartureTime] = useState("");
  const [returnDate, setReturnDate] = useState(null);
  const [returnTime, setReturnTime] = useState("");
  const [isReturnRide, setIsReturnRide] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Ride offered:", {
      departureDate,
      departureTime,
      returnDate: isReturnRide ? returnDate : null,
      returnTime: isReturnRide ? returnTime : null,
      // Add other form fields here
    });
    // Add logic to submit the ride offer
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-6">
      <h1 className="text-3xl font-bold">Offer a Ride</h1>
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Ride Details</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input placeholder="Leaving from" />
            <Input placeholder="Going to" />
            <div className="space-y-2">
              <Label>Departure Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="w-full justify-start text-left font-normal">
                    {departureDate ? format(departureDate, "PPP") : "Pick a date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar mode="single" selected={departureDate} onSelect={setDepartureDate} initialFocus />
                </PopoverContent>
              </Popover>
            </div>
            <Input
              type="time"
              value={departureTime}
              onChange={(e) => setDepartureTime(e.target.value)}
              placeholder="Departure Time"
            />
            <div className="flex items-center space-x-2">
              <Checkbox
                id="isReturnRide"
                checked={isReturnRide}
                onCheckedChange={setIsReturnRide}
              />
              <Label htmlFor="isReturnRide">Offer return ride</Label>
            </div>
            {isReturnRide && (
              <>
                <div className="space-y-2">
                  <Label>Return Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" className="w-full justify-start text-left font-normal">
                        {returnDate ? format(returnDate, "PPP") : "Pick a return date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar mode="single" selected={returnDate} onSelect={setReturnDate} initialFocus />
                    </PopoverContent>
                  </Popover>
                </div>
                <Input
                  type="time"
                  value={returnTime}
                  onChange={(e) => setReturnTime(e.target.value)}
                  placeholder="Return Time"
                />
              </>
            )}
            <Input placeholder="Number of seats" type="number" />
            <Input placeholder="Price per seat" type="number" />
            <Input placeholder="Car details" />
            <Button type="submit" className="w-full">Offer Ride</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default OfferRide;