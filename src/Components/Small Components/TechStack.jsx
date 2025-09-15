import React from 'react'
import { motion } from 'framer-motion'

function TechStack({ obj }) {
    const techLogos = [
        { icon: <i className="fa-brands fa-react"></i>, color: '#61DAFB', name: 'React' },
        { icon: <i className="fa-brands fa-js"></i>, color: '#F7DF1E', name: 'JavaScript' },
        { icon: <i className="fa-brands fa-node-js"></i>, color: '#339933', name: 'Node.js' },
        { icon: <i className="fa-brands fa-html5"></i>, color: '#E34F26', name: 'HTML5' },
        { icon: <i className="fa-brands fa-css3-alt"></i>, color: '#1572B6', name: 'CSS3' },
        { icon: <i className="fa-brands fa-java"></i>, color: '#ED8B00', name: 'Java' },
        { icon: <i className="fa-brands fa-git"></i>, color: '#F05032', name: 'Git' },
        { icon: <i className="fa-brands fa-github"></i>, color: '#181717', name: 'GitHub' },
        { icon: <i className="fa-solid fa-database"></i>, color: '#336791', name: 'Database' },
        { icon: <i className="fa-brands fa-bootstrap"></i>, color: '#7952B3', name: 'Bootstrap' },
        { icon: <i className="fa-brands fa-php"></i>, color: '#777BB4', name: 'PHP' },
    ]
    
    return (
        <div className="overflow-visible py-8">
            <div className="flex items-center justify-center">
                {techLogos.map((tech, index) => (
                    <motion.div
                        key={index}
                        className="mx-6 md:mx-10 flex flex-col items-center group cursor-pointer relative"
                        whileHover={{ 
                            scale: 1.15,
                            y: -8,
                        }}
                        transition={{ 
                            type: "spring", 
                            stiffness: 300, 
                            damping: 15 
                        }}
                    >
                        <motion.div
                            className="relative"
                            whileHover={{
                                rotate: [0, -10, 10, -10, 0],
                                transition: { duration: 0.5 }
                            }}
                        >
                            {/* Glow effect background */}
                            <motion.div
                                className="absolute inset-0 rounded-full blur-lg opacity-0 group-hover:opacity-25"
                                style={{ backgroundColor: tech.color }}
                                whileHover={{ scale: 1.5 }}
                                transition={{ duration: 0.3 }}
                            />
                            
                            {/* Icon container */}
                            <motion.div
                                className="relative z-10 w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center text-3xl md:text-4xl transition-all duration-300 group-hover:shadow-2xl"
                                style={{ 
                                    color: tech.color,
                                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                    border: `2px solid ${tech.color}20`
                                }}
                                whileHover={{
                                    backgroundColor: `${tech.color}15`,
                                    borderColor: `${tech.color}60`,
                                    boxShadow: `0 0 30px ${tech.color}40`
                                }}
                            >
                                {tech.icon}
                            </motion.div>
                        </motion.div>
                        
                        {/* Tech name tooltip */}
                        <motion.div
                            className="absolute top-full mt-4 px-3 py-1 bg-gray-800 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap z-30"
                            style={{ backgroundColor: tech.color }}
                            initial={{ opacity: 0, y: 10 }}
                            whileHover={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            {tech.name}
                            <div 
                                className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 rotate-45"
                                style={{ backgroundColor: tech.color }}
                            />
                        </motion.div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default TechStack