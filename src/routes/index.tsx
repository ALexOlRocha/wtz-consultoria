import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, ArrowDown, Plus, Minus, Menu, X, Play, Download } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import logo from "@/assets/logo.jpg.asset.json";
import strategy from "@/assets/strategy.png.asset.json";
import globalImage from "@/assets/global.png.asset.json";
import council from "@/assets/council.png.asset.json";
import governance from "@/assets/governance.png.asset.json";
import portrait from "@/assets/portrait.png.asset.json";
import video from "@/assets/motion.mp4.asset.json";
import consultingMeeting from "@/assets/consulting-meeting.asset.json";
import globalPartnership from "@/assets/global-partnership.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "WTZ Consultoria | Visão global. Decisões extraordinárias." },
      {
        name: "description",
        content:
          "Conectamos estratégia, governança e inteligência artificial para transformar desafios em novas possibilidades. Conheça a WTZ Consultoria.",
      },
      {
        property: "og:title",
        content: "WTZ Consultoria | Visão global. Decisões extraordinárias.",
      },
      {
        property: "og:description",
        content: "Estratégia, governança e inteligência para o próximo capítulo do seu negócio.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const services = [
  {
    title: "Estratégia & negócios",
    tag: "VISÃO QUE SE TRANSFORMA EM DIREÇÃO",
    text: "Um olhar amplo para o seu negócio. Conectamos oportunidades, prioridades e decisões em uma estratégia com propósito.",
    detail: "Planejamento estratégico · Desenvolvimento de negócios · Posicionamento de mercado",
    image: strategy.url,
  },
  {
    title: "Governança & liderança",
    tag: "SOLIDEZ PARA CRESCER COM CONFIANÇA",
    text: "Estruturas de decisão mais claras, lideranças alinhadas e uma visão compartilhada para construir o próximo capítulo.",
    detail: "Governança corporativa · Apoio à liderança · Gestão de riscos",
    image: council.url,
  },
  {
    title: "Inteligência artificial",
    tag: "INOVAÇÃO COM RESPONSABILIDADE",
    text: "Tecnologia a serviço da estratégia. Uma abordagem consciente para integrar inteligência artificial e transformação digital ao negócio.",
    detail: "Estratégia de IA · Governança digital · Transformação de processos",
    image: governance.url,
  },
] as const;

const videoMoments = [
  {
    label: "45+ anos de experiência",
    title: "Liderança em setores complexos.",
    text: "Aviação, turismo, transporte aéreo e transformação empresarial.",
  },
  {
    label: "Atuação em 3 continentes",
    title: "Visão internacional. Decisão estratégica.",
    text: "Expansão de negócios e desenvolvimento de operações globais.",
  },
  {
    label: "Executivo C-Level · Conselheiro",
    title: "Governança para construir o futuro.",
    text: "Estratégia, inteligência artificial, compliance e ESG.",
  },
] as const;

const wtzSolutions = [
  {
    title: "Inteligência Artificial",
    image: "/IA.png",
    width: 1254,
    height: 1254,
  },
  {
    title: "Governança Corporativa",
    image: "/governanca.png",
    width: 1254,
    height: 1254,
  },
  { title: "Compliance", image: "/complice.png", width: 1254, height: 1254 },
  { title: "ESG", image: "/ESG.png", width: 1254, height: 1254 },
  { title: "M&A", image: "/M&A.png", width: 1254, height: 1254 },
  {
    title: "Turismo Corporativo",
    image: "/Emblema%20Dourado%20de%20Turismo%20Global.png",
    width: 1254,
    height: 1254,
  },
  {
    title: "Seguros",
    image: "/Emblema%20Dourado%20de%20Seguros%20Globais.png",
    width: 1254,
    height: 1254,
  },
  // {
  //   title: "AI Security",
  //   image: "/Escudo%20de%20IA%20e%20governança%20digital.png",
  //   width: 1672,
  //   height: 941,
  // },
] as const;

