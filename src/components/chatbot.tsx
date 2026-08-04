"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Loader2, Mic, Send, Volume2, VolumeX, X } from "lucide-react";

type ChatMessage = { role: "user" | "assistant"; content: string };

const WELCOME_MESSAGE =
  "Hi, I'm Pandi 🐼 — Eda's assistant. Ask me about her projects, interests, achievements, or goals. You can type, or tap the mic and just talk to me.";

const SUGGESTED_QUESTIONS = [
  "What's her biggest achievement?",
  "What projects has she worked on?",
  "What are her future goals?",
];

const ERROR_FALLBACK =
  "Can't generate a response right now. Please try again in a few seconds.";

type SpeechRecognitionResultLike = { transcript: string };
type SpeechRecognitionEventLike = { results: SpeechRecognitionResultLike[][] };
type SpeechRecognitionLike = {
  lang: string;
  interimResults: boolean;
  continuous: boolean;
  onresult: ((e: SpeechRecognitionEventLike) => void) | null;
  onerror: (() => void) | null;
  onend: (() => void) | null;
  start: () => void;
  stop: () => void;
};
type SpeechWindow = Window & {
  SpeechRecognition?: new () => SpeechRecognitionLike;
  webkitSpeechRecognition?: new () => SpeechRecognitionLike;
};

