import { Clock, MapPin, Star, Users, Bus, Phone, Mail } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../Ui/Card";
import { Button } from "../Ui/Button";
import Banner from "../../assets/Blogs/Bengaluru/bangalorePalace.jpg";
import Iskcon from "../../assets/Blogs/Bengaluru/Iskon.webp";
import Lalbagh from "../../assets/Blogs/Bengaluru/lalbagh.jpg";
import VidhanaSoudha from "../../assets/Blogs/Bengaluru/vidanaSoudha.webp";

export default function Bengaluru() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      {/* Hero Section */}
      <div className="relative h-[70vh] bg-gradient-to-r from-orange-600 to-red-600 overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <img src={Banner} alt="Bangalore Sightseeing" className="w-full h-full object-cover" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="max-w-4xl px-6">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">Explore Bengaluru</h1>
            <p className="text-xl md:text-2xl text-orange-100 mb-8">One-Day City Tour with Travihara – Only ₹400</p>
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg">
              Reserve Your Seat
            </Button>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Bangalore One Day Sightseeing Tour</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Looking for an affordable, all-in-one city escape? Travihara’s <strong>One Day Bengaluru Sightseeing Tour Package</strong> is perfect for families, friends, or solo travelers seeking top Bangalore tourist spots in a single day. At just <strong>₹400 per person</strong>, enjoy heritage, greenery, architecture, and vibrant culture — all curated into one seamless day trip.
          </p>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {[
            { icon: <Bus className="w-12 h-12 text-orange-600 mb-4" />, title: "Comfortable Travel", desc: "AC/Non-AC travel with driver assistance & safe journey." },
            { icon: <Users className="w-12 h-12 text-orange-600 mb-4" />, title: "Local Guides", desc: "Multilingual guides sharing local stories and history." },
            { icon: <Star className="w-12 h-12 text-orange-600 mb-4" />, title: "Trusted Brand", desc: "Travihara – known for reliable, affordable tours in South India." },
          ].map((item, idx) => (
            <Card key={idx} className="border-orange-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                {item.icon}
                <CardTitle className="text-xl">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Itinerary */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-8">Tour Itinerary (9:00 AM – 7:00 PM)</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2 border-orange-200">
              <CardHeader className="bg-orange-600 text-white">
                <CardTitle className="flex items-center">
                  <Clock className="w-6 h-6 mr-2" />
                  Morning
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-4 mt-4">
                <p>✔️ Pickup from your selected boarding point</p>
                <p>✔️ ISKCON Temple</p>
                <p>✔️ Tippu’s Bull Temple</p>
                <p>✔️ Lalbagh Botanical Garden</p>
              </CardContent>
            </Card>
            <Card className="border-2 border-orange-200">
              <CardHeader className="bg-red-600 text-white">
                <CardTitle className="flex items-center">
                  <MapPin className="w-6 h-6 mr-2" />
                  Afternoon & Evening
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-4 mt-4">
                <p>✔️ MG Road & Public Utility Building</p>
                <p>✔️ Art & Craft Emporium</p>
                <p>✔️ Cubbon Park</p>
                <p>✔️ Visvesvaraya Museum</p>
                <p>✔️ Venkatappa Art Gallery</p>
                <p>✔️ Outer View of Vidhana Soudha</p>
                <p>✔️ Drop-off at Boarding Point by 7 PM</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Gallery */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">Places Covered</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { src: Iskcon, title: "ISKCON Temple", place: "Spiritual Start" },
              { src: Lalbagh, title: "Lalbagh Garden", place: "Botanical Greenery" },
              { src: VidhanaSoudha, title: "Vidhana Soudha", place: "Outer View" }
            ].map((item, idx) => (
              <div key={idx} className="relative group overflow-hidden rounded-lg">
                <img src={item.src} alt={item.title} className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="font-semibold text-lg">{item.title}</h4>
                  <p className="text-sm">{item.place}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing */}
        <div className="bg-gradient-to-r from-red-600 to-orange-500 rounded-2xl p-8 md:p-12 text-white mb-16">
          <h3 className="text-3xl font-bold text-center mb-4">Package Price</h3>
          <p className="text-center text-xl mb-8">Just ₹400 per person – No Hidden Charges</p>
          <ul className="list-disc pl-6 space-y-2 text-white">
            <li>✅ AC/Non-AC Vehicle for full-day sightseeing</li>
            <li>✅ Pickup & Drop-off</li>
            <li>✅ All locations covered in itinerary</li>
            <li>❌ Entry Tickets, Meals, GST excluded</li>
          </ul>
        </div>

        {/* CTA */}
        <div className="text-center bg-gradient-to-r from-black to-gray-700 rounded-2xl p-8 md:p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">Book Your Bengaluru Day Tour Now!</h3>
          <p className="text-xl mb-8 opacity-90">Call or email to confirm your seat and experience the Garden City.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-4">
            <Button size="lg" className="bg-white text-red-600 hover:bg-orange-50 px-8 py-3">
              <Phone className="w-5 h-5 mr-2" />
              +91 91088-34112
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-black hover:bg-white hover:text-orange-600 px-8 py-3"
            >
              <Mail className="w-5 h-5 mr-2" />
              travihara01@gmail.com
            </Button>
          </div>
          <p className="text-orange-100">www.travihara.com</p>
        </div>
      </div>
    </div>
  );
}