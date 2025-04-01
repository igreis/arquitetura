import { useEffect, useRef, useState } from "react"
import { motion, AnimatePresence, useAnimation } from "framer-motion"
import { ChevronRight, Send, MapPin, Phone, Mail, Plus } from 'lucide-react'
import { useNavigate } from "react-router-dom"
import Button from "../components/ButtonScroll"
import { ProjectsSection } from '../sections/projects'
import { useInView } from "react-intersection-observer"
import imagem from "../assets/img/3d-rendering-modern-dining-room-living-room-with-luxury-decor.jpg"
//import ProjectShowcase2 from "../sections/ProjectShow2"


const projects = [
  {
    id: 1,
    title: "Residência Minimalista",
    description:
      "Uma casa contemporânea que integra espaços internos e externos com amplas áreas de vidro. O projeto prioriza a iluminação natural e a conexão com o jardim, criando ambientes fluidos e aconchegantes.",
    image: "https://www.plantapronta.com.br/projetos/161/02.jpg",
    fullImages: ["/src/assets/project1-1.jpg", "/src/assets/project1-2.jpg", "/src/assets/project1-3.jpg"],
    category: "Residencial",
    client: "Família Silva",
    date: "2023",
    location: "São Paulo, SP",
    details:
      "O projeto da Residência Minimalista foi concebido para uma família que valoriza espaços amplos e integrados. Com 350m², a casa se distribui em dois pavimentos, com áreas sociais no térreo e íntimas no pavimento superior. Materiais como concreto aparente, madeira e vidro compõem a paleta de materiais, criando um ambiente sofisticado e acolhedor ao mesmo tempo.",
  },
  {
    id: 2,
    title: "Edifício Corporativo Eco",
    description: "Projeto sustentável com certificação LEED que prioriza eficiência energética e bem-estar.",
    image: "https://admin.archshop.com.br/uploads/001_261511aea8.jpg",
    fullImages: ["/src/assets/project2-1.jpg", "/src/assets/project2-2.jpg", "/src/assets/project2-3.jpg"],
    category: "Comercial",
    client: "Eco Empreendimentos",
    date: "2022",
    location: "Rio de Janeiro, RJ",
    details:
      "O Edifício Corporativo Eco é um marco na arquitetura sustentável brasileira. Com 15 andares e 12.000m² de área construída, o projeto incorpora tecnologias de ponta para redução do consumo energético, captação de água pluvial e aproveitamento máximo da iluminação natural. A fachada ventilada e os jardins verticais contribuem para o conforto térmico e a qualidade do ar.",
  },
  {
    id: 3,
    title: "Museu de Arte Contemporânea",
    description: "Espaço cultural com design inovador que dialoga com o entorno histórico da cidade.",
    image: "https://admin.archshop.com.br/uploads/001_261511aea8.jpg",
    fullImages: ["/src/assets/project3-1.jpg", "/src/assets/project3-2.jpg", "/src/assets/project3-3.jpg"],
    category: "Cultural",
    client: "Secretaria de Cultura",
    date: "2021",
    location: "Salvador, BA",
    details:
      "O Museu de Arte Contemporânea foi projetado para ser um espaço dinâmico e flexível, capaz de abrigar exposições de diferentes escalas e formatos. Com 5.000m² distribuídos em três pavimentos, o edifício conta com galerias de exposição, auditório, café, loja e áreas educativas. A volumetria arrojada estabelece um diálogo respeitoso com o centro histórico da cidade.",
  },
  {
    id: 4,
    title: "Complexo Residencial Urbano",
    description: "Conjunto habitacional que integra áreas comuns e espaços verdes para promover qualidade de vida.",
    image: "/src/assets/placeholder4.jpg",
    fullImages: ["/src/assets/project4-1.jpg", "/src/assets/project4-2.jpg", "/src/assets/project4-3.jpg"],
    category: "Residencial",
    client: "Construtora Horizonte",
    date: "2022",
    location: "Belo Horizonte, MG",
    details:
      "O Complexo Residencial Urbano é composto por 4 torres de 20 andares, totalizando 320 unidades habitacionais. O projeto prioriza a qualidade dos espaços comuns, com praças, áreas de lazer, academia e coworking. A implantação das torres foi cuidadosamente estudada para garantir privacidade e boa insolação para todos os apartamentos.",
  },
]


