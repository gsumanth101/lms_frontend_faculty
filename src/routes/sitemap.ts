import paths from './paths';

export interface SubMenuItem {
  name: string;
  pathName: string;
  path: string;
  icon?: string;
  active?: boolean;
  items?: SubMenuItem[];
}

export interface MenuItem {
  id: string;
  subheader: string;
  path?: string;
  icon?: string;
  avatar?: string;
  active?: boolean;
  items?: SubMenuItem[];
}

const sitemap: MenuItem[] = [
  // {
  //   id: 'dashboard',
  //   subheader: 'Dashboard',
  //   path: '/',
  //   icon: 'hugeicons:grid-view',
  //   active: true,
  // },
  {
    id: 'dashboard',
    subheader: 'Overview',
    path: '/dashboard',
    icon: 'hugeicons:grid-view',
  },
  {

  id: 'courses',
  subheader: 'Courses',
  icon: 'hugeicons:book-open-01',
  items: [
    {
      name: 'Courses',
      pathName: 'signin',
      icon: '',
      path: paths.signin,
    },
    {
      name: 'Assessments',
      pathName: 'signup',
      icon: '',
      path: paths.signup,
    },
  ],
},


  // {
  //   id: '',
  //   subheader: 'Mentors',
  //   path: '#!',
  //   icon: 'mynaui:user-hexagon',
  // },
  {
    id: 'disscussion-forums',
    subheader: 'Messages',
    path: '#!',
    icon: 'mage:message-dots',
  },
  {
    id: 'profile',
    subheader: 'Profile',
    path: '#!',
    icon: 'hugeicons:settings-01',
  },

  {
    id: 'change-password',
    subheader: 'Change Password',
    path: '#!',
    icon: 'mynaui:lock',
  },
  // {
  //   id: 'authentication',
  //   subheader: 'Authentication',
  //   icon: 'mynaui:lock-password',
  //   items: [
  //     {
  //       name: 'Sign In',
  //       pathName: 'signin',
  //       icon: '',
  //       path: paths.signin,
  //     },
  //     {
  //       name: 'Sign Up',
  //       pathName: 'signup',
  //       icon: '',
  //       path: paths.signup,
  //     },
  //   ],
  // },
];

export default sitemap;