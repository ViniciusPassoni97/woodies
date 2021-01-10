import React from 'react';
import './App.css';
import PageIndex from './page/index/index';
import {motion} from 'framer-motion';

function App() {
  return (
    <motion.div 
    animate={{ translateX:0}}
    transition={{ duration: 2 }}
    className="App"
    >
      <PageIndex />
    </motion.div>
  );
}

export default App;
