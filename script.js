(function(){
'use strict';
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------- Cursor glow (desktop only) ---------- */
const glow = document.getElementById('cursor-glow');
if (window.matchMedia('(pointer: fine)').matches && !reduceMotion) {
  let tx = innerWidth/2, ty = innerHeight/3, x = tx, y = ty;
  addEventListener('mousemove', e => { tx = e.clientX; ty = e.clientY; });
  (function loop(){
    x += (tx - x) * .08; y += (ty - y) * .08;
    glow.style.transform = `translate(${x - 260}px, ${y - 260}px)`;
    requestAnimationFrame(loop);
  })();
} else { glow.style.display = 'none'; }

/* ---------- Nav: scrolled state + progress bar ---------- */
const nav = document.getElementById('nav');
addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', scrollY > 40);
}, { passive: true });

/* ---------- Mobile menu ---------- */
const menuBtn = document.getElementById('menu-btn');
const navLinks = document.getElementById('nav-links');
menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('open');
  navLinks.classList.toggle('open');
});
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  menuBtn.classList.remove('open');
  navLinks.classList.remove('open');
}));

/* ---------- Active nav link ---------- */
const sections = [...document.querySelectorAll('section[id]')];
const linkMap = {};
navLinks.querySelectorAll('a[href^="#"]:not(.nav-cta)').forEach(a => linkMap[a.getAttribute('href').slice(1)] = a);
const activeObs = new IntersectionObserver(entries => {
  entries.forEach(en => {
    if (en.isIntersecting && linkMap[en.target.id]) {
      Object.values(linkMap).forEach(a => a.classList.remove('active'));
      linkMap[en.target.id].classList.add('active');
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });
sections.forEach(s => activeObs.observe(s));

/* ---------- Scroll reveal with stagger ---------- */
const revealObs = new IntersectionObserver(entries => {
  entries.forEach(en => {
    if (en.isIntersecting) {
      en.target.classList.add('visible');
      revealObs.unobserve(en.target);
    }
  });
}, { threshold: .12, rootMargin: '0px 0px -40px 0px' });
document.querySelectorAll('.reveal').forEach((el, i) => {
  const siblings = el.parentElement ? [...el.parentElement.children].filter(c => c.classList.contains('reveal')) : [el];
  el.style.transitionDelay = (siblings.indexOf(el) * 90) + 'ms';
  revealObs.observe(el);
});

/* ---------- Typewriter ---------- */
const words = [
  'fine-tune VLMs for handwritten OCR',
  'build agentic RAG pipelines',
  'cut grading costs by 80%',
  'ship real-time voice AI',
  'grade 300K+ answer sheets with AI'
];
const tw = document.getElementById('typewriter');
if (tw && reduceMotion) { tw.textContent = words[0]; }
else if (tw) {
  let wi = 0, ci = 0, deleting = false;
  (function type(){
    const word = words[wi];
    tw.textContent = word.slice(0, ci);
    let delay = deleting ? 32 : 62;
    if (!deleting && ci === word.length) { delay = 2100; deleting = true; }
    else if (deleting && ci === 0) { deleting = false; wi = (wi + 1) % words.length; delay = 420; }
    ci += deleting ? -1 : 1;
    setTimeout(type, delay);
  })();
}

/* ---------- Animated counters ---------- */
function animateCount(el){
  const target = parseFloat(el.dataset.target);
  const decimals = parseInt(el.dataset.decimals || '0', 10);
  const suffix = el.dataset.suffix || '';
  if (reduceMotion) { el.textContent = target.toFixed(decimals) + suffix; return; }
  const dur = 1600, t0 = performance.now();
  (function step(now){
    const p = Math.min((now - t0) / dur, 1);
    const eased = 1 - Math.pow(1 - p, 3);
    el.textContent = (target * eased).toFixed(decimals) + suffix;
    if (p < 1) requestAnimationFrame(step);
  })(performance.now());
}
const countObs = new IntersectionObserver(entries => {
  entries.forEach(en => {
    if (en.isIntersecting) { animateCount(en.target); countObs.unobserve(en.target); }
  });
}, { threshold: .6 });
document.querySelectorAll('.count').forEach(el => countObs.observe(el));

/* ---------- 3D tilt + glare on project cards ---------- */
if (window.matchMedia('(pointer: fine)').matches && !reduceMotion) {
  document.querySelectorAll('.tilt').forEach(card => {
    const glare = card.querySelector('.glare');
    card.addEventListener('mousemove', e => {
      const r = card.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width;
      const py = (e.clientY - r.top) / r.height;
      card.style.transform = `perspective(900px) rotateY(${(px - .5) * 2.5}deg) rotateX(${(.5 - py) * 2.5}deg) translateY(-2px)`;
      if (glare) { glare.style.setProperty('--gx', (px * 100) + '%'); glare.style.setProperty('--gy', (py * 100) + '%'); }
    });
    card.addEventListener('mouseleave', () => { card.style.transform = ''; });
  });
}

/* ---------- Magnetic portrait ---------- */
const pf = document.getElementById('portrait');
if (pf && window.matchMedia('(pointer: fine)').matches && !reduceMotion) {
  const heroSec = document.getElementById('hero');
  heroSec.addEventListener('mousemove', e => {
    const r = pf.getBoundingClientRect();
    const dx = e.clientX - (r.left + r.width / 2);
    const dy = e.clientY - (r.top + r.height / 2);
    const pull = Math.max(0, 1 - Math.hypot(dx, dy) / 620);
    pf.style.transform = `translate(${dx * pull * .05}px, ${dy * pull * .05}px) perspective(700px) rotateY(${dx * pull * .014}deg) rotateX(${-dy * pull * .014}deg)`;
  });
  heroSec.addEventListener('mouseleave', () => { pf.style.transform = ''; });
}

/* ---------- Marquee: duplicate content for seamless loop ---------- */
['mq1','mq2'].forEach(id => {
  const mq = document.getElementById(id);
  if (mq) mq.innerHTML += mq.innerHTML;
});

/* ---------- AI resume terminal ---------- */
const overlay = document.getElementById('ai-overlay');
const aiLog = document.getElementById('ai-log');
const aiInput = document.getElementById('ai-input');
const KB = [
  { keys: ['gradesmith','grading','grade','answer sheet','university','ccsu'], a: "GradeSmith is a national-scale AI grading platform Paras architected at Infutrix. Its OCR pipeline has processed 300,000+ handwritten answer sheets across 20+ subjects, deployed at universities including CCSU. He fine-tuned Qwen-VL with struck-through-text exclusion (CER 20% → 8%), built CV–LLM pipelines with rubric-aware partial-credit grading and explainable feedback, and cut grading costs 80% (Rs 2 → Rs 0.4/page) at 97.5% accuracy and 60 sheets/minute." },
  { keys: ['flashr','study','exam','upsc','flashcard'], a: "Flashr (flashrapp.in) is an AI-native retention platform for India's competitive exams (UPSC, JEE, NEET, GATE, CAT, SSC), built at QuietGradient — the studio Paras co-founded. OCR-driven flashcard & MCQ generation on Gemini Flash, an SM-2 spaced-repetition scheduler, and a live Duel Arena — shipped end-to-end on React Native (Expo) + Supabase with freemium subscriptions. Currently in closed testing on Google Play." },
  { keys: ['quietgradient','quiet gradient','company','startup','studio'], a: "QuietGradient (quietgradient.com) is the product studio Paras co-founded. Its first product is Flashr (flashrapp.in), an AI-native exam-prep platform. Paras leads the AI side — ingestion pipelines, fine-tuned LLMs, and adaptive learning systems." },
  { keys: ['hirefl','recruit','interview','hr','resume parsing'], a: "Hirefl.ai is an AI recruitment platform Paras built at Infutrix: LLaMA-based resume parsing & screening, a real-time STT/TTS voice interview engine, and automated scoring — cutting HR workload by 70%." },
  { keys: ['kairos','multi-agent','prince','voice assistant'], a: "KAIROS is a modular multi-agent AI platform Paras architected — a fine-tuned conversational engine for multi-document Q&A, the PRINCE real-time voice assistant, OCR document intelligence, multilingual translation, and QR workflows. 7+ AI capabilities under one agent architecture, accelerating knowledge workflows by 40%+." },
  { keys: ['ocr','handwriting','handwritten','qwen','cer','vlm'], a: "Handwritten OCR is Paras's specialty. In GradeSmith he fine-tuned Qwen-VL with struck-through-text exclusion, cutting CER from 20% to 8% on noisy student answer sheets at 97.5% accuracy. He also built ScriptSeg — a multi-stage detection suite for character localization, word/space segmentation, line-level OCR, and cutting detection (92% accuracy)." },
  { keys: ['scriptseg','script seg','segmentation','cutting detection','strikethrough'], a: "ScriptSeg is a multi-stage handwritten-OCR detection suite Paras built (May–Jun 2025): specialized models for character-level localization, word/space segmentation, line-level OCR, and cutting/strikethrough detection — achieving 92% accuracy on cutting detection." },
  { keys: ['experience','job','career','infutrix','intern','history'], a: "Experience:\n▹ AI Engineer @ Infutrix (Jun 2025 – Present, Mohali) — GradeSmith, Hirefl.ai, agentic LLM pipelines\n▹ AI & Cloud Intern @ AICTE Edunet Foundation (2024) — IBM Watson chatbot, production-deployed\n▹ Data Analyst Intern @ Dataplay (2024) — Power BI dashboards\n▹ Co-founder @ QuietGradient (Feb 2026 – Present) — building Flashr" },
  { keys: ['skill','stack','tool','tech','library','framework','language'], a: "Tech stack:\n▹ AI/ML — Computer Vision, OCR, LLMs, VLMs, RAG, Agentic AI, SFT/RFT/GRPO\n▹ Libraries — PyTorch, TensorFlow, LangChain, LlamaIndex, FAISS, OpenCV, Hugging Face, YOLO, vLLM, Pipecat\n▹ Deployment — FastAPI, Docker, AWS, GCP, RunPod, Vast.ai, CI/CD, Cloudflare\n▹ APIs — OpenAI, Gemini, IBM Watson, STT/TTS" },
  { keys: ['education','college','degree','cgpa','btech','mait'], a: "B.Tech in Computer Science Engineering from MAIT, Baddi (2021–2025) with a 9.23 CGPA. Plus certifications: Deep Learning & ML Specializations (Andrew Ng), Google Data Analyst Professional, and DSA Specialization." },
  { keys: ['achievement','award','summit','hackathon','ideathon','recognition'], a: "Highlights:\n▹ AI Summit 2026, Delhi — presented GradeSmith to 500+ industry professionals\n▹ Ideathon 1st Place — Tongue Driven System (TDS) wheelchair\n▹ Smart India Hackathon — Track-VAHAN, IoT accident detection & emergency alerts" },
  { keys: ['contact','email','phone','reach','hire','linkedin','available'], a: "Reach Paras at:\n▹ paraskaushik862@gmail.com\n▹ +91 92154 60007\n▹ linkedin.com/in/paraskaushik07\nHe's open to AI engineering roles, consulting, and collaborations." },
  { keys: ['who','about','paras','yourself','summary','intro'], a: "Paras Kaushik is an AI Engineer with 2+ years deploying end-to-end AI across Computer Vision, LLM/VLM fine-tuning, and RAG systems. He architected GradeSmith (national-scale AI grading) and co-founded QuietGradient, the studio behind Flashr (AI-native EdTech). His thing: turning AI research into production systems with measurable numbers attached." },
  { keys: ['hello','hi ','hey','yo '], a: "Hey! I'm a terminal trained on Paras's resume. Ask me about GradeSmith, Flashr, his tech stack, experience, or how to get in touch." },
  { keys: ['help','what can'], a: "Try asking:\n▹ \"What is GradeSmith?\"\n▹ \"What's your tech stack?\"\n▹ \"Tell me about your experience\"\n▹ \"How do I contact you?\"\nOr type `clear` to reset the terminal." },
];
function aiAnswer(q){
  const s = (' ' + q.toLowerCase() + ' ');
  let best = null, bestScore = 0;
  for (const entry of KB) {
    const score = entry.keys.filter(k => s.includes(k)).length;
    if (score > bestScore) { bestScore = score; best = entry; }
  }
  return best ? best.a : "That one's outside my training data. Try asking about GradeSmith, Flashr, skills, experience, education, achievements — or type `help`.";
}
function addMsg(who, text, typed){
  const div = document.createElement('div');
  div.className = 'ai-msg' + (who === 'you' ? ' user' : '');
  const p = document.createElement('p');
  div.innerHTML = '<span class="who">' + (who === 'you' ? 'you' : 'paras-ai') + ' ›</span> ';
  div.appendChild(p);
  aiLog.appendChild(div);
  if (typed && !reduceMotion) {
    let i = 0;
    (function tick(){
      p.textContent = text.slice(0, ++i);
      aiLog.scrollTop = aiLog.scrollHeight;
      if (i < text.length) setTimeout(tick, 9);
    })();
  } else {
    p.textContent = text;
    aiLog.scrollTop = aiLog.scrollHeight;
  }
}
function ask(q){
  q = q.trim();
  if (!q) return;
  if (q.toLowerCase() === 'clear') { aiLog.innerHTML = ''; greet(); return; }
  addMsg('you', q, false);
  setTimeout(() => addMsg('ai', aiAnswer(q), true), 260);
}
function greet(){
  addMsg('ai', "Hi — I'm a terminal trained on Paras's resume. Ask about his work, stack, projects, or how to reach him.", true);
}
let greeted = false;
function openAI(){
  overlay.classList.add('open');
  overlay.setAttribute('aria-hidden', 'false');
  if (!greeted) { greeted = true; greet(); }
  setTimeout(() => aiInput.focus(), 120);
}
function closeAI(){
  overlay.classList.remove('open');
  overlay.setAttribute('aria-hidden', 'true');
}
document.getElementById('ai-open').addEventListener('click', openAI);
const aiHeroBtn = document.getElementById('ai-open-hero');
if (aiHeroBtn) aiHeroBtn.addEventListener('click', openAI);
document.getElementById('ai-close').addEventListener('click', closeAI);
overlay.addEventListener('click', e => { if (e.target === overlay) closeAI(); });
addEventListener('keydown', e => {
  if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); overlay.classList.contains('open') ? closeAI() : openAI(); }
  if (e.key === 'Escape') closeAI();
});
aiInput.addEventListener('keydown', e => {
  if (e.key === 'Enter') { ask(aiInput.value); aiInput.value = ''; }
});
document.getElementById('ai-suggest').addEventListener('click', e => {
  const b = e.target.closest('button[data-q]');
  if (b) ask(b.dataset.q);
});
document.querySelectorAll('.ask-proj').forEach(b => {
  b.addEventListener('click', () => {
    const wasGreeted = greeted;
    openAI();
    setTimeout(() => ask(b.dataset.q), wasGreeted ? 250 : 1100);
  });
});

/* ---------- Copy email ---------- */
const toast = document.getElementById('toast');
let toastTimer;
function showToast(msg) {
  if (!toast) return;
  toast.innerHTML = '<span class="ok">✓</span> ' + msg;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 3200);
}
const copyBtn = document.getElementById('copy-email');
if (copyBtn) copyBtn.addEventListener('click', async () => {
  try { await navigator.clipboard.writeText('paraskaushik862@gmail.com'); }
  catch {
    const ta = document.createElement('textarea');
    ta.value = 'paraskaushik862@gmail.com';
    document.body.appendChild(ta); ta.select();
    document.execCommand('copy'); ta.remove();
  }
  showToast('Email copied to clipboard');
});

