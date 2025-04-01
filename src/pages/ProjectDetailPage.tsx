"use client"

import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import { ArrowLeft, Calendar, User, Tag, MapPin } from "lucide-react"
import { motion } from "framer-motion"
import { useLocation } from "react-router-dom"
import Demo3d  from "../components/Object3d"

// Dados simulados dos projetos

function ProjectDetailPage() {
  const { id } = useParams<{ id: string }>()
  const location = useLocation()
  const { projects } = location.state || { projects: [] }
  console.log(projects)

  const [project, setProject] = useState<any>()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulando uma busca no banco de dados
    const projectId = Number.parseInt(id || "0")
    const foundProject = projects.find((p: { id: Number } ) => p.id === projectId)

    // Simulando um tempo de carregamento
    setTimeout(() => {
      setProject(foundProject)
      setLoading(false)
    }, 500)
  }, [id])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-black"></div>
      </div>
    )
  }

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center pt-20 px-6">
        <h2 className="text-2xl font-medium mb-4">Projeto não encontrado</h2>
        <p className="text-gray-600 mb-6">O projeto que você está procurando não existe ou foi removido.</p>
        <Link to="/" className="flex items-center text-sm uppercase tracking-wider hover:underline">
          <ArrowLeft size={16} className="mr-1" />
          Voltar para a página inicial
        </Link>
      </div>
    )
  }

  // Dados de especificações do projeto
  const specs = [
    { label: "Area", value: "450 m²" },
    { label: "Type", value: "Residential" },
    { label: "Status", value: "Completed" },
    { label: "Materials", value: "Concrete, Glass, Wood" },
    { label: "Client", value: "Private" },
  ]

  // Imagens da galeria (simuladas)
  const galleryImages = [
    "https://v0.dev/placeholder.svg?height=600&width=800&text=Image+1",
    "https://v0.dev/placeholder.svg?height=600&width=800&text=Image+2",
    "https://v0.dev/placeholder.svg?height=600&width=800&text=Image+3",
    "https://v0.dev/placeholder.svg?height=600&width=800&text=Image+4",
  ]

  return (
    <div className="pt-20 pb-24 lg:w-[80%] mx-auto">
      {/* Hero */}
      <div className="relative sm:h-[50vh] md:h-[70vh]">
        <img src={project.image || "/placeholder.svg"} alt={project.title} className="w-full h-full " />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.h1
            className="text-4xl md:text-6xl font-light text-white text-center max-w-4xl px-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {project.title}
          </motion.h1>
        </div>
        <Link
          to="/"
          className="absolute top-6 left-6 flex items-center text-white hover:text-gray-200 transition-colors"
        >
          <ArrowLeft size={20} className="mr-2" />
          Voltar
        </Link>
      </div>

      {/* Conteúdo */}
      <div className="max-w-7x2 mx-auto px-6 md:px-12 mt-16">
        {/* Sobre o Projeto e Project Specifications em duas colunas */}
        <div className="grid md:grid-cols-3 gap-12 mb-16 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:col-span-2"
          >
            <h2 className="text-3xl font-light mb-6">
              Sobre o <span className="font-medium">Projeto</span>
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">{project.details}</p>

            {/* Informações do projeto */}
            <div className="grid grid-cols-2 gap-6 mb-6">
              <div className="flex items-center">
                <Tag className="mr-3 text-gray-400" size={18} />
                <div>
                  <p className="text-sm text-gray-500">Categoria</p>
                  <p className="font-medium">{project.category}</p>
                </div>
              </div>

              <div className="flex items-center">
                <User className="mr-3 text-gray-400" size={18} />
                <div>
                  <p className="text-sm text-gray-500">Cliente</p>
                  <p className="font-medium">{project.client}</p>
                </div>
              </div>

              <div className="flex items-center">
                <Calendar className="mr-3 text-gray-400" size={18} />
                <div>
                  <p className="text-sm text-gray-500">Ano</p>
                  <p className="font-medium">{project.date}</p>
                </div>
              </div>

              <div className="flex items-center">
                <MapPin className="mr-3 text-gray-400" size={18} />
                <div>
                  <p className="text-sm text-gray-500">Localização</p>
                  <p className="font-medium">{project.location}</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gray-200 p-8 h-fit max-w-[420px] rounded-lg shadow-md"
          >
            {/* Project Specifications */}
            <h3 className="text-xl font-medium mb-6">Project Specifications</h3>
            <dl className="space-y-4">
              {specs.map((spec, index) => (
                <div key={index} className="grid grid-cols-2 gap-4">
                  <dt className="text-gray-600">{spec.label}</dt>
                  <dd className="font-medium">{spec.value}</dd>
                </div>
              ))}
            </dl>
          </motion.div>
        </div>


        {/* Galeria em uma coluna única (largura total) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-xl font-medium mb-6">Galeria</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
            {galleryImages.map((img, index) => (
              <div key={index} className="relative aspect-[4/3] overflow-hidden rounded-md">
                <img
                  src={img || "/placeholder.svg"}
                  alt={`${project.title} - Imagem ${index + 1}`}
                  className="h-full w-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </motion.div>

        {/* Planta única grande em uma coluna única (largura total) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className=""
        >
          <h3 className="text-xl font-medium mb-6">Planta</h3>
          <div className="relative max-h-[600px] overflow-hidden rounded-md border border-gray-200">
           <Demo3d />
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default ProjectDetailPage

