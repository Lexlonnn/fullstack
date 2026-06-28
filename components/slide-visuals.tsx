"use client"

import { 
  Monitor, Smartphone, Server, Database, Cloud, FileCode2, Code, Shield, Key, 
  User, Layout, Paintbrush, Play, FolderOpen, Folder, File, Code2, Globe, Cpu, Users, 
  Terminal, Lock, ArrowRight, LogIn, Network, Wrench, Rocket, Blocks, KeyRound,
  Eye, Braces, ArrowDown, GitBranch
} from "lucide-react"
import { useEffect, useState } from "react"

export function ArchitectureDiagramVisual() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between w-full p-8 bg-slate-900 rounded-2xl shadow-xl mt-8 gap-8">
      <div className="flex flex-col items-center gap-4">
        <div className="p-6 bg-blue-500/10 rounded-full border border-blue-500/30">
          <Monitor className="w-16 h-16 text-blue-400" />
        </div>
        <div className="text-center">
          <span className="text-xl font-bold text-slate-200 block">Frontend</span>
          <span className="text-sm text-slate-400">UI & User Experience</span>
        </div>
      </div>
      
      <div className="flex-1 flex flex-col items-center justify-center relative min-w-[100px]">
        <div className="h-1 bg-slate-700 w-full rounded-full overflow-hidden relative">
          <div className="absolute top-0 left-0 h-full bg-emerald-500 w-1/3 animate-[slideRight_2s_ease-in-out_infinite]" />
          <div className="absolute top-0 right-0 h-full bg-blue-500 w-1/3 animate-[slideLeft_2s_ease-in-out_infinite]" />
        </div>
        <span className="bg-slate-900 px-4 py-1 text-xs font-mono text-emerald-400 border border-slate-700 rounded-full absolute -top-4">APIs (JSON)</span>
      </div>

      <div className="flex flex-col items-center gap-4">
        <div className="p-6 bg-emerald-500/10 rounded-full border border-emerald-500/30">
          <Server className="w-16 h-16 text-emerald-400" />
        </div>
        <div className="text-center">
          <span className="text-xl font-bold text-slate-200 block">Backend</span>
          <span className="text-sm text-slate-400">Logic & Routing</span>
        </div>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center relative min-w-[100px]">
        <div className="h-1 bg-slate-700 w-full rounded-full overflow-hidden relative">
          <div className="absolute top-0 left-0 h-full bg-purple-500 w-1/3 animate-[slideRight_2s_ease-in-out_infinite_0.5s]" />
          <div className="absolute top-0 right-0 h-full bg-emerald-500 w-1/3 animate-[slideLeft_2s_ease-in-out_infinite_0.5s]" />
        </div>
        <span className="bg-slate-900 px-4 py-1 text-xs font-mono text-purple-400 border border-slate-700 rounded-full absolute -top-4">Queries</span>
      </div>

      <div className="flex flex-col items-center gap-4">
        <div className="p-6 bg-purple-500/10 rounded-full border border-purple-500/30">
          <Database className="w-16 h-16 text-purple-400" />
        </div>
        <div className="text-center">
          <span className="text-xl font-bold text-slate-200 block">Database</span>
          <span className="text-sm text-slate-400">Data Storage</span>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes slideRight {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(300%); }
        }
        @keyframes slideLeft {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-300%); }
        }
      `}} />
    </div>
  )
}

export function InternetWorksVisual() {
  return (
    <div className="w-full flex flex-col items-center p-8 bg-slate-900 rounded-2xl shadow-xl mt-8">
      <div className="flex justify-between w-full max-w-3xl items-center relative">
        <div className="absolute left-[15%] right-[15%] h-1 bg-slate-800 z-0">
           <div className="absolute h-full bg-blue-500 w-4 shadow-[0_0_10px_#3b82f6] animate-[pingPong_4s_ease-in-out_infinite]" />
        </div>
        
        <div className="flex flex-col items-center z-10 bg-slate-900 p-4 rounded-xl border border-slate-700">
          <User className="w-12 h-12 text-slate-300 mb-2" />
          <span className="font-bold text-slate-200">User</span>
        </div>
        
        <div className="flex flex-col items-center z-10 bg-slate-900 p-4 rounded-xl border border-blue-500/50 shadow-[0_0_20px_rgba(59,130,246,0.2)]">
          <Globe className="w-12 h-12 text-blue-400 mb-2" />
          <span className="font-bold text-slate-200">Browser</span>
          <span className="text-xs text-slate-500">example.com</span>
        </div>

        <div className="flex flex-col items-center z-10 bg-slate-900 p-4 rounded-xl border border-emerald-500/50 shadow-[0_0_20px_rgba(16,185,129,0.2)]">
          <Server className="w-12 h-12 text-emerald-400 mb-2" />
          <span className="font-bold text-slate-200">Server</span>
          <span className="text-xs text-slate-500">Linux / Node</span>
        </div>
      </div>
      
      <div className="w-full max-w-lg mt-8 flex justify-between px-8 text-sm font-mono relative">
        <span className="text-blue-400">1. HTTP Request (GET) </span>
        <span className="text-emerald-400 text-right"> 2. HTTP Response (HTML)</span>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes pingPong {
          0% { left: 0%; opacity: 1; }
          45% { left: 100%; opacity: 1; }
          50% { left: 100%; opacity: 0; }
          55% { left: 100%; opacity: 1; }
          100% { left: 0%; opacity: 1; }
        }
      `}} />
    </div>
  )
}

