import {
    Mail,
    Phone,
    MapPin,
    Calendar,
    Clock,
    FileText,
    Shield,
    CreditCard,
    RefreshCw,
    Copyright,
    ExternalLink,
    AlertTriangle,
    Scale,
    Gavel,
} from "lucide-react"

const Terms = () => {
    return (
        <div className="min-h-screen mt-28 bg-gradient-to-br from-emerald-50 via-white to-teal-50">
            {/* Header */}
            <div className="bg-white shadow-sm border-b">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="text-center">
                        <div className="flex items-center justify-center gap-3 mb-2">
                            <FileText className="w-8 h-8 text-emerald-600" />
                            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Terms & Conditions</h1>
                        </div>
                        <p className="text-lg text-emerald-600 font-semibold">TRAVIHARA</p>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Effective Date Banner */}
                <div className="bg-emerald-100 border border-emerald-200 rounded-lg p-6 mb-8">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <div className="flex items-center gap-2">
                            <Calendar className="w-5 h-5 text-emerald-600" />
                            <span className="font-semibold text-emerald-800">Effective Date:</span>
                            <span className="text-emerald-700">10th July 2025</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock className="w-5 h-5 text-emerald-600" />
                            <span className="font-semibold text-emerald-800">Last Updated:</span>
                            <span className="text-emerald-700">10th July 2025</span>
                        </div>
                    </div>
                </div>

                {/* Introduction */}
                <div className="bg-white rounded-xl shadow-sm border p-8 mb-8">
                    <p className="text-lg text-gray-700 leading-relaxed">
                        Welcome to <span className="font-semibold text-emerald-600">TRAVIHARA</span>. These Terms and Conditions
                        govern your use of our website{" "}
                        <a href="https://www.travihara.com" className="text-emerald-600 hover:text-emerald-800 underline">
                            www.travihara.com
                        </a>{" "}
                        and any services or content offered through it. By accessing or using the website, you agree to be bound by
                        these Terms.
                    </p>
                </div>

                {/* Content Sections */}
                <div className="space-y-8">
                    {/* Section 1 */}
                    <section className="bg-white rounded-xl shadow-sm border p-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                            <span className="bg-emerald-100 text-emerald-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                                1
                            </span>
                            Use of Website
                        </h2>
                        <div className="space-y-6">
                            <p className="text-gray-700 leading-relaxed">
                                You agree to use this site only for lawful purposes and in accordance with these Terms. You must not:
                            </p>

                            <div className="space-y-4">
                                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                                    <div className="flex items-start gap-3">
                                        <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                                        <div>
                                            <h4 className="font-semibold text-red-800 mb-2">Prohibited Activities:</h4>
                                            <ul className="space-y-2">
                                                <li className="flex items-center gap-2 text-red-700">
                                                    <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                                                    <span>Use the site for fraudulent or malicious purposes</span>
                                                </li>
                                                <li className="flex items-center gap-2 text-red-700">
                                                    <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                                                    <span>Interfere with the websites functionality or security</span>
                                                </li>
                                                <li className="flex items-center gap-2 text-red-700">
                                                    <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                                                    <span>Submit false or misleading information through forms</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Section 2 */}
                    <section className="bg-white rounded-xl shadow-sm border p-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                            <span className="bg-emerald-100 text-emerald-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                                2
                            </span>
                            Bookings and Travel Packages
                        </h2>
                        <div className="space-y-6">
                            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                                <div className="flex items-start gap-4">
                                    <Shield className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-semibold text-blue-800 mb-3">Booking Terms</h4>
                                        <ul className="space-y-2 text-blue-700">
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                                <span>All bookings are subject to availability and confirmation</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                                <span>TRAVIHARA reserves the right to refuse or cancel any bookings with notice</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                                <span>
                                                    By submitting your details, you authorize us to contact you for travel-related inquiries
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Section 3 */}
                    <section className="bg-white rounded-xl shadow-sm border p-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                            <span className="bg-emerald-100 text-emerald-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                                3
                            </span>
                            Pricing and Payments
                        </h2>
                        <div className="space-y-6">
                            <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
                                <div className="flex items-start gap-4">
                                    <CreditCard className="w-8 h-8 text-amber-600 flex-shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-semibold text-amber-800 mb-3">Payment Information</h4>
                                        <div className="space-y-3 text-amber-700">
                                            <p>
                                                Prices listed on the website are indicative and subject to change. Final pricing will be shared
                                                upon confirmation.
                                            </p>
                                            <p>
                                                Payments may be handled through third-party payment gateways (e.g., Razorpay) and are subject to
                                                their terms.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                                <p className="text-yellow-800 font-medium">
                                    💰 All prices are subject to final confirmation and may vary based on availability and seasonal
                                    factors.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Section 4 */}
                    <section className="bg-white rounded-xl shadow-sm border p-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                            <span className="bg-emerald-100 text-emerald-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                                4
                            </span>
                            Cancellations & Refunds
                        </h2>
                        <div className="space-y-6">
                            <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                                <div className="flex items-start gap-4">
                                    <RefreshCw className="w-8 h-8 text-orange-600 flex-shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-semibold text-orange-800 mb-3">Refund Policy</h4>
                                        <p className="text-orange-700">
                                            Cancellation and refund policies vary by package and will be mentioned at the time of booking.
                                            Please review individual package policies before confirming your trip.
                                            <br />
                                            Refund & Cancellation Policy
                                            <br />
                                            - Cancellations made 7+ days prior to the travel date are eligible for a full refund.
                                            <br />
                                            - Cancellations made within 3–7 days receive a 50% refund.
                                            <br />
                                            - Cancellations within 72 hours are non-refundable.
                                            <br />
                                            Certain packages may have non-refundable terms mentioned specifically.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-orange-100 border border-orange-300 rounded-lg p-4">
                                <p className="text-orange-800 font-medium">
                                    📋 Important: Each travel package may have different cancellation terms. Always review the specific
                                    policy before booking.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Section 5 */}
                    <section className="bg-white rounded-xl shadow-sm border p-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                            <span className="bg-emerald-100 text-emerald-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                                5
                            </span>
                            Intellectual Property
                        </h2>
                        <div className="space-y-6">
                            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                                <div className="flex items-start gap-4">
                                    <Copyright className="w-8 h-8 text-purple-600 flex-shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-semibold text-purple-800 mb-3">Protected Content</h4>
                                        <p className="text-purple-700">
                                            All content on this website, including logos, images, videos, and text, is the property of
                                            TRAVIHARA and may not be copied, reproduced, or redistributed without written permission.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-purple-100 border border-purple-300 rounded-lg p-4">
                                <p className="text-purple-800 font-medium">
                                    © All intellectual property rights are reserved by TRAVIHARA.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Section 6 */}
                    <section className="bg-white rounded-xl shadow-sm border p-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                            <span className="bg-emerald-100 text-emerald-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                                6
                            </span>
                            Third-Party Links
                        </h2>
                        <div className="space-y-6">
                            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                                <div className="flex items-start gap-4">
                                    <ExternalLink className="w-8 h-8 text-gray-600 flex-shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-semibold text-gray-800 mb-3">External Links Disclaimer</h4>
                                        <p className="text-gray-700">
                                            We may include links to external websites for your convenience. We do not control or endorse these
                                            sites and are not responsible for their content or practices.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gray-100 border border-gray-300 rounded-lg p-4">
                                <p className="text-gray-800 font-medium">
                                    🔗 External links are provided for convenience only. Use at your own discretion.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Section 7 */}
                    <section className="bg-white rounded-xl shadow-sm border p-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                            <span className="bg-emerald-100 text-emerald-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                                7
                            </span>
                            Disclaimer
                        </h2>
                        <div className="space-y-6">
                            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                                <div className="flex items-start gap-4">
                                    <AlertTriangle className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-semibold text-red-800 mb-3">Liability Disclaimer</h4>
                                        <p className="text-red-700">
                                            TRAVIHARA is not liable for any loss, delay, injury, or damage resulting from your use of this
                                            website or participation in our travel services, except as required by law.
                                            <br />
                                            · TRAVIHARA is not responsible for issues beyond its control (e.g., natural calamities, flight delays, etc).
