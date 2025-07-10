import { Clock, MapPin, Star, Users, Plane, Phone, Mail, Check, X } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../Ui/Card"
import { Badge } from "../Ui/Badge"
import { Button } from "../Ui/Button"
import Banner from "../../assets/Blogs/Shirdi/shirdiBanner.jpeg"
// import SaiBabaTemple from "../../assets/Blogs/Shirdi/shirdiMain.jpeg"
import Shirdi1 from "../../assets/Blogs/Shirdi/shirdi.jpeg"
import SaiBabaTemple from "../../assets/Blogs/Shirdi/shirdiTemple.jpeg"
import Trayambakeshwar from "../../assets/Blogs/Shirdi/trayambakeshwar.jpeg"
import Siddhivinayak from "../../assets/Blogs/Shirdi/Siddivinayaka.jpeg"


// // Using placeholder images - replace with your actual Shirdi images
// const Banner = "/placeholder.svg?height=600&width=1200"
// const ShirdiMain = "/placeholder.svg?height=400&width=600"
// const SaiBabaTemple = "/placeholder.svg?height=300&width=400"
// const Trayambakeshwar = "/placeholder.svg?height=300&width=400"
// const Siddhivinayak = "/placeholder.svg?height=300&width=400"

export default function Shirdi() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <div className="relative h-[70vh] bg-gradient-to-r from-blue-600 to-indigo-600 overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <img src={Banner || "/placeholder.svg"} alt="Shirdi Sai Baba Temple" className="w-full h-full object-cover" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="max-w-4xl px-6">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">Discover Inner Peace</h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">1N/2D Shirdi Sai Baba Darshan Tour from Bangalore</p>
            <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 text-lg">
              Book Your Spiritual Journey
            </Button>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">A Soulful Escape Awaits</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Are you longing for a soulful escape to reconnect with your spiritual side? Our 1 Night / 2 Days Shirdi
            Darshan Package from Bangalore is designed to provide a blissful pilgrimage experience with all essentials
            taken care of — from flights to accommodation to VIP darshan.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Card className="border-blue-200 hover:shadow-lg transition-shadow">
            <CardHeader>
              <Plane className="w-12 h-12 text-blue-600 mb-4" />
              <CardTitle className="text-xl">Hassle-Free Flights</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Round-trip airfare from Bangalore to Mumbai/Pune with comfortable transfers
              </p>
            </CardContent>
          </Card>

          <Card className="border-blue-200 hover:shadow-lg transition-shadow">
            <CardHeader>
              <Star className="w-12 h-12 text-blue-600 mb-4" />
              <CardTitle className="text-xl">VIP Darshan</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                No waiting in long queues! VIP darshan at Sai Baba Temple and Trayambakeshwar
              </p>
            </CardContent>
          </Card>

          <Card className="border-blue-200 hover:shadow-lg transition-shadow">
            <CardHeader>
              <Users className="w-12 h-12 text-blue-600 mb-4" />
              <CardTitle className="text-xl">4-Star Accommodation</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Premium hotel in Shirdi with twin/double sharing rooms</p>
            </CardContent>
          </Card>
        </div>

        {/* Why Choose Us Section */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 md:p-12 mb-16">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">✨ Why Choose Our Shirdi Tour Package?</h3>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <img
                src={Shirdi1 || "/placeholder.svg"}
                alt="Shirdi Sai Baba Temple Complex"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Hassle-Free Experience</h4>
                  <p className="text-blue-100">
                    Enjoy round-trip airfare with comfortable A/C pushback vehicle transfers
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">All-Inclusive Meals</h4>
                  <p className="text-blue-100">Delicious vegetarian meals including breakfast, lunch, and dinner</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Spiritual Sightseeing</h4>
                  <p className="text-blue-100">
                    Visit multiple sacred temples including Trayambakeshwar Jyotirlinga and Siddhivinayak
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Itinerary Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">🧭 Detailed Itinerary</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Day 1 */}
            <Card className="border-2 border-blue-200">
              <CardHeader className="bg-blue-600 text-white">
                <CardTitle className="flex items-center">
                  <Clock className="w-6 h-6 mr-2" />
                  Day 1 - Bangalore to Shirdi
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4 pt-4">
                  <div className="flex items-center space-x-3">
                    <Badge variant="outline" className="bg-blue-100">
                      Morning
                    </Badge>
                    <p className="text-gray-700">Assemble at Kempegowda International Airport</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Badge variant="outline" className="bg-blue-100">
                      Flight
                    </Badge>
                    <p className="text-gray-700">Fly to Mumbai/Pune</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Badge variant="outline" className="bg-blue-100">
                      Afternoon
                    </Badge>
                    <p className="text-gray-700">Visit Siddhivinayak & Mahalakshmi Temple</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Badge variant="outline" className="bg-blue-100">
                      Evening
                    </Badge>
                    <p className="text-gray-700">Trayambakeshwar Jyotirlinga darshan</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Badge variant="outline" className="bg-blue-100">
                      Night
                    </Badge>
                    <p className="text-gray-700">Arrive Shirdi, check-in & dinner</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Day 2 */}
            <Card className="border-2 border-indigo-200">
              <CardHeader className="bg-indigo-600 text-white">
                <CardTitle className="flex items-center">
                  <MapPin className="w-6 h-6 mr-2" />
                  Day 2 - Shirdi Darshan & Return
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4 pt-4">
                  <div className="flex items-center space-x-3">
                    <Badge variant="outline" className="bg-indigo-100">
                      Early Morning
                    </Badge>
                    <p className="text-gray-700">VIP darshan at Shirdi Sai Baba Temple</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Badge variant="outline" className="bg-indigo-100">
                      Morning
                    </Badge>
                    <p className="text-gray-700">Visit Gurusthan, Dwarakamai, Chawadi</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Badge variant="outline" className="bg-indigo-100">
                      Afternoon
                    </Badge>
                    <p className="text-gray-700">Shanishingnapur Temple visit</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Badge variant="outline" className="bg-indigo-100">
                      Evening
                    </Badge>
                    <p className="text-gray-700">Return to Pune Airport</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Badge variant="outline" className="bg-indigo-100">
                      Night
                    </Badge>
                    <p className="text-gray-700">Flight back to Bangalore</p>
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
                src={SaiBabaTemple || "/placeholder.svg"}
                alt="Sai Baba Temple Shirdi"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h4 className="font-semibold text-lg">Sai Baba Temple</h4>
                <p className="text-sm">Shirdi</p>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-lg">
              <img
                src={Trayambakeshwar || "/placeholder.svg"}
                alt="Trayambakeshwar Jyotirlinga"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h4 className="font-semibold text-lg">Trayambakeshwar</h4>
                <p className="text-sm">Jyotirlinga</p>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-lg">
              <img
                src={Siddhivinayak || "/placeholder.svg"}
                alt="Siddhivinayak Temple"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h4 className="font-semibold text-lg">Siddhivinayak Temple</h4>
                <p className="text-sm">Mumbai</p>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="bg-gradient-to-r from-indigo-600 to-blue-600 rounded-2xl p-8 md:p-12 text-white mb-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">💰 Package Pricing</h3>
            <p className="text-xl opacity-90">All-inclusive spiritual journey</p>
          </div>
          <div className="max-w-md mx-auto">
            <Card className="bg-white/10 backdrop-blur border-white/20">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-white">Complete Package</CardTitle>
                <CardDescription className="text-blue-100">Starting From</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-4xl font-bold text-white mb-4">₹16,999/-</div>
                <p className="text-blue-100 mb-6">Per Person (All Inclusive)</p>
                <div className="space-y-2 text-left">
                  <div className="flex items-center text-white">
                    <Check className="w-4 h-4 text-green-300 mr-3" />
                    Return airfare included
                  </div>
                  <div className="flex items-center text-white">
                    <Check className="w-4 h-4 text-green-300 mr-3" />
                    4-star hotel accommodation
                  </div>
                  <div className="flex items-center text-white">
                    <Check className="w-4 h-4 text-green-300 mr-3" />
                    All vegetarian meals
                  </div>
                  <div className="flex items-center text-white">
                    <Check className="w-4 h-4 text-green-300 mr-3" />
                    VIP darshan tickets
                  </div>
                  <div className="flex items-center text-white">
                    <Check className="w-4 h-4 text-green-300 mr-3" />
                    A/C vehicle transfers
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
                <Check className="w-6 h-6 mr-2" />🧳 What's Included
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-3">
                <div className="flex items-center text-green-700">
                  <Check className="w-4 h-4 mr-3" />
                  Return airfare (Bangalore – Mumbai/Pune)
                </div>
                <div className="flex items-center text-green-700">
                  <Check className="w-4 h-4 mr-3" />
                  Comfortable A/C vehicle transfers
                </div>
                <div className="flex items-center text-green-700">
                  <Check className="w-4 h-4 mr-3" />
                  All vegetarian meals
                </div>
                <div className="flex items-center text-green-700">
                  <Check className="w-4 h-4 mr-3" />
                  4-star hotel accommodation
                </div>
                <div className="flex items-center text-green-700">
                  <Check className="w-4 h-4 mr-3" />
                  VIP darshan tickets
                </div>
                <div className="flex items-center text-green-700">
                  <Check className="w-4 h-4 mr-3" />
                  1L mineral water per person per day
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-red-200">
            <CardHeader className="bg-red-50">
              <CardTitle className="text-red-800 flex items-center">
                <X className="w-6 h-6 mr-2" />🚫 What's Not Included
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-3">
                <div className="flex items-center text-red-700">
                  <X className="w-4 h-4 mr-3" />
                  Entry fees to other attractions
                </div>
                <div className="flex items-center text-red-700">
                  <X className="w-4 h-4 mr-3" />
                  Personal expenses (Shopping, tips)
                </div>
                <div className="flex items-center text-red-700">
                  <X className="w-4 h-4 mr-3" />
                  Travel insurance
                </div>
                <div className="flex items-center text-red-700">
                  <X className="w-4 h-4 mr-3" />
                  Medical or emergency expenses
                </div>
                <div className="flex items-center text-red-700">
                  <X className="w-4 h-4 mr-3" />
                  Beverages outside meal plan
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">🔍 Frequently Asked Questions</h3>
          <div className="space-y-6">
            <Card className="border-blue-200">
              <CardHeader>
                <CardTitle className="text-lg">Is the flight included in the package price?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Yes, both onward and return flights are included in the cost.</p>
              </CardContent>
            </Card>

            <Card className="border-blue-200">
              <CardHeader>
                <CardTitle className="text-lg">Will I get VIP darshan at Sai Baba Temple?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Your package comes with VIP darshan at Sai Baba Temple and other key temples like Trayambakeshwar and
                  Siddhivinayak.
                </p>
              </CardContent>
            </Card>

            <Card className="border-blue-200">
              <CardHeader>
                <CardTitle className="text-lg">Can I customize the package?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Yes, we're flexible. If you want to add places or need a longer stay, our team can customize the
                  itinerary.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 md:p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">🙏 Book Your Spiritual Journey Now!</h3>
          <p className="text-xl mb-8 opacity-90">
            Thousands of pilgrims have trusted us to make their Shirdi pilgrimage smooth, serene, and spiritually
            uplifting.
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
          <p className="text-blue-100 mb-4">🕉️ Call/WhatsApp: +91 91088 34112</p>
          <p className="text-blue-100 mb-4">🌐 Website: www.travihara.com</p>
          <p className="text-blue-200 italic">"Where devotion meets comfort – TRAVIHARA makes it possible."</p>
        </div>
      </div>
    </div>
  )
}
