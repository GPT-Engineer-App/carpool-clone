import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";

const SearchRides = () => {
  const [departureDate, setDepartureDate] = useState(null);
  const [returnDate, setReturnDate] = useState(null);
  const [isReturnRide, setIsReturnRide] = useState(false);
  const [rides, setRides] = useState([
    {
      id: 1,
      driver: "John Doe",
      car: "Toyota Prius",
      departure: "10:00 AM",
      arrival: "12:00 PM",
      price: "$20",
      seats: 3,
    },
    {
      id: 2,
      driver: "Jane Smith",
      car: "Honda Civic",
      departure: "11:00 AM",
      arrival: "1:00 PM",
      price: "$25",
      seats: 2,
    },
  ]);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for rides:", {
      departureDate,
      returnDate: isReturnRide ? returnDate : null,
      // Add other search parameters here
    });
    // Add logic to search for rides
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Search Rides</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSearch} className="space-y-4">
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
            <div className="flex items-center space-x-2">
              <Checkbox
                id="isReturnRide"
                checked={isReturnRide}
                onCheckedChange={setIsReturnRide}
              />
              <Label htmlFor="isReturnRide">Include return ride</Label>
            </div>
            {isReturnRide && (
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
            )}
            <Button type="submit" className="w-full">Search</Button>
          </form>
        </CardContent>
      </Card>
      <div>
        <h2 className="text-xl font-semibold mb-4">Available Rides</h2>
        <ul className="space-y-4">
          {rides.map((ride) => (
            <li key={ride.id} className="p-4 border rounded">
              <div className="flex justify-between">
                <div>
                  <h3 className="text-lg font-bold">{ride.driver}</h3>
                  <p>{ride.car}</p>
                  <p>
                    {ride.departure} - {ride.arrival}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold">{ride.price}</p>
                  <p>{ride.seats} seats available</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SearchRides;