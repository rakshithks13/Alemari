import { Mail, Phone, MapPin, Calendar, Cookie, Settings, Shield, BarChart3, Target } from "lucide-react"

const CookieTerms = () => {
  return (
    <div className="min-h-screen mt-28 bg-gradient-to-br from-orange-50 via-white to-amber-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-2">
              <Cookie className="w-8 h-8 text-orange-600" />
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Cookie Policy</h1>
            </div>
            <p className="text-lg text-orange-600 font-semibold">TRAVIHARA</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Effective Date Banner */}
        <div className="bg-orange-100 border border-orange-200 rounded-lg p-6 mb-8">
          <div className="flex items-center justify-center gap-2">
            <Calendar className="w-5 h-5 text-orange-600" />
            <span className="font-semibold text-orange-800">Effective Date:</span>
            <span className="text-orange-700">10th July 2025</span>
          </div>
        </div>

        {/* Introduction */}
        <div className="bg-white rounded-xl shadow-sm border p-8 mb-8">
          <p className="text-lg text-gray-700 leading-relaxed">
            <span className="font-semibold text-orange-600">TRAVIHARA</span> uses cookies and similar technologies to
            enhance your browsing experience, analyze website traffic, and improve our services.
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-8">
          {/* Section 1 */}
          <section className="bg-white rounded-xl shadow-sm border p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <span className="bg-orange-100 text-orange-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                1
              </span>
              What Are Cookies?
            </h2>
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Cookies are small text files placed on your device when you visit a website. They help the site remember
                your preferences and provide personalized experiences.
              </p>
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <Cookie className="w-12 h-12 text-orange-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-orange-800 mb-2">How Cookies Work</h4>
                    <p className="text-orange-700 text-sm">
                      When you visit our website, cookies are automatically stored on your device to remember your
                      preferences, improve functionality, and help us understand how you use our site.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section className="bg-white rounded-xl shadow-sm border p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <span className="bg-orange-100 text-orange-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                2
              </span>
              Types of Cookies We Use
            </h2>
            <div className="space-y-6">
              {/* Essential Cookies */}
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <Shield className="w-8 h-8 text-green-600 flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-green-800 mb-2">Essential Cookies</h3>
                    <p className="text-green-700 mb-3">
                      Required for basic website functions (e.g., form submissions).
                    </p>
                    <div className="bg-green-100 rounded-md p-3">
                      <p className="text-green-800 text-sm font-medium">
                        ✓ These cookies are necessary for the website to function and cannot be disabled.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Analytics Cookies */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <BarChart3 className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-blue-800 mb-2">Analytics Cookies</h3>
                    <p className="text-blue-700 mb-3">To track website usage (e.g., via Google Analytics).</p>
                    <div className="bg-blue-100 rounded-md p-3">
                      <p className="text-blue-800 text-sm">
                        <strong>Purpose:</strong> Help us understand how visitors interact with our website by
                        collecting and reporting information anonymously.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Marketing Cookies */}
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <Target className="w-8 h-8 text-purple-600 flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-purple-800 mb-2">Marketing Cookies</h3>
                    <p className="text-purple-700 mb-3">
                      For retargeting and ad campaign measurement (e.g., via Facebook Pixel).
                    </p>
                    <div className="bg-purple-100 rounded-md p-3">
                      <p className="text-purple-800 text-sm">
                        <strong>Purpose:</strong> Track visitors across websites to display relevant advertisements and
                        measure campaign effectiveness.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section className="bg-white rounded-xl shadow-sm border p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <span className="bg-orange-100 text-orange-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                3
              </span>
              How to Manage Cookies
            </h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Settings className="w-8 h-8 text-gray-600 flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    You can modify your browser settings to disable or delete cookies. Note that some site features may
                    not work correctly if you disable cookies.
                  </p>
                </div>
              </div>

              {/* Browser Instructions */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-semibold text-gray-900 mb-4">Browser Cookie Settings:</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      <span className="text-gray-700 font-medium">Chrome:</span>
                      <span className="text-gray-600 text-sm">Settings → Privacy → Cookies</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      <span className="text-gray-700 font-medium">Firefox:</span>
                      <span className="text-gray-600 text-sm">Options → Privacy → Cookies</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      <span className="text-gray-700 font-medium">Safari:</span>
                      <span className="text-gray-600 text-sm">Preferences → Privacy</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      <span className="text-gray-700 font-medium">Edge:</span>
                      <span className="text-gray-600 text-sm">Settings → Privacy → Cookies</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                <p className="text-amber-800 font-medium">
                  ⚠️ Disabling cookies may affect website functionality and your user experience.
                </p>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section className="bg-white rounded-xl shadow-sm border p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <span className="bg-orange-100 text-orange-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                4
              </span>
              Third-Party Cookies
            </h2>
            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed">
                We may allow third-party services like Google and Meta to place cookies for analytics and marketing
                purposes. Their cookie usage is governed by their respective privacy policies.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                      <span className="text-red-600 font-bold text-sm">G</span>
                    </div>
                    <h4 className="font-semibold text-red-800">Google Services</h4>
                  </div>
                  <p className="text-red-700 text-sm mb-3">Google Analytics, Google Ads</p>
                  <a
                    href="https://policies.google.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-600 hover:text-red-800 underline text-sm"
                  >
                    View Google Privacy Policy →
                  </a>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-bold text-sm">M</span>
                    </div>
                    <h4 className="font-semibold text-blue-800">Meta Services</h4>
                  </div>
                  <p className="text-blue-700 text-sm mb-3">Facebook Pixel, Instagram Ads</p>
                  <a
                    href="https://www.facebook.com/privacy/policy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 underline text-sm"
                  >
                    View Meta Privacy Policy →
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Section 5 */}
          <section className="bg-white rounded-xl shadow-sm border p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <span className="bg-orange-100 text-orange-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                5
              </span>
              Updates to This Policy
            </h2>
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                We may update this Cookie Policy from time to time. The latest version will always be available on our
                website.
              </p>
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                <p className="text-orange-800 font-medium">
                  📅 We recommend checking this page periodically for any updates to our cookie practices.
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Questions Section */}
        <div className="bg-gradient-to-r from-orange-600 to-amber-600 rounded-xl shadow-lg p-8 mt-12 text-white">
          <h2 className="text-2xl font-bold mb-6 text-center">Questions?</h2>
          <p className="text-center mb-6 text-orange-100">
            For more information about our cookie policy, contact us at:
          </p>
          <div className="max-w-md mx-auto space-y-4">
            <div className="flex items-center gap-3 justify-center">
              <MapPin className="w-5 h-5 text-orange-200" />
              <span>TRAVIHARA, Bangalore, Karnataka, India</span>
            </div>
            <div className="flex items-center gap-3 justify-center">
              <Mail className="w-5 h-5 text-orange-200" />
              <a href="mailto:travihara01@gmail.com" className="hover:text-orange-200 underline">
                travihara01@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-3 justify-center">
              <Phone className="w-5 h-5 text-orange-200" />
              <a href="tel:+919108834112" className="hover:text-orange-200 underline">
                +91 91088-34112
              </a>
            </div>
          </div>
        </div>

        {/* Cookie Consent Banner Simulation */}
        <div className="bg-gray-900 rounded-xl shadow-lg p-6 mt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Cookie className="w-6 h-6 text-orange-400" />
              <p className="text-white text-sm">This is how a cookie consent banner might appear on your website.</p>
            </div>
            <div className="flex gap-3">
              <button className="px-4 py-2 bg-gray-700 text-white rounded-lg text-sm hover:bg-gray-600 transition-colors">
                Manage Preferences
              </button>
              <button className="px-4 py-2 bg-orange-600 text-white rounded-lg text-sm hover:bg-orange-700 transition-colors">
                Accept All
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CookieTerms
