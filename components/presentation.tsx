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
import InteractiveTerminal from "@/components/interactive-terminal"
import InteractiveBranching from "@/components/interactive-branching"
import InteractiveWorkflow from "@/components/interactive-workflow"
import { 
  GitVsGithubVisual, 
  ConfigTerminalVisual, 
  VersionControlVisual, 
  BadVsGoodVersionControlVisual, 
  InstallGitVisual, 
  InitRepoVisual, 
  GitWorkflowVisual, 
  ReviewHistoryVisual, 
  MergeAnimationVisual, 
  ConnectingGithubVisual, 
  PushAnimationVisual, 
  CloneAnimationVisual 
} from "@/components/slide-visuals"

type Slide = {
  id: number
  type: "title" | "content" | "conclusion" | "interactive-sandbox" | "interactive-branching" | "interactive-workflow"
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
    title: "Git & GitHub: The Essentials",
    subtitle: "Version control and collaboration made simple.",
    points: [
      "What is Git?",
      "What is GitHub?",
      "Why should we learn it?"
    ],
    animation: CodeMorphAnimation,
  },
  {
    id: 2,
    type: "content",
    title: "Why Version Control?",
    subtitle: "The problem with naming files 'Project_final_REAL.doc'",
    visualComponent: BadVsGoodVersionControlVisual,
    animation: JSXTransformAnimation,
  },
  {
    id: 3,
    type: "content",
    title: "Git vs. GitHub",
    subtitle: "They sound similar, but they do completely different jobs.",
    points: [
      "Git = Tool (The Engine on your Laptop)",
      "GitHub = Website (The Cloud hosting your code)"
    ],
    visualComponent: GitVsGithubVisual,
    animation: BuildingBlocksAnimation,
  },
  {
    id: 4,
    type: "content",
    title: "Install Git",
    subtitle: "Before using Git, we need to install it.",
    visualComponent: InstallGitVisual,
    animation: SetupChecklistAnimation,
  },
  {
    id: 5,
    type: "content",
    title: "Configure Git",
    subtitle: "Before taking a snapshot, Git needs to know who is holding the camera.",
    points: [
      "Every time you save a snapshot (commit), Git attaches your name and email to it.",
      "You only need to run these setup commands once on your computer."
    ],
    visualComponent: ConfigTerminalVisual,
    animation: SetupChecklistAnimation,
  },
  {
    id: 6,
    type: "content",
    title: "Create Your First Repository",
    subtitle: "A repository is simply a project that Git is tracking.",
    visualComponent: InitRepoVisual,
    animation: ComponentBoxesAnimation,
  },
  {
    id: 7,
    type: "content",
    title: "Git Workflow",
    subtitle: "The core concept of moving files.",
    visualComponent: GitWorkflowVisual,
    animation: SpeedIndicatorsAnimation,
  },
  {
    id: 8,
    type: "interactive-sandbox",
    title: "First Commit",
    points: [
      "Try moving files to the Staging Area, and then taking a Snapshot (Commit).",
      "Hint: use 'git add .' and 'git commit -m \"message\"'."
    ],
    animation: SpeedIndicatorsAnimation,
  },
  {
    id: 9,
    type: "content",
    title: "Reviewing History",
    subtitle: "Seeing what changed and who changed it.",
    points: [
      "'git log': Shows a list of all the commits (snapshots) made in the project.",
      "'git log --oneline': A compact view of the history timeline."
    ],
    visualComponent: ReviewHistoryVisual,
    animation: ComponentBoxesAnimation,
  },
  {
    id: 10,
    type: "interactive-branching",
    title: "Branching",
    subtitle: "Safe parallel universes for your code.",
    animation: ComponentNestingAnimation,
  },
  {
    id: 11,
    type: "content",
    title: "Merge",
    subtitle: "Combining parallel universes back together.",
    visualComponent: MergeAnimationVisual,
    animation: CodeMorphAnimation,
  },
  {
    id: 12,
    type: "content",
    title: "Merge Conflicts",
    subtitle: "What happens when two people edit the exact same line of code?",
    points: [
      "A 'Merge Conflict' is just Git asking for your help. It stops and says: 'Which version should I keep?'",
      "Git highlights the problem in your files using special markers (<<<<<<<, =======, >>>>>>>).",
      "Just delete the code you DON'T want, remove the markers, then commit."
    ],
    animation: BuildingBlocksAnimation,
  },
  {
    id: 13,
    type: "content",
    title: "Ignoring Files: .gitignore",
    subtitle: "Some things should stay secret or stay local.",
    points: [
      "node_modules: Massive downloaded library folders.",
      ".env: Password files and secret API keys.",
      "build / dist: Compiled code that can be regenerated."
    ],
    animation: SetupChecklistAnimation,
  },
  {
    id: 14,
    type: "content",
    title: "Connecting to GitHub",
    subtitle: "Linking your local folder to the cloud.",
    visualComponent: ConnectingGithubVisual,
    animation: SpeedIndicatorsAnimation,
  },
  {
    id: 15,
    type: "content",
    title: "Push",
    subtitle: "Uploading your commits to the internet.",
    visualComponent: PushAnimationVisual,
    animation: CodeMorphAnimation,
  },
  {
    id: 16,
    type: "content",
    title: "Clone",
    subtitle: "Downloading an existing repository to your laptop.",
    visualComponent: CloneAnimationVisual,
    animation: BuildingBlocksAnimation,
  },
  {
    id: 17,
    type: "content",
    title: "Pull vs Fetch",
    subtitle: "How to get the latest code from your team.",
    points: [
      "Fetch: Download only. Checks GitHub for new changes and downloads them, but doesn't mix them into your work yet.",
      "Pull: Download + Merge. Downloads the newest code AND instantly merges it into your current branch."
    ],
    animation: SetupChecklistAnimation,
  },
  {
    id: 18,
    type: "interactive-workflow",
    title: "The Open Source Workflow",
    subtitle: "Fork -> Clone -> Branch -> Commit -> Push -> Pull Request -> Merge",
    animation: JSXTransformAnimation,
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

          {slide.type === "interactive-sandbox" && (
            <div className="space-y-6 h-[70vh] flex flex-col">
              <div className="animate-fade-in text-center flex-shrink-0">
                <h2 className="text-4xl md:text-5xl font-bold text-balance mb-2 bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent">
                  {slide.title}
                </h2>
                {slide.points?.map((point, i) => (
                  <p key={i} className="text-gray-600 text-lg font-medium">{point}</p>
                ))}
              </div>
              <div className="flex-1 min-h-0 bg-white/50 p-2 rounded-2xl shadow-xl border border-slate-200">
                <InteractiveTerminal />
              </div>
            </div>
          )}

          {slide.type === "interactive-branching" && (
            <div className="space-y-6 h-[70vh] flex flex-col">
              <div className="animate-fade-in text-center flex-shrink-0">
                <h2 className="text-4xl md:text-5xl font-bold text-balance mb-2 bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent">
                  {slide.title}
                </h2>
                <p className="text-gray-600 text-lg font-medium">{slide.subtitle}</p>
              </div>
              <div className="flex-1 min-h-0 bg-white/50 p-2 rounded-2xl shadow-xl border border-slate-200">
                <InteractiveBranching />
              </div>
            </div>
          )}

          {slide.type === "interactive-workflow" && (
            <div className="space-y-6 h-[70vh] flex flex-col">
              <div className="animate-fade-in text-center flex-shrink-0">
                <h2 className="text-4xl md:text-5xl font-bold text-balance mb-2 bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent">
                  {slide.title}
                </h2>
                <p className="text-gray-600 text-lg font-medium">{slide.subtitle}</p>
              </div>
              <div className="flex-1 min-h-0 bg-white/50 p-2 rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
                <InteractiveWorkflow />
              </div>
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