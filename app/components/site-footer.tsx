import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>© 2026 Paras Kaushik · AI Engineer &amp; Product Founder</p>
        <div><Link href="/hire">Hire Me</Link><Link href="/consulting">Consulting</Link><a href="https://www.linkedin.com/in/paraskaushik07" target="_blank" rel="noreferrer">LinkedIn</a></div>
      </div>
    </footer>
  );
}
