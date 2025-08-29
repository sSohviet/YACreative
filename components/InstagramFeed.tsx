"use client"

import { useState, useEffect } from "react"
import { ExternalLink, Heart, MessageCircle } from "lucide-react"

interface InstagramPost {
  id: string
  imageUrl: string
  caption: string
  likes: number
  comments: number
  permalink: string
  timestamp: string
}

interface InstagramFeedProps {
  username: string
  title: string
  limit?: number
}

const InstagramFeed = ({ username, title, limit = 6 }: InstagramFeedProps) => {
  const [posts, setPosts] = useState<InstagramPost[]>([])
  const [loading, setLoading] = useState(true)

  // Simulated Instagram data - replace with actual API call
  useEffect(() => {
    const simulatedPosts: InstagramPost[] =
      username === "yacreativewedding"
        ? [
            {
              id: "1",
              imageUrl: "/placeholder.svg?height=400&width=400",
              caption: "Capturing the magic of Sarah & Michael's first dance ✨",
              likes: 245,
              comments: 18,
              permalink: "https://www.instagram.com/p/DMOqsSkSOWC/",
              timestamp: "2024-12-15",
            },
            {
              id: "2",
              imageUrl: "/placeholder.svg?height=400&width=400",
              caption: "The moment they said 'I do' - pure emotion captured in film 🎬",
              likes: 189,
              comments: 12,
              permalink: "https://www.instagram.com/p/example2/",
              timestamp: "2024-12-10",
            },
            {
              id: "3",
              imageUrl: "/placeholder.svg?height=400&width=400",
              caption: "Dancing under the stars - these are the moments we live for 💫",
              likes: 312,
              comments: 25,
              permalink: "https://www.instagram.com/p/example3/",
              timestamp: "2024-12-05",
            },
          ]
        : [
            {
              id: "4",
              imageUrl: "/placeholder.svg?height=400&width=400",
              caption: "Golden hour magic with these two beautiful souls ✨",
              likes: 428,
              comments: 32,
              permalink: "https://www.instagram.com/p/photo1/",
              timestamp: "2024-12-18",
            },
            {
              id: "5",
              imageUrl: "/placeholder.svg?height=400&width=400",
              caption: "Love looks so good on them 💕 Can't wait to share more from this dreamy day",
              likes: 356,
              comments: 28,
              permalink: "https://www.instagram.com/p/photo2/",
              timestamp: "2024-12-14",
            },
            {
              id: "6",
              imageUrl: "/placeholder.svg?height=400&width=400",
              caption: "The sweetest first kiss as husband and wife 💋",
              likes: 512,
              comments: 41,
              permalink: "https://www.instagram.com/p/photo3/",
              timestamp: "2024-12-12",
            },
          ]

    // Simulate API loading delay
    setTimeout(() => {
      setPosts(simulatedPosts.slice(0, limit))
      setLoading(false)
    }, 1000)
  }, [username, limit])

  if (loading) {
    return (
      <div className="space-y-6">
        <h3 className="text-2xl font-light text-gray-900 tracking-wide text-center">{title}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(limit)].map((_, i) => (
            <div key={i} className="aspect-square bg-gray-200 rounded-sm animate-pulse"></div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-2xl font-light text-gray-900 tracking-wide mb-2">{title}</h3>
        <a
          href={`https://instagram.com/${username}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-gray-900 font-light text-sm flex items-center justify-center gap-1"
        >
          @{username} <ExternalLink className="h-3 w-3" />
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <div key={post.id} className="group">
            <div className="aspect-square bg-gray-200 rounded-sm overflow-hidden relative">
              <img
                src={post.imageUrl || "/placeholder.svg"}
                alt={post.caption}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <Heart className="h-5 w-5" />
                    <span className="text-sm font-light">{post.likes}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MessageCircle className="h-5 w-5" />
                    <span className="text-sm font-light">{post.comments}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-3">
              <p className="text-sm text-gray-600 font-light line-clamp-2">{post.caption}</p>
              <a
                href={post.permalink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-gray-400 hover:text-gray-600 mt-1 inline-block"
              >
                View on Instagram
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center">
        <a
          href={`https://instagram.com/${username}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-gray-900 hover:text-gray-600 transition-colors duration-300 font-light tracking-wide border-b border-gray-300 hover:border-gray-600 pb-1"
        >
          View More on Instagram
        </a>
      </div>
    </div>
  )
}

export default InstagramFeed
