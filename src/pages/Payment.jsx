import { useState } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Payment = () => {
  const [paymentData, setPaymentData] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    amount: "",
  });

  const [paymentMethod, setPaymentMethod] = useState("card");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPaymentData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Payment submitted:", { ...paymentData, paymentMethod });
    // Add payment processing logic here
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-6">
      <h1 className="text-3xl font-bold">Payment</h1>
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Enter Payment Details</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <RadioGroup
              value={paymentMethod}
              onValueChange={setPaymentMethod}
              className="flex space-x-4"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="card" id="card" />
                <Label htmlFor="card">Card</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="cash" id="cash" />
                <Label htmlFor="cash">Cash</Label>
              </div>
            </RadioGroup>

            {paymentMethod === "card" && (
              <>
                <Input
                  name="cardNumber"
                  placeholder="Card Number"
                  value={paymentData.cardNumber}
                  onChange={handleChange}
                />
                <Input
                  name="expiryDate"
                  placeholder="Expiry Date"
                  value={paymentData.expiryDate}
                  onChange={handleChange}
                />
                <Input
                  name="cvv"
                  placeholder="CVV"
                  value={paymentData.cvv}
                  onChange={handleChange}
                />
              </>
            )}
            <Input
              name="amount"
              placeholder="Amount"
              value={paymentData.amount}
              onChange={handleChange}
            />
            <Button type="submit" className="w-full">Pay Now</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Payment;