"use client";

import { FormEvent } from "react";
import { ArrowUpRight, Github, Linkedin, Mail, Send } from "lucide-react";
import { buildOutreachMailto } from "@/lib/contact";

const email = "nworahebuka.a@gmail.com";

export function ContactSection() {
  function composeEmail(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    window.location.href = buildOutreachMailto({ name: String(form.get("name") ?? "").trim(), email: String(form.get("email") ?? "").trim(), message: String(form.get("message") ?? "").trim() });
  }

  return <section className="section-shell outreach" id="contact"><div className="outreach-intro"><p className="section-number">08 / Get in touch</p><h2>Looking for a backend developer?</h2><p>I’m open to full-time backend and software-development roles, as well as thoughtful engineering collaborations. If my experience fits your team, send me the role or problem you are hiring for.</p><div className="direct-channels"><span>Contact and professional profiles</span><a href={`mailto:${email}?subject=Backend%20engineering%20opportunity`}><Mail size={16} /> Email me <ArrowUpRight size={15} /></a><a href="https://www.linkedin.com/in/nworah-ebuka" target="_blank" rel="noreferrer"><Linkedin size={16} /> LinkedIn <ArrowUpRight size={15} /></a><a href="https://github.com/King-Austin" target="_blank" rel="noreferrer"><Github size={16} /> GitHub <ArrowUpRight size={15} /></a></div></div><form className="outreach-form" onSubmit={composeEmail}><div className="form-row"><label><span>01 · Your name</span><input name="name" autoComplete="name" placeholder="Your name" required /></label><label><span>02 · Your email</span><input name="email" type="email" autoComplete="email" placeholder="you@company.com" required /></label></div><label><span>03 · Your message</span><textarea name="message" rows={7} placeholder="Tell me about the role, your team or the problem you need help solving." required minLength={20} /></label><button className="button" type="submit"><Send size={16} /> Prepare email</button><small>Opens a message addressed to {email}.</small></form></section>;
}
