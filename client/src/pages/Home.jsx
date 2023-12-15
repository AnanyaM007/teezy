import {motion, AnimatePresence} from 'framer-motion';
import { useSnapshot } from 'valtio'; 
import { CustomButton } from '../components';
import state from '../store';
import{
    headContainerAnimation,
    headContentAnimation,
    headTextAnimation,
    slideAnimation
} from '../config/motion';

const Home = () => {
    const snap = useSnapshot(state);

  return (
  <AnimatePresence>
    {snap.intro && (
        <motion.section className='home' {...slideAnimation ('left')}>
            <motion.header {...slideAnimation("down")}>
                <img src='/logo.svg' alt='logo' className='w-22 object-contain' />
            </motion.header>

            <motion.div className='home-content' {
                ...headContainerAnimation}>
                    <h1 className='head-text'>
                    Customize <br className='xl:block hidden' /> Your T-Shirt, <br className='xl:block hidden' /> Your Way!!
                    </h1>
                </motion.div>
                <motion.div {...headContentAnimation} className='flex flex-col gap-8'> 
                    <p className='text-gray-700 text-base'>
                        Create your unique and exclusive shirt with our brand-new 3D
                        customization tool.<br className='xl:block hidden' />  <strong>Unleash your imagination </strong>and define your own style
                    </p>

                    <CustomButton type="filled" title='Customize It'
                    handleClick={() => state.intro = false}
                    customStyles="bgcolor-gray-500 w-fit px-4 py-2.5 font-bold text-sm text-gray-600"
                    />
                </motion.div>
            

        </motion.section>
    )}
  </AnimatePresence>
  )
}

export default Home