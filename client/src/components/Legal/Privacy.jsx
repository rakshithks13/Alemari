import { Mail, Phone, MapPin, Calendar, Clock } from "lucide-react"

const Privacy = () => {
  return (
    <div className="min-h-screen mt-28 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
            <p className="text-lg text-blue-600 font-semibold">TRAVIHARA</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Effective Date Banner */}
        <div className="bg-blue-100 border border-blue-200 rounded-lg p-6 mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-blue-600" />
              <span className="font-semibold text-blue-800">Effective Date:</span>
              <span className="text-blue-700">10th July 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-blue-600" />
              <span className="font-semibold text-blue-800">Last Updated:</span>
              <span className="text-blue-700">10th July 2025</span>
            </div>
          </div>
        </div>

        {/* Introduction */}
        <div className="bg-white rounded-xl shadow-sm border p-8 mb-8">
          <p className="text-lg text-gray-700 leading-relaxed">
            Welcome to <span className="font-semibold text-blue-600">TRAVIHARA</span>! Your privacy is important to us.
            This Privacy Policy explains how we collect, use, and protect your personal information when you interact
            with our website at{" "}
            <a href="https://www.travihara.com" className="text-blue-600 hover:text-blue-800 underline">
              www.travihara.com
            </a>
            .
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-8">
          {/* Section 1 */}
          <section className="bg-white rounded-xl shadow-sm border p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                1
              </span>
              Who We Are
            </h2>
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                <span className="font-semibold text-blue-600">TRAVIHARA</span> is a travel service provider based in
                Bangalore, Karnataka, India. We specialize in offering curated travel packages including domestic and
                international tours, cultural trips, and temple journeys.
              </p>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-gray-700 mb-2">For any privacy-related questions, please contact us at:</p>
                <div className="flex items-center gap-2 text-blue-600">
                  <Mail className="w-4 h-4" />
                  <a href="mailto:travihara01@gmail.com" className="hover:text-blue-800 underline">
                    travihara01@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section className="bg-white rounded-xl shadow-sm border p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                2
              </span>
              What Information We Collect
            </h2>
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                When you visit or interact with our website, we may collect the following information via lead
                generation forms:
              </p>
              <ul className="space-y-3">
                {[
                  "Full Name",
                  "Email Address",
                  "Phone Number",
                  "Travel Preferences (e.g., destination, group size, date of travel)",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mt-4">
                <p className="text-green-800 font-medium">
                  ✓ We do not collect or store sensitive payment details on our website.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section className="bg-white rounded-xl shadow-sm border p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                3
              </span>
              How We Use Your Information
            </h2>
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">We use your information for the following purposes:</p>
              <ul className="space-y-3">
                {[
                  "To respond to your travel inquiries",
                  "To send you relevant travel package details",
                  "To improve our services based on travel trends",
                  "To understand user behavior through analytics",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mt-4">
                <p className="text-amber-800 font-medium">
                  📧 We do not send promotional emails or newsletters unless you request it explicitly.
                </p>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section className="bg-white rounded-xl shadow-sm border p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                4
              </span>
              Third-Party Services
            </h2>
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                We use third-party tools to improve our website and advertising:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Google Analytics</h4>
                  <p className="text-gray-600 text-sm">To track website performance and user interaction.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Facebook Pixel / Meta Ads</h4>
                  <p className="text-gray-600 text-sm">
                    To measure ad campaign effectiveness and retarget users with relevant offers.
                  </p>
                </div>
              </div>
              <p className="text-gray-600 text-sm">
                These third-party services may collect anonymous data such as your IP address, device type, and browser
                activity.
              </p>
            </div>
          </section>

          {/* Section 5 */}
          <section className="bg-white rounded-xl shadow-sm border p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                5
              </span>
              Cookies & Tracking
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We use cookies and similar tracking technologies to enhance user experience. You can manage your cookie
              preferences via your browser settings.
            </p>
          </section>

          {/* Section 6 */}
          <section className="bg-white rounded-xl shadow-sm border p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                6
              </span>
              Data Sharing
            </h2>
            <div className="space-y-4">
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <p className="text-red-800 font-medium">
                  🚫 We do not sell, trade, or rent your personal data to any third parties.
                </p>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Your data may only be shared with trusted internal team members or IT service providers, and only for
                the purpose of delivering our services.
              </p>
            </div>
          </section>

          {/* Section 7 */}
          <section className="bg-white rounded-xl shadow-sm border p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                7
              </span>
              Data Security
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We follow best practices to ensure that your information is stored securely. However, no internet
              transmission is 100% secure, and we cannot guarantee absolute data security.
            </p>
          </section>

          {/* Section 8 */}
          <section className="bg-white rounded-xl shadow-sm border p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                8
              </span>
              Your Rights
            </h2>
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">You have the right to:</p>
              <ul className="space-y-3">
                {[
                  "Request access to your personal data",
                  "Request that we correct or delete your information",
                  "Withdraw consent (by contacting us)",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-blue-800">
                  To exercise your rights, email us at{" "}
                  <a href="mailto:travihara01@gmail.com" className="font-semibold underline hover:text-blue-900">
                    travihara01@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </section>

          {/* Section 9 */}
          <section className="bg-white rounded-xl shadow-sm border p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                9
              </span>
              Childrens Privacy
            </h2>
            <p className="text-gray-700 leading-relaxed">
              TRAVIHARA does not knowingly collect personal information from children.
            </p>
          </section>

          {/* Section 10 */}
          <section className="bg-white rounded-xl shadow-sm border p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                10
              </span>
              Changes to This Policy
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We may update this Privacy Policy occasionally to reflect changes in our practices or legal obligations.
              The latest version will always be available at{" "}
              <a
                href="https://www.travihara.com/privacy"
                className="text-blue-600 hover:text-blue-800 underline"
              >
                www.travihara.com/privacy
              </a>
              .
            </p>
          </section>
        </div>

        {/* Contact Section */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl shadow-lg p-8 mt-12 text-white">
          <h2 className="text-2xl font-bold mb-6 text-center">Contact Us</h2>
          <p className="text-center mb-6 text-blue-100">
            If you have any questions about this Privacy Policy or your personal data, please contact:
          </p>
          <div className="max-w-md mx-auto space-y-4">
            <div className="flex items-center gap-3 justify-center">
              <MapPin className="w-5 h-5 text-blue-200" />
              <span>TRAVIHARA, Bangalore, Karnataka, India</span>
            </div>
            <div className="flex items-center gap-3 justify-center">
              <Mail className="w-5 h-5 text-blue-200" />
              <a href="mailto:travihara01@gmail.com" className="hover:text-blue-200 underline">
                travihara01@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-3 justify-center">
              <Phone className="w-5 h-5 text-blue-200" />
              <a href="tel:+919108834112" className="hover:text-blue-200 underline">
                +91 91088-34112
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Privacy
