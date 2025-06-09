import { Clock, MapPin, Star, Users, Bus, Phone, Mail } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../Ui/Card"
import { Badge } from "../Ui/Badge"
import { Button } from "../Ui/Button"
import Banner from "../../assets/Blogs/Mysore/palace.jpg"
import Main from "../../assets/Blogs/Mysore/palace.jpg"
import MysorePalace from "../../assets/Blogs/Mysore/palace.jpg"
import Chamundi from "../../assets/Blogs/Mysore/chamundi.jpg"
import Brindavan from "../../assets/Blogs/Mysore/brindavan.jpg"

export default function MysoreBlog() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      {/* Hero Section */}
      <div className="relative h-[70vh] bg-gradient-to-r from-orange-600 to-red-600 overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <img src={Banner} alt="Mysore Palace" className="w-full h-full object-cover" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="max-w-4xl px-6">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">Explore Royal Mysore</h1>
            <p className="text-xl md:text-2xl text-orange-100 mb-8">One-Day Tour from Bangalore</p>
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg">
              Reserve Your Seat
            </Button>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">A Day of Heritage, Temples & Gardens</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover the grandeur of Mysore with our curated one-day tour package from Bangalore. Ideal for family, friends, or solo explorers, enjoy palace visits, scenic viewpoints, and the famous Brindavan Gardens – all in a single day.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Card className="border-orange-200 hover:shadow-lg transition-shadow">
            <CardHeader>
              <Bus className="w-12 h-12 text-orange-600 mb-4" />
              <CardTitle className="text-xl">Comfortable Travel</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Travel in AC tempo or coach with pickup/drop from Bangalore</p>
            </CardContent>
          </Card>

          <Card className="border-orange-200 hover:shadow-lg transition-shadow">
            <CardHeader>
              <Star className="w-12 h-12 text-orange-600 mb-4" />
              <CardTitle className="text-xl">Top Attractions</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Mysore Palace, Chamundi Hills, Brindavan Garden & more</p>
            </CardContent>
          </Card>

          <Card className="border-orange-200 hover:shadow-lg transition-shadow">
            <CardHeader>
              <Users className="w-12 h-12 text-orange-600 mb-4" />
              <CardTitle className="text-xl">Experienced Guide</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Multilingual local guide for better understanding & comfort</p>
            </CardContent>
          </Card>
        </div>

        {/* Why Choose Us Section */}
        <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 md:p-12 mb-16">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Why Travel With Us?</h3>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <img src={Main} alt="Mysore main" className="rounded-lg shadow-lg w-full" />
            </div>
            <div className="space-y-6">
              {[
                { title: "All-in-One Day Trip", desc: "From temples to palaces and gardens – see it all in one smooth journey" },
                { title: "Hassle-Free Pickup", desc: "Multiple pickup points across Bangalore for easy boarding" },
                { title: "Photography Friendly", desc: "Ample time for exploration and photo breaks" },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">{idx + 1}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-black mb-2">{item.title}</h4>
                    <p className="text-gray-800">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Itinerary Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">Tour Itinerary</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2 border-orange-200">
              <CardHeader className="bg-orange-600 text-white">
                <CardTitle className="flex items-center">
                  <Clock className="w-6 h-6 mr-2" />
                  Morning - Start
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4 pt-4">
                  <div className="flex items-center space-x-3">
                    <Badge variant="outline" className="bg-orange-100">6:00 AM</Badge>
                    <p className="text-gray-700">Pickup from Bangalore and start towards Mysore</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Badge variant="outline" className="bg-orange-100">10:00 AM</Badge>
                    <p className="text-gray-700">Visit Chamundi Hills and temple</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-orange-200">
              <CardHeader className="bg-red-600 text-white">
                <CardTitle className="flex items-center">
                  <MapPin className="w-6 h-6 mr-2" />
                  Afternoon & Return
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4 pt-4">
                  <div className="flex items-center space-x-3">
                    <Badge variant="outline" className="bg-red-100">12:30 PM</Badge>
                    <p className="text-gray-700">Explore Mysore Palace</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Badge variant="outline" className="bg-red-100">3:00 PM</Badge>
                    <p className="text-gray-700">Lunch break and shopping</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Badge variant="outline" className="bg-red-100">6:30 PM</Badge>
                    <p className="text-gray-700">Brindavan Garden musical fountain</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Badge variant="outline" className="bg-red-100">9:00 PM</Badge>
                    <p className="text-gray-700">Return to Bangalore</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Temple Images Gallery */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">Top Attractions</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[{ src: MysorePalace, title: "Mysore Palace", place: "Mysore City" },
              { src: Chamundi, title: "Chamundi Hills", place: "Hilltop Temple" },
              { src: Brindavan, title: "Brindavan Gardens", place: "KRS Dam"}].map((item, idx) => (
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

        {/* Pricing Section */}
        <div className="bg-gradient-to-r from-red-600 to-primary rounded-2xl p-8 md:p-12 text-white mb-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Package Price</h3>
            <p className="text-xl opacity-90">Affordable Royal Experience</p>
          </div>

          <div className="max-w-md mx-auto">
            <Card className="bg-white/10 backdrop-blur border-white/20">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-white">Mysore Day Tour</CardTitle>
                <CardDescription className="text-orange-100">Operates Daily</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-4xl font-bold text-white mb-4">₹1,399/-</div>
                <p className="text-orange-100 mb-6">Per Person</p>
                <div className="space-y-2 text-left">
                  <div className="flex items-center text-white"><span className="w-2 h-2 bg-orange-300 rounded-full mr-3"></span>AC Travel & Pickup</div>
                  <div className="flex items-center text-white"><span className="w-2 h-2 bg-orange-300 rounded-full mr-3"></span>Palace & Temple Entry</div>
                  <div className="flex items-center text-white"><span className="w-2 h-2 bg-orange-300 rounded-full mr-3"></span>Guide Assistance</div>
                  <div className="flex items-center text-white"><span className="w-2 h-2 bg-orange-300 rounded-full mr-3"></span>Evening Musical Fountain</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-gradient-to-r from-black to-gray-500 rounded-2xl p-8 md:p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">Book Your Royal Mysore Tour Today!</h3>
          <p className="text-xl mb-8 opacity-90">Seats fill fast every weekend. Reserve now and enjoy a heritage escape.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-8">
            <Button size="lg" className="bg-white text-red-600 hover:bg-orange-50 px-8 py-3">
              <Phone className="w-5 h-5 mr-2" />
              Call +91 1234567890
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-orange-600 px-8 py-3"
            >
              <Mail className="w-5 h-5 mr-2" />
              Email Us
            </Button>
          </div>
          <p className="text-orange-100">info@travihara.com</p>
        </div>
      </div>
    </div>
  )
}
