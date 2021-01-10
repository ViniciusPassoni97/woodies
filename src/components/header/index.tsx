import React from 'react';

import ContainerHeader from './styles';
import Logo from '../../assets/icons/logo.png';
import { motion } from "framer-motion"

const Header: React.FC = () => {
  return (
    <ContainerHeader>
        <div className='ContainerHeaderDivImage'>
            <img src={Logo} alt='Logo'/>
            <h1 className='ContainerHeaderDivImageTitle'>Woodies</h1>
        </div>
        <div className='ContainerHeaderDivInfo'>
            <motion.a className='ContainerHeaderDivInfoLink'>
              Home
            </motion.a >
            <motion.a className='ContainerHeaderDivInfoLink'>
              About Us
            </motion.a>
            <motion.a className='ContainerHeaderDivInfoLink'>
              How it works
            </motion.a>
            <motion.a className='ContainerHeaderDivInfoLink'>
              Categories
            </motion.a>
            <motion.a className='ContainerHeaderDivInfoLink'>
              Testimony
            </motion.a>
            <motion.button className='ContainerHeaderDivInfoButton'>
              Sign Up
            </motion.button>
        </div>
    </ContainerHeader>
  );
}

export default Header;