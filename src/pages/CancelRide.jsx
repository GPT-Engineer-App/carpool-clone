import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const CancelRide = () => {
  const [reason, setReason] = useState("");
  const [comments, setComments] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Cancellation reason:", reason);
    console.log("Additional comments:", comments);
    toast.success("Ride cancellation submitted successfully");
    // Reset form
    setReason("");
    setComments("");
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-6">
      <h1 className="text-3xl font-bold">Cancel Ride</h1>
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Provide Cancellation Reason</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Select value={reason} onValueChange={setReason}>
              <SelectTrigger>
                <SelectValue placeholder="Select a reason" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="change-of-plans">Change of plans</SelectItem>
                <SelectItem value="found-another-ride">Found another ride</SelectItem>
                <SelectItem value="personal-reasons">Personal reasons</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
            <Textarea
              placeholder="Additional comments (optional)"
              value={comments}
              onChange={(e) => setComments(e.target.value)}
            />
            <Button type="submit" className="w-full">Submit Cancellation</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default CancelRide;