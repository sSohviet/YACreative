"use client"

export default function Contact() {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-light text-gray-900 mb-8 tracking-wide">Contact</h1>
          <p className="text-xl text-gray-600 font-light leading-relaxed max-w-3xl mx-auto">
            We would love to learn about your love story and discuss how we can capture the beauty of your wedding day
            together. Please share a bit about yourselves and your vision.
          </p>
        </div>
      </section>

      <section className="pb-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          {/* Success Message */}
          {typeof window !== "undefined" && new URLSearchParams(window.location.search).get("success") && (
            <div className="mb-8 p-4 bg-green-50 border border-green-200 rounded-sm">
              <p className="text-green-800 font-light text-center">
                Thank you for your inquiry! We'll be in touch within 24 hours.
              </p>
            </div>
          )}

          <form action="https://formspree.io/f/xovnjnkr" method="POST" className="space-y-8">
            <input type="hidden" name="_next" value="https://yacreativewedding.com/contact?success=true" />
            <input type="hidden" name="_subject" value="New Wedding Inquiry from Website" />

            <div>
              <label htmlFor="fullName" className="block text-sm font-light text-gray-700 mb-3 tracking-wide">
                Full Name *
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                required
                className="w-full px-0 py-3 border-0 border-b border-gray-300 focus:border-gray-900 focus:ring-0 bg-transparent font-light"
                placeholder="Sarah & Michael Johnson"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label htmlFor="email" className="block text-sm font-light text-gray-700 mb-3 tracking-wide">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-0 py-3 border-0 border-b border-gray-300 focus:border-gray-900 focus:ring-0 bg-transparent font-light"
                  placeholder="sarah@example.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-light text-gray-700 mb-3 tracking-wide">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-0 py-3 border-0 border-b border-gray-300 focus:border-gray-900 focus:ring-0 bg-transparent font-light"
                  placeholder="(555) 123-4567"
                />
              </div>
            </div>

            <div>
              <label htmlFor="venue" className="block text-sm font-light text-gray-700 mb-3 tracking-wide">
                Wedding Venue/Location
              </label>
              <input
                type="text"
                id="venue"
                name="venue"
                className="w-full px-0 py-3 border-0 border-b border-gray-300 focus:border-gray-900 focus:ring-0 bg-transparent font-light"
                placeholder="Napa Valley, California"
              />
            </div>

            <div>
              <label htmlFor="budget" className="block text-sm font-light text-gray-700 mb-3 tracking-wide">
                Budget
              </label>
              <select
                id="budget"
                name="budget"
                className="w-full px-0 py-3 border-0 border-b border-gray-300 focus:border-gray-900 focus:ring-0 bg-transparent font-light"
              >
                <option value="">Select budget range</option>
                <option value="under-3000">Under $3,000</option>
                <option value="3000-5000">$3,000 - $5,000</option>
                <option value="5000-8000">$5,000 - $8,000</option>
                <option value="over-8000">Over $8,000</option>
              </select>
            </div>

            <div>
              <label htmlFor="loveStory" className="block text-sm font-light text-gray-700 mb-3 tracking-wide">
                Tell me about your love story and dreamy wedding!
              </label>
              <textarea
                id="loveStory"
                name="loveStory"
                rows={6}
                className="w-full px-0 py-3 border-0 border-b border-gray-300 focus:border-gray-900 focus:ring-0 bg-transparent font-light resize-none"
                placeholder="Share your story, your vision for the day, what drew you to our work, or any questions you have..."
              />
            </div>

            <div>
              <label htmlFor="services" className="block text-sm font-light text-gray-700 mb-3 tracking-wide">
                What services are you interested in?
              </label>
              <select
                id="services"
                name="services"
                className="w-full px-0 py-3 border-0 border-b border-gray-300 focus:border-gray-900 focus:ring-0 bg-transparent font-light"
              >
                <option value="">Please select</option>
                <option value="photography">Photography</option>
                <option value="videography">Videography</option>
                <option value="content-creation">Content Creation</option>
                <option value="combination">Combination</option>
              </select>
            </div>

            <div>
              <label htmlFor="hearAbout" className="block text-sm font-light text-gray-700 mb-3 tracking-wide">
                How did you hear about us?
              </label>
              <select
                id="hearAbout"
                name="hearAbout"
                className="w-full px-0 py-3 border-0 border-b border-gray-300 focus:border-gray-900 focus:ring-0 bg-transparent font-light"
              >
                <option value="">Please select</option>
                <option value="instagram">Instagram</option>
                <option value="google">Google Search</option>
                <option value="referral">Friend or Family Referral</option>
                <option value="vendor">Wedding Vendor</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="text-center pt-8">
              <button
                type="submit"
                className="bg-gray-900 text-white px-12 py-4 hover:bg-gray-800 transition-colors duration-300 font-light tracking-wide"
              >
                Send Inquiry
              </button>
            </div>
          </form>

          <div className="mt-16 text-center space-y-4">
            <p className="text-gray-600 font-light mb-6">You can also reach us directly:</p>
            <div className="space-y-2">
              <p className="text-gray-900 font-light">
                <strong>Email:</strong> yacreativestudios@gmail.com
              </p>
              <div className="space-y-1">
                <p className="text-gray-900 font-light">
                  <strong>Social Media:</strong>
                </p>
                <p className="text-gray-600 font-light">instagram.com/allielizphotos</p>
                <p className="text-gray-600 font-light">instagram.com/yacreativewedding</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