export function FrontendVisual() {
  return (
    <div className="flex gap-6 w-full max-w-4xl mx-auto mt-8">
      <div className="flex-1 bg-slate-900 border border-orange-500/30 rounded-2xl p-6 flex flex-col items-center shadow-lg hover:-translate-y-2 transition-transform">
        <FileCode2 className="w-12 h-12 text-orange-500 mb-4" />
        <h3 className="text-orange-400 font-bold mb-2">HTML</h3>
        <p className="text-sm text-slate-400 text-center">Structure & Content. The skeleton of the page.</p>
      </div>
      
      <div className="flex-1 bg-slate-900 border border-blue-500/30 rounded-2xl p-6 flex flex-col items-center shadow-lg hover:-translate-y-2 transition-transform delay-100">
        <Paintbrush className="w-12 h-12 text-blue-400 mb-4" />
        <h3 className="text-blue-400 font-bold mb-2">CSS</h3>
        <p className="text-sm text-slate-400 text-center">Styling & Layout. Colors, spacing, responsiveness.</p>
      </div>

      <div className="flex-1 bg-slate-900 border border-yellow-500/30 rounded-2xl p-6 flex flex-col items-center shadow-lg hover:-translate-y-2 transition-transform delay-200">
        <Code className="w-12 h-12 text-yellow-400 mb-4" />
        <h3 className="text-yellow-400 font-bold mb-2">JavaScript</h3>
        <p className="text-sm text-slate-400 text-center">Interactivity & Logic. Makes the page alive.</p>
      </div>
      
      <div className="flex-1 bg-slate-900 border border-cyan-500/30 rounded-2xl p-6 flex flex-col items-center shadow-lg hover:-translate-y-2 transition-transform delay-300">
        <Blocks className="w-12 h-12 text-cyan-400 mb-4" />
        <h3 className="text-cyan-400 font-bold mb-2">React</h3>
        <p className="text-sm text-slate-400 text-center">Component-based UI architecture.</p>
      </div>
    </div>
  )
}

export function BackendFlowVisual() {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const steps = [
    {
      id: 1,
      title: "Router",
      icon: Network,
      color: "blue",
      route: "/api/users",
      desc: "Directs incoming HTTP requests to the correct controller based on the URL and method (GET, POST)."
    },
    {
      id: 2,
      title: "Middleware",
      icon: Shield,
      color: "purple",
      route: "Auth Check",
      desc: "Intercepts the request. Validates authentication tokens, checks permissions, or formats data before passing it on."
    },
    {
      id: 3,
      title: "Controller",
      icon: Cpu,
      color: "orange",
      route: "Business Logic",
      desc: "The brain of the operation. Executes core logic like calculating prices, generating files, or structuring DB queries."
    },
    {
      id: 4,
      title: "Database",
      icon: Database,
      color: "emerald",
      route: "PostgreSQL",
      desc: "The long-term memory. Stores and retrieves persistent data like user profiles and product catalogs."
    }
  ];

  return (
    <div className="flex flex-col w-full mt-4 items-center justify-center relative px-4">
      {/* Animated Path */}
      <div className="absolute top-24 left-10 right-10 h-1 bg-slate-800 -translate-y-1/2 z-0" />
      <div className="absolute top-24 left-10 w-[calc(100%-5rem)] h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 -translate-y-1/2 z-0 origin-left animate-[scaleX_3s_ease-out_infinite]" />
      
      <div className="flex justify-between w-full max-w-4xl z-10 pt-10">
        
        {steps.map((step, i) => (
          <div key={step.id} 
               onClick={() => setActiveStep(activeStep === step.id ? null : step.id)}
               className={`flex flex-col items-center gap-3 bg-slate-950 p-3 rounded-xl cursor-pointer transition-all ${activeStep === step.id ? 'ring-2 ring-offset-2 ring-offset-slate-950 ring-' + step.color + '-500 scale-110' : 'hover:scale-105 hover:bg-slate-900'}`}>
            <div className={`bg-slate-900 border-2 border-${step.color}-500 p-4 rounded-xl shadow-[0_0_15px_rgba(var(--tw-colors-${step.color}-500),0.3)]`}>
               <step.icon className={`w-8 h-8 text-${step.color}-400`} />
            </div>
            <span className="font-bold text-slate-300 text-sm">{step.title}</span>
            <span className="text-[10px] text-slate-500 uppercase tracking-wider">{step.route}</span>
          </div>
        ))}
      </div>

      {/* Info Panel */}
      <div className="h-28 w-full max-w-2xl mt-12">
        {activeStep ? (
           <div className="bg-slate-900 border border-slate-700 p-6 rounded-2xl text-center shadow-xl animate-in fade-in zoom-in duration-200">
             <h4 className={`font-bold text-lg mb-2 text-${steps.find(s => s.id === activeStep)?.color}-400`}>
               {steps.find(s => s.id === activeStep)?.title} Module
             </h4>
             <p className="text-sm text-slate-300 leading-relaxed">
               {steps.find(s => s.id === activeStep)?.desc}
             </p>
           </div>
        ) : (
           <div className="flex items-center justify-center h-full text-slate-500 text-sm font-mono bg-slate-900/50 rounded-2xl border border-slate-800 border-dashed animate-pulse">
             Click any module to see its responsibility
           </div>
        )}
      </div>
    </div>
  )
}

