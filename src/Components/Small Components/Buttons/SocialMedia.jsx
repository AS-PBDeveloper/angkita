import React from 'react'
import { motion } from 'framer-motion'
import GradientButton from './GradientButton'

function SocialMedia({ hover, items }) {
    return (
        <div>
            <motion.div
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
            >
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <GradientButton
                        text={items.name}
                        href={items.link}
                        borderRadius={24}
                        bgColor="#030712"
                        duration={3000}
                    />
                </motion.div>
            </motion.div>
        </div>
    )
}

export default SocialMedia