"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Grid3x3 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import FloatingParticles from "@/components/floating-particles"
import {
  BuildingBlocksAnimation,
  SpeedIndicatorsAnimation,
  ComponentBoxesAnimation,
  CodeMorphAnimation,
  SetupChecklistAnimation,
  ComponentNestingAnimation,
  JSXTransformAnimation,
} from "@/components/slide-animations"
import {
  ArchitectureDiagramVisual,
  InternetWorksVisual,
  FrontendVisual,
  BackendFlowVisual,
  DatabaseVisual,
  RequestFlowVisual,
  AuthFlowVisual,
  FolderStructureVisual,
  DevToolsVisual,
  LifecycleVisual,
  DeploymentPipelineVisual,
  TeamWorkflowVisual,
  CareerRoadmapVisual,
  ApiTestingVisual,
} from "@/components/slide-visuals"

type Slide = {
  id: number
  type: "title" | "content" | "conclusion"
  title: string
  subtitle?: string
  points?: string[]
  footer?: string
  visualSuggestion?: string
  visualComponent?: () => JSX.Element
  speakerNotes?: string[]
  animation?: () => JSX.Element
}

const slides: Slide[] = [
  {
    id: 1,
    type: "title",
    title: "Introduction to Full Stack Development",
    subtitle: "Modern Web Development",
    points: [
      "Your Name",
      "Designation"
    ],
    animation: CodeMorphAnimation,
  },
  {
    id: 2,
    type: "content",
    title: "What is Full Stack Development?",
    points: [
      "Frontend: The interface users interact with.",
      "Backend: The server logic and architecture.",
      "Database: Where all the data is securely stored.",
      "APIs: The bridge connecting the frontend to the backend.",
      "Full Stack Developer: Someone who can build it all from end to end."
    ],
    visualComponent: ArchitectureDiagramVisual,
    animation: BuildingBlocksAnimation,
  },
  {
    id: 3,
    type: "content",
    title: "How the Internet Works",
    subtitle: "The journey of a web request.",
    points: [
      "You type a URL, the Browser sends an HTTP Request.",
      "The Server receives it, processes it, and might ask the Database for info.",
      "The Server sends an HTTP Response back with the UI or data."
    ],
    visualComponent: InternetWorksVisual,
    animation: SpeedIndicatorsAnimation,
  },
  {
    id: 4,
    type: "content",
    title: "Frontend Development",
    subtitle: "Building what the user sees.",
    points: [
      "HTML & CSS for structure and styling.",
      "JavaScript makes it interactive.",
      "React & Next.js to build reusable UI Components.",
      "Managing State (data changing over time) and Routing (pages)."
    ],
    visualComponent: FrontendVisual,
    animation: ComponentBoxesAnimation,
  },
  {
    id: 5,
    type: "content",
    title: "Backend Data Flow",
    subtitle: "The pipeline of a server request.",
    points: [
      "Router: Directs the incoming HTTP request to the right place.",
      "Middleware: Intercepts the request to check Auth or format data.",
      "Controller: Handles the core business logic of the request.",
      "Service/DB: Interacts with the database and returns data back up the chain."
    ],
    visualComponent: BackendFlowVisual,
    animation: CodeMorphAnimation,
  },
  {
    id: 5.5,
    type: "content",
    title: "API Endpoints & Testing",
    subtitle: "How we interact with the backend.",
    points: [
      "Endpoints: Specific URLs on the server that perform specific actions (like /api/users).",
      "Methods: GET (read), POST (create), PUT (update), DELETE (remove).",
      "API Clients: Developers use tools like Postman or Insomnia to test endpoints.",
      "Responses: The server replies with a Status Code (e.g. 200 OK) and a JSON payload."
    ],
    visualComponent: ApiTestingVisual,
    animation: CodeMorphAnimation,
  },
  {
    id: 6,
    type: "content",
    title: "Databases",
    subtitle: "Storing everything safely.",
    points: [
      "SQL (PostgreSQL, MySQL): Data in strict Tables and Relationships.",
      "NoSQL (MongoDB): Data in flexible JSON-like Documents."
    ],
    visualComponent: DatabaseVisual,
    animation: ComponentNestingAnimation,
  },
  {
    id: 7,
    type: "content",
    title: "The Data Journey",
    subtitle: "How frontend and backend talk.",
    points: [
      "UI Action: User submits a form (Frontend State).",
      "Network: Data is converted to JSON and sent over HTTP (Fetch/Axios).",
      "Processing: Backend receives JSON, validates it, and updates Database.",
      "Resolution: Backend sends back a JSON response updating the Frontend UI."
    ],
    visualComponent: RequestFlowVisual,
    animation: SpeedIndicatorsAnimation,
  },
  {
    id: 8,
    type: "content",
    title: "Authentication",
    subtitle: "Verifying who you are.",
    points: [
      "Passwords are NEVER saved as plain text. We use Password Hashing.",
      "Once verified, the server gives you a JWT (JSON Web Token).",
      "You show this token to access Protected Routes."
    ],
    visualComponent: AuthFlowVisual,
    animation: SetupChecklistAnimation,
  },
  {
    id: 9,
    type: "content",
    title: "Folder Structure",
    subtitle: "How a professional project is organized.",
    points: [
      "Separating concerns is vital for large projects.",
      "Frontend focuses on UI components and hooks.",
      "Backend focuses on routes, controllers, and models."
    ],
    visualComponent: FolderStructureVisual,
    animation: ComponentBoxesAnimation,
  },
  {
    id: 10,
    type: "content",
    title: "Development Tools",
    subtitle: "The modern developer's toolkit.",
    points: [
      "VS Code, Git, GitHub for writing and saving code.",
      "Node.js, npm, React, Next.js for building.",
      "PostgreSQL, Prisma, Supabase for data.",
      "Docker, Postman, AI Assistants for testing and deployment."
    ],
    visualComponent: DevToolsVisual,
    animation: BuildingBlocksAnimation,
  },
  {
    id: 11,
    type: "content",
    title: "Building a Real Project",
    subtitle: "The development lifecycle.",
    points: [
      "Start with an Idea and UI Design.",
      "Build Frontend UI -> Connect to Backend APIs -> Store in Database.",
      "Test thoroughly -> Deploy for Users."
    ],
    visualComponent: LifecycleVisual,
    animation: JSXTransformAnimation,
  },
  {
    id: 12,
    type: "content",
    title: "Deployment",
    subtitle: "Going live to the world.",
    points: [
      "Frontend Hosting (Vercel, Netlify) serves the UI fast.",
      "Backend Hosting (Render, AWS) runs the logic continuously.",
      "Environment Variables keep our database passwords secret.",
      "A custom Domain Name connects it all together."
    ],
    visualComponent: DeploymentPipelineVisual,
    animation: SpeedIndicatorsAnimation,
  },
  {
    id: 13,
    type: "content",
    title: "Industry Workflow",
    subtitle: "How teams work together.",
    points: [
      "Large apps are built by specialized teams collaborating closely."
    ],
    visualComponent: TeamWorkflowVisual,
    animation: ComponentBoxesAnimation,
  },
  {
    id: 14,
    type: "content",
    title: "Career Roadmap",
    subtitle: "Your path to Full Stack.",
    points: [
      "Don't learn everything at once. Master the basics first.",
      "Build a strong frontend foundation before moving to servers."
    ],
    visualComponent: CareerRoadmapVisual,
    animation: CodeMorphAnimation,
  },
  {
    id: 15,
    type: "conclusion",
    title: "Thank You",
    points: [
      "Any Questions?",
      "Contact: your.email@example.com",
      "GitHub: @yourusername"
    ],
    animation: ComponentNestingAnimation,
  }
]

