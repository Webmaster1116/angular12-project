import { MenuItem } from './menu.model';

export const MENU: MenuItem[] = [
  {
    id: 2,
    label: 'TARGET DRIVE 1',
    icon: 'bx-home-circle',
    link: '/targetdrive',
    badge: {
      variant: 'info',
      text: 'MENUITEMS.DASHBOARDS.BADGE',
    },
    subItems: [
      {
        id: 3,
        label: 'CHARLOTTE',
        icon: 'bx-briefcase-alt-2',
        link: 'targetdrive',
        parentId: 2,
        badge: {
          variant: 'info',
          text: 'MENUITEMS.MARKETS.BADGE',
        },
        subItems: [
          {
            id: 4,
            label: 'MANAGER 1',
            link: '/targetdrive',
            parentId: 2,
            badge: {
              variant: 'info',
              text: 'MENUITEMS.MARKETS.BADGE',
            },
            subItems: [
              {
                id: 50,
                label: 'BRAD',
                link: 'targetdrive',
                parentId: 4,
              },
              {
                id: 60,
                label: 'JENN',
                link: 'targetdrive',
                parentId: 4,
              },
              {
                id: 70,
                label: 'GEORGE',
                link: 'targetdrive',
                parentId: 4,
              },

            ]
          },

        ]
      },
      {
        id: 8,
        label: 'ATLANTA',
        link: 'targetdrive',
        parentId: 2,
        badge: {
          variant: 'info',
          text: 'MENUITEMS.MARKETS.BADGE',
        },
        subItems: [
          {
            id: 9,
            label: 'MANAGER 1',
            link: 'targetdrive',
            parentId: 8,
            badge: {
              variant: 'info',
              text: 'MENUITEMS.MARKETS.BADGE',
            },
            subItems: [
              {
                id: 10,
                label: 'BRAD',
                link: 'targetdrive',
                parentId: 9,
              },
              {
                id: 11,
                label: 'JENN',
                link: 'targetdrive',
                parentId: 9,
              },
              {
                id: 12,
                label: 'GEORGE',
                link: 'targetdrive',
                parentId: 9,
              },

            ]
          },

        ]
      },
      {
        id: 13,
        label: 'GEORGIA',
        link: 'targetdrive',
        parentId: 2,
        badge: {
          variant: 'info',
          text: 'MENUITEMS.MARKETS.BADGE',
        },
        subItems: [
          {
            id: 14,
            label: 'MANAGER 1',
            link: 'targetdrive',
            parentId: 13,
            badge: {
              variant: 'info',
              text: 'MENUITEMS.MARKETS.BADGE',
            },
            subItems: [
              {
                id: 15,
                label: 'BRAD',
                link: 'targetdrive',
                parentId: 14,
              },
              {
                id: 16,
                label: 'JENN',
                link: 'targetdrive',
                parentId: 14,
              },
              {
                id: 17,
                label: 'GEORGE',
                link: 'targetdrive',
                parentId: 14,
              },

            ]
          },

        ]
      },
    ]
  }, {
    id: 22,
    label: 'TARGET DRIVE 2',
    icon: 'bx-home-circle',
    link: '/targetdrive',
    badge: {
      variant: 'info',
      text: 'MENUITEMS.DASHBOARDS.BADGE',
    },
    subItems: [
      {
        id: 3,
        label: 'CHARLOTTE',
        icon: 'bx-briefcase-alt-2',
        link: 'targetdrive',
        parentId: 22,
        badge: {
          variant: 'info',
          text: 'MENUITEMS.MARKETS.BADGE',
        },
        subItems: [
          {
            id: 4,
            label: 'MANAGER 1',
            link: '/targetdrive',
            parentId: 3,
            badge: {
              variant: 'info',
              text: 'MENUITEMS.MARKETS.BADGE',
            },
            subItems: [
              {
                id: 5,
                label: 'BRAD',
                link: 'targetdrive',
                parentId: 4,
              },
              {
                id: 6,
                label: 'JENN',
                link: 'targetdrive',
                parentId: 4,
              }

            ]
          },

        ]
      },
      {
        id: 8,
        label: 'ATLANTA',
        link: 'targetdrive',
        parentId: 2,
        badge: {
          variant: 'info',
          text: 'MENUITEMS.MARKETS.BADGE',
        },
        subItems: [
          {
            id: 9,
            label: 'MANAGER 1',
            link: 'targetdrive',
            parentId: 8,
            badge: {
              variant: 'info',
              text: 'MENUITEMS.MARKETS.BADGE',
            },
            subItems: [
              {
                id: 10,
                label: 'BRAD',
                link: 'targetdrive',
                parentId: 9,
              },
              {
                id: 11,
                label: 'JENN',
                link: 'targetdrive',
                parentId: 9,
              },
              {
                id: 12,
                label: 'GEORGE',
                link: 'targetdrive',
                parentId: 9,
              },

            ]
          },

        ]
      },
      {
        id: 13,
        label: 'GEORGIA',
        link: 'targetdrive',
        parentId: 2,
        badge: {
          variant: 'info',
          text: 'MENUITEMS.MARKETS.BADGE',
        },
        subItems: [
          {
            id: 14,
            label: 'MANAGER 1',
            link: 'targetdrive',
            parentId: 13,
            badge: {
              variant: 'info',
              text: 'MENUITEMS.MARKETS.BADGE',
            },
            subItems: [
              {
                id: 15,
                label: 'BRAD',
                link: 'targetdrive',
                parentId: 14,
              },
              {
                id: 16,
                label: 'JENN',
                link: 'targetdrive',
                parentId: 14,
              },
              {
                id: 17,
                label: 'GEORGE',
                link: 'targetdrive',
                parentId: 14,
              },

            ]
          },

        ]
      },
    ]
  },
  {
    id: 18,
    label: 'ARCHIVE',
    icon: 'bx-file',
    link: '/archive',
    badge: {
      variant: 'success',
      text: 'MENUITEMS.FILEMANAGER.BADGE',
    },
  },
  // {
  //   id: 19,
  //   label: 'CREATE A DRIVE',
  //   icon: 'bx-briefcase-alt-2',
  //   link: '/projects/create',
  // },
  {
    id: 20,
    label: 'CREATE A DRIVE',
    icon: 'bx-task',
    link: '/createdrive',
  },
];

