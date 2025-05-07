"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    id: 1,
    name: "Fatima Ali",
    role: "UPSC CSE 2025 Aspirant",
    content:
      "Care IAS has not only laid a solid foundation for my UPSC journey but has also ignited a deeper intellectual curiosity. The faculty’s strategic guidance, drawing from their Delhi-level expertise, empowers me to approach my preparation with a clear and focused mindset.",
    avatar: "/placeholder.svg?height=80&width=80&text=PS",
  },
  {
    id: 2,
    name: "Ahmed Khan",
    role: "UPSC CSE 2025 Aspirant",
    content:
      "Care IAS has provided me with a strong starting point for my UPSC preparation. The faculty’s guidance, rooted in their Delhi-level expertise, is already helping me build a solid foundation for the journey ahead.",
    avatar: "/placeholder.svg?height=80&width=80&text=RV",
  },
  {
    id: 3,
    name: "Ananya Gupta",
    role: "UPSC CSE 2025 Aspirant",
    content:
      "I’m grateful for the structured approach at Care IAS. With the faculty’s extensive knowledge and personalized attention, I am confident that this coaching will be the key to my success in UPSC.",
    avatar: "/placeholder.svg?height=80&width=80&text=AG",
  },
]

export default function TestimonialSlider() {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  const next = () => {
    setCurrent((current + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(next, 5000)
    return () => clearInterval(interval)
  }, [current, autoplay])

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
              <Card className="border-none shadow-lg">
                <CardContent className="p-6 md:p-8">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="relative h-20 w-20">
                      <Image
                        src={testimonial.avatar || "/placeholder.svg"}
                        alt={testimonial.name}
                        width={80}
                        height={80}
                        className="rounded-full border-4 border-background"
                      />
                      <div className="absolute -bottom-2 -right-2 rounded-full bg-foreground p-1 text-background">
                        <Quote className="h-4 w-4" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <p className="text-muted-foreground">{testimonial.content}</p>
                      <div>
                        <h3 className="font-bold">{testimonial.name}</h3>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-6 flex items-center justify-center space-x-2">
        <Button
          variant="outline"
          size="icon"
          className="h-8 w-8 rounded-full"
          onClick={prev}
          onMouseEnter={() => setAutoplay(false)}
          onMouseLeave={() => setAutoplay(true)}
        >
          <ChevronLeft className="h-4 w-4" />
          <span className="sr-only">Previous slide</span>
        </Button>
        <div className="flex space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 rounded-full ${index === current ? "bg-foreground" : "bg-muted"}`}
              onClick={() => setCurrent(index)}
              onMouseEnter={() => setAutoplay(false)}
              onMouseLeave={() => setAutoplay(true)}
            >
              <span className="sr-only">Go to slide {index + 1}</span>
            </button>
          ))}
        </div>
        <Button
          variant="outline"
          size="icon"
          className="h-8 w-8 rounded-full"
          onClick={next}
          onMouseEnter={() => setAutoplay(false)}
          onMouseLeave={() => setAutoplay(true)}
        >
          <ChevronRight className="h-4 w-4" />
          <span className="sr-only">Next slide</span>
        </Button>
      </div>
    </div>
  )
}