function HomePage() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ProjectShowcase />
      <ProjectsSection />
      <ContactSection />
    </>
  )
}

function Hero() {
  const parallaxRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrollY = window.scrollY
        parallaxRef.current.style.transform = `translateY(${scrollY * 0.5}px)`
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToNextSection = () => {
    // Encontra a próxima section após o hero
    const nextSection = document.querySelector("section:nth-of-type(2)")
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative h-screen overflow-hidden" id="hero">
      <div ref={parallaxRef} className="absolute inset-0 z-0">
        <img
          src = {imagem}
          alt="Arquitetura moderna"
          className="w-full h-full object-cover center"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="relative z-10 h-full flex flex-col justify-center items-center text-white px-6">
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-light text-center max-w-4xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Transformando <span className="font-medium">espaços</span> em experiências
        </motion.h1>

        <motion.p
          className="mt-6 text-lg md:text-xl text-center max-w-2xl text-gray-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Criamos projetos arquitetônicos que combinam estética, funcionalidade e sustentabilidade
        </motion.p>

        {/* Seta animada para baixo */}
        <div onClick={scrollToNextSection} className="absolute bottom-12 left-1/2 transform -translate-x-1/2 cursor-pointer">
          <Button />
        </div>
      </div>
    </section>
  )
}

function ProjectShowcase() {
  const navigate = useNavigate()
  const controls = useAnimation()
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true })
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [featuredProject, setFeaturedProject] = useState(projects[0])

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  const handleProjectClick = (id: number) => {
    const dados = projects
    navigate(`/project/${id}`, { state: { projects: dados } })
  }

  const handleProjectHover = (index: number) => {
    setHoveredIndex(index)
  }

  const handleFeaturedChange = (project: any) => {
    setFeaturedProject(project)
  }

  // Variantes de animação para o container
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  // Variantes de animação para cada item
  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  }

  // Variantes para o projeto em destaque
  const featuredVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  return (
    <section id="destaques" className="py-24 bg-[#1a1a2e] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-light mb-4">
            Nossos <span className="font-medium">Projetos</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Conheça alguns dos nossos trabalhos mais recentes e descubra como transformamos conceitos em realidade.
          </p>
        </motion.div>

        {/* Projeto em destaque */}
        <motion.div variants={featuredVariants} initial="hidden" animate="visible" className="mb-16">
          <div className="relative h-[500px] md:h-[600px] overflow-hidden rounded-lg">
            <AnimatePresence mode="wait">
              <motion.div
                key={featuredProject.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <img
                  src={featuredProject.image || "/placeholder.svg"}
                  alt={featuredProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a2e] via-[#1a1a2e]/60 to-transparent"></div>

                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                  <span className="inline-block px-3 py-1 text-xs uppercase tracking-wider bg-white/10 backdrop-blur-sm rounded-full mb-4">
                    {featuredProject.category}
                  </span>
                  <h3 className="text-3xl md:text-4xl font-medium mb-4">{featuredProject.title}</h3>
                  <p className="text-zinc-300 mb-6 max-w-2xl">{featuredProject.description}</p>
                  <button
                    onClick={() => handleProjectClick(featuredProject.id)}
                    className="inline-flex items-center justify-center px-6 py-3 bg-white text-[#1a1a2e] text-sm uppercase tracking-wider hover:bg-zinc-200 transition-colors rounded-md"
                  >
                    Ver detalhes
                    <ChevronRight size={16} className="ml-2" />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Grid de projetos */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              onHoverStart={() => handleProjectHover(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              onClick={() => handleFeaturedChange(project)}
              className="relative aspect-[4/3] overflow-hidden rounded-lg cursor-pointer group"
            >
              <motion.div
                className="absolute inset-0 bg-[#1a1a2e]/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={false}
                animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
              />

              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a2e] to-transparent opacity-70" />

              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-xl font-medium mb-2">{project.title}</h3>
                <p className="text-sm text-zinc-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.category}
                </p>
              </div>

              <motion.div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-full p-3"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity: hoveredIndex === index ? 1 : 0,
                  scale: hoveredIndex === index ? 1 : 0.8,
                }}
                transition={{ duration: 0.2 }}
              >
                <Plus size={24} className="text-white" />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <button
            onClick={() => navigate("/projects")}
            className="inline-flex items-center justify-center px-8 py-3 border border-white/30 text-white text-sm uppercase tracking-wider hover:bg-white/10 transition-colors rounded-md backdrop-blur-sm"
          >
            Ver todos os projetos
            <ChevronRight size={16} className="ml-2" />
          </button>
        </motion.div>
      </div>
    </section>
  )
}


