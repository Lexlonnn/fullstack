"use client"

import { 
  Laptop, Cloud, Terminal, FileCode2, GitBranch, GitCommitHorizontal, GitMerge, 
  FileText, Save, History, FileWarning, FileCheck, ArrowRight, Download, 
  HardDrive, FolderOpen, Database, FilePlus, Archive, ArrowUpCircle, ArrowDownCircle,
  FolderGit2, Layers
} from "lucide-react"
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

export function VersionControlVisual() {
  return (
    <div className="relative w-full max-w-4xl mx-auto h-[350px] bg-slate-900/80 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl overflow-hidden flex flex-col items-center justify-center p-8 mt-8">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      <div className="relative w-full flex items-center justify-between px-16 z-10 mt-8">
        
        {/* Connecting Line */}
        <div className="absolute left-[15%] right-[15%] top-10 -translate-y-1/2 h-1.5 bg-slate-700/50 rounded-full z-0">
          <div className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-full w-full origin-left" style={{ animation: 'width 2s ease-out forwards' }} />
        </div>

        {/* Node 1 */}
        <div className="relative flex flex-col items-center group cursor-pointer z-10" style={{ animation: 'pop 0.5s ease-out forwards' }}>
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-400 to-blue-600 shadow-[0_0_20px_rgba(59,130,246,0.5)] flex items-center justify-center p-0.5 hover:-translate-y-2 transition-transform">
            <div className="w-full h-full bg-slate-900 rounded-[14px] flex items-center justify-center">
              <FileText className="w-10 h-10 text-blue-400 group-hover:text-white transition-colors" />
            </div>
          </div>
          <div className="absolute top-[130%] text-center whitespace-nowrap bg-slate-900/80 px-4 py-2 rounded-xl border border-blue-500/20 backdrop-blur-sm">
            <div className="text-lg font-bold text-slate-200">Version 1</div>
            <div className="text-sm text-blue-400 font-medium">Monday</div>
          </div>
        </div>

        {/* Node 2 */}
        <div className="relative flex flex-col items-center group cursor-pointer z-10" style={{ animation: 'pop 0.5s ease-out forwards 0.6s', opacity: 0 }}>
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-indigo-400 to-indigo-600 shadow-[0_0_20px_rgba(99,102,241,0.5)] flex items-center justify-center p-0.5 hover:-translate-y-2 transition-transform">
            <div className="w-full h-full bg-slate-900 rounded-[14px] flex items-center justify-center">
              <Save className="w-10 h-10 text-indigo-400 group-hover:text-white transition-colors" />
            </div>
          </div>
          <div className="absolute top-[130%] text-center whitespace-nowrap bg-slate-900/80 px-4 py-2 rounded-xl border border-indigo-500/20 backdrop-blur-sm">
            <div className="text-lg font-bold text-slate-200">Version 2</div>
            <div className="text-sm text-indigo-400 font-medium">Tuesday</div>
          </div>
        </div>

        {/* Node 3 */}
        <div className="relative flex flex-col items-center group cursor-pointer z-10" style={{ animation: 'pop 0.5s ease-out forwards 1.2s', opacity: 0 }}>
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-400 to-purple-600 shadow-[0_0_20px_rgba(168,85,247,0.5)] flex items-center justify-center p-0.5 hover:-translate-y-2 transition-transform">
            <div className="w-full h-full bg-slate-900 rounded-[14px] flex items-center justify-center relative">
              <History className="w-10 h-10 text-purple-400 group-hover:text-white transition-colors" />
              <div className="absolute -top-3 -right-3 bg-gradient-to-r from-pink-500 to-orange-500 text-white text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded-full shadow-lg border border-white/20 animate-pulse">Latest</div>
            </div>
          </div>
          <div className="absolute top-[130%] text-center whitespace-nowrap bg-slate-900/80 px-4 py-2 rounded-xl border border-purple-500/20 backdrop-blur-sm">
            <div className="text-lg font-bold text-slate-200">Version 3</div>
            <div className="text-sm text-purple-400 font-medium">Today</div>
          </div>
        </div>

      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes width {
          from { width: 0; }
        }
        @keyframes pop {
          0% { transform: scale(0.5) translateY(20px); opacity: 0; }
          70% { transform: scale(1.05) translateY(-5px); opacity: 1; }
          100% { transform: scale(1) translateY(0); opacity: 1; }
        }
      `}} />
    </div>
  )
}

export function BadVsGoodVersionControlVisual() {
  return (
    <div className="flex w-full gap-8 mt-8">
      <div className="flex-1 bg-red-900/10 border border-red-500/30 rounded-2xl p-6 flex flex-col items-center shadow-lg">
        <h3 className="text-red-400 font-bold mb-6 tracking-wide uppercase text-sm">The Bad Way</h3>
        <div className="flex flex-col gap-3 w-full max-w-[220px]">
          <div className="bg-slate-800 p-3 rounded-lg flex items-center gap-3 border border-slate-700 shadow-sm">
            <FileWarning className="w-5 h-5 text-red-400 shrink-0" /> <span className="text-sm font-mono truncate">Project_v1.doc</span>
          </div>
          <div className="bg-slate-800 p-3 rounded-lg flex items-center gap-3 border border-slate-700 shadow-sm">
            <FileWarning className="w-5 h-5 text-red-400 shrink-0" /> <span className="text-sm font-mono truncate">Project_final.doc</span>
          </div>
          <div className="bg-slate-800 p-3 rounded-lg flex items-center gap-3 border border-slate-700 shadow-sm">
            <FileWarning className="w-5 h-5 text-red-400 shrink-0" /> <span className="text-xs font-mono truncate">Project_final_REAL.doc</span>
          </div>
        </div>
      </div>
      
      <div className="flex items-center justify-center">
        <ArrowRight className="w-10 h-10 text-slate-500" />
      </div>

      <div className="flex-1 bg-green-900/10 border border-green-500/30 rounded-2xl p-6 flex flex-col items-center shadow-lg relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#22c55e0a_1px,transparent_1px)] bg-[size:10px_20px]" />
        <h3 className="text-green-400 font-bold mb-6 tracking-wide uppercase text-sm relative z-10">The Git Way</h3>
        <div className="flex flex-col gap-3 w-full max-w-[220px] relative z-10">
          <div className="absolute left-[19px] top-4 bottom-4 w-0.5 bg-green-500/30" />
          <div className="bg-slate-900 p-3 rounded-lg flex items-center gap-3 border border-green-500/30 z-10 shadow-md">
            <div className="w-4 h-4 rounded-full bg-slate-800 flex items-center justify-center border-2 border-green-500" /> <span className="text-sm font-mono text-slate-300">Version 1</span>
          </div>
          <div className="bg-slate-900 p-3 rounded-lg flex items-center gap-3 border border-green-500/30 z-10 shadow-md">
            <div className="w-4 h-4 rounded-full bg-slate-800 flex items-center justify-center border-2 border-green-500" /> <span className="text-sm font-mono text-slate-300">Version 2</span>
          </div>
          <div className="bg-slate-900 p-3 rounded-lg flex items-center gap-3 border border-green-500/50 z-10 relative shadow-md shadow-green-900/20">
            <div className="w-4 h-4 rounded-full bg-green-500 flex items-center justify-center shadow-[0_0_10px_rgba(34,197,94,0.5)]" /> <span className="text-sm font-mono font-bold text-green-400">Latest</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export function InstallGitVisual() {
  return (
    <div className="flex flex-wrap items-center justify-center w-full p-8 mt-4 gap-4 md:gap-6">
      <div className="flex flex-col items-center gap-4 animate-[pop_0.5s_ease-out_forwards]">
        <div className="w-20 h-20 bg-blue-900/30 border-2 border-blue-500/50 rounded-2xl flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
          <Download className="w-10 h-10 text-blue-400" />
        </div>
        <span className="font-bold text-slate-300">Download Git</span>
      </div>
      
      <ArrowRight className="w-8 h-8 text-slate-500 animate-[pop_0.5s_ease-out_forwards_0.3s] opacity-0" style={{animationFillMode: 'both'}} />

      <div className="flex flex-col items-center gap-4 animate-[pop_0.5s_ease-out_forwards_0.6s] opacity-0" style={{animationFillMode: 'both'}}>
        <div className="w-20 h-20 bg-purple-900/30 border-2 border-purple-500/50 rounded-2xl flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
          <HardDrive className="w-10 h-10 text-purple-400" />
        </div>
        <span className="font-bold text-slate-300">Install</span>
      </div>

      <ArrowRight className="w-8 h-8 text-slate-500 animate-[pop_0.5s_ease-out_forwards_0.9s] opacity-0" style={{animationFillMode: 'both'}} />

      <div className="flex flex-col items-center gap-4 animate-[pop_0.5s_ease-out_forwards_1.2s] opacity-0" style={{animationFillMode: 'both'}}>
        <div className="w-auto px-6 h-20 bg-slate-900 border-2 border-emerald-500/50 rounded-2xl flex items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.15)] gap-3 hover:scale-105 transition-transform">
          <Terminal className="w-8 h-8 text-emerald-400" />
          <span className="font-mono text-emerald-400 font-bold">git --version</span>
        </div>
        <span className="font-bold text-slate-300">Verify</span>
      </div>
    </div>
  )
}

export function InitRepoVisual() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center w-full p-8 mt-4 gap-8 md:gap-12">
      <div className="flex flex-col items-center gap-4">
        <div className="w-32 h-32 bg-slate-800 border-2 border-slate-600 rounded-3xl flex items-center justify-center relative shadow-xl">
          <FolderOpen className="w-16 h-16 text-slate-400" />
        </div>
        <span className="font-mono text-slate-300 text-lg">MyProject/</span>
      </div>

      <div className="flex flex-col items-center gap-3">
        <span className="font-mono text-emerald-400 text-base font-bold bg-emerald-950 px-4 py-2 rounded-xl border border-emerald-500/30 shadow-[0_0_15px_rgba(16,185,129,0.2)]">git init</span>
        <ArrowRight className="w-8 h-8 text-emerald-500 rotate-90 md:rotate-0" />
      </div>

      <div className="flex flex-col items-center gap-4">
        <div className="w-32 h-32 bg-blue-950 border-2 border-blue-500 rounded-3xl flex items-center justify-center relative shadow-[0_0_30px_rgba(59,130,246,0.3)]">
          <FolderGit2 className="w-16 h-16 text-blue-400" />
          <div className="absolute -top-4 -right-4 bg-slate-800 border border-slate-600 p-2 rounded-xl shadow-xl flex items-center gap-2 animate-[pop_0.5s_ease-out_forwards_0.5s] opacity-0" style={{animationFillMode: 'both'}}>
            <FolderOpen className="w-4 h-4 text-slate-400" />
            <span className="text-xs font-mono text-slate-300">.git/</span>
          </div>
        </div>
        <span className="font-mono text-blue-400 font-bold text-lg">MyProject/</span>
      </div>
    </div>
  )
}

export function GitWorkflowVisual() {
  return (
    <div className="flex flex-col w-full p-8 mt-4 gap-8">
      <div className="flex justify-between items-center w-full max-w-4xl mx-auto relative">
        <div className="absolute left-1/4 right-1/4 top-1/2 -translate-y-1/2 h-1 bg-slate-700/50 -z-10" />
        
        <div className="flex flex-col items-center gap-4 bg-slate-900 p-6 rounded-3xl border border-slate-700 shadow-xl z-10 w-1/3 max-w-[200px]">
          <Laptop className="w-12 h-12 text-slate-300" />
          <div className="text-center">
            <div className="font-bold text-slate-200">Working Directory</div>
            <div className="text-xs text-slate-500">Your files</div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-2 z-10">
          <span className="text-xs font-mono text-emerald-400 bg-emerald-950 px-2 py-1 rounded border border-emerald-500/30">git add</span>
          <ArrowRight className="w-6 h-6 text-emerald-500" />
        </div>

        <div className="flex flex-col items-center gap-4 bg-emerald-950 p-6 rounded-3xl border border-emerald-800 shadow-xl z-10 w-1/3 max-w-[200px]">
          <Layers className="w-12 h-12 text-emerald-400" />
          <div className="text-center">
            <div className="font-bold text-emerald-200">Staging Area</div>
            <div className="text-xs text-emerald-500/80">Preparation</div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-2 z-10">
          <span className="text-xs font-mono text-blue-400 bg-blue-950 px-2 py-1 rounded border border-blue-500/30">git commit</span>
          <ArrowRight className="w-6 h-6 text-blue-500" />
        </div>

        <div className="flex flex-col items-center gap-4 bg-blue-950 p-6 rounded-3xl border border-blue-800 shadow-xl z-10 w-1/3 max-w-[200px]">
          <Database className="w-12 h-12 text-blue-400" />
          <div className="text-center">
            <div className="font-bold text-blue-200">Repository</div>
            <div className="text-xs text-blue-500/80">Saved timeline</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function ReviewHistoryVisual() {
  return (
    <div className="flex flex-col items-center justify-center w-full p-4 mt-4 gap-8">
      <div className="flex items-center gap-4 relative">
        <div className="absolute left-10 right-10 top-1/2 -translate-y-1/2 h-2 bg-slate-700/50" />
        
        <div className="flex flex-col items-center gap-3 z-10">
          <div className="w-12 h-12 rounded-full bg-slate-800 border-4 border-indigo-500 flex items-center justify-center">
            <GitCommitHorizontal className="w-5 h-5 text-indigo-400" />
          </div>
          <span className="font-mono text-xs text-slate-400">Commit 1</span>
        </div>
        <div className="w-16 h-1 bg-indigo-500/50 z-10" />
        <div className="flex flex-col items-center gap-3 z-10">
          <div className="w-12 h-12 rounded-full bg-slate-800 border-4 border-indigo-500 flex items-center justify-center">
            <GitCommitHorizontal className="w-5 h-5 text-indigo-400" />
          </div>
          <span className="font-mono text-xs text-slate-400">Commit 2</span>
        </div>
        <div className="w-16 h-1 bg-indigo-500/50 z-10" />
        <div className="flex flex-col items-center gap-3 z-10">
          <div className="w-16 h-16 rounded-full bg-indigo-900 border-4 border-indigo-400 flex items-center justify-center shadow-[0_0_15px_rgba(99,102,241,0.5)]">
            <GitCommitHorizontal className="w-8 h-8 text-white" />
          </div>
          <span className="font-mono text-sm font-bold text-indigo-300">Commit 3</span>
        </div>
      </div>

      <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 w-full max-w-lg font-mono text-sm shadow-2xl">
        <div className="flex items-center gap-2 mb-2 pb-2 border-b border-slate-800">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <div className="text-emerald-400">$ git log --oneline</div>
        <div className="text-yellow-400 mt-2">a1b2c3d <span className="text-slate-300">(HEAD -{'>'} main) Commit 3: Added login page</span></div>
        <div className="text-yellow-400">f4e5d6c <span className="text-slate-300">Commit 2: Fixed CSS styling</span></div>
        <div className="text-yellow-400">7g8h9i0 <span className="text-slate-300">Commit 1: Initial project setup</span></div>
      </div>
    </div>
  )
}

export function MergeAnimationVisual() {
  return (
    <div className="flex items-center justify-center w-full p-8 mt-4">
      <div className="relative w-full max-w-2xl h-64 bg-slate-900/50 rounded-3xl border border-slate-800 flex items-center justify-center overflow-hidden">
        
        {/* Main Branch Line */}
        <div className="absolute left-[10%] right-[10%] top-1/2 -translate-y-1/2 h-2 bg-blue-500 rounded-full" />
        
        {/* Feature Branch Path */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
          <path d="M 30% 50% C 45% 50%, 40% 25%, 60% 25% C 75% 25%, 75% 50%, 80% 50%" 
                fill="none" stroke="#f97316" strokeWidth="8" strokeLinecap="round" strokeDasharray="10 10" />
        </svg>

        {/* Nodes */}
        <div className="absolute left-[20%] top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-blue-600 border-4 border-slate-900 z-10" />
        <div className="absolute left-[80%] top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-purple-600 border-4 border-slate-900 z-10 flex items-center justify-center shadow-[0_0_20px_rgba(147,51,234,0.5)]">
          <GitMerge className="w-8 h-8 text-white" />
        </div>

        {/* Moving Feature Node */}
        <div className="absolute w-12 h-12 rounded-full bg-orange-500 border-4 border-slate-900 z-20 flex items-center justify-center shadow-lg animate-[merge_3s_ease-in-out_infinite]" style={{ offsetPath: "path('M 30% 50% C 45% 50%, 40% 25%, 60% 25% C 75% 25%, 75% 50%, 80% 50%')" }}>
          <GitBranch className="w-5 h-5 text-white" />
        </div>

        <style dangerouslySetInnerHTML={{__html: `
          @keyframes merge {
            0% { offset-distance: 0%; opacity: 0; }
            10% { opacity: 1; }
            80% { opacity: 1; transform: scale(1); }
            100% { offset-distance: 100%; opacity: 0; transform: scale(0.5); }
          }
        `}} />
      </div>
    </div>
  )
}

export function ConnectingGithubVisual() {
  return (
    <div className="flex items-center justify-center w-full p-8 mt-4 gap-4 md:gap-12">
      <div className="flex flex-col items-center gap-4">
        <div className="w-24 h-24 bg-slate-800 border-2 border-slate-600 rounded-3xl flex items-center justify-center shadow-xl">
          <FolderGit2 className="w-12 h-12 text-slate-400" />
        </div>
        <span className="font-bold text-slate-300 text-sm">Local Repository</span>
      </div>

      <div className="flex flex-col items-center gap-2 relative z-10 w-32 md:w-48">
        <div className="w-full h-1 bg-slate-700 overflow-hidden rounded-full">
          <div className="h-full bg-blue-500 w-full animate-[slide_2s_ease-in-out_infinite]" />
        </div>
        <span className="font-mono text-blue-400 text-[10px] sm:text-xs font-bold bg-blue-950 px-2 py-1 rounded-lg border border-blue-500/30 whitespace-nowrap absolute -bottom-8">git remote add</span>
      </div>

      <div className="flex flex-col items-center gap-4">
        <div className="w-24 h-24 bg-slate-900 border-2 border-slate-700 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.1)]">
          <Cloud className="w-12 h-12 text-white" />
        </div>
        <span className="font-bold text-slate-300 text-sm">GitHub</span>
      </div>
    </div>
  )
}

export function PushAnimationVisual() {
  return (
    <div className="flex flex-col items-center justify-center w-full p-8 mt-4 gap-6">
      <div className="flex flex-col items-center gap-2">
        <div className="w-20 h-20 bg-slate-900 border-2 border-slate-700 rounded-full flex items-center justify-center shadow-lg">
          <Cloud className="w-10 h-10 text-white" />
        </div>
        <span className="font-bold text-slate-400 text-sm">GitHub</span>
      </div>

      <div className="flex items-center justify-center relative h-24 w-10">
        <div className="absolute top-0 bottom-0 w-1.5 bg-slate-800 rounded-full overflow-hidden">
          <div className="w-full h-1/3 bg-blue-500 rounded-full animate-[slideUp_1.5s_linear_infinite]" />
        </div>
        <div className="absolute bg-slate-950 border border-blue-500/50 rounded-full p-1 z-10 shadow-[0_0_15px_rgba(59,130,246,0.5)]">
          <ArrowUpCircle className="w-6 h-6 text-blue-400 animate-pulse" />
        </div>
        <span className="absolute left-10 font-mono text-blue-400 text-xs font-bold bg-blue-950 px-3 py-1 rounded-lg border border-blue-500/30 whitespace-nowrap">git push</span>
      </div>

      <div className="flex flex-col items-center gap-2">
        <div className="w-20 h-20 bg-slate-800 border-2 border-slate-600 rounded-2xl flex items-center justify-center shadow-xl">
          <Laptop className="w-10 h-10 text-slate-300" />
        </div>
        <span className="font-bold text-slate-400 text-sm">Laptop</span>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes slideUp {
          0% { transform: translateY(300%); }
          100% { transform: translateY(-100%); }
        }
      `}} />
    </div>
  )
}

