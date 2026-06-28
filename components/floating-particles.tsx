"use client"

import { useEffect, useState } from "react"
import { Database, Server, Code2, Globe, Cpu, Terminal } from "lucide-react"

interface Particle {
  id: number
  x: number
  y: number
  size: number
  duration: number
  delay: number
  rotation: number
  type: number
}

export default function FloatingParticles() {
  const [particles, setParticles] = useState<Particle[]>([])

  useEffect(() => {
    // Generate random particles
    const newParticles: Particle[] = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 50 + 40, // 40-90px
      duration: Math.random() * 25 + 20, // 20-45s
      delay: Math.random() * 5, // 0-5s
      rotation: Math.random() * 360,
      type: i % 6, // Ensure even distribution across the 6 types
    }))
    setParticles(newParticles)
  }, [])

  const renderParticleIcon = (type: number) => {
    switch (type) {
      case 0: return <Database className="w-full h-full" />
      case 1: return <Server className="w-full h-full" />
      case 2: return <Code2 className="w-full h-full" />
      case 3: return <Globe className="w-full h-full" />
      case 4: return <Cpu className="w-full h-full" />
      case 5: return <Terminal className="w-full h-full" />
      default: return <Database className="w-full h-full" />
    }
  }

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute opacity-[0.06] text-blue-900"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animation: `float-particle ${particle.duration}s ease-in-out ${particle.delay}s infinite alternate`,
            transform: `rotate(${particle.rotation}deg)`,
          }}
        >
          {renderParticleIcon(particle.type)}
        </div>
      ))}
    </div>
  )
}