export function DatabaseVisual() {
  return (
    <div className="flex gap-8 w-full max-w-4xl mx-auto mt-8">
      <div className="flex-1 bg-slate-900 border border-blue-500/30 rounded-3xl p-8 flex flex-col relative overflow-hidden shadow-[0_0_30px_rgba(59,130,246,0.15)]">
        <div className="absolute -right-4 -top-4 opacity-5">
           <Database className="w-64 h-64 text-blue-500" />
        </div>
        <div className="flex items-center gap-3 mb-6 relative z-10">
          <Database className="w-8 h-8 text-blue-400" />
          <h3 className="text-2xl font-bold text-slate-200">SQL / Relational</h3>
        </div>
        <p className="text-slate-400 mb-6 relative z-10">PostgreSQL, MySQL. Data organized in strict tables with relationships.</p>
        
        <div className="bg-slate-950 border border-slate-800 rounded-lg p-4 font-mono text-xs text-slate-300 relative z-10">
           <table className="w-full text-left">
             <thead>
               <tr className="border-b border-slate-700 text-blue-400">
                 <th className="pb-2">id</th>
                 <th className="pb-2">name</th>
                 <th className="pb-2">role_id</th>
               </tr>
             </thead>
             <tbody>
               <tr><td className="py-1">1</td><td>Alice</td><td>2</td></tr>
               <tr><td className="py-1">2</td><td>Bob</td><td>1</td></tr>
             </tbody>
           </table>
        </div>
      </div>

      <div className="flex-1 bg-slate-900 border border-emerald-500/30 rounded-3xl p-8 flex flex-col relative overflow-hidden shadow-[0_0_30px_rgba(16,185,129,0.15)]">
         <div className="absolute -right-4 -top-4 opacity-5">
           <Braces className="w-64 h-64 text-emerald-500" />
        </div>
        <div className="flex items-center gap-3 mb-6 relative z-10">
          <Braces className="w-8 h-8 text-emerald-400" />
          <h3 className="text-2xl font-bold text-slate-200">NoSQL / Document</h3>
        </div>
        <p className="text-slate-400 mb-6 relative z-10">MongoDB, Firebase. Data organized as flexible JSON-like documents.</p>
        
        <div className="bg-slate-950 border border-slate-800 rounded-lg p-4 font-mono text-xs text-emerald-300 relative z-10">
          <pre>{`{
  "_id": "5f1b...",
  "name": "Alice",
  "role": {
    "title": "Admin",
    "level": 5
  },
  "hobbies": ["reading", "code"]
}`}</pre>
        </div>
      </div>
    </div>
  )
}

