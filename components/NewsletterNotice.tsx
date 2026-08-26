import { siteIdentity } from "../lib/site";
import "./newsletter.css";

export default function NewsletterNotice() {
  const subject = encodeURIComponent("FlyPig Industry Signals launch notice");

  return <div className="newsletter-notice">
    <p className="newsletter-label">Briefing access</p>
    <p className="form-message">Email delivery is being finalized. Until the event-driven subscription service is live, request a launch notice directly from the editorial desk.</p>
    <a className="pill primary" href={`mailto:${siteIdentity.email}?subject=${subject}`}>Request launch notice</a>
  </div>;
}