export default function Presentation() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [direction, setDirection] = useState<"forward" | "backward">("forward")
  const [showOverview, setShowOverview] = useState(false)
  const [showKeyboardHelp, setShowKeyboardHelp] = useState(false)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        if (e.key === "ArrowUp") {
          e.preventDefault()
          prevSlide()
        } else if (e.key === "ArrowDown") {
          e.preventDefault()
          nextSlide()
        }
        return
      }

      if (e.key === "ArrowRight" || e.key === " " || e.key === "ArrowDown") {
        e.preventDefault()
        nextSlide()
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault()
        prevSlide()
      } else if (e.key === "o" || e.key === "O") {
        e.preventDefault()
        setShowOverview(!showOverview)
      } else if (e.key === "?" || e.key === "/") {
        e.preventDefault()
        setShowKeyboardHelp(!showKeyboardHelp)
      } else if (e.key === "Home") {
        e.preventDefault()
        goToSlide(0)
      } else if (e.key === "End") {
        e.preventDefault()
        goToSlide(slides.length - 1)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [currentSlide, showOverview, showKeyboardHelp])

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setDirection("forward")
      setCurrentSlide(currentSlide + 1)
    }
  }

  const prevSlide = () => {
    if (currentSlide > 0) {
      setDirection("backward")
      setCurrentSlide(currentSlide - 1)
    }
  }

  const goToSlide = (index: number) => {
    setDirection(index > currentSlide ? "forward" : "backward")
    setCurrentSlide(index)
    setShowOverview(false)
  }

  const slide = slides[currentSlide]
  const progress = ((currentSlide + 1) / slides.length) * 100
  const SlideAnimation = slide.animation

  return (
    <div className="h-screen w-screen bg-gradient-to-br from-slate-50 via-blue-50 to-orange-50 text-foreground flex flex-col relative overflow-hidden">
      <FloatingParticles />

      <div className="absolute top-0 left-0 right-0 h-1 bg-blue-200/30 z-50">
        <div
          className="h-full bg-gradient-to-r from-blue-600 to-orange-400 transition-all duration-300 ease-out origin-left"
          style={{ width: `${progress}%` }}
        />
      </div>



      <div className="flex-1 flex items-center justify-center p-8 md:p-16 relative z-10">
        {SlideAnimation && <SlideAnimation />}

        <div
          key={currentSlide}
          className={`max-w-5xl w-full ${direction === "forward" ? "animate-slide-in-right" : "animate-slide-in-left"}`}
        >
          {slide.type === "title" && (
            <div className="text-center space-y-8">
              <h1 className="text-5xl md:text-7xl font-bold text-balance leading-tight bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent animate-fade-in">
                {slide.title}
              </h1>
              <p className="text-2xl md:text-3xl text-blue-600 font-semibold animate-fade-in-delay-1">{slide.subtitle}</p>

              {(slide.visualSuggestion || slide.speakerNotes?.length) && (
                <div className="max-w-4xl mx-auto text-left space-y-4">
                  {slide.visualSuggestion && (
                    <div className="bg-orange-50/80 border-2 border-orange-200 rounded-lg p-4 shadow-md">
                      <p className="text-sm uppercase tracking-wide text-orange-700 font-semibold mb-1">Visual Suggestion</p>
                      <p className="text-lg text-gray-800">{slide.visualSuggestion}</p>
                    </div>
                  )}

                  {slide.speakerNotes?.length ? (
                    <div className="bg-blue-50/80 border-2 border-blue-200 rounded-lg p-4 shadow-md">
                      <p className="text-sm uppercase tracking-wide text-blue-700 font-semibold mb-2">Speaker Notes</p>
                      <ul className="space-y-2 text-base md:text-lg">
                        {slide.speakerNotes.map((note, index) => (
                          <li key={index} className="flex items-start gap-3 text-gray-800">
                            <span className="text-blue-500 font-bold mt-0.5">•</span>
                            <span>{note}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                </div>
              )}
            </div>
          )}

          {slide.type === "content" && (
            <div className="space-y-8">
              <div className="animate-fade-in">
                <h2 className="text-4xl md:text-6xl font-bold text-balance mb-4 bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent">
                  {slide.title}
                </h2>
                {slide.subtitle && <p className="text-xl md:text-2xl text-blue-600 font-medium">{slide.subtitle}</p>}
              </div>

              <ul className="space-y-4 text-xl md:text-2xl">
                {slide.points?.map((point, index) => (
                  <li
                    key={index}
                    className={`flex items-start gap-4 animate-fade-in-delay-${Math.min(index + 1, 5)} hover:translate-x-2 transition-transform duration-200`}
                  >
                    <span className="text-blue-500 mt-1 text-2xl font-bold">▸</span>
                    <span className="text-pretty text-gray-800">{point}</span>
                  </li>
                ))}
              </ul>

              {(slide.visualSuggestion || slide.visualComponent || slide.speakerNotes?.length) && (
                <div className={`grid gap-4 animate-fade-in-delay-3 w-full ${slide.speakerNotes?.length && (slide.visualSuggestion || slide.visualComponent) ? 'md:grid-cols-2' : 'grid-cols-1'}`}>
                  {slide.visualSuggestion && (
                    <div className="bg-orange-50/80 border-2 border-orange-200 rounded-lg p-4 shadow-md">
                      <p className="text-xs uppercase tracking-wide text-orange-700 font-semibold mb-2">Visual Suggestion</p>
                      <p className="text-lg text-gray-800">{slide.visualSuggestion}</p>
                    </div>
                  )}

                  {slide.visualComponent && (
                    <div className="w-full flex justify-center mt-4">
                      <slide.visualComponent />
                    </div>
                  )}

                  {slide.speakerNotes?.length ? (
                    <div className="bg-blue-50/80 border-2 border-blue-200 rounded-lg p-4 shadow-md">
                      <p className="text-xs uppercase tracking-wide text-blue-700 font-semibold mb-2">Speaker Notes</p>
                      <ul className="space-y-2 text-base md:text-lg">
                        {slide.speakerNotes.map((note, index) => (
                          <li key={index} className="flex items-start gap-3 text-gray-800">
                            <span className="text-blue-500 font-bold mt-0.5">•</span>
                            <span>{note}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                </div>
              )}
            </div>
          )}

          {slide.type === "conclusion" && (
            <div className="space-y-8">
              <h2 className="text-4xl md:text-6xl font-bold text-balance mb-8 bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent animate-fade-in">
                {slide.title}
              </h2>

              <ul className="space-y-4 text-xl md:text-2xl mb-12">
                {slide.points?.map((point, index) => (
                  <li
                    key={index}
                    className={`flex items-start gap-4 animate-fade-in-delay-${Math.min(index + 1, 5)} hover:translate-x-2 transition-transform duration-200`}
                  >
                    <span className="text-orange-500 mt-1 text-2xl font-bold">▸</span>
                    <span className="text-pretty text-gray-800">{point}</span>
                  </li>
                ))}
              </ul>

              {slide.footer && (
                <p className="text-3xl md:text-4xl font-bold text-center mt-16 bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent animate-fade-in-delay-4">
                  {slide.footer}
                </p>
              )}

              {(slide.visualSuggestion || slide.visualComponent || slide.speakerNotes?.length) && (
                <div className={`grid gap-4 animate-fade-in-delay-3 w-full ${slide.speakerNotes?.length && (slide.visualSuggestion || slide.visualComponent) ? 'md:grid-cols-2' : 'grid-cols-1'}`}>
                  {slide.visualSuggestion && (
                    <div className="bg-orange-50/80 border-2 border-orange-200 rounded-lg p-4 shadow-md">
                      <p className="text-xs uppercase tracking-wide text-orange-700 font-semibold mb-2">Visual Suggestion</p>
                      <p className="text-lg text-gray-800">{slide.visualSuggestion}</p>
                    </div>
                  )}

                  {slide.visualComponent && (
                    <div className="w-full flex justify-center mt-4">
                      <slide.visualComponent />
                    </div>
                  )}

                  {slide.speakerNotes?.length ? (
                    <div className="bg-blue-50/80 border-2 border-blue-200 rounded-lg p-4 shadow-md">
                      <p className="text-xs uppercase tracking-wide text-blue-700 font-semibold mb-2">Speaker Notes</p>
                      <ul className="space-y-2 text-base md:text-lg">
                        {slide.speakerNotes.map((note, index) => (
                          <li key={index} className="flex items-start gap-3 text-gray-800">
                            <span className="text-blue-500 font-bold mt-0.5">•</span>
                            <span>{note}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                </div>
              )}
            </div>
          )}

        </div>
      </div>

      <div className="border-t border-blue-200 backdrop-blur-sm bg-white/80 p-4 md:p-6 flex items-center justify-between relative z-20">
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="lg"
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="gap-2 hover:bg-blue-100 hover:text-blue-700 transition-all duration-200 hover:scale-105"
          >
            <ChevronLeft className="h-5 w-5" />
            <span className="hidden sm:inline">Previous</span>
          </Button>

          <Dialog open={showOverview} onOpenChange={setShowOverview}>
            <DialogTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-blue-100 hover:text-blue-700 transition-all duration-200"
              >
                <Grid3x3 className="h-5 w-5" />
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>Slide Overview</DialogTitle>
              </DialogHeader>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                {slides.map((s, index) => (
                  <button
                    key={s.id}
                    onClick={() => goToSlide(index)}
                    className={`p-4 rounded-lg border-2 text-left transition-all duration-200 hover:scale-105 ${
                      index === currentSlide ? "border-blue-500 bg-blue-50" : "border-blue-200 hover:border-blue-400"
                    }`}
                  >
                    <div className="text-xs text-blue-600 mb-2">Slide {index + 1}</div>
                    <div className="font-semibold text-sm line-clamp-2 text-gray-800">{s.title}</div>
                  </button>
                ))}
              </div>
            </DialogContent>
          </Dialog>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 hover:scale-125 ${
                  index === currentSlide
                    ? "w-8 bg-gradient-to-r from-blue-600 to-orange-400"
                    : index < currentSlide
                      ? "w-2 bg-blue-300"
                      : "w-2 bg-blue-200"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          <div className="text-blue-700 font-mono text-sm bg-blue-100 px-3 py-1 rounded-full font-semibold">
            {currentSlide + 1} / {slides.length}
          </div>
        </div>

        <Button
          variant="ghost"
          size="lg"
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
          className="gap-2 hover:bg-orange-100 hover:text-orange-700 transition-all duration-200 hover:scale-105"
        >
          <span className="hidden sm:inline">Next</span>
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>
    </div>
  )
}