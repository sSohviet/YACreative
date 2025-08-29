import Link from "next/link"
import { Calendar, MapPin } from "lucide-react"

interface BlogPost {
  id: string
  title: string
  excerpt: string
  date: string
  location: string
  couple: string
  slug: string
  featuredImage: string
  category: "wedding" | "engagement" | "elopement"
}

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Sarah & Michael's Dreamy Napa Valley Wedding",
    excerpt:
      "A perfect blend of elegance and natural beauty among the rolling hills and vineyards of Napa Valley. Sarah and Michael's wedding was filled with golden hour magic and intimate moments.",
    date: "December 15, 2024",
    location: "Napa Valley, CA",
    couple: "Sarah & Michael",
    slug: "sarah-michael-napa-valley-wedding",
    featuredImage: "/napa-valley-wedding-vineyard.png",
    category: "wedding",
  },
  {
    id: "2",
    title: "Emma & James' Intimate Big Sur Elopement",
    excerpt:
      "Sometimes the most beautiful weddings are the most intimate ones. Emma and James chose the dramatic coastline of Big Sur for their elopement, creating memories with just the two of them and nature as their witness.",
    date: "November 28, 2024",
    location: "Big Sur, CA",
    couple: "Emma & James",
    slug: "emma-james-big-sur-elopement",
    featuredImage: "/big-sur-elopement-coastline.png",
    category: "elopement",
  },
  {
    id: "3",
    title: "Lisa & David's Golden Hour Engagement in Marin County",
    excerpt:
      "We explored the rolling hills of Marin County with Lisa and David for their engagement session. The golden California light and their natural chemistry made for some truly magical moments.",
    date: "November 10, 2024",
    location: "Marin County, CA",
    couple: "Lisa & David",
    slug: "lisa-david-marin-county-engagement",
    featuredImage: "/marin-county-engagement-golden-hour.png",
    category: "engagement",
  },
  {
    id: "4",
    title: "Anna & Robert's Romantic Carmel Wedding",
    excerpt:
      "Carmel's fairy-tale charm provided the perfect backdrop for Anna and Robert's romantic wedding. From the ceremony among the cypress trees to dancing under the stars, every moment was pure magic.",
    date: "October 22, 2024",
    location: "Carmel, CA",
    couple: "Anna & Robert",
    slug: "anna-robert-carmel-wedding",
    featuredImage: "/carmel-wedding-cypress-trees.png",
    category: "wedding",
  },
  {
    id: "5",
    title: "Maria & John's Sonoma County Vineyard Wedding",
    excerpt:
      "Surrounded by rolling vineyards and bathed in California sunshine, Maria and John's Sonoma wedding was a celebration of love, family, and the beauty of wine country.",
    date: "September 18, 2024",
    location: "Sonoma County, CA",
    couple: "Maria & John",
    slug: "maria-john-sonoma-vineyard-wedding",
    featuredImage: "/sonoma-vineyard-wedding.png",
    category: "wedding",
  },
  {
    id: "6",
    title: "Grace & Thomas' Coastal Engagement Session",
    excerpt:
      "The California coast provided endless inspiration for Grace and Thomas' engagement photos. We chased the light along the cliffs and captured their joy against the dramatic Pacific backdrop.",
    date: "August 30, 2024",
    location: "Half Moon Bay, CA",
    couple: "Grace & Thomas",
    slug: "grace-thomas-coastal-engagement",
    featuredImage: "/coastal-engagement-session-cliffs.png",
    category: "engagement",
  },
]

export default function Blog() {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-light text-gray-900 mb-8 tracking-wide">Blog</h1>
          <p className="text-xl text-gray-600 font-light leading-relaxed max-w-3xl mx-auto">
            Recent weddings, engagement sessions, and behind-the-scenes stories from our adventures in love and light.
            Each celebration is unique, and we're honored to share these beautiful moments with you.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="pb-12 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl font-light text-gray-900 tracking-wide">Featured Story</h2>
          </div>

          <Link href={`/blog/${blogPosts[0].slug}`} className="group">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="aspect-[4/3] bg-gray-200 rounded-sm overflow-hidden">
                <img
                  src={blogPosts[0].featuredImage || "/placeholder.svg"}
                  alt={blogPosts[0].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div>
                <div className="flex items-center space-x-4 text-sm text-gray-500 font-light mb-4">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {blogPosts[0].date}
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    {blogPosts[0].location}
                  </div>
                </div>
                <h3 className="text-2xl md:text-3xl font-light text-gray-900 mb-4 tracking-wide group-hover:text-gray-600 transition-colors">
                  {blogPosts[0].title}
                </h3>
                <p className="text-lg text-gray-600 font-light leading-relaxed mb-6">{blogPosts[0].excerpt}</p>
                <span className="text-gray-900 hover:text-gray-600 font-light tracking-wide border-b border-gray-300 hover:border-gray-600 pb-1">
                  Read More
                </span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-2xl font-light text-gray-900 tracking-wide">Recent Stories</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <Link key={post.id} href={`/blog/${post.slug}`} className="group">
                <article className="bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="aspect-[4/3] bg-gray-200 overflow-hidden">
                    <img
                      src={post.featuredImage || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center space-x-4 text-xs text-gray-500 font-light mb-3">
                      <div className="flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        {post.date}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-3 w-3 mr-1" />
                        {post.location}
                      </div>
                    </div>
                    <h3 className="text-lg font-light text-gray-900 mb-3 tracking-wide group-hover:text-gray-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 font-light text-sm leading-relaxed line-clamp-3">{post.excerpt}</p>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-8 tracking-wide">Stay Connected</h2>
          <p className="text-lg text-gray-600 font-light leading-relaxed mb-12 max-w-2xl mx-auto">
            Subscribe to our newsletter to see our latest work, get wedding planning tips, and be the first to know
            about special offers.
          </p>
          <form className="max-w-md mx-auto flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-l-sm focus:outline-none focus:border-gray-900 font-light"
            />
            <button
              type="submit"
              className="bg-gray-900 text-white px-8 py-3 rounded-r-sm hover:bg-gray-800 transition-colors duration-300 font-light tracking-wide"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}
