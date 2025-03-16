import Image from "next/image"

interface ProjectCardProps {
  number: string
  title: string
  description: string
  imageUrl: string
}

export function ProjectCard({ number, title, description, imageUrl }: ProjectCardProps) {
  return (
    <div className="flex flex-col">
      <div className="relative rounded-xl overflow-hidden h-[240px] mb-4">
        <Image src={imageUrl || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
      <div className="flex items-start">
        <span className="text-gray-500 mr-4">{number}</span>
        <div>
          <h3 className="text-2xl font-bold mb-2">{title}</h3>
          <p className="text-gray-400">{description}</p>
        </div>
      </div>
    </div>
  )
}