function Index() {
  const root = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [videoOpen, setVideoOpen] = useState(false);
  const [videoTime, setVideoTime] = useState(0);
  const [videoDuration, setVideoDuration] = useState(8);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const selectedService = services[active] ?? services[0];
  const videoMomentIndex = Math.min(
    videoMoments.length - 1,
    Math.floor((videoTime / videoDuration) * videoMoments.length),
  );
  const activeVideoMoment = videoMoments[videoMomentIndex] ?? videoMoments[0];
  const whatsappUrl = `https://wa.me/5511992324572?text=${encodeURIComponent(`Olá, WTZ Consultoria! Meu nome é ${name}.\n${message}`)}`;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const media = gsap.matchMedia();
    media.add("(prefers-reduced-motion: no-preference)", () => {
      const ctx = gsap.context(() => {
        gsap.from(".hero-enter", {
          y: 35,
          opacity: 0,
          duration: 1.2,
          stagger: 0.12,
          ease: "power3.out",
        });
        gsap.to(".hero-video", {
          yPercent: 20,
          scale: 1.12,
          ease: "none",
          scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true },
        });
        gsap.to(".hero-main", {
          y: -70,
          opacity: 0,
          ease: "none",
          scrollTrigger: { trigger: ".hero", start: "40% top", end: "bottom top", scrub: true },
        });
        gsap.utils.toArray<HTMLElement>(".reveal").forEach((element) => {
          gsap.from(element, {
            y: 50,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 90%",
              toggleActions: "play none none reverse",
            },
          });
        });
        const publicationIntro = gsap.utils.toArray<HTMLElement>(
          ".publication-eyebrow, .publication-headline, .publication-description, .publication-author, .publication-book-title, .publication-book-subtitle, .publication-download",
        );
        const publicationTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: ".publication-section",
            start: "top 76%",
            once: true,
          },
          defaults: { ease: "power3.out" },
        });
        publicationTimeline.fromTo(
          ".publication-book",
          { x: -42, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.78 },
          0,
        );
        publicationTimeline.fromTo(
          publicationIntro,
          { y: 18, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.58, stagger: 0.055 },
          0.06,
        );
        gsap.fromTo(
          ".manifesto-image img",
          { scale: 1.16 },
          {
            scale: 1,
            ease: "none",
            scrollTrigger: {
              trigger: ".manifesto-image",
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          },
        );
        const solutionsTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: ".wtz-solutions-section",
            start: "top 78%",
            once: true,
          },
          defaults: { ease: "power3.out" },
        });
        solutionsTimeline.fromTo(
          ".wtz-solutions-eyebrow, .wtz-solutions-heading",
          { y: 16, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.62, stagger: 0.09 },
        );
        solutionsTimeline.fromTo(
          ".wtz-solution-item",
          { y: 20, opacity: 0, scale: 0.97 },
          { y: 0, opacity: 1, scale: 1, duration: 0.62, stagger: 0.07 },
          0.18,
        );
        solutionsTimeline.fromTo(
          ".wtz-solutions-footer",
          { y: 12, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.55 },
          0.72,
        );
        gsap.to(".statement-word", {
          xPercent: -12,
          ease: "none",
          scrollTrigger: {
            trigger: ".statement",
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        });
      }, root);
      return () => ctx.revert();
    });
    return () => media.revert();
  }, []);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <div ref={root} className="wtz-site">
      <header className="site-header">
        <a href="#inicio" className="brand-link" aria-label="WTZ Consultoria — início">
          <img src={logo.url} alt="WTZ Consultoria" width={100} height={100} />
        </a>
        <nav className="desktop-nav" aria-label="Navegação principal">
          <a href="#sobre">A consultoria</a>
          <a href="#expertise">Nossa expertise</a>
          <a href="#abordagem">Nossa visão</a>
        </nav>
        <Button variant="editorial" className="header-contact" onClick={() => setContactOpen(true)}>
          Vamos conversar <ArrowUpRight />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="mobile-menu-button"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </Button>
      </header>
      {menuOpen && (
        <nav className="mobile-nav" aria-label="Menu">
          <a href="#sobre" onClick={closeMenu}>
            A consultoria
          </a>
          <a href="#expertise" onClick={closeMenu}>
            Nossa expertise
          </a>
          <a href="#abordagem" onClick={closeMenu}>
            Nossa visão
          </a>
          <Button
            variant="gold"
            onClick={() => {
              closeMenu();
              setContactOpen(true);
            }}
          >
            Vamos conversar <ArrowUpRight />
          </Button>
        </nav>
      )}

      <main>
        <section className="hero" id="inicio">
          <video
            className="hero-video"
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260624_210218_173f8eba-17ff-4e27-972b-d128af25bf49.mp4"
            poster={strategy.url}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-hidden="true"
            tabIndex={-1}
          />
          <div className="hero-shade" />
          <div className="hero-main page-width">
            <div className="eyebrow hero-enter">
              <span className="tiny-line" /> ESTRATÉGIA. INTELIGÊNCIA. FUTURO.
            </div>
            <h1 className="hero-enter">
              WTZ Consultoria
              <span>
                Visão global.
                <br />
                Decisões <em>extraordinárias.</em>
              </span>
            </h1>
            <p className="hero-enter">
              O futuro não é apenas algo que se espera.
              <br />É algo que se constrói. Com a direção certa.
            </p>
            <Button variant="gold" asChild className="hero-cta hero-enter">
              <a href="#expertise">
                Explore novas possibilidades <ArrowUpRight />
              </a>
            </Button>
          </div>
          <div className="hero-bottom page-width hero-enter">
            <a href="#sobre" className="scroll-link">
              <span className="scroll-circle">
                <ArrowDown size={17} />
              </span>{" "}
              UM NOVO PONTO DE VISTA
            </a>
            <span className="hero-note">
              Conectando visão a valor.
              <br />
              <span>WTZ CONSULTORIA</span>
            </span>
            <span className="hero-index">
              01 <span>/ 05</span>
            </span>
          </div>
        </section>

        <section id="sobre" className="intro page-width">
          <div className="section-label reveal">
            <span>01 — A CONSULTORIA</span>
            <span>
              UM OLHAR ALÉM DO ÓBVIO <ArrowUpRight size={15} />
            </span>
          </div>
          <div className="intro-grid">
            <h2 className="reveal">
              Grandes movimentos
              <br />
              começam com uma
              <br />
              <span>nova perspectiva.</span>
            </h2>
            <div className="intro-copy reveal">
              <p>
                A complexidade do mundo exige mais do que respostas prontas. Exige visão, conexão e
                a coragem de pensar diferente.
              </p>
              <p>
                Na WTZ, aproximamos estratégia, pessoas e tecnologia para transformar desafios em
                caminhos possíveis — e visão de futuro em decisões no presente.
              </p>
              <a className="text-link" href="#abordagem">
                Conheça nossa visão <ArrowUpRight size={18} />
              </a>
            </div>
          </div>
          <div className="principles reveal">
            <span>
              Visão estratégica <Plus />
            </span>
            <span>
              Conexão humana <Plus />
            </span>
            <span>
              Inteligência aplicada <ArrowUpRight />
            </span>
          </div>
        </section>

        <section className="expertise-section" id="expertise">
          <div className="page-width">
            <div className="section-label reveal">
              <span>02 — NOSSA EXPERTISE</span>
              <span>CONHECIMENTO QUE MOVE NEGÓCIOS</span>
            </div>
            <div className="expertise-heading reveal">
              <h2>
                O seu próximo passo.
                <br />
                <span>A nossa especialidade.</span>
              </h2>
              <p>
                Perspectivas complementares.
                <br />
                Uma direção: o futuro do seu negócio.
              </p>
            </div>
            <div className="expertise-grid reveal">
              <div className="services-list">
                {services.map((service, index) => (
                  <div
                    className={`service-item ${active === index ? "is-active" : ""}`}
                    key={service.title}
                  >
                    <Button
                      variant="ghost"
                      className="service-toggle"
                      aria-expanded={active === index}
                      onClick={() => setActive(index)}
                    >
                      <span className="service-number">0{index + 1}</span>
                      <span>{service.title}</span>
                      {active === index ? <Minus /> : <Plus />}
                    </Button>
                    {active === index && (
                      <div className="service-content">
                        <span className="micro-label">{service.tag}</span>
                        <p>{service.text}</p>
                        <span className="service-detail">{service.detail}</span>
                        <Button
                          variant="link"
                          className="service-cta"
                          onClick={() => {
                            setMessage(
                              `Gostaria de conversar sobre ${service.title.toLowerCase()}.`,
                            );
                            setContactOpen(true);
                          }}
                        >
                          Vamos explorar juntos <ArrowUpRight />
                        </Button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <div className="service-visual">
                <img
                  key={active}
                  src={selectedService.image}
                  alt={selectedService.title}
                  width={1254}
                  height={1254}
                  loading="lazy"
                  className="w-full h-full hover:scale-105 transition-transform duration-300"
                />
                <span className="image-caption">
                  WTZ / {String(active + 1).padStart(2, "0")}
                  <ArrowUpRight size={18} />
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="publication-section" aria-labelledby="publication-headline">
          <div className="publication-layout">
            <div className="publication-intro">
              <p className="publication-eyebrow">Publicação</p>
              <h2 className="publication-headline" id="publication-headline">
                Estratégia, governança e inteligência para construir a empresa do futuro.
              </h2>
              <p className="publication-description">
                Um guia estratégico para empresários e líderes que desejam integrar Inteligência
                Artificial, Governança Corporativa, Compliance e ESG à estratégia e à transformação
                de seus negócios.
              </p>
            </div>
            <figure className="publication-visual">
              <img
                className="publication-book"
                src="/Livro.png"
                alt="Livro em 3D: Construa ou Reformule sua Empresa com IA, Governança Corporativa, Compliance e ESG"
                width={1254}
                height={1254}
                loading="lazy"
              />
            </figure>
            <div className="publication-details">
              <p className="publication-author">
                Autor <span>·</span> Maurinei Santos
              </p>
              <h3 className="publication-book-title">
                Construa ou Reformule sua Empresa com IA, Governança Corporativa, Compliance e ESG
              </h3>
              <p className="publication-book-subtitle">
                Um Guia Estratégico para Empresas Brasileiras em 2026
              </p>
              <Button variant="gold" asChild className="publication-download">
                <a href="/LIVRO%20WTZ.docx" download="LIVRO WTZ.docx">
                  Baixar livro em Word <Download aria-hidden="true" />
                </a>
              </Button>
              <span className="publication-format">DOCX · 2026</span>
            </div>
          </div>
        </section>
        <section className="editorial-manifesto" id="manifesto">
          <div className="editorial-manifesto-head page-width">
            <div className="section-label reveal">
              <span>03 — CRESCIMENTO E ESTRUTURA</span>
              <span>ESTRATÉGIA EM MOVIMENTO</span>
            </div>
            <div className="editorial-manifesto-copy">
              <h2 className="reveal">
                Empresas evoluem.
                <br />
                <span>A estrutura precisa acompanhar.</span>
              </h2>
              <div className="editorial-manifesto-details reveal">
                <p>
                  A WTZ integra estratégia, tecnologia e governança para apoiar organizações em
                  processos de transformação, crescimento e geração de valor.
                </p>
                <div className="editorial-manifesto-principles">
                  <span>Visão estratégica</span>
                  <span>Conexão humana</span>
                  <span>Inteligência aplicada</span>
                </div>
              </div>
            </div>
          </div>
          <div className="editorial-figures page-width">
            <figure className="editorial-figure editorial-figure--meeting reveal">
              <img
                src={consultingMeeting.url}
                alt="Equipe executiva em reunião de estratégia"
                width={1672}
                height={941}
                loading="lazy"
              />
              <div className="editorial-figure-shade" />
            </figure>
            <figure className="editorial-figure editorial-figure--global reveal">
              <img
                src={globalPartnership.url}
                alt="Arquitetura corporativa e expansão global de negócios"
                width={1672}
                height={941}
                loading="lazy"
              />
              <div className="editorial-figure-shade" />
              <figcaption>
                Ampliar o olhar. Conectar possibilidades. Construir crescimento com significado.
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="wtz-solutions-section" aria-labelledby="wtz-solutions-heading">
          <div className="wtz-solutions-inner">
            <div className="wtz-solutions-intro">
              <p className="wtz-solutions-eyebrow">Soluções WTZ</p>
              <h2 className="wtz-solutions-heading" id="wtz-solutions-heading">
                Soluções corporativas
                <br />
                com <span>visão global.</span>
              </h2>
              <p className="wtz-solutions-description">
                Estratégia, tecnologia e governança conectadas para transformar empresas e sustentar
                novos ciclos de crescimento.
              </p>
            </div>
            <div className="wtz-solutions-gallery">
              {wtzSolutions.map((solution) => (
                <figure className="wtz-solution-item" key={solution.title}>
                  <div className="wtz-solution-art">
                    <img
                      src={solution.image}
                      alt={solution.title}
                      width={solution.width}
                      height={solution.height}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <figcaption>{solution.title}</figcaption>
                </figure>
              ))}
            </div>
            <div className="wtz-solutions-footer">
              <p>
                Uma visão integrada para decisões mais seguras e negócios mais preparados para o
                futuro.
              </p>
              <a href="#expertise">
                Conheça nossas soluções <ArrowUpRight aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>

        <section className="manifesto" id="abordagem">
          <div className="manifesto-image">
            <img
              src={globalImage.url}
              alt="Conexões globais e novas oportunidades de negócios"
              width={1672}
              height={941}
              loading="lazy"
            />
            <div className="manifesto-shade" />
            <div className="manifesto-content page-width">
              <span className="eyebrow reveal">04 — NOSSA VISÃO</span>
              <h2 className="reveal">
                O mundo está conectado.
                <br />
                <em>
                  Sua estratégia também
                  <br />
                  precisa estar.
                </em>
              </h2>
              <p className="reveal">
                Ampliar o olhar. Conectar possibilidades.
                <br />
                Construir um crescimento com significado.
              </p>
            </div>
          </div>
        </section>

        <section className="human-section">
          <div className="page-width human-grid">
            <div className="portrait-wrap reveal">
              <img
                src={portrait.url}
                alt="Representante da WTZ Consultoria"
                width={1254}
                height={1254}
                loading="lazy"
              />
              <span className="portrait-label">VISÃO GLOBAL. PRESENÇA HUMANA.</span>
              <Button
                variant="editorial"
                size="icon"
                className="video-button"
                aria-label="Assistir apresentação"
                onClick={() => setVideoOpen(true)}
              >
                <Play />
              </Button>
            </div>
            <div className="human-copy reveal">
              <span className="eyebrow">ESTRATÉGIA FEITA POR PESSOAS</span>
              <h2>
                Por trás de toda
                <br />
                boa decisão,
                <br />
                <em>uma boa conexão.</em>
              </h2>
              <p>
                Acreditamos no valor de uma conversa, na força de uma parceria e na inteligência de
                construir juntos.
              </p>
              <p>
                Mais do que olhar para o seu negócio, queremos olhar com você. Entender o contexto.
                Questionar o comum. Encontrar a direção.
              </p>
              <Button variant="editorial" onClick={() => setContactOpen(true)}>
                Conecte-se com a WTZ <ArrowUpRight />
              </Button>
            </div>
          </div>
        </section>

        <section className="statement">
          <span className="statement-word" aria-hidden="true">
            O FUTURO É UMA DECISÃO.
          </span>
        </section>
        <section className="contact-section page-width" id="contato">
          <div className="section-label reveal">
            <span>05 — O PRÓXIMO CAPÍTULO</span>
            <ArrowUpRight size={20} />
          </div>
          <div className="contact-grid">
            <h2 className="reveal">
              Vamos construir
              <br />
              <em>o que vem a seguir?</em>
            </h2>
            <div className="reveal">
              <p>
                Novas perspectivas começam
                <br />
                com uma boa conversa.
              </p>
              <Button variant="gold" className="contact-cta" onClick={() => setContactOpen(true)}>
                Comece uma conversa <ArrowUpRight />
              </Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer page-width">
        <a href="#inicio" className="footer-wordmark">
          <img src={logo.url} alt="WTZ Consultoria" width={100} height={100} />
        </a>
        <p>
          Estratégia que conecta.
          <br />
          Visão que transforma.
        </p>
        <span>© 2026 WTZ Consultoria</span>
        <a href="#inicio" className="back-top" aria-label="Voltar ao início">
          <ArrowUpRight />
        </a>
      </footer>

      <Dialog open={contactOpen} onOpenChange={setContactOpen}>
        <DialogContent className="contact-dialog">
          <DialogTitle>Uma nova conexão.</DialogTitle>
          <DialogDescription>
            Preencha sua mensagem e continue a conversa com a WTZ pelo WhatsApp.
          </DialogDescription>
          <label className="field-label">
            Seu nome
            <input
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Como podemos chamar você?"
            />
          </label>
          <label className="field-label">
            Sua mensagem
            <textarea
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              placeholder="Qual é o próximo desafio do seu negócio?"
              rows={4}
            />
          </label>
          <Button
            variant="gold"
            disabled={!name.trim() || !message.trim()}
            onClick={() => window.open(whatsappUrl, "_blank", "noopener,noreferrer")}
          >
            Conversar pelo WhatsApp <ArrowUpRight />
          </Button>
          <span className="dialog-note">
            A mensagem será enviada pelo WhatsApp após sua confirmação.
          </span>
        </DialogContent>
      </Dialog>
      <Dialog
        open={videoOpen}
        onOpenChange={(open) => {
          setVideoOpen(open);
          if (open) setVideoTime(0);
        }}
      >
        <DialogContent className="video-dialog video-dialog--immersive">
          <DialogTitle className="sr-only">Portfólio executivo — Maurinei Santos</DialogTitle>
          <DialogDescription className="sr-only">
            Apresentação executiva com destaques da trajetória de Maurinei Santos.
          </DialogDescription>
          {videoOpen && (
            <video
              src={video.url}
              controls
              autoPlay
              muted
              loop
              playsInline
              onTimeUpdate={(event) => setVideoTime(event.currentTarget.currentTime)}
              onLoadedMetadata={(event) => {
                if (Number.isFinite(event.currentTarget.duration)) {
                  setVideoDuration(event.currentTarget.duration);
                }
              }}
            />
          )}
          <div className="video-portfolio-overlay">
            <div className="video-portfolio-topline">
              <span>WTZ</span>
              <span>Perfil executivo · Maurinei Santos</span>
            </div>
            <div className="video-portfolio-progress" aria-hidden="true">
              {videoMoments.map((moment, index) => (
                <span key={moment.label} className={index <= videoMomentIndex ? "is-active" : ""} />
              ))}
            </div>
            <div className="video-portfolio-copy" key={activeVideoMoment.label} aria-live="polite">
              <p className="video-portfolio-kicker">{activeVideoMoment.label}</p>
              <h3>{activeVideoMoment.title}</h3>
              <p className="video-portfolio-summary">{activeVideoMoment.text}</p>
              <a
                className="video-portfolio-link"
                href="https://wtz-consultoria.vercel.app/portifolio#trajetoria"
                target="_blank"
                rel="noreferrer"
              >
                Ver trajetória <ArrowUpRight aria-hidden="true" />
              </a>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
