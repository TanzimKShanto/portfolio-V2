"use client"
import { IconStarFilled, IconStar } from "@tabler/icons-react"
import { Card, CardContent, CardHeader } from "./ui/card"
import { useState } from "react"

export default function Testimonials() {
  const testimonials = [
    {
      name: "Habibur Rahman",
      role: "CEO",
      company: "Paipixel LLC",
      quote: "Tanzim built our agency website paipixel.com with impressive speed and attention to detail. The site is fast, fully responsive, and performs flawlessly across all devices. Delivered ahead of schedule — exceeded our expectations.",
      avatar: "/images/client1.jpeg",
      rating: 5
    },
    {
      name: "Mokbul Hossain",
      role: "Sr. Graphic Designer & Account Asst.",
      company: "Tac Perfumes",
      quote: "Tanzim is an exceptionally talented developer with strong problem-solving skills and a passion for quality. A reliable team player who communicates clearly, meets deadlines effortlessly, and continuously embraces new technologies. Highly recommended.",
      avatar: "/images/client2.jpeg",
      rating: 5
    }
  ]

  const [imgErrors, setImgErrors] = useState<Record<number, boolean>>({})

  return (
    <div id="testimonials" className="sm:w-5xl w-full max-sm:px-4 py-12 self-center flex flex-col gap-8">
      <h1 className="font-bold sm:text-4xl text-2xl">
        <span className="text-primary">05.</span>
        Testimonials
      </h1>
      <div className="grid sm:grid-cols-2 grid-cols-1 gap-4 sm:gap-6">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="bg-zinc-900 text-accent dark:text-zinc-300 border border-zinc-800 relative">
            <div className="absolute h-3 w-3 sm:h-4 sm:w-4 border-t-2 sm:border-t-3 border-l-2 sm:border-l-3 border-primary top-0 left-0" />
            <div className="absolute h-3 w-3 sm:h-4 sm:w-4 border-b-2 sm:border-b-3 border-r-2 sm:border-r-3 border-primary bottom-0 right-0" />
            <CardHeader className="flex flex-row items-center gap-3 sm:gap-4 max-sm:px-4 max-sm:py-3">
              <div className="h-10 w-10 sm:h-14 sm:w-14 rounded-full bg-zinc-800 border-2 border-zinc-700 flex items-center justify-center overflow-hidden shrink-0">
                {imgErrors[index] ? (
                  <span className="text-primary font-bold text-sm sm:text-lg">
                    {testimonial.name.split(" ").map(n => n[0]).join("")}
                  </span>
                ) : (
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="h-full w-full object-cover"
                    onError={() => setImgErrors(prev => ({ ...prev, [index]: true }))}
                  />
                )}
              </div>
              <div>
                <h3 className="font-bold text-xs sm:text-sm">{testimonial.name}</h3>
                <p className="text-[10px] sm:text-xs text-muted-foreground">{testimonial.role} · {testimonial.company}</p>
                <div className="flex flex-row gap-0.5 mt-0.5 sm:mt-1">
                  {Array.from({ length: 5 }, (_, i) =>
                    i < testimonial.rating
                      ? <IconStarFilled key={i} size={10} className="text-primary sm:size-3" />
                      : <IconStar key={i} size={10} className="text-muted-foreground sm:size-3" />
                  )}
                </div>
              </div>
            </CardHeader>
            <CardContent className="max-sm:px-4 max-sm:pb-4">
              <p className="text-xs sm:text-sm text-muted-foreground italic leading-relaxed">&ldquo;{testimonial.quote}&rdquo;</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
