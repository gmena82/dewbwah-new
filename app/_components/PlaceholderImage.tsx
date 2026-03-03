"use client"

import Image from "next/image"

interface PlaceholderImageProps {
  text?: string
  width?: number
  height?: number
  className?: string
  alt?: string
  priority?: boolean
}

export function PlaceholderImage({
  text = "Marketing Image",
  width = 600,
  height = 400,
  className = "",
  alt = "Placeholder image",
  priority = false,
}: PlaceholderImageProps) {
  const encodedText = encodeURIComponent(text)
  const placeholderUrl = `https://placehold.co/${width}x${height}/0F766E/FFFFFF?text=${encodedText}`

  return (
    <Image
      src={placeholderUrl}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority={priority}
      unoptimized
    />
  )
}

export function PlaceholderDiv({
  text = "Marketing Image",
  className = "",
}: {
  text?: string
  className?: string
}) {
  return (
    <div
      className={`flex items-center justify-center bg-teal-700 text-white font-medium ${className}`}
    >
      {text}
    </div>
  )
}

