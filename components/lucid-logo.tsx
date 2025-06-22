"use client"

export function LucidLogo() {
  return (
    <div className="fixed top-[52px] left-6 z-50 flex flex-col items-center">
      <div className="relative group">
        {/* Replace the animated div with your logo image */}
        <img
          src="/your-logo.png" // <-- Replace with your logo file path
          alt="Lucid Logo"
          className="w-12 h-12 rounded-lg shadow-lg"
        />
        <div className="absolute left-1/2 top-full mt-2 -translate-x-1/2 px-3 py-1 bg-black text-white text-xs rounded opacity-90 group-hover:opacity-100 transition">
          LUCID
        </div>
        {/* Glow effect */}
        <div className="absolute inset-0 rounded-lg pointer-events-none" style={{ boxShadow: "0 0 40px 10px #f59e42" }} />
      </div>
    </div>
  )
}
