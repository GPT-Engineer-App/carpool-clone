import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { useState } from "react";

const Index = () => {
  const [date, setDate] = useState(null);
  const [time, setTime] = useState("");
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