export function RequestFlowVisual() {
  return (
    <div className="flex flex-col w-full p-12 mt-4 gap-8 bg-slate-900 rounded-3xl border border-slate-800 shadow-xl overflow-hidden relative">
       {/* Moving JSON Payload */}
       <div className="absolute top-1/2 -translate-y-1/2 left-0 bg-yellow-500/20 border border-yellow-500/50 text-yellow-400 font-mono text-[10px] px-3 py-1 rounded shadow-[0_0_15px_rgba(234,179,8,0.3)] z-20 animate-[slidePingPong_4s_ease-in-out_infinite] whitespace-nowrap">
         JSON Payload
       </div>

       <div className="flex justify-between items-center w-full max-w-5xl mx-auto relative px-8">
        <div className="absolute left-10 right-10 top-1/2 -translate-y-1/2 h-1 bg-slate-700/50 z-0" />
        
        <div className="flex flex-col items-center gap-4 z-10 bg-slate-900 p-2 rounded-xl">
          <div className="w-16 h-16 bg-cyan-900/50 border-2 border-cyan-500 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.3)]">
             <Layout className="w-8 h-8 text-cyan-400" />
          </div>
          <span className="font-bold text-slate-300 text-sm">Frontend</span>
          <span className="text-[10px] text-slate-500">React State</span>
        </div>

        <div className="flex flex-col items-center gap-4 z-10 bg-slate-900 p-2 rounded-xl">
          <div className="w-16 h-16 bg-emerald-900/50 border-2 border-emerald-500 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.3)]">
             <Server className="w-8 h-8 text-emerald-400" />
          </div>
          <span className="font-bold text-slate-300 text-sm">Backend API</span>
          <span className="text-[10px] text-slate-500">Express Router</span>
        </div>

        <div className="flex flex-col items-center gap-4 z-10 bg-slate-900 p-2 rounded-xl">
           <div className="w-16 h-16 bg-purple-900/50 border-2 border-purple-500 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(168,85,247,0.4)]">
             <Database className="w-8 h-8 text-purple-400" />
          </div>
          <span className="font-bold text-purple-300 text-sm">Database</span>
          <span className="text-[10px] text-slate-500">Validation & Save</span>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes slidePingPong {
          0% { left: 15%; transform: translate(-50%, -50%); opacity: 0; }
          10% { opacity: 1; }
          45% { left: 85%; transform: translate(-50%, -50%); }
          50% { left: 85%; opacity: 0; }
          55% { left: 85%; transform: translate(-50%, -50%); opacity: 1; }
          90% { left: 15%; transform: translate(-50%, -50%); }
          100% { left: 15%; opacity: 0; }
        }
      `}} />
    </div>
  )
}

export function AuthFlowVisual() {
  return (
    <div className="flex w-full gap-8 mt-8 items-center justify-center">
       <div className="flex flex-col gap-6 relative">
          <div className="bg-slate-900 p-4 rounded-xl border border-slate-700 flex items-center gap-4 shadow-lg w-64">
             <LogIn className="w-6 h-6 text-blue-400" />
             <div className="flex-1">
               <div className="h-2 w-full bg-slate-800 rounded mb-2"></div>
               <div className="h-2 w-2/3 bg-slate-800 rounded"></div>
             </div>
             <span className="text-xs font-bold text-slate-500">POST</span>
          </div>
          
          <ArrowDown className="w-6 h-6 text-slate-600 mx-auto" />
          
          <div className="bg-slate-900 p-4 rounded-xl border border-purple-500/50 flex flex-col items-center gap-2 shadow-[0_0_15px_rgba(168,85,247,0.2)] w-64">
             <Shield className="w-8 h-8 text-purple-400" />
             <span className="text-xs font-mono text-purple-300">Bcrypt Hashing</span>
             <span className="text-[10px] font-mono text-slate-500 break-all">$2b$10$w...</span>
          </div>
          
          <ArrowDown className="w-6 h-6 text-slate-600 mx-auto" />
          
          <div className="bg-emerald-950 p-4 rounded-xl border border-emerald-500/50 flex items-center gap-4 shadow-[0_0_15px_rgba(16,185,129,0.2)] w-64">
             <KeyRound className="w-6 h-6 text-emerald-400" />
             <div>
               <div className="text-sm font-bold text-emerald-400">JWT Token</div>
               <div className="text-[10px] font-mono text-slate-400">eyJh... returned to client</div>
             </div>
          </div>
       </div>
    </div>
  )
}

export function FolderStructureVisual() {
  const [activeFile, setActiveFile] = useState<string | null>('auth.controller.js');

  const renderCode = () => {
    switch(activeFile) {
      case 'auth.controller.js':
        return (
          <div className="font-mono text-xs text-slate-300 leading-relaxed animate-in fade-in">
            <div className="text-slate-500 mb-4">// backend/controllers/auth.controller.js</div>
            <div><span className="text-purple-400">export const</span> <span className="text-blue-400">login</span> = <span className="text-emerald-400">async</span> (req, res) {`=>`} {`{`}</div>
            <div className="pl-4 mt-2"><span className="text-slate-500">// 1. Check if user exists</span></div>
            <div className="pl-4"><span className="text-emerald-400">const</span> user = <span className="text-emerald-400">await</span> User.<span className="text-blue-400">findOne</span>({`{`} email: req.body.email {`}`});</div>
            <div className="pl-4 mt-2"><span className="text-slate-500">// 2. Validate password...</span></div>
            <div className="pl-4 mt-2"><span className="text-slate-500">// 3. Send response with token</span></div>
            <div className="pl-4"><span className="text-purple-400">res</span>.<span className="text-blue-400">json</span>({`{`} token: <span className="text-orange-300">"eyJhbGci..."</span> {`}`});</div>
            <div className="mt-2">{`}`};</div>
          </div>
        )
      case 'Button.tsx':
        return (
          <div className="font-mono text-xs text-slate-300 leading-relaxed animate-in fade-in">
            <div className="text-slate-500 mb-4">// frontend/components/Button.tsx</div>
            <div><span className="text-purple-400">export default function</span> <span className="text-blue-400">Button</span>({`{`} children {`}`}) {`{`}</div>
            <div className="pl-4 mt-2"><span className="text-purple-400">return</span> (</div>
            <div className="pl-8"><span className="text-slate-400">&lt;</span><span className="text-blue-400">button</span> <span className="text-emerald-300">className</span>=<span className="text-orange-300">"bg-blue-500 text-white p-2 rounded"</span><span className="text-slate-400">&gt;</span></div>
            <div className="pl-12">{`{`}children{`}`}</div>
            <div className="pl-8"><span className="text-slate-400">&lt;/</span><span className="text-blue-400">button</span><span className="text-slate-400">&gt;</span></div>
            <div className="pl-4">)</div>
            <div className="mt-2">{`}`}</div>
          </div>
        )
      case 'auth.routes.js':
        return (
          <div className="font-mono text-xs text-slate-300 leading-relaxed animate-in fade-in">
            <div className="text-slate-500 mb-4">// backend/routes/auth.routes.js</div>
            <div><span className="text-purple-400">import</span> express <span className="text-purple-400">from</span> <span className="text-orange-300">'express'</span>;</div>
            <div><span className="text-purple-400">import</span> {`{`} login {`}`} <span className="text-purple-400">from</span> <span className="text-orange-300">'../controllers/auth.controller.js'</span>;</div>
            <div className="mt-4"><span className="text-emerald-400">const</span> router = express.<span className="text-blue-400">Router</span>();</div>
            <div className="mt-4"><span className="text-slate-500">// Route incoming POST requests to the login controller</span></div>
            <div><span className="text-blue-300">router</span>.<span className="text-blue-400">post</span>(<span className="text-orange-300">'/login'</span>, login);</div>
            <div className="mt-4"><span className="text-purple-400">export default</span> router;</div>
          </div>
        )
      case 'auth.middleware.js':
        return (
          <div className="font-mono text-xs text-slate-300 leading-relaxed animate-in fade-in">
            <div className="text-slate-500 mb-4">// backend/middleware/auth.middleware.js</div>
            <div><span className="text-purple-400">export const</span> <span className="text-blue-400">verifyToken</span> = (req, res, next) {`=>`} {`{`}</div>
            <div className="pl-4 mt-2"><span className="text-emerald-400">const</span> token = req.headers.<span className="text-blue-300">authorization</span>;</div>
            <div className="pl-4 mt-2"><span className="text-purple-400">if</span> (!token) {`{`}</div>
            <div className="pl-8"><span className="text-purple-400">return</span> <span className="text-purple-400">res</span>.<span className="text-blue-400">status</span>(<span className="text-orange-300">401</span>).<span className="text-blue-400">json</span>({`{`} message: <span className="text-orange-300">"No token"</span> {`}`});</div>
            <div className="pl-4">{`}`}</div>
            <div className="pl-4 mt-2"><span className="text-slate-500">// Verify token validity</span></div>
            <div className="pl-4"><span className="text-blue-300">jwt</span>.<span className="text-blue-400">verify</span>(token, process.env.<span className="text-blue-300">SECRET</span>, (err, decoded) {`=>`} {`{`}</div>
            <div className="pl-8"><span className="text-purple-400">if</span> (err) <span className="text-purple-400">return</span> <span className="text-purple-400">res</span>.<span className="text-blue-400">status</span>(<span className="text-orange-300">403</span>).<span className="text-blue-400">json</span>({`{`} message: <span className="text-orange-300">"Invalid"</span> {`}`});</div>
            <div className="pl-8">req.<span className="text-blue-300">user</span> = decoded;</div>
            <div className="pl-8"><span className="text-blue-400">next</span>(); <span className="text-slate-500">// Proceed to controller</span></div>
            <div className="pl-4">{`}`});</div>
            <div>{`}`};</div>
          </div>
        )
      case 'User.model.js':
        return (
          <div className="font-mono text-xs text-slate-300 leading-relaxed animate-in fade-in">
            <div className="text-slate-500 mb-4">// backend/models/User.model.js</div>
            <div><span className="text-purple-400">import</span> mongoose <span className="text-purple-400">from</span> <span className="text-orange-300">'mongoose'</span>;</div>
            <div className="mt-4"><span className="text-emerald-400">const</span> userSchema = <span className="text-purple-400">new</span> mongoose.<span className="text-blue-400">Schema</span>({`{`}</div>
            <div className="pl-4">email: {`{`} type: <span className="text-blue-300">String</span>, required: <span className="text-orange-300">true</span>, unique: <span className="text-orange-300">true</span> {`}`},</div>
            <div className="pl-4">password: {`{`} type: <span className="text-blue-300">String</span>, required: <span className="text-orange-300">true</span> {`}`},</div>
            <div className="pl-4">role: {`{`} type: <span className="text-blue-300">String</span>, default: <span className="text-orange-300">'user'</span> {`}`}</div>
            <div>{`}`});</div>
            <div className="mt-4"><span className="text-purple-400">export default</span> mongoose.<span className="text-blue-400">model</span>(<span className="text-orange-300">'User'</span>, userSchema);</div>
          </div>
        )
      case 'server.js':
        return (
          <div className="font-mono text-xs text-slate-300 leading-relaxed animate-in fade-in">
            <div className="text-slate-500 mb-4">// backend/server.js</div>
            <div><span className="text-purple-400">import</span> express <span className="text-purple-400">from</span> <span className="text-orange-300">'express'</span>;</div>
            <div><span className="text-purple-400">import</span> authRoutes <span className="text-purple-400">from</span> <span className="text-orange-300">'./routes/auth.routes.js'</span>;</div>
            <div className="mt-4"><span className="text-emerald-400">const</span> app = <span className="text-blue-400">express</span>();</div>
            <div className="mt-4"><span className="text-slate-500">// Middleware to parse JSON</span></div>
            <div><span className="text-blue-300">app</span>.<span className="text-blue-400">use</span>(express.<span className="text-blue-400">json</span>());</div>
            <div className="mt-4"><span className="text-slate-500">// Connect routes</span></div>
            <div><span className="text-blue-300">app</span>.<span className="text-blue-400">use</span>(<span className="text-orange-300">'/api/auth'</span>, authRoutes);</div>
            <div className="mt-4"><span className="text-blue-300">app</span>.<span className="text-blue-400">listen</span>(<span className="text-orange-300">3000</span>, () {`=>`} {`{`}</div>
            <div className="pl-4"><span className="text-blue-300">console</span>.<span className="text-blue-400">log</span>(<span className="text-orange-300">'Server running on port 3000'</span>);</div>
            <div>{`}`});</div>
          </div>
        )
      default:
        return (
          <div className="h-full flex items-center justify-center text-slate-600 text-sm italic">
            Select a file to view its code
          </div>
        );
    }
  }

  return (
    <div className="flex w-full max-w-4xl mx-auto mt-4 h-80 bg-slate-950 rounded-xl overflow-hidden border border-slate-700 shadow-2xl">
      {/* Sidebar / Explorer */}
      <div className="w-1/3 bg-[#18181b] border-r border-slate-800 flex flex-col overflow-y-auto overflow-x-hidden">
        <div className="uppercase text-[10px] text-slate-500 font-bold p-3 tracking-wider sticky top-0 bg-[#18181b]">Explorer</div>
        
        {/* Frontend Folder */}
        <div className="flex flex-col text-xs text-slate-300 font-mono pb-2">
          <div className="flex items-center gap-1.5 px-3 py-1 text-slate-200 font-bold">
            <FolderOpen className="w-4 h-4 text-blue-400" /> frontend/
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1 pl-8 hover:bg-slate-800 cursor-default">
            <Folder className="w-3.5 h-3.5 text-blue-300" /> app/
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5 px-3 py-1 pl-8 hover:bg-slate-800 cursor-default">
              <FolderOpen className="w-3.5 h-3.5 text-blue-300" /> components/
            </div>
            <div 
              className={`flex items-center gap-1.5 px-3 py-1 pl-12 cursor-pointer transition-colors ${activeFile === 'Button.tsx' ? 'bg-blue-900/40 text-blue-300 border-l-2 border-blue-500' : 'hover:bg-slate-800 border-l-2 border-transparent'}`}
              onClick={() => setActiveFile('Button.tsx')}
            >
              <FileCode2 className="w-3 h-3 text-cyan-400" /> Button.tsx
            </div>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1 pl-8 hover:bg-slate-800 cursor-default">
            <Folder className="w-3.5 h-3.5 text-blue-300" /> hooks/
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1 pl-8 hover:bg-slate-800 cursor-default">
            <File className="w-3.5 h-3.5 text-slate-500" /> package.json
          </div>
        </div>

        {/* Backend Folder */}
        <div className="flex flex-col text-xs text-slate-300 font-mono pb-4">
          <div className="flex items-center gap-1.5 px-3 py-1 mt-2 text-slate-200 font-bold">
            <FolderOpen className="w-4 h-4 text-emerald-400" /> backend/
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5 px-3 py-1 pl-8 hover:bg-slate-800 cursor-default">
              <FolderOpen className="w-3.5 h-3.5 text-emerald-300" /> controllers/
            </div>
            <div 
              className={`flex items-center gap-1.5 px-3 py-1 pl-12 cursor-pointer transition-colors ${activeFile === 'auth.controller.js' ? 'bg-emerald-900/40 text-emerald-300 border-l-2 border-emerald-500' : 'hover:bg-slate-800 border-l-2 border-transparent'}`}
              onClick={() => setActiveFile('auth.controller.js')}
            >
              <FileCode2 className="w-3 h-3 text-yellow-400" /> auth.controller.js
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5 px-3 py-1 pl-8 hover:bg-slate-800 cursor-default">
              <FolderOpen className="w-3.5 h-3.5 text-emerald-300" /> routes/
            </div>
            <div 
              className={`flex items-center gap-1.5 px-3 py-1 pl-12 cursor-pointer transition-colors ${activeFile === 'auth.routes.js' ? 'bg-emerald-900/40 text-emerald-300 border-l-2 border-emerald-500' : 'hover:bg-slate-800 border-l-2 border-transparent'}`}
              onClick={() => setActiveFile('auth.routes.js')}
            >
              <FileCode2 className="w-3 h-3 text-yellow-400" /> auth.routes.js
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5 px-3 py-1 pl-8 hover:bg-slate-800 cursor-default">
              <FolderOpen className="w-3.5 h-3.5 text-emerald-300" /> models/
            </div>
            <div 
              className={`flex items-center gap-1.5 px-3 py-1 pl-12 cursor-pointer transition-colors ${activeFile === 'User.model.js' ? 'bg-emerald-900/40 text-emerald-300 border-l-2 border-emerald-500' : 'hover:bg-slate-800 border-l-2 border-transparent'}`}
              onClick={() => setActiveFile('User.model.js')}
            >
              <FileCode2 className="w-3 h-3 text-yellow-400" /> User.model.js
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5 px-3 py-1 pl-8 hover:bg-slate-800 cursor-default">
              <FolderOpen className="w-3.5 h-3.5 text-emerald-300" /> middleware/
            </div>
            <div 
              className={`flex items-center gap-1.5 px-3 py-1 pl-12 cursor-pointer transition-colors ${activeFile === 'auth.middleware.js' ? 'bg-emerald-900/40 text-emerald-300 border-l-2 border-emerald-500' : 'hover:bg-slate-800 border-l-2 border-transparent'}`}
              onClick={() => setActiveFile('auth.middleware.js')}
            >
              <FileCode2 className="w-3 h-3 text-yellow-400" /> auth.middleware.js
            </div>
          </div>
          <div 
            className={`flex items-center gap-1.5 px-3 py-1 pl-8 cursor-pointer transition-colors ${activeFile === 'server.js' ? 'bg-emerald-900/40 text-emerald-300 border-l-2 border-emerald-500' : 'hover:bg-slate-800 border-l-2 border-transparent'}`}
            onClick={() => setActiveFile('server.js')}
          >
            <FileCode2 className="w-3.5 h-3.5 text-yellow-400" /> server.js
          </div>
        </div>
      </div>

      {/* Editor Area */}
      <div className="w-2/3 bg-[#0d1117] flex flex-col">
        {/* Editor Tabs */}
        <div className="flex items-center bg-[#18181b] border-b border-slate-800 overflow-x-auto">
           {activeFile && (
             <div className={`flex items-center gap-2 px-4 py-2 bg-[#0d1117] text-xs font-mono border-t-2 min-w-max ${activeFile.endsWith('.tsx') ? 'text-blue-300 border-blue-500' : 'text-emerald-300 border-emerald-500'}`}>
               <FileCode2 className={`w-3.5 h-3.5 ${activeFile.endsWith('.tsx') ? 'text-cyan-400' : 'text-yellow-400'}`} /> {activeFile}
             </div>
           )}
        </div>
        
        {/* Code Content */}
        <div className="flex-1 p-6 overflow-y-auto">
           {renderCode()}
        </div>
      </div>
    </div>
  )
}

