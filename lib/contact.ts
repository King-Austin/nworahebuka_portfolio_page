export function buildOutreachMailto({ name, email, message }: { name: string; email: string; message: string }) {
  const subject = `Engineering opportunity or enquiry from ${name.trim()}`;
  const body = `Hello Nworah,\n\nMy name is ${name.trim()}.\nReply to: ${email.trim()}\n\nRole, team or project details:\n${message.trim()}\n\nBest,\n${name.trim()}`;
  return `mailto:nworahebuka.a@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
