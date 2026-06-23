"use client"

import { useState } from "react"
import { GitBranch, GitCommit, GitMerge, CheckCircle2 } from "lucide-react"

type Branch = "main" | "feature"

interface Commit {
  id: string
  branch: Branch
  message: string
  parentIds: string[]
  x: number // Relative X position on a grid
  y: number // Relative Y position on a grid
}

export default function InteractiveBranching() {
  const [commits, setCommits] = useState<Commit[]>([
    { id: "c1", branch: "main", message: "Initial commit", parentIds: [], x: 0, y: 0 },
  ])
  const [activeBranch, setActiveBranch] = useState<Branch>("main")
  const [hasFeatureBranch, setHasFeatureBranch] = useState(false)
  const [isMerged, setIsMerged] = useState(false)

  const generateId = () => Math.random().toString(36).substring(2, 6)

  const handleCommit = () => {
    const branchCommits = commits.filter(c => c.branch === activeBranch)
    const latestCommit = branchCommits[branchCommits.length - 1]
    
    // If the branch is empty (just created), its parent is the latest main commit
    const parentCommit = latestCommit || commits.filter(c => c.branch === "main").slice(-1)[0]
    
    const newX = parentCommit.x + 1
    const newY = activeBranch === "main" ? 0 : 1

    const newCommit: Commit = {
      id: generateId(),
      branch: activeBranch,
      message: `Update on ${activeBranch}`,
      parentIds: [parentCommit.id],
      x: newX,
      y: newY,
    }

    setCommits([...commits, newCommit])
  }

  const handleCreateBranch = () => {
    setHasFeatureBranch(true)
    setActiveBranch("feature")
  }

  const handleCheckout = (branch: Branch) => {
    setActiveBranch(branch)
  }

  const handleMerge = () => {
    const mainCommits = commits.filter(c => c.branch === "main")
    const featureCommits = commits.filter(c => c.branch === "feature")
    
    const latestMain = mainCommits[mainCommits.length - 1]
    const latestFeature = featureCommits[featureCommits.length - 1]

    if (!latestFeature) return

    const newX = Math.max(latestMain.x, latestFeature.x) + 1

    const mergeCommit: Commit = {
      id: generateId(),
      branch: "main",
      message: "Merge branch 'feature'",
      parentIds: [latestMain.id, latestFeature.id],
      x: newX,
      y: 0,
    }

    setCommits([...commits, mergeCommit])
    setActiveBranch("main")
    setIsMerged(true)
  }

  // Calculate pixel positions based on grid (x, y)
  const X_SPACING = 120
  const Y_SPACING = 100
  const OFFSET_X = 50
  const OFFSET_Y = 50

  const getCommitPos = (commit: Commit) => ({
    cx: OFFSET_X + commit.x * X_SPACING,
    cy: OFFSET_Y + commit.y * Y_SPACING,
  })

  return (
    <div className="w-full h-full flex flex-col gap-6 p-4">
      {/* Controls */}
      <div className="flex flex-wrap gap-4 bg-white/50 backdrop-blur p-4 rounded-xl border border-slate-200 shadow-sm items-center justify-center">
        <button
          onClick={handleCommit}
          disabled={isMerged && activeBranch === "feature"}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 transition-colors"
        >
          <GitCommit className="w-4 h-4" />
          Commit to {activeBranch}
        </button>

        {!hasFeatureBranch && (
          <button
            onClick={handleCreateBranch}
            className="flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
          >
            <GitBranch className="w-4 h-4" />
            Create 'feature' Branch
          </button>
        )}

        {hasFeatureBranch && (
          <div className="flex bg-slate-200 rounded-lg p-1">
            <button
              onClick={() => handleCheckout("main")}
              className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all ${
                activeBranch === "main" ? "bg-white text-blue-700 shadow" : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Checkout main
            </button>
            <button
              onClick={() => handleCheckout("feature")}
              disabled={isMerged}
              className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all ${
                activeBranch === "feature" ? "bg-white text-emerald-700 shadow" : "text-slate-600 hover:text-slate-900"
              } ${isMerged ? "opacity-50 cursor-not-allowed" : ""}`}
            >
              Checkout feature
            </button>
          </div>
        )}

        {hasFeatureBranch && activeBranch === "main" && !isMerged && (
          <button
            onClick={handleMerge}
            className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors ml-auto"
          >
            <GitMerge className="w-4 h-4" />
            Merge 'feature' into main
          </button>
        )}
      </div>

      {/* Graph Visualization */}
      <div className="flex-1 bg-slate-50 border-2 border-slate-200 rounded-xl overflow-hidden relative shadow-inner">
        <svg className="w-full h-full" style={{ minHeight: "300px" }}>
          {/* Draw lines between commits */}
          {commits.map(commit => {
            const currentPos = getCommitPos(commit)
            return commit.parentIds.map((parentId, i) => {
              const parentCommit = commits.find(c => c.id === parentId)
              if (!parentCommit) return null
              const parentPos = getCommitPos(parentCommit)
              
              // Draw curved line for merges or branch creation
              if (parentPos.cy !== currentPos.cy) {
                return (
                  <path
                    key={`${commit.id}-${parentId}`}
                    d={`M ${parentPos.cx} ${parentPos.cy} C ${currentPos.cx - X_SPACING/2} ${parentPos.cy}, ${parentPos.cx + X_SPACING/2} ${currentPos.cy}, ${currentPos.cx} ${currentPos.cy}`}
                    fill="none"
                    stroke={commit.branch === "main" ? "#93c5fd" : "#86efac"}
                    strokeWidth="4"
                    strokeDasharray={isMerged && commit.branch === "feature" ? "4 4" : "none"}
                    className="animate-fade-in"
                  />
                )
              }

              // Straight line for same branch
              return (
                <line
                  key={`${commit.id}-${parentId}`}
                  x1={parentPos.cx}
                  y1={parentPos.cy}
                  x2={currentPos.cx}
                  y2={currentPos.cy}
                  stroke={commit.branch === "main" ? "#3b82f6" : "#10b981"}
                  strokeWidth="4"
                  className="animate-fade-in"
                />
              )
            })
          })}

          {/* Draw commit nodes */}
          {commits.map(commit => {
            const pos = getCommitPos(commit)
            const isActive = activeBranch === commit.branch && commit === commits.filter(c => c.branch === commit.branch).slice(-1)[0]
            
            return (
              <g key={commit.id} className="animate-fade-in transition-transform hover:scale-110" style={{ transformOrigin: `${pos.cx}px ${pos.cy}px` }}>
                <circle
                  cx={pos.cx}
                  cy={pos.cy}
                  r="16"
                  fill={commit.branch === "main" ? "#eff6ff" : "#ecfdf5"}
                  stroke={commit.branch === "main" ? "#3b82f6" : "#10b981"}
                  strokeWidth="4"
                />
                {isActive && (
                  <circle
                    cx={pos.cx}
                    cy={pos.cy}
                    r="22"
                    fill="none"
                    stroke={commit.branch === "main" ? "#3b82f6" : "#10b981"}
                    strokeWidth="2"
                    strokeDasharray="4 4"
                    className="animate-spin-slow"
                    style={{ transformOrigin: `${pos.cx}px ${pos.cy}px` }}
                  />
                )}
                <text
                  x={pos.cx}
                  y={pos.cy + 35}
                  textAnchor="middle"
                  className="text-xs font-mono fill-slate-500"
                >
                  {commit.id}
                </text>
              </g>
            )
          })}
        </svg>

        {/* Legend */}
        <div className="absolute top-4 right-4 bg-white/80 p-3 rounded-lg border border-slate-200 shadow-sm text-sm">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-3 h-3 rounded-full bg-blue-500"></div>
            <span className="font-mono">main</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
            <span className="font-mono">feature</span>
          </div>
        </div>
      </div>
    </div>
  )
}