export function DevToolsVisual() {
  const tools = [
    { name: 'VS Code', icon: Code2, color: 'text-blue-500', bg: 'bg-blue-500/10' },
    { name: 'React', icon: Blocks, color: 'text-cyan-400', bg: 'bg-cyan-400/10' },
    { name: 'Node.js', icon: Server, color: 'text-emerald-500', bg: 'bg-emerald-500/10' },
    { name: 'PostgreSQL', icon: Database, color: 'text-indigo-400', bg: 'bg-indigo-400/10' },
    { name: 'Docker', icon: Cloud, color: 'text-blue-400', bg: 'bg-blue-400/10' },
    { name: 'Git', icon: GitBranch, color: 'text-orange-500', bg: 'bg-orange-500/10' },
  ]
  
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-4xl mx-auto mt-8">
       {tools.map((tool, i) => (
         <div key={tool.name} className="flex flex-col items-center justify-center p-6 bg-slate-900 border border-slate-700 rounded-2xl hover:border-slate-500 transition-all hover:scale-105 shadow-lg group">
            <div className={`p-4 rounded-xl ${tool.bg} mb-4 transition-transform group-hover:scale-110`}>
               <tool.icon className={`w-10 h-10 ${tool.color}`} />
            </div>
            <span className="font-bold text-slate-300 group-hover:text-white">{tool.name}</span>
         </div>
       ))}
    </div>
  )
}

