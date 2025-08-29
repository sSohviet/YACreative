"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Upload, X, ImageIcon, Video } from "lucide-react"

interface MediaFile {
  id: string
  file: File
  preview: string
  type: "image" | "video"
  category: "photography" | "videography" | "content-creation"
}

interface MediaUploadProps {
  category: "photography" | "videography" | "content-creation"
  onUpload: (files: MediaFile[]) => void
}

const MediaUpload = ({ category, onUpload }: MediaUploadProps) => {
  const [files, setFiles] = useState<MediaFile[]>([])
  const [dragActive, setDragActive] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFiles = (fileList: FileList) => {
    const newFiles: MediaFile[] = []

    Array.from(fileList).forEach((file) => {
      // Check file type
      const isImage = file.type.startsWith("image/")
      const isVideo = file.type.startsWith("video/")

      if (!isImage && !isVideo) return

      // Create preview URL
      const preview = URL.createObjectURL(file)

      const mediaFile: MediaFile = {
        id: Math.random().toString(36).substr(2, 9),
        file,
        preview,
        type: isImage ? "image" : "video",
        category,
      }

      newFiles.push(mediaFile)
    })

    const updatedFiles = [...files, ...newFiles]
    setFiles(updatedFiles)
    onUpload(updatedFiles)
  }

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFiles(e.dataTransfer.files)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    if (e.target.files && e.target.files[0]) {
      handleFiles(e.target.files)
    }
  }

  const removeFile = (id: string) => {
    const updatedFiles = files.filter((file) => file.id !== id)
    setFiles(updatedFiles)
    onUpload(updatedFiles)
  }

  const getCategoryTitle = () => {
    switch (category) {
      case "photography":
        return "Photography Gallery"
      case "videography":
        return "Videography Portfolio"
      case "content-creation":
        return "Content Creation Showcase"
      default:
        return "Media Gallery"
    }
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-2xl font-light text-gray-900 tracking-wide mb-2">{getCategoryTitle()}</h3>
        <p className="text-gray-600 font-light">Upload high-quality images and videos for your portfolio</p>
      </div>

      {/* Upload Area */}
      <div
        className={`relative border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
          dragActive ? "border-gray-400 bg-gray-50" : "border-gray-300 hover:border-gray-400"
        }`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <input
          ref={fileInputRef}
          type="file"
          multiple
          accept="image/*,video/*"
          onChange={handleChange}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        />

        <div className="space-y-4">
          <div className="flex justify-center">
            <Upload className="h-12 w-12 text-gray-400" />
          </div>
          <div>
            <p className="text-lg font-light text-gray-900">Drop files here or click to upload</p>
            <p className="text-sm text-gray-500 mt-2">Supports: JPG, PNG, HEIC, MP4, MOV (Max 100MB per file)</p>
          </div>
        </div>
      </div>

      {/* File Preview Grid */}
      {files.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {files.map((file) => (
            <div key={file.id} className="relative group">
              <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
                {file.type === "image" ? (
                  <ImageIcon
                    src={file.preview || "/placeholder.svg"}
                    alt={file.file.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gray-800">
                    <Video className="h-8 w-8 text-white" />
                    <video
                      src={file.preview}
                      className="absolute inset-0 w-full h-full object-cover opacity-50"
                      muted
                    />
                  </div>
                )}
              </div>

              {/* Remove Button */}
              <button
                onClick={() => removeFile(file.id)}
                className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <X className="h-4 w-4" />
              </button>

              {/* File Info */}
              <div className="mt-2">
                <p className="text-xs text-gray-600 truncate">{file.file.name}</p>
                <p className="text-xs text-gray-400">{(file.file.size / 1024 / 1024).toFixed(1)} MB</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Upload Stats */}
      {files.length > 0 && (
        <div className="text-center text-sm text-gray-500">
          {files.length} file{files.length !== 1 ? "s" : ""} uploaded
        </div>
      )}
    </div>
  )
}

export default MediaUpload