function AboutSection() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section id="sobre" className="py-24 px-10 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-light mb-6"
            >
              Sobre o <span className="font-medium">Estúdio</span>
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-gray-600 mb-6"
            >
              Fundado em 2010, nosso estúdio de arquitetura é reconhecido por criar projetos inovadores que combinam estética, funcionalidade e sustentabilidade. Nossa abordagem centrada no cliente garante que cada projeto seja único e atenda às necessidades específicas.
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="text-gray-600 mb-8"
            >
              Com uma equipe multidisciplinar de arquitetos, designers e engenheiros, trabalhamos em projetos residenciais, comerciais e culturais, sempre buscando soluções criativas que transformem espaços em experiências memoráveis.
            </motion.p>

            <motion.div variants={fadeInUp}>
              <a
                href="#contato"
                className="px-8 py-3 bg-black text-white hover:bg-gray-800 transition-colors duration-300 uppercase tracking-wider text-sm inline-block"
              >
                Fale conosco
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-[400px] md:h-[500px]"
          >
            <img
              src="https://www.galeriadaarquitetura.com.br/img//projeto/702x415/3086/studio-de-arquitetura101.jpg"
              alt="Nosso estúdio"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aqui você adicionaria a lógica para enviar o formulário
    console.log(formState)
    alert("Mensagem enviada com sucesso!")
    setFormState({
      name: "",
      email: "",
      phone: "",
      message: ""
    })
  }

  return (
    <section id="contato" className="py-24 px-6 md:px-12 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-light mb-4">Entre em <span className="font-medium">Contato</span></h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Estamos prontos para transformar suas ideias em projetos excepcionais. Entre em contato para discutir seu próximo projeto.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-medium mb-6">Informações de Contato</h3>

            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="mr-4 text-gray-400" />
                <div>
                  <h4 className="font-medium">Endereço</h4>
                  <p className="text-gray-600">Av. Paulista, 1000, São Paulo - SP</p>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="mr-4 text-gray-400" />
                <div>
                  <h4 className="font-medium">Telefone</h4>
                  <p className="text-gray-600">+55 (11) 9999-9999</p>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="mr-4 text-gray-400" />
                <div>
                  <h4 className="font-medium">Email</h4>
                  <p className="text-gray-600">contato@archistudio.com</p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h3 className="text-xl font-medium mb-4">Horário de Funcionamento</h3>
              <p className="text-gray-600">Segunda a Sexta: 9h às 18h</p>
              <p className="text-gray-600">Sábados: 9h às 13h (com agendamento)</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Nome
                </label>
                <input
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2">
                  Telefone
                </label>
                <input
                  id="phone"
                  name="phone"
                  value={formState.phone}
                  onChange={handleChange}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black min-h-[150px]"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-black hover:bg-gray-800 text-white px-4 py-2 rounded-md flex items-center justify-center"
              >
                <Send size={16} className="mr-2" />
                Enviar Mensagem
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HomePage
