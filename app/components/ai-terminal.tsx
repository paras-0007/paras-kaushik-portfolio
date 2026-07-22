"use client";

import { useEffect, useRef, useState, type FormEvent, type KeyboardEvent } from "react";
import { runCommand, suggestedCommands, type TerminalResponse } from "../lib/terminal-commands";

type Entry = { command: string; response: TerminalResponse };

const WELCOME: TerminalResponse = {
  title: "paras@portfolio:~$",
  lines: ["Ask me anything about my work - type a command or tap a suggestion below.", "Try: projects · experience · skills · achievements · contact"],
};

export function AiTerminal() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<Entry[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const outputRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKeyDown(event: globalThis.KeyboardEvent) {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen((v) => !v);
      } else if (event.key === "Escape") {
        setOpen(false);
      }
    }
    function onExternalToggle() {
      setOpen((v) => !v);
    }
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("toggle-ai-terminal", onExternalToggle);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("toggle-ai-terminal", onExternalToggle);
    };
  }, []);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  useEffect(() => {
    if (outputRef.current) outputRef.current.scrollTop = outputRef.current.scrollHeight;
  }, [history]);

  function execute(command: string) {
    const trimmed = command.trim();
    if (!trimmed) return;
    setHistory((prev) => [...prev, { command: trimmed, response: runCommand(trimmed) }]);
    setInput("");
  }

  function submit(event: FormEvent) {
    event.preventDefault();
    execute(input);
  }

  function trapTab(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key !== "Tab" || !modalRef.current) return;
    const focusable = modalRef.current.querySelectorAll<HTMLElement>("input, button, a[href]");
    if (focusable.length === 0) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }

  return (
    <>
      <button className="ai-terminal-trigger" onClick={() => setOpen(true)} aria-haspopup="dialog" aria-expanded={open}>
        <span className="dot" aria-hidden="true" />
        <span className="label">Ask my AI resume</span>
        <kbd>&#8984;K</kbd>
      </button>

      {open && (
        <div className="ai-terminal-overlay" role="presentation" onClick={() => setOpen(false)}>
          <div
            className="ai-terminal-modal"
            role="dialog"
            aria-modal="true"
            aria-label="AI resume terminal"
            ref={modalRef}
            onClick={(event) => event.stopPropagation()}
            onKeyDown={trapTab}
          >
            <div className="ai-terminal-titlebar">
              <span /><span /><span />
              <strong>paras-resume — zsh</strong>
            </div>

            <div className="ai-terminal-output" ref={outputRef}>
              {[{ command: "", response: WELCOME }, ...history].map((entry, i) => (
                <div className="ai-terminal-entry" key={i}>
                  {entry.command && <p className="cmd-line"><b>&gt;</b> {entry.command}</p>}
                  <p className="cmd-title">{entry.response.title}</p>
                  <ul>
                    {entry.response.lines.map((line, j) => (
                      <li key={j}>{line}</li>
                    ))}
                  </ul>
                  {entry.response.links && (
                    <div className="cmd-links">
                      {entry.response.links.map((link) => (
                        <a key={link.href} href={link.href} target={link.href.startsWith("http") ? "_blank" : undefined} rel={link.href.startsWith("http") ? "noreferrer" : undefined}>
                          {link.label} ↗
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="ai-terminal-suggestions">
              {suggestedCommands.map((cmd) => (
                <button key={cmd} type="button" onClick={() => execute(cmd)}>
                  {cmd}
                </button>
              ))}
            </div>

            <form className="ai-terminal-form" onSubmit={submit}>
              <span>&gt;</span>
              <input
                ref={inputRef}
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder="Type a command... (try 'projects')"
                autoComplete="off"
                spellCheck={false}
                aria-label="Terminal command input"
              />
            </form>
          </div>
        </div>
      )}
    </>
  );
}