export function LifecycleVisual() {
  const steps = [
    { icon: Paintbrush, label: "Design", color: "text-pink-400" },
    { icon: Layout, label: "Frontend", color: "text-blue-400" },
    { icon: Server, label: "Backend", color: "text-emerald-400" },
    { icon: Shield, label: "Testing", color: "text-purple-400" },
    { icon: Rocket, label: "Deploy", color: "text-orange-400" },
  ]

  return (
    <div className="flex flex-wrap items-center justify-center w-full mt-12 gap-4 md:gap-6 bg-slate-900 p-8 rounded-3xl border border-slate-800 shadow-xl">
       {steps.map((step, index) => (
         <div key={index} className="flex items-center">
            <div className="flex flex-col items-center gap-3 group">
               <div className="w-16 h-16 rounded-full bg-slate-950 border-2 border-slate-700 flex items-center justify-center shadow-lg transition-transform group-hover:scale-110 group-hover:border-slate-500">
                  <step.icon className={`w-8 h-8 ${step.color}`} />
               </div>
               <span className="text-xs font-bold text-slate-300 uppercase tracking-wider">{step.label}</span>
            </div>
            {index < steps.length - 1 && (
              <ArrowRight className="w-6 h-6 text-slate-500 mx-4" />
            )}
         </div>
       ))}
    </div>
  )
}

