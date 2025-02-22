import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaReact, 
  FaNode, 
  FaDatabase,
  FaShopify,
  FaCode,
  FaBootstrap,
  FaGitAlt,
  FaServer,
  FaGitlab,   
  FaVimeoV,  
  FaTrello,   
  FaJira      
} from 'react-icons/fa';
import { 
  SiTypescript, 
  SiNextdotjs, 
  SiExpress, 
  SiMongodb, 
  SiPostgresql,
  SiPrisma,
  SiSocketdotio,
  SiGraphql,
  SiRedux,
  SiTailwindcss,
  SiJquery,
  SiRemix,
  SiShopify,
  SiSqlite
} from 'react-icons/si';

const SkillsGrid = () => {
  const skills = useMemo(() => [
    // Frontend Core
    { icon: <FaHtml5 />, name: 'HTML5', category: 'Frontend' },
    { icon: <FaCss3Alt />, name: 'CSS3', category: 'Frontend' },
    { icon: <FaJs />, name: 'JavaScript', category: 'Frontend' },
    { icon: <SiTypescript />, name: 'TypeScript', category: 'Frontend' },
    { icon: <SiJquery />, name: 'jQuery', category: 'Frontend' },
    
    // Frontend Frameworks & Libraries
    { icon: <FaReact />, name: 'React', category: 'Frontend' },
    { icon: <SiRedux />, name: 'Redux', category: 'Frontend' },
    { icon: <SiNextdotjs />, name: 'Next.js', category: 'Frontend' },
    { icon: <SiRemix />, name: 'Remix', category: 'Frontend' },
    
    // CSS Frameworks
    { icon: <SiTailwindcss />, name: 'Tailwind', category: 'Frontend' },
    { icon: <FaBootstrap />, name: 'Bootstrap', category: 'Frontend' },
    
    // Backend
    { icon: <FaNode />, name: 'Node.js', category: 'Backend' },
    { icon: <SiExpress />, name: 'Express', category: 'Backend' },
    { icon: <SiSocketdotio />, name: 'Socket.io', category: 'Backend' },
    
    // Database
    { icon: <SiMongodb />, name: 'MongoDB', category: 'Database' },
    { icon: <SiPostgresql />, name: 'PostgreSQL', category: 'Database' },
    { icon: <SiSqlite />, name: 'SQLite', category: 'Database' },
    { icon: <FaDatabase />, name: 'SQL', category: 'Database' },
    { icon: <SiPrisma />, name: 'Prisma', category: 'Database' },
    
    // API & Integration
    { icon: <SiGraphql />, name: 'GraphQL', category: 'API' },
    { icon: <FaServer />, name: 'REST API', category: 'API' },
    
    // Shopify Expertise
    { icon: <FaShopify />, name: 'Shopify Apps', category: 'Shopify' },
    { icon: <SiShopify />, name: 'Shopify Extensions', category: 'Shopify' },
    { icon: <FaCode />, name: 'Liquid', category: 'Shopify' },
    { icon: <FaShopify />, name: 'Custom Apps', category: 'Shopify' },
    
    // Version Control
   

    // Tools
    { icon: <FaGitAlt />, name: 'Git', category: 'Tools' },
    { icon: <FaGitlab />, name: 'GitLab', category: 'Tools' },
    { icon: <FaVimeoV />, name: 'VSCode', category: 'Tools' }, // VSCode icon
    { icon: <FaTrello />, name: 'Trello', category: 'Tools' },
    { icon: <FaJira />, name: 'Jira', category: 'Tools' },
  ], []);

  const skillVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * i,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <div className="space-y-8">
      {/* Group skills by category */}
      {['Frontend', 'Backend', 'Database', 'API', 'Shopify', 'Tools'].map(category => (
        <div key={category}>
          <h3 className="text-lg font-semibold mb-4 text-primary">{category}</h3>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-3 sm:gap-4"
          >
            {skills
              .filter(skill => skill.category === category)
              .map((skill, index) => (
                <motion.div
                  key={skill.name}
                  custom={index}
                  variants={skillVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover={{ 
                    scale: 1.05, 
                    transition: { duration: 0.2 },
                    boxShadow: "0 4px 15px rgba(0,0,0,0.1)" 
                  }}
                  className="bg-card hover:bg-card/90 text-card-foreground rounded-lg p-3 sm:p-4 text-center flex flex-col items-center justify-center transition-colors duration-200"
                >
                  <div className="text-2xl sm:text-3xl mb-2 text-primary transition-transform duration-200">
                    {skill.icon}
                  </div>
                  <p className="text-xs sm:text-sm font-medium">
                    {skill.name}
                  </p>
                </motion.div>
            ))}
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default SkillsGrid;
