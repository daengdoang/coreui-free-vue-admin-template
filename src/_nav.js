//Sidebar navigation
//Daeng Muhammad Feisal

export default {
  items: [
    {
      name: 'Welcome',
      url: '/welcome',
      icon: 'icon-star'
    },
    {
      title: true,
      name: 'Foundation',
      class: '',
      wrapper: {
        element: '',
        attributes: {}
      }
    },
    {
      name: 'Colors',
      url: '/foundation/colors',
      icon: 'icon-badge'
    },
    {
      name: 'Typography',
      url: '/foundation/typography',
      icon: 'icon-badge'
    },
    {
      name: 'Icons',
      url: '/icons',
      icon: 'icon-badge',
      children: [
        {
          name: 'CoreUI Icons',
          url: '/icons/coreui-icons',
          icon: 'icon-star',
          badge: {
            variant: 'info',
            text: 'NEW'
          }
        },
        {
          name: 'Font Awesome',
          url: '/icons/font-awesome',
          icon: 'icon-star',
          badge: {
            variant: 'secondary',
            text: '4.7'
          }
        },
        {
          name: 'Simple Line Icons',
          url: '/icons/simple-line-icons',
          icon: 'icon-star'
        }
      ]
    },
    {
      name: 'Spacing',
      url: '/foundation/spacing',
      icon: 'icon-badge',
      badge: {
        variant: 'success',
        text: 'DRAFT'
      }
    },
    {
      title: true,
      name: 'Components',
      class: '',
      wrapper: {
        element: '',
        attributes: {}
      }
    },
    {
      name: 'Base',
      url: '/base',
      icon: 'icon-puzzle',
      children: [
        {
          name: 'Alerts',
          url: '/base/alerts',
          icon: 'icon-bell'
        },
        {
          name: 'Badges',
          url: '/base/badges',
          icon: 'icon-bell'
        },
        {
          name: 'Collapses',
          url: '/base/collapses',
          icon: 'icon-puzzle'
        },
        {
          name: 'List Groups',
          url: '/base/list-groups',
          icon: 'icon-puzzle'
        },
        {
          name: 'Popovers',
          url: '/base/popovers',
          icon: 'icon-puzzle'
        },
        {
          name: 'Progress Bars',
          url: '/base/progress-bars',
          icon: 'icon-puzzle'
        },
        {
          name: 'Switches',
          url: '/base/switches',
          icon: 'icon-puzzle'
        },
        {
          name: 'Tables',
          url: '/base/tables',
          icon: 'icon-puzzle'
        },
        {
          name: 'Tooltips',
          url: '/base/tooltips',
          icon: 'icon-puzzle'
        }
      ]
    },
    {
      name: 'Buttons',
      url: '/buttons',
      icon: 'icon-puzzle',
      children: [
        {
          name: 'Buttons',
          url: '/buttons/standard-buttons',
          icon: 'icon-cursor'
        },
        {
          name: 'Button Dropdowns',
          url: '/buttons/dropdowns',
          icon: 'icon-cursor'
        },
        {
          name: 'Button Groups',
          url: '/buttons/button-groups',
          icon: 'icon-cursor'
        },
        {
          name: 'Brand Buttons',
          url: '/buttons/brand-buttons',
          icon: 'icon-cursor'
        }
      ]
    },
    {
      name: 'Forms',
      url: '/base/forms',
      icon: 'icon-puzzle',
      children: [
        {
          name: 'Forms',
          url: '/base/forms',
          icon: 'icon-puzzle',
          badge: {
            variant: 'success',
            text: 'DRAFT'
          }
        }
      ]
    },

    //NAVIGATION (Breadcrumbs, Navs, Navbar, Paginations, Tabs)
    
    {
      name: 'Navigation',
      url: '/navigation',
      icon: 'icon-puzzle',
      children: [
        {
          name: 'Breadcrumbs',
          url: '/navigation/breadcrumbs',
          icon: 'icon-puzzle'
        },
        {
          name: 'Navs',
          url: '/navigation/navs',
          icon: 'icon-puzzle'
        },
        {
          name: 'Navbars',
          url: '/navigation/navbars',
          icon: 'icon-puzzle'
        },
        {
          name: 'Paginations',
          url: '/navigation/paginations',
          icon: 'icon-puzzle'
        },
        {
          name: 'Tabs',
          url: '/navigation/tabs',
          icon: 'icon-puzzle'
        },
      ]
    },

    //PATTERNS (Card, Carousels, Chart, Jumbotrons, Modals, Widget)

    {
      name: 'Patterns',
      url: '/patterns',
      icon: 'icon-puzzle',
      children: [
        {
          name: 'Cards',
          url: '/patterns/cards',
          icon: 'icon-puzzle'
        },
        {
          name: 'Carousels',
          url: '/patterns/carousels',
          icon: 'icon-puzzle'
        },
        {
          name: 'Charts',
          url: '/charts',
          icon: 'icon-pie-chart'
        },
        {
          name: 'Jumbotrons',
          url: '/patterns/jumbotrons',
          icon: 'icon-puzzle'
        },
        {
          name: 'Modals',
          url: '/patterns/modals',
          icon: 'icon-bell'
        },
        {
          name: 'Widgets',
          url: '/widgets',
          icon: 'icon-calculator',
          badge: {
            variant: 'primary',
            text: 'NEW'
          }
        }
      ]
    },
    {
      divider: true
    },
    //PAGES
    {
      title: true,
      name: 'Page Sample'
    },
    {
      name: 'Login Page',
      url: '/pages/login',
      icon: 'icon-emotsmile'
    },
    {
      name: 'Register Page',
      url: '/pages/register',
      icon: 'icon-emotsmile'
    },
    {
      name: 'Error 404 Page',
      url: '/pages/404',
      icon: 'icon-emotsmile'
    },
    {
      name: 'Error 500 Page',
      url: '/pages/500',
      icon: 'icon-emotsmile'
    },
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-emotsmile',
      badge: {
        variant: 'primary',
        text: 'NEW'
      }
    },
    {
      name: 'Go to Cashbac Web',
      url: 'http://cashbac.com/',
      icon: 'icon-emotsmile',
      class: 'mt-auto',	
      variant: 'success',	
      attributes: { target: '_blank', rel: 'noopener' }	
    },
  ]
}
