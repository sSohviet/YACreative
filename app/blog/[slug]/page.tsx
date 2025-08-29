import Link from "next/link"
import { Calendar, MapPin, ArrowLeft } from "lucide-react"

interface BlogPostData {
  title: string
  date: string
  location: string
  couple: string
  category: "wedding" | "engagement" | "elopement"
  featuredImage: string
  content: {
    intro: string
    sections: {
      title: string
      content: string
      images?: string[]
    }[]
  }
}

// This would typically come from a CMS or database
const getBlogPost = (slug: string): BlogPostData | null => {
  const posts: { [key: string]: BlogPostData } = {
    "sarah-michael-napa-valley-wedding": {
      title: "Sarah & Michael's Dreamy Napa Valley Wedding",
      date: "December 15, 2024",
      location: "Napa Valley, CA",
      couple: "Sarah & Michael",
      category: "wedding",
      featuredImage: "/napa-valley-wedding-vineyard-ceremony.png",
      content: {
        intro:
          "Sarah and Michael's wedding in Napa Valley was everything we dreamed it would be and more. Set among rolling vineyards with the golden California sun as our backdrop, their day unfolded with natural elegance and genuine joy.",
        sections: [
          {
            title: "The Details",
            content:
              "Every detail of Sarah and Michael's wedding reflected their love for natural beauty and timeless elegance. From the organic floral arrangements to the hand-written vows, everything felt authentic and deeply personal.",
            images: ["/wedding-details-flowers-rings.png", "/wedding-invitation-calligraphy.png"],
          },
          {
            title: "The Ceremony",
            content:
              "Their ceremony took place in a vineyard overlooking the valley, with rows of grapevines creating a natural aisle. The golden hour light filtered through the leaves as they exchanged vows, creating the most magical atmosphere.",
            images: ["/vineyard-wedding-ceremony-golden-hour.png", "/wedding-vows-emotional-moment.png"],
          },
          {
            title: "The Celebration",
            content:
              "As the sun set over the valley, the celebration moved to a beautiful outdoor reception. String lights twinkled overhead as guests danced under the stars, creating memories that will last a lifetime.",
            images: ["/wedding-reception-dancing-string-lights.png", "/wedding-cake-cutting-moment.png"],
          },
        ],
      },
    },
  }

  return posts[slug] || null
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug)

  if (!post) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-light text-gray-900 mb-4">Post not found</h1>
          <Link href="/blog" className="text-gray-600 hover:text-gray-900 font-light">
            ← Back to Blog
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center text-gray-600 hover:text-gray-900 font-light mb-8 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </Link>

          <div className="flex items-center space-x-4 text-sm text-gray-500 font-light mb-6">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              {post.date}
            </div>
            <div className="flex items-center">
              <MapPin className="h-4 w-4 mr-1" />
              {post.location}
            </div>
            <div className="capitalize bg-gray-100 px-3 py-1 rounded-full text-xs">{post.category}</div>
          </div>

          <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-8 tracking-wide">{post.title}</h1>
        </div>
      </section>

      {/* Featured Image */}
      <section className="pb-12">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="aspect-[16/9] bg-gray-200 rounded-sm overflow-hidden">
            <img
              src={post.featuredImage || "/placeholder.svg"}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 font-light leading-relaxed mb-12">{post.content.intro}</p>

            {post.content.sections.map((section, index) => (
              <div key={index} className="mb-16">
                <h2 className="text-2xl font-light text-gray-900 mb-6 tracking-wide">{section.title}</h2>
                <p className="text-lg text-gray-600 font-light leading-relaxed mb-8">{section.content}</p>

                {section.images && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    {section.images.map((image, imgIndex) => (
                      <div key={imgIndex} className="aspect-[4/3] bg-gray-200 rounded-sm overflow-hidden">
                        <img
                          src={image || "/placeholder.svg"}
                          alt={`${post.title} - ${section.title} ${imgIndex + 1}`}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-8 tracking-wide">
            Ready to Tell Your Story?
          </h2>
          <p className="text-lg text-gray-600 font-light leading-relaxed mb-12 max-w-2xl mx-auto">
            We would love to capture the magic of your wedding day just like we did for {post.couple}. Let's create
            something beautiful together.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-gray-900 text-white px-12 py-4 hover:bg-gray-800 transition-colors duration-300 font-light tracking-wide"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </div>
  )
}
