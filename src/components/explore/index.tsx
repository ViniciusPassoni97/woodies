import React from 'react';

import {motion} from 'framer-motion';
import {ExploreDiv,ExploreDivImage,ExploreDivInfo } from './style';
import Balcony from '../../assets/icons/balcony.png';

const explore: React.FC = () => {
  return (
      <>
        <ExploreDiv>
          <ExploreDivInfo>
            <p className='ExploreDivInfoTitle'>Are you looking for <strong>woodden furniture </strong>for your place ?</p>
            <h2 className='ExploreDivInfo'>This is the Right Place</h2>
            <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className='ExploreDivInfoButton'>
              Explore Furniture
            </motion.button>
          </ExploreDivInfo>
          <ExploreDivImage>
            <img className='ExploreDivImageImg' src={Balcony} alt='Balcony' />
          </ExploreDivImage>
        </ExploreDiv>
      </>
  );
}

export default explore;