"use client"

import { useEffect, useState } from "react"
import { Laptop, Github } from "lucide-react"

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
      type: i % 4, // Ensure even distribution across the 4 types
    }))
    setParticles(newParticles)
  }, [])

  const renderParticleIcon = (type: number) => {
    switch (type) {
      case 0: return <Laptop className="w-full h-full" />
      case 1: return (
        <svg viewBox="0 0 128 128" className="w-full h-full" fill="currentColor">
          <path d="M124.4 60.5l-57-57c-4.8-4.8-12.5-4.8-17.3 0L33 20.6l21.2 21.2c3.4-1.2 7.4-.3 10 2.2 2.6 2.6 3.4 6.5 2.2 10l19.5 19.5c3.5-1.2 7.4-.3 10 2.2 3.8 3.8 3.8 10 0 13.8-3.8 3.8-10 3.8-13.8 0-2.6-2.6-3.4-6.5-2.2-10L61 60.5v28.4c1.2 3.5.3 7.4-2.2 10-3.8 3.8-10 3.8-13.8 0-3.8-3.8-3.8-10 0-13.8 2.6-2.6 6.5-3.4 10-2.2V51.8c-3.5-1.2-7.4-.3-10 2.2-3.8 3.8-3.8 10 0 13.8 3.8 3.8 10 3.8 13.8 0 2.6-2.6 3.4-6.5 2.2-10l20.8-20.8 18.5 18.5c4.8 4.8 12.5 4.8 17.3 0 4.8-4.7 4.8-12.4 0-17.2z"/>
        </svg>
      )
      case 2: return <Github className="w-full h-full" />
      case 3: return (
        <svg viewBox="0 0 100 80" className="w-full h-full" fill="currentColor">
          <rect x="2" y="2" width="96" height="76" rx="8" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="4"/>
          <circle cx="15" cy="15" r="3" fill="currentColor"/>
          <circle cx="25" cy="15" r="3" fill="currentColor"/>
          <circle cx="35" cy="15" r="3" fill="currentColor"/>
          <rect x="15" y="30" width="40" height="4" rx="2" fill="currentColor"/>
          <rect x="15" y="42" width="70" height="4" rx="2" fill="currentColor"/>
          <rect x="15" y="54" width="50" height="4" rx="2" fill="currentColor"/>
        </svg>
      )
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
