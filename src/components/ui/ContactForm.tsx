"use client";

import { useState } from "react";
import { Send } from "lucide-react";

interface ContactFormProps {
  showSubject?: boolean;
  className?: string;
}

export default function ContactForm({ showSubject = false, className }: ContactFormProps) {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className={className}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm text-gray-500 mb-1.5 ml-1">Name</label>
          <input
            required
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-5 py-3 rounded-xl bg-gray-50 border border-gray-100 text-sm text-primary placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/30 transition-all"
            placeholder="Ihr Name"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-500 mb-1.5 ml-1">E-Mail</label>
          <input
            required
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-5 py-3 rounded-xl bg-gray-50 border border-gray-100 text-sm text-primary placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/30 transition-all"
            placeholder="ihre@email.de"
          />
        </div>
      </div>

      {showSubject && (
        <div className="mb-4">
          <label className="block text-sm text-gray-500 mb-1.5 ml-1">Betreff</label>
          <input
            type="text"
            value={formData.subject}
            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
            className="w-full px-5 py-3 rounded-xl bg-gray-50 border border-gray-100 text-sm text-primary placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/30 transition-all"
            placeholder="Worum geht es?"
          />
        </div>
      )}

      <div className="mb-6">
        <label className="block text-sm text-gray-500 mb-1.5 ml-1">Nachricht</label>
        <textarea
          required
          rows={5}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-5 py-3 rounded-xl bg-gray-50 border border-gray-100 text-sm text-primary placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/30 transition-all resize-none"
          placeholder="Ihre Nachricht an uns..."
        />
      </div>

      <div className="flex items-center justify-between">
        <p className="text-xs text-gray-400 hidden sm:block">
          Wir antworten in der Regel innerhalb von 48 Stunden.
        </p>
        <button
          type="submit"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-primary text-white font-semibold text-sm hover:scale-105 active:scale-[0.97] transition-all duration-300"
        >
          <Send className="w-4 h-4" />
          Absenden
        </button>
      </div>
    </form>
  );
}
