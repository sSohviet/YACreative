import { Camera, Heart, Award, Users } from "lucide-react"

export default function About() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-light text-gray-900 mb-8 tracking-wide">
            Meet Alli & Yaro
            <span className="block text-rose-600 font-light">Your Creative Wedding Team</span>
          </h1>
          <p className="text-xl text-gray-600 font-light leading-relaxed max-w-4xl mx-auto">
            We're a husband and wife team passionate about capturing authentic love stories through photography,
            videography, and content creation. Every wedding is unique, and we believe in telling your story with
            artistry, emotion, and genuine connection.
          </p>
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
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-8 tracking-wide">Alli</h2>
            <div className="space-y-6 text-lg text-gray-600 font-light leading-relaxed">
              <p>
                Hey! I'm a California wedding photographer with a big love for real, unfiltered moments — the belly
                laughs, the teary vows, the wild dance floor energy, and everything in between. My style is natural,
                romantic, and rooted in storytelling — think dreamy light, real connection, and photos that feel like
                you.
              </p>
              <p>
                I'm obsessed with golden hour, coastal backdrops, and that magical blue hour glow, but honestly? Whether
                your love story unfolds by the ocean, in the mountains, or somewhere totally unexpected, I'm all in.
              </p>
              <p>
                When I'm not behind the camera, you can find me at the beach with my pup, dancing like nobody's
                watching, hopping on a plane, or chasing sunsets with sand in my shoes. Let's make some magic together.
              </p>
            </div>
          </div>
        </div>

        {/* Yaro Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-8 tracking-wide">Yaro</h2>
            <div className="space-y-6 text-lg text-gray-600 font-light leading-relaxed">
              <p>
                Hey, I'm a wedding videographer who's all about capturing the real stuff — the moments that happen when
                no one's looking, the details that tell the bigger story, and the energy that makes each day
                unforgettable.
              </p>
              <p>
                My approach is simple: I want your film to feel like you. I focus on movement, emotion, and the kind of
                storytelling that's raw, cinematic, and honest. Every couple is different, and I'm here to make sure
                your story comes through in a way that's natural, meaningful, and timeless.
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

        {/* Our Story Together */}
        <div className="mb-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-8 tracking-wide">Our Story</h2>
            <div className="text-lg text-gray-600 font-light space-y-6 leading-relaxed">
              <p>
                We started YACreativeWedding because we believe love stories deserve to be told beautifully. As a
                married couple ourselves, we understand the importance of your wedding day and the trust you place in us
                to capture these once-in-a-lifetime moments.
              </p>
              <p>
                Our combined expertise in photography, videography, and content creation allows us to offer a
                comprehensive approach to wedding documentation. We work seamlessly together, ensuring no moment is
                missed while maintaining the natural flow of your day.
              </p>
              <p>
                Based in California, we're drawn to authentic emotions, natural light, and the unique personality each
                couple brings to their celebration. Whether you're planning an intimate elopement or a grand
                celebration, we're here to document your love story with artistry and heart.
              </p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-light text-rose-600 mb-2">150+</div>
              <div className="text-gray-600 font-light">Weddings Captured</div>
            </div>
            <div>
              <div className="text-4xl font-light text-rose-600 mb-2">5</div>
              <div className="text-gray-600 font-light">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-light text-rose-600 mb-2">300+</div>
              <div className="text-gray-600 font-light">Happy Couples</div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4 tracking-wide">What Drives Us</h2>
            <p className="text-gray-600 font-light">The values that guide our work and relationships with couples</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-rose-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-rose-600" />
              </div>
              <h3 className="text-xl font-light text-gray-900 mb-2 tracking-wide">Authenticity</h3>
              <p className="text-gray-600 font-light">
                Capturing genuine emotions and real moments, not posed perfection
              </p>
            </div>

            <div className="text-center">
              <div className="bg-rose-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Camera className="h-8 w-8 text-rose-600" />
              </div>
              <h3 className="text-xl font-light text-gray-900 mb-2 tracking-wide">Artistry</h3>
              <p className="text-gray-600 font-light">
                Creating beautiful, timeless imagery with careful attention to light and composition
              </p>
            </div>

            <div className="text-center">
              <div className="bg-rose-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-rose-600" />
              </div>
              <h3 className="text-xl font-light text-gray-900 mb-2 tracking-wide">Connection</h3>
              <p className="text-gray-600 font-light">
                Building relationships with couples to capture their unique personalities
              </p>
            </div>

            <div className="text-center">
              <div className="bg-rose-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-rose-600" />
              </div>
              <h3 className="text-xl font-light text-gray-900 mb-2 tracking-wide">Excellence</h3>
              <p className="text-gray-600 font-light">
                Delivering exceptional quality and service from consultation to final delivery
              </p>
            </div>
          </div>
        </div>

        {/* Process Section */}
        <div className="bg-gray-50 rounded-sm p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4 tracking-wide">Our Process</h2>
            <p className="text-gray-600 font-light">How we'll work together to create your perfect wedding story</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-rose-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-light">
                1
              </div>
              <h3 className="text-xl font-light text-gray-900 mb-2 tracking-wide">Consultation</h3>
              <p className="text-gray-600 font-light">
                We'll meet to discuss your vision, style preferences, and wedding day timeline
              </p>
            </div>

            <div className="text-center">
              <div className="bg-rose-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-light">
                2
              </div>
              <h3 className="text-xl font-light text-gray-900 mb-2 tracking-wide">Booking</h3>
              <p className="text-gray-600 font-light">Secure your date with a signed contract and retainer payment</p>
            </div>

            <div className="text-center">
              <div className="bg-rose-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-light">
                3
              </div>
              <h3 className="text-xl font-light text-gray-900 mb-2 tracking-wide">Engagement Session</h3>
              <p className="text-gray-600 font-light">
                A fun, relaxed session to get comfortable with each other before the big day
              </p>
            </div>

            <div className="text-center">
              <div className="bg-rose-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-light">
                4
              </div>
              <h3 className="text-xl font-light text-gray-900 mb-2 tracking-wide">Wedding Day</h3>
              <p className="text-gray-600 font-light">
                We'll capture every moment while staying invisible, letting you enjoy your day
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
