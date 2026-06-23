"use client"

import { Laptop, Cloud, Terminal } from "lucide-react"
import { useEffect, useState } from "react"

export function GitVsGithubVisual() {
  return (
    <div className="flex items-center justify-between w-full p-8 bg-slate-900 rounded-2xl shadow-xl mt-8">
      <div className="flex flex-col items-center gap-4">
        <div className="p-6 bg-red-500/10 rounded-full border border-red-500/30">
          <Laptop className="w-16 h-16 text-red-500" />
        </div>
        <span className="text-xl font-bold text-slate-200">Local (Git)</span>
      </div>
      
      {/* Pulsing line */}
      <div className="flex-1 px-8 relative flex items-center">
        <div className="h-1 bg-slate-700 w-full rounded-full overflow-hidden relative">
          <div className="absolute top-0 left-0 h-full bg-blue-500 w-1/3 animate-[slide_2s_ease-in-out_infinite]" />
        </div>
      </div>

      <div className="flex flex-col items-center gap-4">
        <div className="p-6 bg-blue-500/10 rounded-full border border-blue-500/30">
          <Cloud className="w-16 h-16 text-blue-400" />
        </div>
        <span className="text-xl font-bold text-slate-200">Cloud (GitHub)</span>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes slide {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(300%); }
        }
      `}} />
    </div>
  )
}

export function ConfigTerminalVisual() {
  const [text, setText] = useState('')
  const lines = [
    { cmd: 'git config --global user.name "Your Name"', delay: 0 },
    { cmd: 'git config --global user.email "your@email.com"', delay: 1500 }
  ]
  
  const [currentLine, setCurrentLine] = useState(0)
  const [charIndex, setCharIndex] = useState(0)

  useEffect(() => {
    if (currentLine >= lines.length) return

    const line = lines[currentLine]
    
    if (charIndex < line.cmd.length) {
      const timeout = setTimeout(() => {
        setCharIndex(prev => prev + 1)
      }, Math.random() * 50 + 20) // Random typing speed
      
      return () => clearTimeout(timeout)
    } else {
      const timeout = setTimeout(() => {
        setCurrentLine(prev => prev + 1)
        setCharIndex(0)
      }, 1000)
      
      return () => clearTimeout(timeout)
    }
  }, [currentLine, charIndex])

  return (
    <div className="w-full bg-slate-950 rounded-xl overflow-hidden shadow-2xl font-mono text-sm mt-8 border border-slate-800">
      <div className="bg-slate-900 px-4 py-3 flex items-center gap-2 border-b border-slate-800">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
        </div>
        <span className="ml-2 text-slate-400 text-xs flex items-center gap-2">
          <Terminal className="w-3 h-3" /> bash
        </span>
      </div>
      <div className="p-6 text-slate-300 min-h-[140px] flex flex-col gap-2 text-lg">
        {lines.map((line, idx) => {
          if (idx < currentLine) {
            return (
              <div key={idx} className="flex gap-3">
                <span className="text-emerald-500">$</span>
                <span className="text-slate-100">{line.cmd}</span>
              </div>
            )
          } else if (idx === currentLine) {
            return (
              <div key={idx} className="flex gap-3">
                <span className="text-emerald-500">$</span>
                <span className="text-slate-100">
                  {line.cmd.slice(0, charIndex)}
                  <span className="animate-pulse inline-block w-2.5 h-5 bg-slate-400 align-middle ml-1"></span>
                </span>
              </div>
            )
          }
          return null
        })}
      </div>
    </div>
  )
}
