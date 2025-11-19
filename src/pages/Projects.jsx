import { FaExternalLinkAlt, FaGithub, FaStar } from 'react-icons/fa';
import { projectCategories, projects } from '../data/projects';

import Button from '../components/Button';
import Card from '../components/Card';
import SectionTitle from '../components/SectionTitle';
import { motion } from 'framer-motion';
import { useState } from 'react';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showAll, setShowAll] = useState(false);

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 6);

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container-custom section-padding">
        <SectionTitle
          title="My Projects"
          subtitle="A showcase of my recent work and personal projects"
        />

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {projectCategories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setSelectedCategory(category);
                setShowAll(false);
              }}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {displayedProjects.map((project, index) => (
            <Card key={project.id} className="flex flex-col h-full">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col h-full"
              >
                {/* Project Image */}
                <div className="relative overflow-hidden rounded-lg mb-4 h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  {project.featured && (
                    <div className="absolute top-3 right-3 flex items-center space-x-1 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      <FaStar size={12} />
                      <span>Featured</span>
                    </div>
                  )}
                </div>

                {/* Project Info */}
                <div className="flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-4 flex-1">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-full text-xs font-medium">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3">
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1"
                      >
                        <Button variant="outline" size="sm" className="w-full" icon={<FaGithub />}>
                          Code
                        </Button>
                      </a>
                    )}
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1"
                      >
                        <Button size="sm" className="w-full" icon={<FaExternalLinkAlt />}>
                          Live Demo
                        </Button>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </Card>
          ))}
        </div>

        {/* Show More Button */}
        {filteredProjects.length > 6 && (
          <div className="text-center">
            <Button
              variant="outline"
              size="lg"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? 'Show Less' : `Show All Projects (${filteredProjects.length})`}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
