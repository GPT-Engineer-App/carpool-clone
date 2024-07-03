import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { useState } from "react";

const OfferRide = () => {
  const [date, setDate] = useState(null);
  const [time, setTime] = useState("");

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
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="w-full justify-start text-left font-normal">
                {date ? format(date, "PPP") : "Pick a date"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
            </PopoverContent>
          </Popover>
          <Input type="time" value={time} onChange={(e) => setTime(e.target.value)} />
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