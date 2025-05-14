import { Compass, Map, Briefcase, Shield } from "lucide-react";

// Define the services data
export const services = [
  {
    title: "Calculated Weather",
    description: "Built Wicket longer admire do barton vanity itself do in it.",
    icon: "compass",
  },
  {
    title: "Best Flights",
    description: "Engrossed listening. Park gate sell they west hard for the.",
    icon: "map",
  },
  {
    title: "Local Events",
    description:
      "Barton vanity itself do in it. Preferd to men it engrossed listening.",
    icon: "briefcase",
  },
  {
    title: "Customization",
    description:
      "We deliver outsourced aviation services for military customers.",
    icon: "shield",
  },
];

// Map of icon names to their React components
export const iconMap = {
  compass: <Compass className="text-blue-500" />,
  map: <Map className="text-green-500" />,
  briefcase: <Briefcase className="text-orange-500" />,
  shield: <Shield className="text-purple-500" />,
};
