import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const SearchRides = () => {
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

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Search Rides</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input placeholder="Leaving from" />
          <Input placeholder="Going to" />
          <Input type="date" />
          <Button className="w-full">Search</Button>
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