export function DeploymentPipelineVisual() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center w-full mt-8 gap-8">
       <div className="flex flex-col items-center bg-slate-900 border border-slate-700 p-8 rounded-3xl w-64 shadow-xl">
          <Globe className="w-16 h-16 text-blue-400 mb-4" />
          <h3 className="font-bold text-slate-200 text-lg">Frontend Host</h3>
          <p className="text-xs text-slate-400 mt-2 text-center">Vercel / Netlify</p>
          <div className="mt-4 px-3 py-1 bg-blue-900/30 text-blue-300 text-xs rounded-full border border-blue-500/30 font-mono">example.com</div>
       </div>

       <div className="flex flex-col items-center gap-2 bg-slate-900 p-3 rounded-xl border border-slate-700 shadow-md">
         <Network className="w-6 h-6 text-slate-400" />
         <span className="text-[10px] uppercase text-slate-300 font-bold tracking-widest">Connects To</span>
       </div>

       <div className="flex flex-col items-center bg-slate-900 border border-slate-700 p-8 rounded-3xl w-64 shadow-xl">
          <Cloud className="w-16 h-16 text-emerald-400 mb-4" />
          <h3 className="font-bold text-slate-200 text-lg">Backend Host</h3>
          <p className="text-xs text-slate-400 mt-2 text-center">Render / AWS / Heroku</p>
          <div className="mt-4 px-3 py-1 bg-emerald-900/30 text-emerald-300 text-xs rounded-full border border-emerald-500/30 font-mono">api.example.com</div>
       </div>
    </div>
  )
}

export function TeamWorkflowVisual() {
  return (
    <div className="flex flex-wrap justify-center gap-6 w-full max-w-4xl mx-auto mt-8">
       <div className="bg-slate-900 border border-pink-500/30 p-6 rounded-2xl flex items-center gap-4 w-64">
          <div className="p-3 bg-pink-500/10 rounded-full"><Paintbrush className="w-6 h-6 text-pink-400" /></div>
          <div><div className="font-bold text-slate-200 text-sm">UI/UX Designer</div><div className="text-xs text-slate-500">Figma, Flows</div></div>
       </div>
       <div className="bg-slate-900 border border-blue-500/30 p-6 rounded-2xl flex items-center gap-4 w-64">
          <div className="p-3 bg-blue-500/10 rounded-full"><Layout className="w-6 h-6 text-blue-400" /></div>
          <div><div className="font-bold text-slate-200 text-sm">Frontend Dev</div><div className="text-xs text-slate-500">React, UI Logic</div></div>
       </div>
       <div className="bg-slate-900 border border-emerald-500/30 p-6 rounded-2xl flex items-center gap-4 w-64">
          <div className="p-3 bg-emerald-500/10 rounded-full"><Server className="w-6 h-6 text-emerald-400" /></div>
          <div><div className="font-bold text-slate-200 text-sm">Backend Dev</div><div className="text-xs text-slate-500">APIs, Services</div></div>
       </div>
       <div className="bg-slate-900 border border-purple-500/30 p-6 rounded-2xl flex items-center gap-4 w-64">
          <div className="p-3 bg-purple-500/10 rounded-full"><Database className="w-6 h-6 text-purple-400" /></div>
          <div><div className="font-bold text-slate-200 text-sm">Database Eng</div><div className="text-xs text-slate-500">Schemas, Queries</div></div>
       </div>
       <div className="bg-slate-900 border border-orange-500/30 p-6 rounded-2xl flex items-center gap-4 w-64">
          <div className="p-3 bg-orange-500/10 rounded-full"><Rocket className="w-6 h-6 text-orange-400" /></div>
          <div><div className="font-bold text-slate-200 text-sm">DevOps / Cloud</div><div className="text-xs text-slate-500">CI/CD, Hosting</div></div>
       </div>
    </div>
  )
}

export function CareerRoadmapVisual() {
  return (
    <div className="w-full mt-8 relative bg-slate-900 h-64 rounded-3xl border border-slate-800 shadow-xl overflow-hidden flex items-center px-12">
       <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-800 -translate-y-1/2 z-0" />
       <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-emerald-500 to-purple-500 -translate-y-1/2 z-0 origin-left animate-[scaleX_3s_ease-out_forwards]" />
       
       <div className="flex justify-between items-center relative z-10 w-full">
          <div className="flex flex-col items-center relative">
             <div className="absolute bottom-full mb-4 flex flex-col items-center min-w-max">
               <span className="text-[10px] font-bold text-blue-400 uppercase tracking-wider mb-1">Step 1</span>
               <span className="text-sm font-semibold text-slate-200">Frontend</span>
               <span className="text-[10px] text-slate-400 text-center mt-1">HTML, CSS, JS, React</span>
             </div>
             <div className="w-4 h-4 bg-blue-500 rounded-full border-[3px] border-slate-900 shadow-[0_0_10px_#3b82f6]" />
          </div>

          <div className="flex flex-col items-center relative">
             <div className="w-4 h-4 bg-emerald-500 rounded-full border-[3px] border-slate-900 shadow-[0_0_10px_#10b981]" />
             <div className="absolute top-full mt-4 flex flex-col items-center min-w-max">
               <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider mb-1">Step 2</span>
               <span className="text-sm font-semibold text-slate-200">Backend</span>
               <span className="text-[10px] text-slate-400 text-center mt-1">Node.js, Express</span>
             </div>
          </div>

          <div className="flex flex-col items-center relative">
             <div className="absolute bottom-full mb-4 flex flex-col items-center min-w-max">
               <span className="text-[10px] font-bold text-purple-400 uppercase tracking-wider mb-1">Step 3</span>
               <span className="text-sm font-semibold text-slate-200">Database</span>
               <span className="text-[10px] text-slate-400 text-center mt-1">SQL, MongoDB</span>
             </div>
             <div className="w-4 h-4 bg-purple-500 rounded-full border-[3px] border-slate-900 shadow-[0_0_10px_#a855f7]" />
          </div>

          <div className="flex flex-col items-center relative">
             <div className="w-4 h-4 bg-orange-500 rounded-full border-[3px] border-slate-900 shadow-[0_0_10px_#f97316]" />
             <div className="absolute top-full mt-4 flex flex-col items-center min-w-max">
               <span className="text-[10px] font-bold text-orange-400 uppercase tracking-wider mb-1">Step 4</span>
               <span className="text-sm font-semibold text-slate-200">Deployment</span>
               <span className="text-[10px] text-slate-400 text-center mt-1">Auth, Cloud Hosting</span>
             </div>
          </div>
       </div>

       <style dangerouslySetInnerHTML={{__html: `
        @keyframes scaleX {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
      `}} />
    </div>
  )
}

