import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Home, Search, Car, User, UserPlus } from "lucide-react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./layouts/sidebar"; // Use the sidebar layout
import Index from "./pages/Index.jsx";
import SearchRides from "./pages/SearchRides.jsx";
import OfferRide from "./pages/OfferRide.jsx";
import SignIn from "./pages/SignIn.jsx";
import Register from "./pages/Register.jsx";

const queryClient = new QueryClient();

export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
  },
  {
    title: "Search Rides",
    to: "/search-rides",
    icon: <Search className="h-4 w-4" />,
  },
  {
    title: "Offer a Ride",
    to: "/offer-ride",
    icon: <Car className="h-4 w-4" />,
  },
  {
    title: "Sign In",
    to: "/sign-in",
    icon: <User className="h-4 w-4" />,
  },
  {
    title: "Register",
    to: "/register",
    icon: <UserPlus className="h-4 w-4" />,
  },
];

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Index />} />
              <Route path="search-rides" element={<SearchRides />} />
              <Route path="offer-ride" element={<OfferRide />} />
              <Route path="sign-in" element={<SignIn />} />
              <Route path="register" element={<Register />} />
            </Route>
          </Routes>
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;