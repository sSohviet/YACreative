"use client"

import Link from "next/link"

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/placeholder.svg?height=1080&width=1920')`,
          }}
        >
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light mb-8 leading-tight tracking-wide">
            Capturing Love
            <span className="block italic font-light">in its purest form</span>
          </h1>
          <p className="text-lg md:text-xl font-light mb-12 text-white/90 max-w-2xl mx-auto leading-relaxed">
            Timeless wedding photography and videography that tells your unique story with elegance and emotion
          </p>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-8 tracking-wide">Our Philosophy</h2>
          <p className="text-lg text-gray-600 font-light leading-relaxed mb-8">
            Every love story is unique, and we believe in capturing the authentic moments that make your day truly
            yours. Our approach is unobtrusive and natural, allowing genuine emotions to unfold while creating timeless
            imagery that will transport you back to those precious moments for years to come.
          </p>
          <p className="text-lg text-gray-600 font-light leading-relaxed">
            We're drawn to the quiet moments between the grand gestures—the gentle touch, the shared glance, the tears
            of joy that speak louder than words.
          </p>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6 tracking-wide">What We Offer</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="aspect-[4/5] bg-gray-200 rounded-sm overflow-hidden mb-6">
                <img
                  src="/placeholder.svg?height=500&width=400"
                  alt="Wedding Photography"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-light text-gray-900 mb-3 tracking-wide">Photography</h3>
              <p className="text-gray-600 font-light leading-relaxed">
                Timeless imagery that captures the essence of your love story with natural light and authentic emotion
              </p>
            </div>

            <div className="text-center">
              <div className="aspect-[4/5] bg-gray-200 rounded-sm overflow-hidden mb-6">
                <img
                  src="/placeholder.svg?height=500&width=400"
                  alt="Wedding Videography"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-light text-gray-900 mb-3 tracking-wide">Videography</h3>
              <p className="text-gray-600 font-light leading-relaxed">
                Cinematic films that preserve the movement, sound, and feeling of your wedding day in beautiful detail
              </p>
            </div>

            <div className="text-center">
              <div className="aspect-[4/5] bg-gray-200 rounded-sm overflow-hidden mb-6">
                <img
                  src="/placeholder.svg?height=500&width=400"
                  alt="Content Creation"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-light text-gray-900 mb-3 tracking-wide">Content Creation</h3>
              <p className="text-gray-600 font-light leading-relaxed">
                Thoughtfully designed materials that reflect your style and help tell your story from engagement to
                wedding
              </p>
            </div>
          </div>

          <div className="text-center mt-16">
            <Link
              href="/investment"
              className="inline-block text-gray-900 hover:text-gray-600 transition-colors duration-300 font-light tracking-wide border-b border-gray-300 hover:border-gray-600 pb-1"
            >
              Learn More About Our Investment
            </Link>
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6 tracking-wide">Recent Work</h2>
            <p className="text-lg text-gray-600 font-light">
              A glimpse into the stories we've had the honor to capture
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="group">
                <div className="aspect-[4/5] bg-gray-200 rounded-sm overflow-hidden">
                  <img
                    src={`/placeholder.svg?height=500&width=400&query=elegant wedding moment ${i}`}
                    alt={`Wedding moment ${i}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              href="/portfolio"
              className="inline-block text-gray-900 hover:text-gray-600 transition-colors duration-300 font-light tracking-wide border-b border-gray-300 hover:border-gray-600 pb-1"
            >
              View Full Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6 tracking-wide">Meet the Team</h2>
          </div>

          {/* Alli Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="aspect-[4/5] bg-gray-200 rounded-sm overflow-hidden">
              <img
                src="/placeholder.svg?height=600&width=480"
                alt="Alli - Wedding Photographer"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-light text-gray-900 mb-6 tracking-wide">Alli</h3>
              <div className="space-y-6 text-lg text-gray-600 font-light leading-relaxed">
                <p>
                  Hey! I'm a California wedding photographer with a big love for real, unfiltered moments — the belly
                  laughs, the teary vows, the wild dance floor energy, and everything in between. My style is natural,
                  romantic, and rooted in storytelling — think dreamy light, real connection, and photos that feel like
                  you.
                </p>
                <p>
                  I'm obsessed with golden hour, coastal backdrops, and that magical blue hour glow, but honestly?
                  Whether your love story unfolds by the ocean, in the mountains, or somewhere totally unexpected, I'm
                  all in.
                </p>
                <p>
                  When I'm not behind the camera, you can find me at the beach with my pup, dancing like nobody's
                  watching, hopping on a plane, or chasing sunsets with sand in my shoes. Let's make some magic
                  together.
                </p>
              </div>
            </div>
          </div>

          {/* Yaro Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h3 className="text-2xl md:text-3xl font-light text-gray-900 mb-6 tracking-wide">Yaro</h3>
              <div className="space-y-6 text-lg text-gray-600 font-light leading-relaxed">
                <p>
                  Hey, I'm a wedding videographer who's all about capturing the real stuff — the moments that happen
                  when no one's looking, the details that tell the bigger story, and the energy that makes each day
                  unforgettable.
                </p>
                <p>
                  My approach is simple: I want your film to feel like you. I focus on movement, emotion, and the kind
                  of storytelling that's raw, cinematic, and honest. Every couple is different, and I'm here to make
                  sure your story comes through in a way that's natural, meaningful, and timeless.
                </p>
                <p>If you're planning something a little wild, a little offbeat, or full of heart — I'm in.</p>
              </div>
            </div>
            <div className="order-1 lg:order-2 aspect-[4/5] bg-gray-200 rounded-sm overflow-hidden">
              <img
                src="/placeholder.svg?height=600&width=480"
                alt="Yaro - Wedding Videographer"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-8 tracking-wide">
            Let's Create Something Beautiful
          </h2>
          <p className="text-lg text-gray-600 font-light leading-relaxed mb-12 max-w-2xl mx-auto">
            We would love to learn about your love story and discuss how we can capture the magic of your wedding day
            together.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-gray-900 text-white px-12 py-4 hover:bg-gray-800 transition-colors duration-300 font-light tracking-wide"
            onClick={() => {
              setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 100)
            }}
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </div>
  )
}
