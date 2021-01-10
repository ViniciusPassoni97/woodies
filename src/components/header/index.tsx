import React from 'react';

import ContainerHeader from './styles';
import Logo from '../../assets/icons/logo.png';
import { motion } from "framer-motion"

const Header: React.FC = () => {
  return (
    <ContainerHeader>
        <div className='ContainerHeaderDivImage'>
            <img className='ContainerHeaderDivImageImg' src={Logo} alt='Logo'/>
            <h1 className='ContainerHeaderDivImageTitle'>Woodies</h1>
        </div>
        <div className='ContainerHeaderDivInfo'>
            <motion.a 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className='ContainerHeaderDivInfoLink'>
              Home
            </motion.a >
            <motion.a 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className='ContainerHeaderDivInfoLink'>
              About Us
            </motion.a>
            <motion.a 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className='ContainerHeaderDivInfoLink'>
              How it works
            </motion.a>
            <motion.a 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}  
            className='ContainerHeaderDivInfoLink'>
              Categories
            </motion.a>
            <motion.a 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className='ContainerHeaderDivInfoLink'>
              Testimony
            </motion.a>
            <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className='ContainerHeaderDivInfoButton'>
              Sign Up
            </motion.button>
        </div>
    </ContainerHeader>
  );
}

export default Header;