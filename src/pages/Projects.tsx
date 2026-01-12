import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Search, SearchX } from 'lucide-react';
import { projects, ProjectType } from '@/data/projects';
import MiniProjectCard from '@/components/MiniProjectCard';
import LargeProjectCard from '@/components/LargeProjectCard';

const Projects = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTech, setSelectedTech] = useState<string[]>([]);
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(
    null
  );

  const [isSmallScreen, setIsSmallScreen] = useState(false);

  // Dropdown state (same behavior as Experience filter bar)
  const [isTechFilterOpen, setIsTechFilterOpen] = useState(false);
  const techFilterRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        techFilterRef.current &&
        !techFilterRef.current.contains(e.target as Node)
      ) {
        setIsTechFilterOpen(false);
      }
    };

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsTechFilterOpen(false);
    };

    window.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('keydown', handleEscape);
    return () => {
      window.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('keydown', handleEscape);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 640);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Extract all unique technologies from all projects
  const allTechnologies = useMemo(() => {
    const techSet = new Set<string>();
    projects.forEach(project => {
      project.tech.forEach(tech => techSet.add(tech));
    });
    return Array.from(techSet).sort();
  }, []);

  // Filter projects based on search query and selected technologies
  const filteredProjects = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();

    return projects.filter(project => {
      // Match by name OR by any technology string
      const matchesSearch =
        query.length === 0 ||
        project.name.toLowerCase().includes(query) ||
        project.tech.some(tech => tech.toLowerCase().includes(query));

      const matchesTech =
        selectedTech.length === 0 ||
        selectedTech.every(tech => project.tech.includes(tech));

      return matchesSearch && matchesTech;
    });
  }, [searchQuery, selectedTech]);
  const MAX_TECH_FILTERS = isSmallScreen ? 1 : 2;

  // Toggle technology filter (max 3 selected)
  const toggleTech = (tech: string) => {
    setSelectedTech(prev => {
      // If already selected, remove it
      if (prev.includes(tech)) {
        return prev.filter(t => t !== tech);
      }

      // If adding a new tech and already at max (3), do nothing
      if (prev.length >= MAX_TECH_FILTERS) {
        return prev;
      }

      // Otherwise add the tech
      return [...prev, tech];
    });
  };

  // Clear all filters
  const clearFilters = () => {
    setSearchQuery('');
    setSelectedTech([]);
  };

  const hasActiveFilters = searchQuery || selectedTech.length > 0;

  return (
    <div className='min-h-[calc(100dvh-var(--navbar-height))] bg-project px-10 pt-10 pb-20 sm:px-12 border-x border-b border-color'>
      {/* Header */}
      <div className='max-w-6xl mx-auto mb-12'>
        <div className='text-center mb-4'>
          <h1 className='text-3xl sm:text-4xl font-bold text-primary'>
            My Projects
          </h1>
        </div>

        {/* Search + Filter row (side-by-side like Experience filter bar) */}
        <div className='mx-auto flex w-full max-w-5xl flex-col gap-3 md:flex-row md:items-start sm:px-8'>
          {/* Search */}
          <div className='w-full md:flex-1'>
            <label htmlFor='search' className='sr-only'>
              Search projects
            </label>

            <div className='relative'>
              <input
                id='search'
                type='text'
                placeholder={
                  isSmallScreen ? 'Search project' : 'Search by name or tech'
                }
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className='h-12 w-full border-2 border-color bg-primary py-3 pl-6 text-sm font-semibold text-[#81353B] placeholder:text-[#81353B]/70 focus:outline-none hover:border-[#81353B]/75'
              />
              <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-6'>
                <Search className='h-4.5 w-4.5 text-[#81353B]/70' />
              </div>
            </div>
          </div>

          {/* Filter dropdown */}
          <div ref={techFilterRef} className='relative w-full md:flex-1'>
            <button
              type='button'
              aria-haspopup='dialog'
              aria-expanded={isTechFilterOpen}
              onClick={() => setIsTechFilterOpen(prev => !prev)}
              className='flex h-12 w-full items-center justify-between border-2 border-color bg-primary px-6 py-3 text-sm font-semibold text-[#81353B] transition hover:border-[#81353B]/75 focus:outline-none'
            >
              <div className='flex items-center gap-3'>
                <span className='text-[#81353B]/70 sm:hidden'>Filter:</span>
                <span className='hidden text-[#81353B]/70 sm:inline'>
                  Filter by tech:
                </span>
                <span className='bg-[#F5BFA3]/60 px-3 py-1 text-[#81353B]'>
                  {selectedTech.length === 0 ? 'All' : selectedTech.join(', ')}
                </span>
              </div>

              <svg
                aria-hidden='true'
                viewBox='0 0 24 24'
                className={`h-5 w-5 text-[#81353B]/70 transition-transform duration-200 ${
                  isTechFilterOpen ? 'rotate-180' : ''
                }`}
              >
                <path
                  fill='currentColor'
                  d='M6.3 8.3a1 1 0 0 1 1.4 0L12 12.6l4.3-4.3a1 1 0 1 1 1.4 1.4l-5 5a1 1 0 0 1-1.4 0l-5-5a1 1 0 0 1 0-1.4Z'
                />
              </svg>
            </button>

            {isTechFilterOpen && (
              <div className='absolute left-0 right-0 top-full z-20 mt-2 overflow-hidden border-2 border-color bg-[#FBF7F0]'>
                <div className='max-h-70 overflow-auto px-6 py-4'>
                  <div className='flex flex-wrap gap-3'>
                    {allTechnologies.map(tech => {
                      const isSelected = selectedTech.includes(tech);
                      return (
                        <button
                          key={tech}
                          onClick={() => toggleTech(tech)}
                          className={`px-3 py-1 text-xs font-medium transition-colors duration-150 bg-[#F5BFA3]/40 text-[#81353B] border border-[#F5BFA3]/1 hover:ring-1 hover:ring-[#81353B]/60 hover:bg-[#F5BFA3]/60 ${
                            isSelected ? 'ring-1 ring-[#81353B]/60' : ''
                          }`}
                          aria-pressed={isSelected}
                        >
                          {tech}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className='flex items-center justify-between border-t border-color bg-[#FBF7F0] px-6 py-3 text-[11px] sm:text-xs'>
                  <div className='text-[#81353B]/70'>
                    {selectedTech.length === 0 ? (
                      <span>No filters applied</span>
                    ) : (
                      <span>
                        {selectedTech.length} of {MAX_TECH_FILTERS} filters
                        selected
                      </span>
                    )}
                  </div>

                  {hasActiveFilters && (
                    <button
                      onClick={() => {
                        clearFilters();
                      }}
                      className='text-xs text-[#81353B]/70 underline hover:text-[#81353B]'
                    >
                      Clear all
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Projects grid */}
      <div className='max-w-6xl mx-auto'>
        {filteredProjects.length > 0 ? (
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12'>
            {filteredProjects.map(project => (
              <MiniProjectCard
                key={project.id}
                project={project}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </div>
        ) : (
          <div className='text-center py-16 paper-card-light rounded-lg'>
            <SearchX className='mx-auto h-14 w-14 text-primary mb-2 ' />
            <h3 className='text-xl font-bold text-primary '>
              No Projects Found
            </h3>
            <p className='text-md text-primary mb-2'>
              Try adjusting your search or filters
            </p>
            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className='text-md scrap-button underline text-primary hover:opacity-80'
              >
                Clear filters
              </button>
            )}
          </div>
        )}
      </div>

      {/* Large project card modal */}
      {selectedProject && (
        <LargeProjectCard
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
};

export default Projects;
