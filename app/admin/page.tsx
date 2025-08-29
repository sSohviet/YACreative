"use client"

import { useState } from "react"
import MediaUpload from "../../components/MediaUpload"

interface MediaFile {
  id: string
  file: File
  preview: string
  type: "image" | "video"
  category: "photography" | "videography" | "content-creation"
}

export default function AdminPanel() {
  const [photographyFiles, setPhotographyFiles] = useState<MediaFile[]>([])
  const [videographyFiles, setVideographyFiles] = useState<MediaFile[]>([])
  const [contentFiles, setContentFiles] = useState<MediaFile[]>([])

  const handleSave = async () => {
    // Here you would implement the actual save functionality
    // This could involve uploading to a cloud storage service like AWS S3, Cloudinary, etc.
    console.log("Saving files:", {
      photography: photographyFiles,
      videography: videographyFiles,
      content: contentFiles,
    })

    alert("Portfolio updated successfully!")
  }

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-light text-gray-900 mb-4 tracking-wide">Portfolio Management</h1>
          <p className="text-lg text-gray-600 font-light">
            Upload and manage your photography, videography, and content creation portfolios
          </p>
        </div>

        <div className="space-y-16">
          {/* Photography Upload */}
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <MediaUpload category="photography" onUpload={setPhotographyFiles} />
          </div>

          {/* Videography Upload */}
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <MediaUpload category="videography" onUpload={setVideographyFiles} />
          </div>

          {/* Content Creation Upload */}
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <MediaUpload category="content-creation" onUpload={setContentFiles} />
          </div>
        </div>

        {/* Save Button */}
        <div className="text-center mt-12">
          <button
            onClick={handleSave}
            className="bg-gray-900 text-white px-12 py-4 hover:bg-gray-800 transition-colors duration-300 font-light tracking-wide"
          >
            Save Portfolio Changes
          </button>
        </div>
      </div>
    </div>
  )
}
