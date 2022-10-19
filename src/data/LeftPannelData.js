import { GiAchievement } from 'react-icons/gi';
import { HiCode, HiOutlineTemplate } from 'react-icons/hi';
import { IoLinkSharp } from 'react-icons/io5';
import { MdOutlineAssignment, MdSchool, MdWork } from 'react-icons/md';
import { TbNotes } from 'react-icons/tb';

export const leftPannelData = [
  {
    id: 'education',
    title: 'Education',
    icon: MdSchool,
  },
  {
    id: 'work',
    title: 'Work experience',
    icon: MdWork,
  },
  {
    id: 'skills',
    title: 'Skills',
    icon: HiCode,
  },
  {
    id: 'projects',
    title: 'Projects',
    icon: MdOutlineAssignment,
  },
  {
    id: 'achievements',
    title: 'Achievements',
    icon: GiAchievement,
  },
  {
    id: 'social',
    title: 'Social links',
    icon: IoLinkSharp,
  },
  // {
  //   id: 'template',
  //   title: 'Choose template',
  //   icon: HiOutlineTemplate,
  // },
  {
    id: 'my_resume',
    title: 'My resume',
    icon: TbNotes,
  },
];
