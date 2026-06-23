"use client"

import { useState, useRef, useEffect } from "react"
import { Terminal, File, CheckCircle2, ArrowRight } from "lucide-react"

type FileState = "working" | "staged" | "committed"

interface GitFile {
  name: string
  state: FileState
}

export default function InteractiveTerminal() {
  const [files, setFiles] = useState<GitFile[]>([
    { name: "index.html", state: "working" },
    { name: "styles.css", state: "working" },
    { name: "app.js", state: "working" },
  ])
  const [history, setHistory] = useState<{ command: string; output: string[] }[]>([])
  const [input, setInput] = useState("")
  const [isInitialized, setIsInitialized] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    const cmd = input.trim()
    let output: string[] = []

    if (!isInitialized && cmd !== "git init") {
      output = ["fatal: not a git repository (or any of the parent directories): .git"]
    } else {
      switch (cmd) {
        case "git init":
          setIsInitialized(true)
          output = ["Initialized empty Git repository in /project/.git/"]
          break
        case "git status":
          const working = files.filter(f => f.state === "working")
          const staged = files.filter(f => f.state === "staged")
          
          if (staged.length > 0) {
            output.push("Changes to be committed:")
            staged.forEach(f => output.push(`  (use "git restore --staged <file>..." to unstage)`))
            staged.forEach(f => output.push(`    new file:   ${f.name}`))
          }
          if (working.length > 0) {
            output.push("Untracked files:")
            working.forEach(f => output.push(`  (use "git add <file>..." to include in what will be committed)`))
            working.forEach(f => output.push(`    ${f.name}`))
          }
          if (working.length === 0 && staged.length === 0) {
            output.push("nothing to commit, working tree clean")
          }
          break
        case "git add .":
          setFiles(files.map(f => f.state === "working" ? { ...f, state: "staged" } : f))
          break
        case "clear":
          setHistory([])
          setInput("")
          return
        default:
          if (cmd.startsWith("git commit")) {
            const stagedCount = files.filter(f => f.state === "staged").length
            if (stagedCount === 0) {
              output = ["nothing to commit, working tree clean"]
            } else {
              setFiles(files.map(f => f.state === "staged" ? { ...f, state: "committed" } : f))
              output = [`[main (root-commit)] Added ${stagedCount} files`, ` ${stagedCount} files changed, 0 insertions(+), 0 deletions(-)`]
            }
          } else if (cmd.startsWith("git add ")) {
            const fileName = cmd.replace("git add ", "")
            const fileExists = files.some(f => f.name === fileName)
            if (fileExists) {
              setFiles(files.map(f => f.name === fileName && f.state === "working" ? { ...f, state: "staged" } : f))
            } else {
              output = [`fatal: pathspec '${fileName}' did not match any files`]
            }
          } else {
            output = [`bash: ${cmd}: command not found`]
          }
          break
      }
    }

    setHistory([...history, { command: cmd, output }])
    setInput("")
    
    // Auto scroll to bottom
    setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.scrollIntoView({ behavior: "smooth" })
      }
    }, 10)
  }

  const renderFileBox = (title: string, filterState: FileState, colorClass: string, bgColorClass: string) => {
    const filteredFiles = files.filter(f => f.state === filterState)
    return (
      <div className={`flex-1 rounded-xl border-2 p-4 flex flex-col ${colorClass} ${bgColorClass}`}>
        <h3 className="font-bold text-lg mb-3 flex items-center justify-between">
          {title}
          <span className="text-sm font-normal px-2 py-1 rounded-full bg-black/10">
            {filteredFiles.length} files
          </span>
        </h3>
        <div className="flex-1 flex flex-col gap-2">
          {filteredFiles.map((file, i) => (
            <div key={i} className="bg-white/80 backdrop-blur rounded p-2 flex items-center gap-2 shadow-sm animate-fade-in">
              <File className="w-4 h-4" />
              <span className="font-mono text-sm">{file.name}</span>
            </div>
          ))}
          {filteredFiles.length === 0 && (
            <div className="flex-1 flex items-center justify-center text-sm opacity-50 italic">
              Empty
            </div>
          )}
        </div>
      </div>
    )
  }

  return (
    <div className="w-full h-full flex flex-col md:flex-row gap-6 p-4">
      {/* Terminal View */}
      <div className="flex-1 bg-slate-950 rounded-xl overflow-hidden flex flex-col border border-slate-800 shadow-2xl font-mono text-sm relative">
        <div className="bg-slate-900 px-4 py-2 flex items-center gap-2 border-b border-slate-800">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
          </div>
          <div className="ml-4 text-slate-400 text-xs flex items-center gap-2">
            <Terminal className="w-3 h-3" />
            guest@git-learning: ~/project
          </div>
        </div>
        
        <div className="flex-1 p-4 overflow-y-auto text-slate-300 space-y-2 flex flex-col" onClick={() => inputRef.current?.focus()}>
          {history.map((item, i) => (
            <div key={i} className="animate-fade-in">
              <div className="flex items-center text-emerald-400">
                <span className="mr-2">$</span>
                <span className="text-slate-100">{item.command}</span>
              </div>
              {item.output.map((line, j) => (
                <div key={j} className={`ml-4 ${line.startsWith('fatal') ? 'text-red-400' : 'text-slate-400'}`}>
                  {line}
                </div>
              ))}
            </div>
          ))}
          
          <form onSubmit={handleCommand} className="flex items-center text-emerald-400 mt-2">
            <span className="mr-2">$</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 bg-transparent outline-none text-slate-100 placeholder:text-slate-700"
              placeholder="Try 'git init'..."
              autoFocus
              spellCheck="false"
              autoComplete="off"
            />
          </form>
        </div>
      </div>

      {/* Visualizer View */}
      <div className="flex-[0.8] flex flex-col gap-4">
        <div className="flex-1 flex gap-4">
          {renderFileBox(
            "Working Directory", 
            "working", 
            "border-red-200 text-red-900", 
            "bg-red-50/50"
          )}
          <div className="flex flex-col justify-center text-slate-300">
            <ArrowRight className="w-8 h-8" />
            <div className="text-xs font-bold text-center mt-1">git add</div>
          </div>
          {renderFileBox(
            "Staging Area", 
            "staged", 
            "border-yellow-200 text-yellow-900", 
            "bg-yellow-50/50"
          )}
        </div>
        
        <div className="flex justify-center text-slate-300">
          <div className="text-center">
            <div className="text-xs font-bold mb-1">git commit</div>
            <ArrowRight className="w-8 h-8 rotate-90 mx-auto" />
          </div>
        </div>

        {renderFileBox(
          "Local Repository", 
          "committed", 
          "border-green-200 text-green-900", 
          "bg-green-50/50"
        )}
      </div>
    </div>
  )
}
