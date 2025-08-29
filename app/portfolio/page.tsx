"use client"

import { useState } from "react"
import InstagramFeed from "../components/InstagramFeed"

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("all")

  const categories = [
    { id: "all", name: "All" },
    { id: "photography", name: "Photography" },
    { id: "videography", name: "Videography" },
    { id: "instagram", name: "Instagram" },
  ]

  const portfolioItems = [
    { id: 1, category: "photography", title: "Sarah & Michael", location: "Napa Valley" },
    { id: 2, category: "videography", title: "Emma & James", location: "San Francisco" },
    { id: 3, category: "photography", title: "Lisa & David", location: "Big Sur" },
    { id: 4, category: "videography", title: "Anna & Robert", location: "Carmel" },
    { id: 5, category: "photography", title: "Maria & John", location: "Marin County" },
    { id: 6, category: "videography", title: "Grace & Thomas", location: "Sonoma" },
  ]

  const filteredItems =
    activeCategory === "all" ? portfolioItems : portfolioItems.filter((item) => item.category === activeCategory)

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-light text-gray-900 mb-8 tracking-wide">Portfolio</h1>
          <p className="text-xl text-gray-600 font-light leading-relaxed max-w-3xl mx-auto">
            A collection of love stories we've had the honor to capture. Each wedding is unique, and we strive to
            document the authentic beauty and emotion of every couple's special day.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="pb-12 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex justify-center space-x-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`font-light tracking-wide transition-colors duration-300 pb-2 ${
                  activeCategory === category.id
                    ? "text-gray-900 border-b border-gray-900"
                    : "text-gray-500 hover:text-gray-900"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Content */}
      <section className="pb-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          {activeCategory === "instagram" && (
            <div className="space-y-16">
              <InstagramFeed username="yacreativewedding" title="Latest Videography Work" limit={3} />
              <InstagramFeed username="allielizphotos" title="Latest Photography Work" limit={3} />
            </div>
          )}

          {activeCategory === "photography" && (
            <div className="space-y-16">
              <InstagramFeed username="allielizphotos" title="Photography Portfolio" limit={6} />
            </div>
          )}

          {activeCategory === "videography" && (
            <div className="space-y-16">
              <InstagramFeed username="yacreativewedding" title="Videography Portfolio" limit={6} />
            </div>
          )}

          {activeCategory === "all" && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {filteredItems.map((item) => (
                  <div key={item.id} className="group">
                    <div className="aspect-[4/5] bg-gray-200 rounded-sm overflow-hidden mb-4">
                      <img
                        src={`/placeholder.svg?height=500&width=400&query=elegant ${item.category} work`}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    <div className="text-center">
                      <h3 className="text-lg font-light text-gray-900 mb-1 tracking-wide">{item.title}</h3>
                      <p className="text-sm text-gray-500 font-light">{item.location}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-16">
                <InstagramFeed username="allielizphotos" title="Latest Photography" limit={3} />
                <InstagramFeed username="yacreativewedding" title="Latest Videography" limit={3} />
              </div>
            </>
          )}
        </div>
      </section>

      {/* Featured Story */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6 tracking-wide">Featured Story</h2>
            <p className="text-lg text-gray-600 font-light">Sarah & Michael's Garden Wedding in Napa Valley</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
            <div className="aspect-[4/3] bg-gray-200 rounded-sm overflow-hidden">
              <img
                src="/placeholder.svg?height=600&width=800"
                alt="Featured Wedding"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-lg text-gray-600 font-light leading-relaxed mb-6">
                Sarah and Michael's wedding was a celebration of natural beauty and intimate connection. Set among the
                rolling hills of Napa Valley, their day unfolded with quiet elegance and genuine joy.
              </p>
              <p className="text-lg text-gray-600 font-light leading-relaxed">
                From the morning preparations filled with laughter to the golden hour portraits in the vineyard, every
                moment reflected their deep love and the beauty of their chosen setting.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="aspect-square bg-gray-200 rounded-sm overflow-hidden">
                <img
                  src={`/placeholder.svg?height=400&width=400&query=wedding detail ${i}`}
                  alt={`Wedding detail ${i}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
