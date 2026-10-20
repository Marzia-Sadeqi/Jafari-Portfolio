import Reveal from "./Reveal.jsx";

export default function SectionHeading({ label, title, text, center = true }) {
  return (
    <div className={`mx-auto mb-12 max-w-2xl ${center ? "text-center" : ""}`}>
      <Reveal><p className="label">{label}</p></Reveal>
      <Reveal delay={0.08}><h2 className="title mt-3">{title}</h2></Reveal>
      {text && <Reveal delay={0.16}><p className="mt-4 text-base leading-relaxed text-brown">{text}</p></Reveal>}
    </div>
  );
}
