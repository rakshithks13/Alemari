import { Clock, MapPin, Star, Users, Bus, Phone, Mail } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../Ui/Card"
import { Badge } from "../Ui/Badge"
import { Button } from "../Ui/Button"
import Banner from "../../assets/Blogs/2.jpg"
import Main from "../../assets/Blogs/Tirupathi/main.jpg"
import Tirupathi from "../../assets/Blogs/Tirupathi/balaji.jpg"
import Temple from "../../assets/Blogs/Tirupathi/temple.jpg"
import Padmavathi from "../../assets/Blogs/Tirupathi/padmavathi.jpg"

export default function TirupatiBlog() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      {/* Hero Section */}
      <div className="relative h-[70vh] bg-gradient-to-r from-orange-600 to-red-600 overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <img
          src={Banner}
          alt="Tirupati Temple"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="max-w-4xl px-6">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">Experience Divine Bliss</h1>
            <p className="text-xl md:text-2xl text-orange-100 mb-8">
              Your Perfect One-Day Tirupati Darshan from Bangalore
            </p>
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg">
              Book Your Journey Now
            </Button>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">A Spiritual Journey Awaits</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Are you planning a spiritual journey to the holy abode of Lord Venkateshwara in Tirumala, but short on time?
            Our exclusive Bangalore to Tirupati One Day Special Darshan Package is meticulously crafted to provide you
            with an unforgettable and seamless pilgrimage experience.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Card className="border-orange-200 hover:shadow-lg transition-shadow">
            <CardHeader>
              <Bus className="w-12 h-12 text-orange-600 mb-4" />
              <CardTitle className="text-xl">Luxury Travel</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Travel in comfort with our Mercedes Benz or Volvo AC buses</p>
            </CardContent>
          </Card>

          <Card className="border-orange-200 hover:shadow-lg transition-shadow">
            <CardHeader>
              <Star className="w-12 h-12 text-orange-600 mb-4" />
              <CardTitle className="text-xl">Special Darshan</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Guaranteed Rs. 300 special darshan ticket included in package</p>
            </CardContent>
          </Card>

          <Card className="border-orange-200 hover:shadow-lg transition-shadow">
            <CardHeader>
              <Users className="w-12 h-12 text-orange-600 mb-4" />
              <CardTitle className="text-xl">Expert Guidance</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Experienced personal guide throughout your journey</p>
            </CardContent>
          </Card>
        </div>

        {/* Why Choose Us Section */}
        <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 md:p-12 mb-16">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Why Choose Our Tirupati Package?</h3>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <img
                src={Main}
                alt="Tirupati Temple Complex"
                className="rounded-lg shadow-lg w-full"
              />
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">1</span>
                </div>
                <div>
                  <h4 className="font-semibold text-black mb-2">Effortless Travel</h4>
                  <p className="text-gray-800">
                    Depart daily at 9 PM in luxurious AC buses for a comfortable overnight journey
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">2</span>
                </div>
                <div>
                  <h4 className="font-semibold text-black mb-2">Convenient Fresh-Up</h4>
                  <p className="text-gray-800">Arrive by 4 AM with comfortable room facilities at premium hotels</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">3</span>
                </div>
                <div>
                  <h4 className="font-semibold text-black mb-2">Complete Package</h4>
                  <p className="text-gray-800">Includes meals, darshan tickets, and guided temple visits</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Itinerary Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">Your One-Day Tirupati Itinerary</h3>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Day 1 */}
            <Card className="border-2 border-orange-200">
              <CardHeader className="bg-orange-600 text-white">
                <CardTitle className="flex items-center">
                  <Clock className="w-6 h-6 mr-2" />
                  Day 1 - Departure
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4 pt-4">
                  <div className="flex items-center space-x-3">
                    <Badge variant="outline" className="bg-orange-100">
                      9:00 PM
                    </Badge>
                    <p className="text-gray-700">Depart from Bangalore in luxury AC bus</p>
                  </div>
                </div>
                {/* <img src="/placeholder.svg?height=200&width=400" alt="Luxury Bus" className="rounded-lg mt-4 w-full" /> */}
              </CardContent>
            </Card>

            {/* Day 2 */}
            <Card className="border-2 border-orange-200">
              <CardHeader className="bg-red-600 text-white">
                <CardTitle className="flex items-center">
                  <MapPin className="w-6 h-6 mr-2" />
                  Day 2 - Darshan & Return
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4 pt-4">
                  <div className="flex items-center space-x-3">
                    <Badge variant="outline" className="bg-red-100">
                      4:00 AM
                    </Badge>
                    <p className="text-gray-700">Arrive & fresh-up at hotel</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Badge variant="outline" className="bg-red-100">
                      Morning
                    </Badge>
                    <p className="text-gray-700">Padmavathi Temple visit</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Badge variant="outline" className="bg-red-100">
                      9:00 AM
                    </Badge>
                    <p className="text-gray-700">Lord Balaji special darshan</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Badge variant="outline" className="bg-red-100">
                      Evening
                    </Badge>
                    <p className="text-gray-700">Return to Bangalore</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Temple Images Gallery */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">Sacred Destinations</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="relative group overflow-hidden rounded-lg">
              <img
                src={Tirupathi}
                alt="Lord Balaji Temple"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h4 className="font-semibold text-lg">Lord Balaji Temple</h4>
                <p className="text-sm">Tirumala</p>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-lg">
              <img
                src={Padmavathi}
                alt="Padmavathi Temple"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h4 className="font-semibold text-lg">Padmavathi Temple</h4>
                <p className="text-sm">Alamelumangapuram</p>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-lg">
              <img
                src={Temple}
                alt="Temple Complex"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h4 className="font-semibold text-lg">Temple Complex</h4>
                <p className="text-sm">Sacred Grounds</p>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="bg-gradient-to-r from-red-600 to-primary rounded-2xl p-8 md:p-12 text-white mb-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Package Pricing</h3>
            <p className="text-xl opacity-90">Outstanding services at affordable cost</p>
          </div>

          <div className="max-w-md mx-auto">
            <Card className="bg-white/10 backdrop-blur border-white/20">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-white">Complete Package</CardTitle>
                <CardDescription className="text-orange-100">All days of the week</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-4xl font-bold text-white mb-4">₹2,760/-</div>
                <p className="text-orange-100 mb-6">Per Person</p>
                <div className="space-y-2 text-left">
                  <div className="flex items-center text-white">
                    <span className="w-2 h-2 bg-orange-300 rounded-full mr-3"></span>
                    Free accommodation for fresh-up
                  </div>
                  <div className="flex items-center text-white">
                    <span className="w-2 h-2 bg-orange-300 rounded-full mr-3"></span>
                    Breakfast & Lunch included
                  </div>
                  <div className="flex items-center text-white">
                    <span className="w-2 h-2 bg-orange-300 rounded-full mr-3"></span>
                    Free special darshan ticket
                  </div>
                  <div className="flex items-center text-white">
                    <span className="w-2 h-2 bg-orange-300 rounded-full mr-3"></span>
                    Luxury bus transportation
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Important Notes */}
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-16">
          <h4 className="text-xl font-semibold text-gray-800 mb-4">Important Guidelines</h4>
          <div className="space-y-3 text-gray-700">
            <div className="flex items-start space-x-3">
              <span className="text-yellow-600 font-bold">•</span>
              <p>
                <strong>Dress Code:</strong> Traditional attire required - Male: Dhoti, Shirt/Kurtha, Pyjama. Female:
                Saree/Chudidar with Dupatta
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-yellow-600 font-bold">•</span>
              <p>
                <strong>ID Proof:</strong> Original ID used for booking must be produced at entry
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-yellow-600 font-bold">•</span>
              <p>
                <strong>Booking:</strong> Seats fill up fast, advance booking recommended
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-black to-gray-500 rounded-2xl p-8 md:p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">Book Your Divine Journey Today!</h3>
          <p className="text-xl mb-8 opacity-90">
            Don't miss this opportunity to connect with the divine. Experience the blessings of Lord Balaji.
          </p>

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

          <p className="text-orange-100">Contact us at info@website.in for more information</p>
        </div>
      </div>

    </div>
  )
}
