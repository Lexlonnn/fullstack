"use client"

import { useState } from "react"
import { GitFork, Download, Code2, Upload, GitPullRequest, Laptop, Cloud, CheckCircle2 } from "lucide-react"

export default function InteractiveWorkflow() {
  const [step, setStep] = useState(0)

  const advanceStep = () => {
    if (step < 5) setStep(step + 1)
  }

  const reset = () => {
    setStep(0)
  }

  const steps = [
    { title: "Fork", icon: GitFork, action: "Click to Fork" },
    { title: "Clone", icon: Download, action: "Click to Clone" },
    { title: "Branch & Commit", icon: Code2, action: "Make Changes" },
    { title: "Push", icon: Upload, action: "Push to GitHub" },
    { title: "Pull Request", icon: GitPullRequest, action: "Create PR" }
  ]

  return (
    <div className="w-full h-full flex flex-col items-center justify-between p-6">
      <div className="flex w-full justify-between items-start relative h-48">
        
        {/* Original Repo */}
        <div className="flex flex-col items-center gap-2 w-1/3">
          <div className="p-4 bg-slate-900 rounded-xl border-2 border-slate-700 shadow-lg flex flex-col items-center w-full max-w-[200px] z-10 relative">
            <Cloud className="w-8 h-8 text-blue-400 mb-2" />
            <span className="text-white font-bold text-center">Original Repo</span>
            <span className="text-slate-400 text-xs">facebook/react</span>
            
            {step >= 5 && (
              <div className="absolute -bottom-3 -right-3 bg-green-500 text-white rounded-full p-1 animate-bounce">
                <CheckCircle2 className="w-6 h-6" />
              </div>
            )}
          </div>
        </div>

        {/* PR Arrow */}
        {step >= 5 && (
          <div className="absolute top-12 left-1/3 right-1/3 h-0.5 bg-green-500 flex items-center justify-center animate-fade-in z-0">
            <div className="bg-green-500 text-white text-xs px-2 py-1 rounded-full font-bold absolute -top-3">
              PR Merged!
            </div>
            <div className="absolute left-0 w-3 h-3 border-t-2 border-l-2 border-green-500 transform -rotate-45" />
          </div>
        )}

        {/* Fork Arrow */}
        {step >= 1 && step < 5 && (
          <div className="absolute top-12 left-1/3 right-1/3 h-0.5 bg-blue-500/50 flex items-center justify-center animate-fade-in z-0">
            <div className="absolute right-0 w-3 h-3 border-t-2 border-r-2 border-blue-500/50 transform rotate-45" />
          </div>
        )}

        {/* Your Account Repo */}
        <div className="flex flex-col items-center gap-2 w-1/3">
          <div className={`p-4 rounded-xl border-2 flex flex-col items-center w-full max-w-[200px] z-10 transition-all duration-500 ${
            step >= 1 ? "bg-slate-900 border-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.5)]" : "bg-slate-100 border-slate-300 border-dashed opacity-50"
          }`}>
            <Cloud className={`w-8 h-8 mb-2 ${step >= 1 ? "text-blue-400" : "text-slate-400"}`} />
            <span className={`font-bold text-center ${step >= 1 ? "text-white" : "text-slate-500"}`}>Your Account</span>
            <span className={`text-xs ${step >= 1 ? "text-slate-400" : "text-slate-500"}`}>you/react (Fork)</span>

            {step >= 4 && (
              <div className="absolute -top-3 -right-3 bg-emerald-500 text-white text-xs font-bold px-2 py-1 rounded-full animate-fade-in shadow-lg">
                +1 Commit
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Push/Clone Arrows */}
      <div className="w-full flex-1 relative hidden md:block">
        {step >= 2 && (
          <div className="absolute right-1/4 top-0 bottom-0 w-0.5 bg-blue-500/50 flex flex-col items-center justify-center animate-fade-in">
            <div className="absolute bottom-4 w-3 h-3 border-b-2 border-r-2 border-blue-500/50 transform rotate-45" />
          </div>
        )}
        {step >= 4 && (
          <div className="absolute right-[28%] top-0 bottom-0 w-0.5 bg-emerald-500 flex flex-col items-center justify-center animate-fade-in">
            <div className="absolute top-4 w-3 h-3 border-t-2 border-l-2 border-emerald-500 transform rotate-45" />
          </div>
        )}
      </div>

      {/* Local Laptop */}
      <div className="flex w-full justify-end items-center relative mt-8 md:mt-0">
        <div className="flex flex-col items-center gap-2 w-1/3">
          <div className={`p-4 rounded-xl border-2 flex flex-col items-center w-full max-w-[200px] z-10 transition-all duration-500 ${
            step >= 2 ? "bg-slate-900 border-orange-500 shadow-[0_0_15px_rgba(249,115,22,0.5)]" : "bg-slate-100 border-slate-300 border-dashed opacity-50"
          }`}>
            <Laptop className={`w-8 h-8 mb-2 ${step >= 2 ? "text-orange-400" : "text-slate-400"}`} />
            <span className={`font-bold text-center ${step >= 2 ? "text-white" : "text-slate-500"}`}>Your Laptop</span>
            <span className={`text-xs ${step >= 2 ? "text-slate-400" : "text-slate-500"}`}>Local /react</span>

            {step >= 3 && (
              <div className="absolute -top-3 -left-3 bg-emerald-500 text-white text-xs font-bold px-2 py-1 rounded-full animate-fade-in shadow-lg">
                +1 Commit
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="w-full max-w-2xl mt-8 bg-white/80 backdrop-blur rounded-2xl p-4 shadow-xl border border-slate-200">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-bold text-slate-800">Open Source Workflow</h3>
          <button onClick={reset} className="text-sm text-slate-500 hover:text-slate-800 transition-colors">
            Reset
          </button>
        </div>
        
        <div className="flex gap-2">
          {steps.map((s, i) => {
            const Icon = s.icon
            const isActive = step === i
            const isCompleted = step > i
            
            return (
              <button
                key={i}
                onClick={advanceStep}
                disabled={step !== i}
                className={`flex-1 flex flex-col items-center gap-2 p-3 rounded-lg border-2 transition-all duration-300 ${
                  isActive ? "border-blue-500 bg-blue-50 shadow-md scale-105" : 
                  isCompleted ? "border-green-500 bg-green-50 text-green-700" : 
                  "border-slate-200 bg-slate-50 text-slate-400 opacity-50 cursor-not-allowed"
                }`}
              >
                <Icon className={`w-6 h-6 ${isActive ? "text-blue-600 animate-pulse" : ""}`} />
                <span className="text-xs font-bold text-center leading-tight">
                  {isCompleted ? "Done" : s.action}
                </span>
              </button>
            )
          })}
        </div>
        <div className="mt-4 text-center text-sm font-medium text-slate-600 h-6">
          {step === 0 && "Step 1: Copy the repository to your own GitHub account."}
          {step === 1 && "Step 2: Download your copy to your local computer."}
          {step === 2 && "Step 3: Create a branch and write your new code."}
          {step === 3 && "Step 4: Upload your new commit back to your GitHub account."}
          {step === 4 && "Step 5: Ask the original project to merge your new code."}
          {step === 5 && "Success! You've contributed to Open Source!"}
        </div>
      </div>
    </div>
  )
}
