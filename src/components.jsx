import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, ArrowRight, Menu, X, Sparkles, Code2, Layers3, Blocks, Linkedin, Github, Dribbble, Instagram, ArrowUp } from 'lucide-react'

const nav = [['Home','/'],['About','/about'],['Services','/services'],['Projects','/projects'],['Technologies','/technologies'],['Contact','/contact']]

export function Header() {
  const [open,setOpen] = useState(false)
  return <header className="site-header">
    <div className="nav-shell">
      <Link to="/" className="brand" onClick={()=>setOpen(false)}><span className="brand-mark"><span/></span><span>NEXORA<span className="brand-dot">.</span></span></Link>
      <nav className="desktop-nav">{nav.map(([label,path])=><NavLink key={path} to={path} end={path==='/'}>{label}</NavLink>)}</nav>
      <Link to="/contact" className="nav-cta">Let’s talk <ArrowUpRight size={15}/></Link>
      <button className="menu-toggle" onClick={()=>setOpen(!open)} aria-label="Toggle menu">{open?<X/>:<Menu/>}</button>
    </div>
    <AnimatePresence>{open && <motion.nav className="mobile-nav" initial={{opacity:0,y:-12}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-12}}>{nav.map(([label,path])=><NavLink key={path} to={path} end={path==='/'} onClick={()=>setOpen(false)}>{label}<ArrowUpRight size={17}/></NavLink>)}</motion.nav>}</AnimatePresence>
  </header>
}

export function Footer() {
  return <footer className="footer">
    <div className="footer-top"><div><Link to="/" className="brand footer-brand"><span className="brand-mark"><span/></span><span>NEXORA<span className="brand-dot">.</span></span></Link><p className="footer-intro">We turn ambitious ideas into meaningful digital experiences. The future is built together.</p></div>
      <div className="footer-col"><span className="eyebrow">EXPLORE</span><Link to="/about">About us</Link><Link to="/services">Services</Link><Link to="/projects">Our work</Link><Link to="/technologies">Technologies</Link></div>
      <div className="footer-col"><span className="eyebrow">SAY HELLO</span><Link to="/contact">Start a project <ArrowUpRight size={14}/></Link><a href="mailto:hello@nexora.example">hello@nexora.example</a><span className="muted">Available worldwide</span></div>
      <div className="footer-social"><span className="eyebrow">FOLLOW THE JOURNEY</span><div><a href="https://www.linkedin.com" aria-label="LinkedIn"><Linkedin/></a><a href="https://github.com" aria-label="GitHub"><Github/></a><a href="https://www.instagram.com" aria-label="Instagram"><Instagram/></a><a href="https://dribbble.com" aria-label="Dribbble"><Dribbble/></a></div></div>
    </div>
    <div className="footer-bottom"><span>© 2026 NEXORA STUDIO. CONCEPT PROJECT.</span><div><Link to="/privacy">Privacy policy</Link><a href="#top">Back to top ↑</a></div></div>
  </footer>
}

export function PageIntro({kicker,title,description}) {
  return <section className="page-intro"><div className="container"><span className="eyebrow">{kicker}</span><h1>{title}</h1><p>{description}</p></div></section>
}

export function SectionHeading({kicker,title,description,light=false}) {
  return <div className={`section-heading ${light?'light':''}`}><span className="eyebrow">{kicker}</span><h2>{title}</h2>{description&&<p>{description}</p>}</div>
}

export function Button({to='/contact',children,secondary=false}) {
  return <Link to={to} className={`button ${secondary?'button-secondary':''}`}>{children}<ArrowUpRight size={17}/></Link>
}

export function Orb({small=false}) {
  return <div className={`orb-wrap ${small?'orb-small':''}`} aria-label="Abstract animated 3D energy sphere">
    <div className="orb-halo"/><div className="orb-ring ring-one"/><div className="orb-ring ring-two"/><div className="orb-ring ring-three"/>
    <div className="orb"><div className="orb-shine"/><div className="orb-core"/></div>
    <div className="orb-spark spark-a"/><div className="orb-spark spark-b"/><div className="orb-spark spark-c"/>
  </div>
}

export function ServiceIcon({name}) {
  const map={code:<Code2/>,layers:<Layers3/>,sparkles:<Sparkles/>,blocks:<Blocks/>}
  return <span className="service-icon">{map[name]||<Sparkles/>}</span>
}

export function CTA({title='Have a big idea?',text='Let’s make something meaningful together.'}) {
  return <section className="cta-section container"><div className="cta-orb"><Orb small/></div><div className="cta-content"><span className="eyebrow">YOUR NEXT CHAPTER STARTS HERE</span><h2>{title}</h2><p>{text}</p><Button>Start a conversation</Button></div><div className="cta-decoration">N.</div></section>
}

export function BackToTop() {
  return <button className="back-top" onClick={()=>window.scrollTo({top:0,behavior:'smooth'})} aria-label="Back to top"><ArrowUp size={17}/></button>
}