export function ApiTestingVisual() {
  const [activeEndpoint, setActiveEndpoint] = useState('GET_USERS');

  const endpoints = {
    'GET_USERS': {
      method: 'GET',
      url: '/api/users',
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/20 border-blue-500/30',
      reqBody: null,
      resStatus: '200 OK',
      resStatusColor: 'text-emerald-400',
      resBody: `[\n  {\n    "id": 1,\n    "name": "Alice",\n    "role": "admin"\n  },\n  {\n    "id": 2,\n    "name": "Bob",\n    "role": "user"\n  }\n]`
    },
    'POST_LOGIN': {
      method: 'POST',
      url: '/api/auth/login',
      color: 'text-emerald-400',
      bgColor: 'bg-emerald-500/20 border-emerald-500/30',
      reqBody: `{\n  "email": "alice@example.com",\n  "password": "secretpassword"\n}`,
      resStatus: '200 OK',
      resStatusColor: 'text-emerald-400',
      resBody: `{\n  "token": "eyJhbGciOiJIUzI1NiIsIn...",\n  "user": {\n    "id": 1,\n    "name": "Alice"\n  }\n}`
    },
    'DELETE_USER': {
      method: 'DELETE',
      url: '/api/users/2',
      color: 'text-red-400',
      bgColor: 'bg-red-500/20 border-red-500/30',
      reqBody: null,
      resStatus: '403 Forbidden',
      resStatusColor: 'text-red-400',
      resBody: `{\n  "error": "You do not have permission."\n}`
    }
  };

  const active = endpoints[activeEndpoint as keyof typeof endpoints];

  return (
    <div className="flex w-full max-w-5xl mx-auto mt-4 h-[400px] bg-slate-950 rounded-xl overflow-hidden border border-slate-700 shadow-2xl font-mono text-sm">
      {/* Sidebar - Endpoints */}
      <div className="w-1/3 bg-[#18181b] border-r border-slate-800 flex flex-col">
        <div className="uppercase text-[10px] text-slate-500 font-bold p-4 tracking-wider border-b border-slate-800">API Collections</div>
        
        <div className="flex flex-col p-2 gap-1">
           <div 
             onClick={() => setActiveEndpoint('GET_USERS')}
             className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer transition-colors ${activeEndpoint === 'GET_USERS' ? 'bg-slate-800' : 'hover:bg-slate-800/50'}`}>
             <span className="text-[10px] font-bold text-blue-400 w-8">GET</span>
             <span className="text-slate-300 text-xs truncate">/api/users</span>
           </div>
           
           <div 
             onClick={() => setActiveEndpoint('POST_LOGIN')}
             className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer transition-colors ${activeEndpoint === 'POST_LOGIN' ? 'bg-slate-800' : 'hover:bg-slate-800/50'}`}>
             <span className="text-[10px] font-bold text-emerald-400 w-8">POST</span>
             <span className="text-slate-300 text-xs truncate">/api/auth/login</span>
           </div>

           <div 
             onClick={() => setActiveEndpoint('DELETE_USER')}
             className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer transition-colors ${activeEndpoint === 'DELETE_USER' ? 'bg-slate-800' : 'hover:bg-slate-800/50'}`}>
             <span className="text-[10px] font-bold text-red-400 w-8">DEL</span>
             <span className="text-slate-300 text-xs truncate">/api/users/:id</span>
           </div>
        </div>
      </div>

      {/* Main Panel */}
      <div className="w-2/3 bg-[#0d1117] flex flex-col relative">
        {/* URL Bar */}
        <div className="flex items-center p-4 border-b border-slate-800 gap-2">
           <div className={`px-3 py-1.5 rounded border text-xs font-bold ${active.bgColor} ${active.color}`}>
             {active.method}
           </div>
           <div className="flex-1 bg-slate-900 border border-slate-700 rounded px-3 py-1.5 text-slate-300 text-xs flex items-center overflow-x-auto whitespace-nowrap scrollbar-hide">
             <span className="text-slate-500 mr-1">http://localhost:3000</span>{active.url}
           </div>
           <div className="px-4 py-1.5 bg-blue-600 hover:bg-blue-500 text-white rounded text-xs font-bold cursor-pointer transition-colors flex items-center gap-2">
             <span>Send</span>
             <Play className="w-3 h-3 fill-current" />
           </div>
        </div>
        
        <div className="flex flex-col md:flex-row flex-1 overflow-hidden">
          {/* Request Area */}
          <div className="w-full md:w-1/2 border-b md:border-b-0 md:border-r border-slate-800 flex flex-col">
            <div className="flex items-center gap-4 px-4 py-2 border-b border-slate-800 text-[10px] uppercase font-bold text-slate-500 bg-slate-900/50">
              <span className="text-blue-400 border-b-2 border-blue-400 pb-2 -mb-[9px]">Body</span>
              <span>Headers</span>
            </div>
            <div className="p-4 flex-1 overflow-y-auto text-xs text-slate-300">
               {active.reqBody ? (
                 <pre className="text-yellow-200/80 font-mono">{active.reqBody}</pre>
               ) : (
                 <span className="text-slate-600 italic">No body needed for this request.</span>
               )}
            </div>
          </div>

          {/* Response Area */}
          <div className="w-full md:w-1/2 flex flex-col bg-[#0d1117]">
            <div className="flex items-center justify-between px-4 py-2 border-b border-slate-800 text-[10px] uppercase font-bold text-slate-500 bg-slate-900/50">
              <div className="flex gap-4">
                 <span className="text-emerald-400 border-b-2 border-emerald-400 pb-2 -mb-[9px]">Response</span>
              </div>
              <div className="flex gap-3">
                 <span>Status: <span className={active.resStatusColor}>{active.resStatus}</span></span>
                 <span>Time: <span className="text-emerald-400">42ms</span></span>
              </div>
            </div>
            <div className="p-4 flex-1 overflow-y-auto text-xs text-slate-300 relative">
               <pre className="text-emerald-300/90 font-mono">{active.resBody}</pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
