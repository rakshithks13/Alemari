import { Clock, MapPin, Star, Users, Plane,Bus,  Phone, Mail, Check, X } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../Ui/Card"
import { Badge } from "../Ui/Badge"
import { Button } from "../Ui/Button"
import Banner from "../../assets/Blogs/Mantralayam/MuttMantralayam.jpg"
import MantralayamMain from "../../assets/Blogs/Mantralayam/mantralaya.jpeg"
import RaghavendraSwamy from "../../assets/Blogs/Mantralayam/mantralayamm.jpeg"
import PanchaMuki from "../../assets/Blogs/Mantralayam/panchamuki.webp"
import Bichali from "../../assets/Blogs/Mantralayam/bichali.jpeg"


export default function Mantralayam() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <div className="relative h-[70vh] bg-gradient-to-r from-blue-600 to-indigo-600 overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <img
          src = {Banner}
          alt="Mantralayam Sri Raghavendra Swamy Temple"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="max-w-4xl px-6">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">Reconnect with Peace</h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              1N/2D Mantralayam Sleeper Bus Spiritual Tour from Bangalore
            </p>
            <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 text-lg">
              Book Your Spiritual Journey
            </Button>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">A Sacred Getaway with TRAVIHARA</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Looking to step away from the daily hustle and embrace divine serenity? TRAVIHARA presents a spiritually
            uplifting 1 Night / 2 Days Mantralayam Tour Package from Bangalore — perfect for devotees of Sri Raghavendra
            Swamy and spiritual seekers desiring a short yet soulful pilgrimage. This all-inclusive road trip by AC /
            Non AC sleeper bus ensures a comfortable journey, guided temple visits, and a peaceful experience.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Card className="border-blue-200 hover:shadow-lg transition-shadow">
            <CardHeader>
              <Bus className="w-12 h-12 text-blue-600 mb-4" />
              <CardTitle className="text-xl">AC/Non AC Sleeper Bus</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Travel overnight in a clean, cozy sleeper bus with pickup/drop from Bangalore
              </p>
            </CardContent>
          </Card>

          <Card className="border-blue-200 hover:shadow-lg transition-shadow">
            <CardHeader>
              <Star className="w-12 h-12 text-blue-600 mb-4" />
              <CardTitle className="text-xl">Guided Assistance</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Our local guide assists with hotel transfer, darshan coordination, and temple visits
              </p>
            </CardContent>
          </Card>

          <Card className="border-blue-200 hover:shadow-lg transition-shadow">
            <CardHeader>
              <Users className="w-12 h-12 text-blue-600 mb-4" />
              <CardTitle className="text-xl">Divine Temple Circuit</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Visit holy sites like Sri Raghavendra Swamy Mutt, Panchamukhi Anjaneya Temple, and Bichali Appanacharya
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Why Choose Us Section */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 md:p-12 mb-16">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">✨ Why Choose Travihara for Mantralayam?</h3>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <img
                src={MantralayamMain}
                alt="Mantralayam Sri Raghavendra Swamy Temple"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">AC/Non AC Sleeper Bus Travel</h4>
                  <p className="text-blue-100">
                    Travel overnight in a clean, cozy sleeper bus with pickup/drop from Bangalore
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Guided Temple Visits</h4>
                  <p className="text-blue-100">Our local guide assists with darshan coordination and temple visits</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Simple & Peaceful Stay</h4>
                  <p className="text-blue-100">
                    Freshen up and relax in a hygienic lodge near the temple, with breakfast included
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Itinerary Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">🧭 Detailed 3-Day Itinerary</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Day 1 */}
            <Card className="border-2 border-blue-200">
              <CardHeader className="bg-blue-600 text-white">
                <CardTitle className="flex items-center">
                  <Clock className="w-6 h-6 mr-2" />
                  Day 1 - Bangalore → Mantralayam
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4 pt-4">
                  <div className="flex items-center space-x-3">
                    <Badge variant="outline" className="bg-blue-100">
                      Evening
                    </Badge>
                    <p className="text-gray-700">Departure from Bangalore by sleeper bus</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Badge variant="outline" className="bg-blue-100">
                      Night
                    </Badge>
                    <p className="text-gray-700">Overnight travel to Mantralayam</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Day 2 */}
            <Card className="border-2 border-indigo-200">
              <CardHeader className="bg-indigo-600 text-white">
                <CardTitle className="flex items-center">
                  <MapPin className="w-6 h-6 mr-2" />
                  Day 2 - Darshan & Temple Visits
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4 pt-4">
                  <div className="flex items-center space-x-3">
                    <Badge variant="outline" className="bg-indigo-100">
                      5:00 AM
                    </Badge>
                    <p className="text-gray-700">Arrival & hotel transfer</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Badge variant="outline" className="bg-indigo-100">
                      Morning
                    </Badge>
                    <p className="text-gray-700">Sri Raghavendra Swamy Temple darshan</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Badge variant="outline" className="bg-indigo-100">
                      Afternoon
                    </Badge>
                    <p className="text-gray-700">Bichali Appanacharya & Panchamukhi Anjaneya</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Badge variant="outline" className="bg-indigo-100">
                      8:30 PM
                    </Badge>
                    <p className="text-gray-700">Return journey to Bangalore</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Day 3 */}
            <Card className="border-2 border-green-200">
              <CardHeader className="bg-green-600 text-white">
                <CardTitle className="flex items-center">
                  <Star className="w-6 h-6 mr-2" />
                  Day 3 - Arrival in Bangalore
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4 pt-4">
                  <div className="flex items-center space-x-3">
                    <Badge variant="outline" className="bg-green-100">
                      5:00 AM
                    </Badge>
                    <p className="text-gray-700">Arrival in Bangalore with spiritually fulfilled heart</p>
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
                src={RaghavendraSwamy}
                alt="Sri Raghavendra Swamy Temple"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h4 className="font-semibold text-lg">Sri Raghavendra Swamy</h4>
                <p className="text-sm">Mantralayam</p>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg">
              <img
                src={PanchaMuki}
                alt="Panchamukhi Anjaneya Temple"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h4 className="font-semibold text-lg">Panchamukhi Anjaneya Temple</h4>
                <p className="text-sm">Mantralayam</p>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg">
              <img
                src={Bichali}
                alt="Bichali Appanacharya"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h4 className="font-semibold text-lg">Bichali Appanacharya</h4>
                <p className="text-sm">Bichali</p>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="bg-gradient-to-r from-indigo-600 to-blue-600 rounded-2xl p-8 md:p-12 text-white mb-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Package Pricing</h3>
            <p className="text-xl opacity-90">All-inclusive spiritual journey</p>
          </div>
          <div className="max-w-md mx-auto">
            <Card className="bg-white/10 backdrop-blur border-white/20">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-white">Complete Package</CardTitle>
                <CardDescription className="text-blue-100">Only</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-4xl font-bold text-white mb-4">₹3,499/-</div>
                <p className="text-blue-100 mb-6">Per Person (All Inclusive)</p>
                <div className="space-y-2 text-left">
                  <div className="flex items-center text-white">
                    <Check className="w-4 h-4 text-green-300 mr-3" />
                    AC/Non AC Sleeper Bus (Round Trip)
                  </div>
                  <div className="flex items-center text-white">
                    <Check className="w-4 h-4 text-green-300 mr-3" />
                    Morning Lodge Access & Breakfast
                  </div>
                  <div className="flex items-center text-white">
                    <Check className="w-4 h-4 text-green-300 mr-3" />
                    Guide Assistance
                  </div>
                  <div className="flex items-center text-white">
                    <Check className="w-4 h-4 text-green-300 mr-3" />
                    Temple Visits as per itinerary
                  </div>
                  <div className="flex items-center text-white">
                    <Check className="w-4 h-4 text-green-300 mr-3" />
                    Breakfast and Lunch
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* What's Included/Not Included */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="border-green-200">
            <CardHeader className="bg-green-50">
              <CardTitle className="text-green-800 flex items-center">
                ✅ Inclusions
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-3">
                <div className="flex items-center text-green-700">
                  <Check className="w-4 h-4 mr-3" />
                  AC / Non AC Sleeper Bus (Round Trip)
                </div>
                <div className="flex items-center text-green-700">
                  <Check className="w-4 h-4 mr-3" />
                  Morning Lodge Access (Fresh-up + Breakfast)
                </div>
                <div className="flex items-center text-green-700">
                  <Check className="w-4 h-4 mr-3" />
                  Guide Assistance
                </div>
                <div className="flex items-center text-green-700">
                  <Check className="w-4 h-4 mr-3" />
                  Temple Visits as per itinerary
                </div>
                <div className="flex items-center text-green-700">
                  <Check className="w-4 h-4 mr-3" />
                  Breakfast and Lunch
                </div>
                <div className="flex items-center text-green-700">
                  <Check className="w-4 h-4 mr-3" />
                  Luggage room
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-red-200">
            <CardHeader className="bg-red-50">
              <CardTitle className="text-red-800 flex items-center">
                🚫 Exclusions
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-3">
                <div className="flex items-center text-red-700">
                  <X className="w-4 h-4 mr-3" />
                  Dinner (Can be arranged at extra cost)
                </div>
                <div className="flex items-center text-red-700">
                  <X className="w-4 h-4 mr-3" />
                  Special Entry Tickets at Temples
                </div>
                <div className="flex items-center text-red-700">
                  <X className="w-4 h-4 mr-3" />
                  Accommodation Beyond Fresh-Up
                </div>
                <div className="flex items-center text-red-700">
                  <X className="w-4 h-4 mr-3" />
                  Personal expenses or tips
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">❓ Frequently Asked Questions</h3>
          <div className="space-y-6">
            <Card className="border-blue-200">
              <CardHeader>
                <CardTitle className="text-lg">Is accommodation included?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Only for morning fresh-up and breakfast. Full-day stay can be arranged on request.
                </p>
              </CardContent>
            </Card>

            <Card className="border-blue-200">
              <CardHeader>
                <CardTitle className="text-lg">What kind of vehicle is used?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">AC / Non AC Sleeper Bus (no private car option in this package).</p>
              </CardContent>
            </Card>

            <Card className="border-blue-200">
              <CardHeader>
                <CardTitle className="text-lg">Can I customize the itinerary?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">This package is fixed for spiritual efficiency and convenience.</p>
              </CardContent>
            </Card>

            <Card className="border-blue-200">
              <CardHeader>
                <CardTitle className="text-lg">Is Panchamukhi Anjaneya Temple visit guaranteed?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Yes, if road and time conditions allow; we prioritize it for all tours.</p>
              </CardContent>
            </Card>

            <Card className="border-blue-200">
              <CardHeader>
                <CardTitle className="text-lg">When should I book this tour?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Book at least 3 days in advance, especially during weekends or festival days.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 md:p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">Book Your Mantralayam Spiritual Journey Now!</h3>
          <p className="text-xl mb-8 opacity-90">
            Thousands of devotees trust TRAVIHARA for divine, smooth, and well-managed temple tours from Bangalore. Join
            us and make your next journey truly sacred.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-8">
            <Button size="lg" className="bg-black text-white hover:bg-white hover:text-blue-600 px-8 py-3">
              <Phone className="w-5 h-5 mr-2" />
              Call +91 91088-34112
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 bg-transparent"
            >
              <Mail className="w-5 h-5 mr-2" />
              travihara01@gmail.com
            </Button>
          </div>
          <p className="text-blue-100 mb-4">Call/WhatsApp: +91 91088 34112</p>
          <p className="text-blue-200 italic">"Travel with Devotion – TRAVIHARA makes it divine."</p>
        </div>
      </div>
    </div>
  )
}