/* ---------- Contact form: direct delivery via FormSubmit, mailto fallback ---------- */
const cform = document.getElementById('contact-form');
if (cform) cform.addEventListener('submit', async e => {
  e.preventDefault();
  const nameEl = document.getElementById('cf-name');
  const emailEl = document.getElementById('cf-email');
  const msgEl = document.getElementById('cf-msg');
  const honey = document.getElementById('cf-honey');
  const topic = document.getElementById('cf-topic').value;
  const name = nameEl.value.trim();
  const email = emailEl.value.trim();
  const msg = msgEl.value.trim();
  if (!name) { nameEl.focus(); return; }
  if (!email || !email.includes('@')) { emailEl.focus(); return; }
  if (!msg) { msgEl.focus(); return; }
  if (honey && honey.value) return;
  const btn = cform.querySelector('.form-submit');
  const orig = btn.innerHTML;
  btn.disabled = true;
  btn.textContent = 'Sending…';
  try {
    const res = await fetch('https://formsubmit.co/ajax/paraskaushik862@gmail.com', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify({
        name: name,
        email: email,
        topic: topic,
        message: msg,
        _subject: '[Portfolio] ' + topic + ' — ' + name,
        _template: 'table',
        _captcha: 'false'
      })
    });
    if (!res.ok) throw new Error('HTTP ' + res.status);
    cform.reset();
    showToast("Message sent — I'll reply soon");
  } catch (err) {
    const subject = encodeURIComponent('[Portfolio] ' + topic + ' — ' + name);
    const body = encodeURIComponent(msg + '\n\n— ' + name + ' <' + email + '>');
    location.href = 'mailto:paraskaushik862@gmail.com?subject=' + subject + '&body=' + body;
    showToast('Direct send failed — opened your email app instead');
  } finally {
    btn.disabled = false;
    btn.innerHTML = orig;
  }
});

/* ---------- Theme toggle ---------- */
document.getElementById('theme-btn').addEventListener('click', () => {
  const next = document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', next);
  try { localStorage.setItem('theme', next); } catch (e) {}
});
})();

