

import { MapPin, Star, Users, Train, Phone, Mail, Check, X, Calendar } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../Ui/Card"
import { Badge } from "../Ui/Badge"
import { Button } from "../Ui/Button"

// Using placeholder images - replace with your actual pilgrimage images
const Banner = "/placeholder.svg?height=600&width=1200"
const KasiTemple = "/placeholder.svg?height=400&width=600"
const PrayagrajSangam = "/placeholder.svg?height=300&width=400"
const AyodhyaRam = "/placeholder.svg?height=300&width=400"
const GayaTemple = "/placeholder.svg?height=300&width=400"
const BodhgayaStupa = "/placeholder.svg?height=300&width=400"

export default function Kashi() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      {/* Hero Section */}
      <div className="relative h-[70vh] bg-gradient-to-r from-orange-600 to-red-600 overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <img
          src={Banner || "/placeholder.svg"}
          alt="Kasi Prayagraj Ayodhya Gaya Bodhgaya Pilgrimage Tour"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="max-w-4xl px-6">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              🛕 Sacred Pilgrimage Journey
            </h1>
            <p className="text-xl md:text-2xl text-orange-100 mb-4">Kasi – Prayagraj – Ayodhya – Gaya – Bodhgaya</p>
            <p className="text-lg text-orange-200 mb-8">
              7th to 15th September 2025 | 9 Days | ₹23,000/- All-Inclusive
            </p>
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg">
              Book Your Sacred Journey
            </Button>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            🌟 Embark on a Sacred Journey with TRAVIHARA
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Experience a soul-enriching spiritual tour across India's holiest pilgrimage destinations with comfortable
            AC/Non-AC train travel, 2/3 sharing room accommodation, and all essential arrangements taken care of. This
            thoughtfully curated 9-day package promises divine experiences including Shraddha at Gaya, Ganga Snan at
            Triveni Sangam, and darshan at Kasi Vishwanath Temple.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Card className="border-orange-200 hover:shadow-lg transition-shadow">
            <CardHeader>
              <Train className="w-12 h-12 text-orange-600 mb-4" />
              <CardTitle className="text-xl">Train & Bus Travel</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Comfortable AC/Non-AC train from Bangalore to Prayagraj & bus transfers between cities
              </p>
            </CardContent>
          </Card>

          <Card className="border-orange-200 hover:shadow-lg transition-shadow">
            <CardHeader>
              <Star className="w-12 h-12 text-orange-600 mb-4" />
              <CardTitle className="text-xl">Sacred Experiences</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Triveni Sangam Snan, Pinda Pradanam at Gaya, Temple Darshans, Ganga Aarti</p>
            </CardContent>
          </Card>

          <Card className="border-orange-200 hover:shadow-lg transition-shadow">
            <CardHeader>
              <Users className="w-12 h-12 text-orange-600 mb-4" />
              <CardTitle className="text-xl">All-Inclusive Package</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                2/3 sharing accommodation, 3 meals + tea/coffee, guided tours & spiritual activities
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Why Choose Us Section */}
        <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl p-8 md:p-12 mb-16">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">🧳 Package Highlights</h3>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <img
                src={KasiTemple || "/placeholder.svg"}
                alt="Kasi Vishwanath Temple"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">🚆 Comfortable Travel</h4>
                  <p className="text-orange-100">
                    Train travel from Bangalore to Prayagraj & back with AC/Non-AC options
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">🛶 Sacred Experiences</h4>
                  <p className="text-orange-100">
                    Electric Rickshaw Tour, Ganga Boat Ride, Abhishekam, Aarti ceremonies
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">🧓 Senior Citizen Friendly</h4>
                  <p className="text-orange-100">
                    Special ₹1,000 discount for senior citizens with comfortable arrangements
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Itinerary Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">📅 Detailed Day-wise Itinerary</h3>
          <div className="space-y-6">
            {/* Departure */}
            <Card className="border-2 border-orange-200">
              <CardHeader className="bg-orange-600 text-white">
                <CardTitle className="flex items-center">
                  <Calendar className="w-6 h-6 mr-2" />
                  07-09-2025 - Departure from Bangalore
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4 pt-4">
                  <div className="flex items-center space-x-3">
                    <Badge variant="outline" className="bg-orange-100">
                      1:30 PM
                    </Badge>
                    <p className="text-gray-700">Departure from S.M.V.T. Railway Station, Bangalore</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Badge variant="outline" className="bg-orange-100">
                      Journey
                    </Badge>
                    <p className="text-gray-700">Train journey to Prayagraj (Allahabad)</p>
                  </div>
                  <p className="text-sm text-gray-600 italic">
                    Note: Train food & beverages are self-paid by travelers
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Day 1 - Prayagraj */}
            <Card className="border-2 border-blue-200">
              <CardHeader className="bg-blue-600 text-white">
                <CardTitle className="flex items-center">
                  <MapPin className="w-6 h-6 mr-2" />
                  09-09-2025 - Prayagraj (Allahabad)
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4 pt-4">
                  <div className="flex items-center space-x-3">
                    <Badge variant="outline" className="bg-blue-100">
                      Morning
                    </Badge>
                    <p className="text-gray-700">Holy Bath at Triveni Sangam</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Badge variant="outline" className="bg-blue-100">
                      Afternoon
                    </Badge>
                    <p className="text-gray-700">Visit Swaraj Bhavan, Allahabad Fort, Museum & Park</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Badge variant="outline" className="bg-blue-100">
                      Evening
                    </Badge>
                    <p className="text-gray-700">Continue journey to Ayodhya</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Badge variant="outline" className="bg-blue-100">
                      Night
                    </Badge>
                    <p className="text-gray-700">Night Halt at Ayodhya</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Day 2 - Ayodhya */}
            <Card className="border-2 border-green-200">
              <CardHeader className="bg-green-600 text-white">
                <CardTitle className="flex items-center">
                  <MapPin className="w-6 h-6 mr-2" />
                  10-09-2025 - Ayodhya Exploration
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4 pt-4">
                  <div className="flex items-center space-x-3">
                    <Badge variant="outline" className="bg-green-100">
                      Full Day
                    </Badge>
                    <p className="text-gray-700">Spiritual visit to Ram Janmabhoomi and other sacred places</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Badge variant="outline" className="bg-green-100">
                      Night
                    </Badge>
                    <p className="text-gray-700">Night Halt at Ayodhya</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Day 3 - Gaya */}
            <Card className="border-2 border-purple-200">
              <CardHeader className="bg-purple-600 text-white">
                <CardTitle className="flex items-center">
                  <MapPin className="w-6 h-6 mr-2" />
                  11-09-2025 - Gaya Pilgrimage
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4 pt-4">
                  <div className="flex items-center space-x-3">
                    <Badge variant="outline" className="bg-purple-100">
                      Morning
                    </Badge>
                    <p className="text-gray-700">Arrival at Gaya, Perform Pinda Pradanam & Pitru Karya</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Badge variant="outline" className="bg-purple-100">
                      Afternoon
                    </Badge>
                    <p className="text-gray-700">Visit Vishnupad Mandir</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Badge variant="outline" className="bg-purple-100">
                      Evening
                    </Badge>
                    <p className="text-gray-700">Proceed to Moghal Sarai / Varanasi</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Badge variant="outline" className="bg-purple-100">
                      Night
                    </Badge>
                    <p className="text-gray-700">Night Halt at Kasi (Varanasi)</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Day 4 - Kasi */}
            <Card className="border-2 border-indigo-200">
              <CardHeader className="bg-indigo-600 text-white">
                <CardTitle className="flex items-center">
                  <MapPin className="w-6 h-6 mr-2" />
                  12-09-2025 - Kasi Darshan
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4 pt-4">
                  <div className="flex items-center space-x-3">
                    <Badge variant="outline" className="bg-indigo-100">
                      Morning
                    </Badge>
                    <p className="text-gray-700">Ganga Snan & Abhishekam at Kasi Vishwanath Temple</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Badge variant="outline" className="bg-indigo-100">
                      Evening
                    </Badge>
                    <p className="text-gray-700">Attend Evening Ganga Aarti</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Badge variant="outline" className="bg-indigo-100">
                      Night
                    </Badge>
                    <p className="text-gray-700">Night Halt at Varanasi</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Day 5 - Temple Tour & Return */}
            <Card className="border-2 border-red-200">
              <CardHeader className="bg-red-600 text-white">
                <CardTitle className="flex items-center">
                  <Train className="w-6 h-6 mr-2" />
                  13-09-2025 - Temples & Return Journey
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4 pt-4">
                  <div className="flex items-center space-x-3">
                    <Badge variant="outline" className="bg-red-100">
                      Morning
                    </Badge>
                    <p className="text-gray-700">Darshan at Kal Bhairava, Durga, Hanuman Temples</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Badge variant="outline" className="bg-red-100">
                      Afternoon
                    </Badge>
                    <p className="text-gray-700">Visit Tulsi Manas Mandir & Banaras Hindu University (BHU)</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Badge variant="outline" className="bg-red-100">
                      8:30 PM
                    </Badge>
                    <p className="text-gray-700">Departure from Din Dayal Upadhyay Railway Station</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Return */}
            <Card className="border-2 border-orange-200">
              <CardHeader className="bg-orange-600 text-white">
                <CardTitle className="flex items-center">
                  <Calendar className="w-6 h-6 mr-2" />
                  15-09-2025 - Return to Bangalore
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4 pt-4">
                  <div className="flex items-center space-x-3">
                    <Badge variant="outline" className="bg-orange-100">
                      5:00 PM
                    </Badge>
                    <p className="text-gray-700">Arrival at S.M.V.T. Railway Station, Bangalore</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Sacred Destinations Gallery */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">Sacred Destinations</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="relative group overflow-hidden rounded-lg">
              <img
                src={PrayagrajSangam || "/placeholder.svg"}
                alt="Triveni Sangam Prayagraj"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h4 className="font-semibold text-lg">Triveni Sangam</h4>
                <p className="text-sm">Prayagraj</p>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-lg">
              <img
                src={AyodhyaRam || "/placeholder.svg"}
                alt="Ram Janmabhoomi Ayodhya"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h4 className="font-semibold text-lg">Ram Janmabhoomi</h4>
                <p className="text-sm">Ayodhya</p>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-lg">
              <img
                src={GayaTemple || "/placeholder.svg"}
                alt="Vishnupad Temple Gaya"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h4 className="font-semibold text-lg">Vishnupad Temple</h4>
                <p className="text-sm">Gaya</p>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-lg">
              <img
                src={KasiTemple || "/placeholder.svg"}
                alt="Kasi Vishwanath Temple"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h4 className="font-semibold text-lg">Kasi Vishwanath</h4>
                <p className="text-sm">Varanasi</p>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-lg">
              <img
                src={BodhgayaStupa || "/placeholder.svg"}
                alt="Mahabodhi Temple Bodhgaya"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h4 className="font-semibold text-lg">Mahabodhi Temple</h4>
                <p className="text-sm">Bodhgaya</p>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl p-8 md:p-12 text-white mb-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">💰 Package Pricing</h3>
            <p className="text-xl opacity-90">All-inclusive spiritual journey</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-white/10 backdrop-blur border-white/20">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-white">Standard Package</CardTitle>
                <CardDescription className="text-orange-100">Per Person</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-4xl font-bold text-white mb-4">₹23,000/-</div>
                <p className="text-orange-100 mb-6">All Inclusive</p>
                <div className="space-y-2 text-left">
                  <div className="flex items-center text-white">
                    <Check className="w-4 h-4 text-green-300 mr-3" />
                    Train travel included
                  </div>
                  <div className="flex items-center text-white">
                    <Check className="w-4 h-4 text-green-300 mr-3" />
                    2/3 sharing accommodation
                  </div>
                  <div className="flex items-center text-white">
                    <Check className="w-4 h-4 text-green-300 mr-3" />
                    All meals + tea/coffee
                  </div>
                  <div className="flex items-center text-white">
                    <Check className="w-4 h-4 text-green-300 mr-3" />
                    Bus transfers & guided tours
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur border-white/20">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-white">Senior Citizens</CardTitle>
                <CardDescription className="text-orange-100">Special Discount</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-4xl font-bold text-white mb-4">₹22,000/-</div>
                <p className="text-orange-100 mb-6">₹1,000 Discount</p>
                <div className="space-y-2 text-left">
                  <div className="flex items-center text-white">
                    <Check className="w-4 h-4 text-green-300 mr-3" />
                    Same inclusions as standard
                  </div>
                  <div className="flex items-center text-white">
                    <Check className="w-4 h-4 text-green-300 mr-3" />
                    Special care for seniors
                  </div>
                  <div className="flex items-center text-white">
                    <Check className="w-4 h-4 text-green-300 mr-3" />
                    Comfortable arrangements
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <div className="bg-white/20 rounded-lg p-6 max-w-md mx-auto">
              <h4 className="text-xl font-bold mb-4">📌 Booking Details</h4>
              <div className="space-y-2 text-left">
                <p>
                  <strong>Advance Payment:</strong> ₹5,000/- to confirm Railway Ticket
                </p>
                <p>
                  <strong>Booking Deadline:</strong> 📅 12-07-2025
                </p>
                <p>
                  <strong>Balance Payment:</strong> Before journey
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* What's Included/Not Included */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="border-green-200">
            <CardHeader className="bg-green-50">
              <CardTitle className="text-green-800 flex items-center">
                <Check className="w-6 h-6 mr-2" />✅ What's Included
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-3">
                <div className="flex items-center text-green-700">
                  <Check className="w-4 h-4 mr-3" />
                  Railway Tickets (from Prayagraj onward)
                </div>
                <div className="flex items-center text-green-700">
                  <Check className="w-4 h-4 mr-3" />
                  Bus Transfers (Ayodhya, Gaya, Bodhgaya, Varanasi)
                </div>
                <div className="flex items-center text-green-700">
                  <Check className="w-4 h-4 mr-3" />
                  Accommodation (2/3 sharing basis)
                </div>
                <div className="flex items-center text-green-700">
                  <Check className="w-4 h-4 mr-3" />
                  Meals (Breakfast, Lunch, Dinner + Tea/Coffee)
                </div>
                <div className="flex items-center text-green-700">
                  <Check className="w-4 h-4 mr-3" />
                  Boat Ride, Electric Rickshaw in Varanasi
                </div>
                <div className="flex items-center text-green-700">
                  <Check className="w-4 h-4 mr-3" />
                  Ganga Aarti, Temple Darshan, Shraddha Ceremony
                </div>
                <div className="flex items-center text-green-700">
                  <Check className="w-4 h-4 mr-3" />
                  Full Tour Guidance & Support
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-red-200">
            <CardHeader className="bg-red-50">
              <CardTitle className="text-red-800 flex items-center">
                <X className="w-6 h-6 mr-2" />❌ What's Not Included
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-3">
                <div className="flex items-center text-red-700">
                  <X className="w-4 h-4 mr-3" />
                  Train Food from Bangalore to Allahabad and return
                </div>
                <div className="flex items-center text-red-700">
                  <X className="w-4 h-4 mr-3" />
                  Personal expenses (snacks, shopping, etc.)
                </div>
                <div className="flex items-center text-red-700">
                  <X className="w-4 h-4 mr-3" />
                  Entry fees (if any) at monuments
                </div>
                <div className="flex items-center text-red-700">
                  <X className="w-4 h-4 mr-3" />
                  Travel insurance
                </div>
                <div className="flex items-center text-red-700">
                  <X className="w-4 h-4 mr-3" />
                  Medical or emergency expenses
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* What to Carry */}
        <div className="mb-16">
          <Card className="border-blue-200">
            <CardHeader className="bg-blue-50">
              <CardTitle className="text-blue-800 flex items-center">🧳 What to Carry</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex items-center text-blue-700">
                    <Check className="w-4 h-4 mr-3" />
                    Valid Government ID Proof (Aadhaar, PAN, Voter ID)
                  </div>
                  <div className="flex items-center text-blue-700">
                    <Check className="w-4 h-4 mr-3" />
                    Personal medication (if needed)
                  </div>
                  <div className="flex items-center text-blue-700">
                    <Check className="w-4 h-4 mr-3" />
                    Light cotton clothes for temple visits
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center text-blue-700">
                    <Check className="w-4 h-4 mr-3" />
                    Umbrella, Footwear for temple visits
                  </div>
                  <div className="flex items-center text-blue-700">
                    <Check className="w-4 h-4 mr-3" />
                    Travel pillow and light blanket for train
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">🔍 Frequently Asked Questions</h3>
          <div className="space-y-6">
            <Card className="border-orange-200">
              <CardHeader>
                <CardTitle className="text-lg">Is train travel included in the package?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Yes, train travel from Bangalore to Prayagraj and return is included. However, train food during
                  travel is self-paid by travelers.
                </p>
              </CardContent>
            </Card>

            <Card className="border-orange-200">
              <CardHeader>
                <CardTitle className="text-lg">What spiritual activities are included?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  The package includes Triveni Sangam Snan, Pinda Pradanam at Gaya, temple darshans, Ganga Aarti, boat
                  rides, and guided spiritual tours at all destinations.
                </p>
              </CardContent>
            </Card>

            <Card className="border-orange-200">
              <CardHeader>
                <CardTitle className="text-lg">Is there a discount for senior citizens?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Yes, senior citizens get a special discount of ₹1,000 off the regular package price, making it ₹22,000
                  per person.
                </p>
              </CardContent>
            </Card>

            <Card className="border-orange-200">
              <CardHeader>
                <CardTitle className="text-lg">What is the booking process?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Pay ₹5,000 advance to confirm your railway ticket before the booking deadline of 12-07-2025. Balance
                  payment must be completed before the journey starts.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl p-8 md:p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">🙏 A Journey to Cleanse the Soul Awaits You</h3>
          <p className="text-xl mb-8 opacity-90">
            Take part in this once-in-a-lifetime yatra through India's holiest lands – walk in the footsteps of saints,
            take a dip in sacred rivers, and reconnect with your roots through powerful rituals.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-8">
            <Button size="lg" className="bg-black text-white hover:bg-white hover:text-blue-600 px-8 py-3">
              <Phone className="w-5 h-5 mr-2" />
              Call +91 91088-34112
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-orange-600 px-8 py-3 bg-transparent"
            >
              <Mail className="w-5 h-5 mr-2" />
              travihara01@gmail.com
            </Button>
          </div>
          <div className="space-y-2 mb-6">
            <p className="text-orange-100">📱 Call/WhatsApp: +91-9108834112</p>
          </div>
          <p className="text-orange-200 italic text-lg">
            "Join us for a safe, comfortable, and spiritually fulfilling journey to Kasi, Prayagraj, Ayodhya, and Gaya."
          </p>
          <div className="mt-6">
            <Badge className="bg-yellow-500 text-black text-lg px-4 py-2">
              🎟️ Limited slots available! Reserve your seat now
            </Badge>
          </div>
        </div>
      </div>
    </div>
  )
}