<br />
                                            · All travel content is subject to change.
<br />
                                            · You should consult local authorities or embassies for travel advisories.
                                        
                                            
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Section 8 */}
                    <section className="bg-white rounded-xl shadow-sm border p-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                            <span className="bg-emerald-100 text-emerald-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                                8
                            </span>
                            Changes to These Terms
                        </h2>
                        <div className="space-y-4">
                            <p className="text-gray-700 leading-relaxed">
                                We may update these Terms occasionally. Continued use of the website after changes indicates your
                                acceptance of the revised Terms.
                            </p>
                            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                                <p className="text-blue-800 font-medium">
                                    📝 We recommend reviewing these terms periodically for any updates.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Section 9 */}
                    <section className="bg-white rounded-xl shadow-sm border p-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                            <span className="bg-emerald-100 text-emerald-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                                9
                            </span>
                            Governing Law
                        </h2>
                        <div className="space-y-6">
                            <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6">
                                <div className="flex items-start gap-4">
                                    <Gavel className="w-8 h-8 text-indigo-600 flex-shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-semibold text-indigo-800 mb-3">Legal Jurisdiction</h4>
                                        <p className="text-indigo-700">
                                            These Terms are governed by the laws of Karnataka, India, and any disputes shall be subject to the
                                            jurisdiction of courts located in Bangalore, Karnataka.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-indigo-100 border border-indigo-300 rounded-lg p-4">
                                <div className="flex items-center gap-2">
                                    <Scale className="w-5 h-5 text-indigo-600" />
                                    <p className="text-indigo-800 font-medium">Jurisdiction: Bangalore, Karnataka, India</p>
                                </div>
                            </div>
                        </div>
                    </section>

                  
                </div>

                {/* Contact Section */}
                <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl shadow-lg p-8 mt-12 text-white">
                    <h2 className="text-2xl font-bold mb-6 text-center">📩 Contact Us</h2>
                    <p className="text-center mb-6 text-emerald-100">
                        If you have any questions about these Terms and Conditions, please contact:
                    </p>
                    <div className="max-w-md mx-auto space-y-4">
                        <div className="flex items-center gap-3 justify-center">
                            <MapPin className="w-5 h-5 text-emerald-200" />
                            <span>TRAVIHARA, Bangalore, Karnataka, India</span>
                        </div>
                        <div className="flex items-center gap-3 justify-center">
                            <Mail className="w-5 h-5 text-emerald-200" />
                            <a href="mailto:travihara01@gmail.com" className="hover:text-emerald-200 underline">
                                travihara01@gmail.com
                            </a>
                        </div>
                        <div className="flex items-center gap-3 justify-center">
                            <Phone className="w-5 h-5 text-emerald-200" />
                            <a href="tel:+919108834112" className="hover:text-emerald-200 underline">
                                +91 91088-34112
                            </a>
                        </div>
                    </div>
                </div>

                {/* Legal Notice */}
                <div className="bg-gray-100 border border-gray-200 rounded-xl p-6 mt-8">
                    <div className="flex items-center justify-center gap-3 text-gray-600">
                        <FileText className="w-5 h-5" />
                        <p className="text-sm text-center">
                            By using our website, you acknowledge that you have read, understood, and agree to be bound by these Terms
                            and Conditions.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Terms
