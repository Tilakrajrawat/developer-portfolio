"use client";
import { useState } from "react";
import { Send } from "lucide-react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (res.ok) {
        setStatus("sent");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
             <label className="text-sm text-neutral-500 ml-2">Name</label>
             <input 
               required 
               value={name}
               onChange={(e) => setName(e.target.value)}
               placeholder="John Doe" 
               className="w-full bg-[var(--input-bg)] border border-[var(--input-border)] rounded-2xl p-4 text-[var(--text-primary)] placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
             />
          </div>
          <div className="space-y-2">
             <label className="text-sm text-neutral-500 ml-2">Email</label>
             <input 
               required 
               type="email" 
               value={email}
               onChange={(e) => setEmail(e.target.value)}
               placeholder="john@example.com" 
               className="w-full bg-[var(--input-bg)] border border-[var(--input-border)] rounded-2xl p-4 text-[var(--text-primary)] placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
             />
          </div>
        </div>
        
        <div className="space-y-2">
           <label className="text-sm text-neutral-500 ml-2">Message</label>
           <textarea 
             required 
             value={message}
             onChange={(e) => setMessage(e.target.value)}
             rows={6} 
             placeholder="Tell me about your project..." 
             className="w-full bg-[var(--input-bg)] border border-[var(--input-border)] rounded-2xl p-4 text-[var(--text-primary)] placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all resize-none"
           />
        </div>
      </div>

      <div className="mt-8 flex justify-end">
        <button 
          disabled={status === "sending" || status === "sent"}
          className="flex items-center gap-2 px-10 py-4 rounded-full bg-black dark:bg-white text-white dark:text-black font-semibold hover:scale-105 active:scale-95 transition-all disabled:opacity-50 disabled:scale-100"
        >
          {status === "sending" ? "Sending..." : status === "sent" ? "Message Sent!" : status === "error" ? "Try Again" : (
            <>
              Send Message <Send size={18} />
            </>
          )}
        </button>
      </div>
    </form>
  );
}
