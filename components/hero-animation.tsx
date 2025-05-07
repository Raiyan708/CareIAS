"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

export default function HeroAnimation() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const images = Array.from(container.querySelectorAll("img"))

    const animate = () => {
      images.forEach((img, index) => {
        const delay = index * 200
        setTimeout(() => {
          img.style.opacity = "1"
          img.style.transform = "translateY(0)"
        }, delay)
      })
    }

    animate()

    return () => {
      images.forEach((img) => {
        img.style.opacity = "0"
        img.style.transform = "translateY(20px)"
      })
    }
  }, [])

  return (
    <div ref={containerRef} className="relative h-[400px] w-full max-w-[500px]">
      <div className="absolute inset-0 flex items-center justify-center">
        <Image
          src="/HomePage.JPG"
          width={500}
          height={400}
          alt="UPSC Success"
          className="rounded-lg shadow-lg transition-all duration-500 ease-in-out opacity-0 transform translate-y-5"
          style={{ transitionDelay: "0ms" }}
        />
      </div>
      {/* <div className="absolute top-[-20px] right-[-20px] w-[150px] h-[150px]">
        <Image
          src="/placeholder.svg?height=150&width=150&text=Delhi+Experts"
          width={150}
          height={150}
          alt="Delhi Experts"
          className="rounded-full border-4 border-background shadow-lg transition-all duration-500 ease-in-out opacity-0 transform translate-y-5"
          style={{ transitionDelay: "200ms" }}
        />
      </div>
      <div className="absolute bottom-[-10px] left-[-10px] w-[120px] h-[120px]">
        <Image
          src="/placeholder.svg?height=120&width=120&text=Hostel+Facility"
          width={120}
          height={120}
          alt="Hostel Facility"
          className="rounded-full border-4 border-background shadow-lg transition-all duration-500 ease-in-out opacity-0 transform translate-y-5"
          style={{ transitionDelay: "400ms" }}
        />
      </div> */}
    </div>
  )
}
