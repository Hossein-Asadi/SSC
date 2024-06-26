import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';

// import { github } from '../../assets';
import { SectionWrapper } from '../../hoc';
import { projects } from '../../constants';
import { fadeIn } from '../../utils/motion';
import { config } from '../../constants/config';
import { Header } from '../atoms/Header';
import { TProject } from '../../types';
import { HiMailOpen } from 'react-icons/hi';

const ProjectCard: React.FC<{ index: number } & TProject> = ({
  index,
  name,
  description,
  tags,
  image,
  email,
  // sourceCodeLink,
}) => {
  return (
    <motion.div variants={fadeIn('up', 'spring', index * 0.5, 0.75)}>
      <Tilt glareEnable tiltEnable tiltMaxAngleX={10} tiltMaxAngleY={10} glareColor="#aaa6c3">
        <div className="bg-tertiary w-full rounded-2xl p-5 sm:w-[256px] h-[400px]">
          <div className="relative h-[200px] w-full">
            <img src={image} alt={name} className="h-full w-full rounded-2xl object-cover" />
            <div className="card-img_hover absolute inset-0 m-3 flex justify-end">
              {/* <div
                onClick={() => window.open(sourceCodeLink, '_blank')}
                className="black-gradient flex h-10 w-10 cursor-pointer items-center justify-center rounded-full"
              >
                <img src={github} alt="github" className="h-1/2 w-1/2 object-contain" />
              </div> */}
            </div>
          </div>
          <div className="mt-5 h-[145px] flex flex-col">
            <p className="text-[20px] font-bold text-white">{name}</p>
            <p className="text-gray-200 mt-2 text-[14px]">{description}</p>
            {name == 'Raein Soltani' ? (
              <p className="text-secondary mt-auto text-[12px]">
                <a href={`mailto:raein@ceit-ssc.ir`} className="flex gap-2 items-center">
                  <HiMailOpen size={21} />
                  <span>For inquiries or sponsorship raein@ceit-ssc.ir</span>
                </a>
              </p>
            ) : null}
            <p className="text-secondary mt-auto text-[12px]">
              <a href={`mailto:${email}`} className="flex gap-2 items-center">
                <HiMailOpen size={21} />
                <span>Email at {email}</span>
              </a>
            </p>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map(tag => (
              <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                #{tag.name}
              </p>
            ))}
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <Header useMotion={true} {...config.sections.works} />

      <div className="flex w-full">
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className="text-secondary mt-3 max-w-3xl text-[17px] leading-[30px]"
        >
          {config.sections.works.content}
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7 justify-center items-center">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, '');
