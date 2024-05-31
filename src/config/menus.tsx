import { BookOutlined, CalendarOutlined, ContactsOutlined, PieChartOutlined, SettingFilled, ShopOutlined, UserDeleteOutlined } from "@ant-design/icons";

export const sidebarMenus = [
  {
    name: 'Overview',
    path: '/overview',
    icon: <PieChartOutlined />,
    role: ['admin', 'guest'],
    subrute: [],
  },
  {
    name: 'Tickets',
    path: '/tickets',
    icon: <CalendarOutlined />,
    role: ['admin', 'guest'],
    subrute: [],
  },
  {
    name: 'Contacts',
    path: '/contacts',
    icon: <ContactsOutlined />,
    role: ['admin'],
    subrute: [],
  },
  {
    name: 'Agents',
    path: '/agents',
    icon: <UserDeleteOutlined />,
    role: ['admin'],
    subrute: [],
  },
  {
    name: 'Articles',
    path: '/articles',
    icon: <BookOutlined />,
    role: ['admin'],
    subrute: [],
  },
  {
    name: '',
    path: '',
    icon: null,
    role: ['admin'],
    subrute: [],
  },
  {
    name: 'Settings',
    path: '/settings',
    icon: <SettingFilled />,
    role: ['admin'],
    subrute: [],
  },
  {
    name: 'Subscription',
    path: '/subscription',
    icon: <ShopOutlined />,
    role: ['admin'],
    subrute: [],
  },
];
