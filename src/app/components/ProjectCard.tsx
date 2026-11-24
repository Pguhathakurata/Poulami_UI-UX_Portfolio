import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  tags: string[];
  gradient?: string;
  caseStudyUrl?: string;
}

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group cursor-pointer block h-full">
      <motion.div
        whileHover={{ y: -10 }}
        transition={{ duration: 0.3 }}
        className="border border-purple-100 rounded-3xl p-3 bg-white hover:border-purple-200 hover:shadow-lg transition-all h-full flex flex-col"
      >
        <a
          href={project.caseStudyUrl || "https://www.behance.net/poulamiguhatha1"}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <div className="relative overflow-hidden rounded-2xl mb-3 aspect-[16/10] bg-gradient-to-br from-purple-50 to-pink-50">
            <ImageWithFallback
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <motion.div 
              className={`absolute top-3 right-3 w-10 h-10 bg-gradient-to-br ${project.gradient || 'from-purple-300 to-pink-300'} rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg`}
              whileHover={{ scale: 1.1, rotate: 90 }}
            >
              <ArrowUpRight size={20} className="text-white" />
            </motion.div>
          </div>
        </a>
        <div className="space-y-2 flex-1 flex flex-col">
          <div className="flex items-center gap-2">
            <span className={`px-2.5 py-0.5 rounded-full bg-gradient-to-r ${project.gradient || 'from-purple-500 to-pink-500'} text-white text-xs`}>
              {project.category}
            </span>
          </div>
          <h3 className="text-neutral-900 group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text group-hover:text-transparent transition-all line-clamp-2">
            {project.title}
          </h3>
          <p className="text-neutral-600 text-sm line-clamp-2 flex-1">{project.description}</p>
          <div className="flex flex-wrap gap-1.5 pt-1">
            {project.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 bg-white border border-purple-200 text-neutral-700 rounded-full hover:border-purple-400 transition-colors text-xs"
              >
                {tag}
              </span>
            ))}
          </div>
          <a
            href={project.caseStudyUrl || "https://www.behance.net/poulamiguhatha1"}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-2 px-4 py-2 text-purple-400 rounded-full hover:text-pink-400 transition-all hover:gap-3 group/link text-sm"
          >
            View Case Study
            <ExternalLink size={14} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </motion.div>
    </div>
  );
}