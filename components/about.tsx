import NumberTicker from "./custom_ui/numberTicker";

export default function About() {
  const basicData = [
    {
      quantity: 1600,
      title: "CP Problems solved",
      description: "Expert in Codeforces"
    },
    {
      quantity: 40,
      title: "Projects Built",
      description: "Open Source Contributor"
    }
  ]
  return (
    <div id="about" className="sm:w-5xl w-full max-sm:px-4 py-6 self-center flex flex-col gap-8">
      <h1 className="font-bold sm:text-4xl text-2xl">
        <span className="text-primary">01.</span>
        About Me
      </h1>
      <div>

        <div className="flex sm:flex-row-reverse flex-col  justify-center gap-20">
          <div className="flex flex-row relative items-center justify-center w-full sm:min-w-90 sm:h-90 aspect-square rotate-2 hover:animate-wiggle">
            <img src="/images/self-photo-nobg.png" alt="Hero" className="h-full w-full bg-radial-[at_85%_15%] from-white to-primary to-75% touch-manipulation" />
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-sm">
              I started programming out of curiosity, learning with limited resources and a strong interest in problem-solving. Early exposure to algorithms and competitive programming shaped how I approach challenges logically and efficiently.
              <br />
              <br />
              I moved from solving problems to building real-world applications, working across the stack with modern frontend frameworks, databases, and APIs. I’ve built scalable features, real-time systems, and production-ready interfaces while collaborating closely with teams.
              <br />
              <br />
              I’m currently focused on building fast, maintainable web applications with React, Next.js, and TypeScript, while continuing to deepen my backend and system design skills through hands-on projects.
            </p>
            <div className="flex flex-row gap-4">
              {basicData.map((data, index) => (
                <div key={index} className="flex flex-col bg-secondary p-4">
                  <span>
                    <NumberTicker value={Number(data.quantity)} decimalPlaces={0} className="font-bold" />+
                  </span>
                  <h1 className="text-sm font-bold">{data.title}</h1>
                  <p className="text-xs">{data.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