export function CloneAnimationVisual() {
  return (
    <div className="flex flex-col items-center justify-center w-full p-8 mt-4 gap-6">
      <div className="flex flex-col items-center gap-2">
        <div className="w-20 h-20 bg-slate-900 border-2 border-slate-700 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.1)]">
          <Cloud className="w-10 h-10 text-white" />
        </div>
        <span className="font-bold text-slate-400 text-sm">GitHub</span>
      </div>

      <div className="flex items-center justify-center relative h-24 w-10">
        <div className="absolute top-0 bottom-0 w-1.5 bg-slate-800 rounded-full overflow-hidden">
          <div className="w-full h-1/3 bg-emerald-500 rounded-full animate-[slideDown_1.5s_linear_infinite]" />
        </div>
        <div className="absolute bg-slate-950 border border-emerald-500/50 rounded-full p-1 z-10 shadow-[0_0_15px_rgba(16,185,129,0.5)]">
          <ArrowDownCircle className="w-6 h-6 text-emerald-400 animate-pulse" />
        </div>
        <span className="absolute left-10 font-mono text-emerald-400 text-xs font-bold bg-emerald-950 px-3 py-1 rounded-lg border border-emerald-500/30 whitespace-nowrap">git clone</span>
      </div>

      <div className="flex flex-col items-center gap-2">
        <div className="w-20 h-20 bg-slate-800 border-2 border-slate-600 rounded-2xl flex items-center justify-center shadow-xl">
          <Laptop className="w-10 h-10 text-slate-300" />
        </div>
        <span className="font-bold text-slate-400 text-sm">Laptop</span>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes slideDown {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(300%); }
        }
      `}} />
    </div>
  )
}