export function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [listening, setListening] = useState(false);
  const [speakEnabled, setSpeakEnabled] = useState(false);
  const [support, setSupport] = useState({ voice: false, speech: false });
  const { voice: voiceSupported, speech: speechSupported } = support;

  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const recognitionRef = useRef<SpeechRecognitionLike | null>(null);
  const spokenCountRef = useRef(0);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, loading, error]);

  useEffect(() => {
    // Browser-only feature detection: must run post-hydration, window is
    // unavailable during SSR so this can't be a lazy useState initializer.
    const w = window as SpeechWindow;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setSupport({
      voice: !!(w.SpeechRecognition || w.webkitSpeechRecognition),
      speech: "speechSynthesis" in window,
    });
  }, []);

  useEffect(() => {
    if (!speakEnabled) return;
    const last = messages[messages.length - 1];
    if (!last || last.role !== "assistant") return;
    if (messages.length <= spokenCountRef.current) return;
    spokenCountRef.current = messages.length;
    const utterance = new SpeechSynthesisUtterance(last.content);
    utterance.rate = 1.02;
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
  }, [messages, speakEnabled]);

  async function sendMessage(text: string) {
    const trimmed = text.trim();
    if (!trimmed || loading) return;

    const history = messages;
    setMessages((prev) => [...prev, { role: "user", content: trimmed }]);
    setInput("");
    setError(null);
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: trimmed, history }),
      });
      const data = await res.json();

      if (!res.ok || !data.reply) {
        setError(data.error || ERROR_FALLBACK);
      } else {
        setMessages((prev) => [...prev, { role: "assistant", content: data.reply }]);
      }
    } catch {
      setError(ERROR_FALLBACK);
    } finally {
      setLoading(false);
    }
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    sendMessage(input);
  }

  function toggleListening() {
    if (listening) {
      recognitionRef.current?.stop();
      return;
    }
    const w = window as SpeechWindow;
    const Ctor = w.SpeechRecognition || w.webkitSpeechRecognition;
    if (!Ctor) return;

    const recognition = new Ctor();
    recognition.lang = "en-US";
    recognition.interimResults = false;
    recognition.continuous = false;
    recognition.onresult = (e) => {
      const transcript = e.results[0]?.[0]?.transcript;
      if (transcript) sendMessage(transcript);
    };
    recognition.onerror = () => setListening(false);
    recognition.onend = () => setListening(false);
    recognitionRef.current = recognition;
    setListening(true);
    recognition.start();
  }

  return (
    <>
      <motion.button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close chat" : "Chat with Pandi about Eda"}
        aria-expanded={open}
        whileTap={{ scale: 0.92 }}
        className="fixed bottom-4 right-4 z-50 flex h-13 w-13 items-center justify-center rounded-full border border-surface1 bg-surface0/90 text-xl shadow-[0_10px_30px_rgba(0,0,0,0.45)] backdrop-blur-md transition-colors hover:bg-surface1 sm:bottom-6 sm:right-6"
      >
        {open ? <X size={20} className="text-mauve" /> : <span role="img" aria-hidden>🐼</span>}
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.97 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            role="dialog"
            aria-label="Chat with Pandi about Eda"
            className="fixed inset-x-3 bottom-20 top-20 z-50 flex flex-col overflow-hidden rounded-2xl border border-surface1 bg-surface0/95 shadow-[0_20px_60px_rgba(0,0,0,0.55)] backdrop-blur-md sm:inset-x-auto sm:top-auto sm:bottom-24 sm:right-6 sm:h-[32rem] sm:w-96"
          >
            <div className="flex items-center justify-between border-b border-surface1 px-4 py-3">
              <span className="flex items-center gap-2 text-[0.9rem] font-bold text-foreground">
                <span role="img" aria-hidden>🐼</span>
                Pandi
              </span>
              <div className="flex items-center gap-1">
                {speechSupported && (
                  <button
                    type="button"
                    onClick={() => setSpeakEnabled((v) => {
                      if (v) window.speechSynthesis.cancel();
                      return !v;
                    })}
                    aria-label={speakEnabled ? "Turn off spoken replies" : "Turn on spoken replies"}
                    aria-pressed={speakEnabled}
                    className={`flex h-7 w-7 items-center justify-center rounded-full transition-colors hover:bg-surface1 ${
                      speakEnabled ? "text-mauve" : "text-subtext1"
                    }`}
                  >
                    {speakEnabled ? <Volume2 size={15} /> : <VolumeX size={15} />}
                  </button>
                )}
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close chat"
                  className="flex h-7 w-7 items-center justify-center rounded-full text-subtext1 transition-colors hover:bg-surface1 hover:text-mauve"
                >
                  <X size={16} />
                </button>
              </div>
            </div>

            <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-3">
              <ChatBubble role="assistant" content={WELCOME_MESSAGE} />
              {messages.map((m, i) => (
                <ChatBubble key={i} role={m.role} content={m.content} />
              ))}

              {messages.length === 0 && (
                <div className="flex flex-col items-start gap-1.5 pt-1">
                  {SUGGESTED_QUESTIONS.map((q) => (
                    <button
                      key={q}
                      type="button"
                      onClick={() => sendMessage(q)}
                      className="rounded-full border border-surface1 bg-surface1/50 px-3 py-1.5 text-[0.78rem] text-subtext1 transition-colors hover:border-mauve hover:text-mauve"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              )}

              {loading && (
                <div className="flex items-center gap-2 text-[0.8rem] text-subtext0">
                  <Loader2 size={14} className="animate-spin" />
                  Pandi is thinking…
                </div>
              )}

              {error && (
                <div className="rounded-xl border border-red/30 bg-red/10 px-3 py-2 text-[0.8rem] text-red">
                  {error}
                </div>
              )}
            </div>

            <form onSubmit={handleSubmit} className="flex items-center gap-2 border-t border-surface1 p-3">
              {voiceSupported && (
                <button
                  type="button"
                  onClick={toggleListening}
                  disabled={loading}
                  aria-label={listening ? "Stop listening" : "Ask by voice"}
                  aria-pressed={listening}
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-colors disabled:opacity-50 ${
                    listening
                      ? "animate-pulse border-red bg-red/15 text-red"
                      : "border-surface1 bg-surface0/60 text-subtext1 hover:text-mauve"
                  }`}
                >
                  <Mic size={15} />
                </button>
              )}
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={listening ? "Listening…" : "Ask a question…"}
                aria-label="Your question"
                disabled={loading}
                className="w-full rounded-full border border-surface1 bg-surface0/60 px-3.5 py-2 text-[0.85rem] text-foreground outline-none focus:outline-2 focus:outline-mauve focus:outline-offset-1 disabled:opacity-60"
              />
              <button
                type="submit"
                disabled={loading || !input.trim()}
                aria-label="Send"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-pink to-mauve text-crust transition-transform hover:-translate-y-0.5 disabled:pointer-events-none disabled:opacity-50"
              >
                <Send size={15} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function ChatBubble({ role, content }: ChatMessage) {
  const isUser = role === "user";
  return (
    <div className={`flex items-end gap-1.5 ${isUser ? "justify-end" : "justify-start"}`}>
      {!isUser && (
        <span className="mb-0.5 flex h-5 w-5 shrink-0 items-center justify-center text-sm" aria-hidden>
          🐼
        </span>
      )}
      <p
        className={`max-w-[80%] whitespace-pre-wrap rounded-2xl px-3.5 py-2 text-[0.85rem] leading-snug ${
          isUser
            ? "bg-gradient-to-r from-pink to-mauve text-crust"
            : "bg-surface1 text-foreground"
        }`}
      >
        {content}
      </p>
    </div>
  );
}
