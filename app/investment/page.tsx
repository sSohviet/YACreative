"use client"

import Link from "next/link"

export default function Investment() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-light text-gray-900 mb-8 tracking-wide">Investment</h1>
          <p className="text-xl text-gray-600 font-light leading-relaxed max-w-3xl mx-auto">
            We offer a thoughtful approach to wedding documentation, focusing on authentic moments and timeless
            artistry. Each service is designed to capture the unique essence of your love story.
          </p>
        </div>
      </section>

      {/* Photography Package */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="aspect-[4/5] bg-gray-200 rounded-sm overflow-hidden">
              <img
                src="/placeholder.svg?height=600&width=480"
                alt="Wedding Photography"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-8 tracking-wide">Photography</h2>
              <div className="space-y-6 text-lg text-gray-600 font-light leading-relaxed mb-8">
                <p>
                  Our photography style is rooted in authenticity and natural beauty. We work with available light
                  whenever possible, creating images that feel timeless and true to the moment. From the quiet
                  preparations in the morning to the joyful celebrations in the evening, we document your day with an
                  artist's eye and a storyteller's heart.
                </p>
              </div>
              <div className="space-y-3 text-gray-700 font-light">
                <p>• 8 hours of coverage</p>
                <p>• Stunning online image gallery</p>
                <p>• Pre-engagement shoot</p>
                <p>• Hand-edited images</p>
                <p>• Delivery: 4-6 weeks</p>
                <p className="text-2xl font-light text-gray-900 pt-4">Starting at $3,000</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Videography Package */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-8 tracking-wide">Videography</h2>
              <div className="space-y-6 text-lg text-gray-600 font-light leading-relaxed mb-8">
                <p>
                  Wedding films have the unique ability to preserve not just how your day looked, but how it felt. Our
                  approach to videography is cinematic yet unobtrusive, capturing the natural flow of emotions,
                  laughter, and tears that make your day uniquely yours.
                </p>
              </div>
              <div className="space-y-3 text-gray-700 font-light">
                <p>• 8 hours of coverage</p>
                <p>• 1 cinematic video of your day</p>
                <p>• All raw footage ceremony, speeches, etc</p>
                <p>• Delivered via private link for easy viewing + download</p>
                <p>• Horizontal or vertical</p>
                <p>• Delivery: 2-3 weeks</p>
                <p className="text-2xl font-light text-gray-900 pt-4">Starting at $1,200</p>
              </div>
            </div>
            <div className="order-1 lg:order-2 aspect-[4/5] bg-gray-200 rounded-sm overflow-hidden">
              <img
                src="/placeholder.svg?height=600&width=480"
                alt="Wedding Videography"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Content Creation Package */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="aspect-[4/5] bg-gray-200 rounded-sm overflow-hidden">
              <img
                src="/placeholder.svg?height=600&width=480"
                alt="Content Creation"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-8 tracking-wide">Content Creation</h2>
              <div className="space-y-6 text-lg text-gray-600 font-light leading-relaxed mb-8">
                <p>
                  Beyond capturing your wedding day, we offer thoughtful content creation services that help tell your
                  story from the very beginning. From social media content that shares your joy to custom reels that
                  capture the energy, each piece is created with the same attention to beauty and authenticity as our
                  photography.
                </p>
              </div>
              <div className="space-y-3 text-gray-700 font-light">
                <p>• 8 hours of coverage</p>
                <p>• 3 edited reels (15-60 seconds each)</p>
                <p>• Real time BTS + Candid Moments</p>
                <p>• Delivery: 1-2 weeks</p>
                <p className="text-2xl font-light text-gray-900 pt-4">Starting at $1,000</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Packages */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-8 tracking-wide">Custom Add-Ons</h2>
            <p className="text-lg text-gray-600 font-light leading-relaxed">
              Customize your package with additional services to make your wedding coverage perfect for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-sm">
              <h3 className="text-xl font-light text-gray-900 mb-4 tracking-wide">Second Shooter</h3>
              <p className="text-2xl font-light text-gray-900 mb-4">$500</p>
              <p className="text-gray-600 font-light">Additional photographer for comprehensive coverage</p>
            </div>

            <div className="bg-gray-50 p-8 rounded-sm">
              <h3 className="text-xl font-light text-gray-900 mb-4 tracking-wide">Extra Hour of Coverage</h3>
              <p className="text-2xl font-light text-gray-900 mb-4">$200</p>
              <p className="text-gray-600 font-light">Extend your coverage for those special moments</p>
            </div>

            <div className="bg-gray-50 p-8 rounded-sm">
              <h3 className="text-xl font-light text-gray-900 mb-4 tracking-wide">Drone Footage</h3>
              <p className="text-2xl font-light text-gray-900 mb-4">$250</p>
              <p className="text-gray-600 font-light">Aerial shots of your venue and ceremony</p>
            </div>

            <div className="bg-gray-50 p-8 rounded-sm">
              <h3 className="text-xl font-light text-gray-900 mb-4 tracking-wide">Engagement Shoot</h3>
              <p className="text-2xl font-light text-gray-900 mb-4">Starting at $450</p>
              <p className="text-gray-600 font-light">Pre-wedding session to get comfortable with us</p>
            </div>

            <div className="bg-gray-50 p-8 rounded-sm">
              <h3 className="text-xl font-light text-gray-900 mb-4 tracking-wide">Extra Reels</h3>
              <p className="text-2xl font-light text-gray-900 mb-4">$200</p>
              <p className="text-gray-600 font-light">Additional social media content reels</p>
            </div>

            <div className="bg-gray-50 p-8 rounded-sm">
              <h3 className="text-xl font-light text-gray-900 mb-4 tracking-wide">Elopement</h3>
              <p className="text-2xl font-light text-gray-900 mb-4">Starting at $2,000</p>
              <p className="text-gray-600 font-light">Intimate ceremony coverage for smaller celebrations</p>
            </div>
          </div>

          <div className="text-center mt-16">
            <Link
              href="/contact"
              className="inline-block text-gray-900 hover:text-gray-600 transition-colors duration-300 font-light tracking-wide border-b border-gray-300 hover:border-gray-600 pb-1"
              onClick={() => {
                setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 100)
              }}
            >
              Inquire About Your Wedding
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
