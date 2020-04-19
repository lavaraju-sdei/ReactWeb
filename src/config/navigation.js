import {Navigation} from 'react-native-navigation';

export const goAuth = () =>
  Navigation.setRoot({
    root: {
      stack: {
        id: 'App',
        children: [
          {
            component: {
              name: 'prompt',
              passProps: {
                text: '',
              },
              options: {
                statusBar: {
                  visible: false,
                  drawBehind: true,
                },
                topBar: {
                  visible: false,
                  drawBehind: true,
                },
              },
            },
          },
        ],
      },
    },
  });

export const goHome = () =>
  Navigation.setRoot({
    root: {
      stack: {
        id: 'App',
        children: [
          {
            component: {
              name: 'Dashboard',
              // name:"EmployeeDashboard",
              passProps: {
                text: '',
              },
              options: {
                statusBar: {
                  visible: false,
                  drawBehind: true,
                },
                topBar: {
                  visible: false,
                  drawBehind: true,
                },
              },
            },
          },
        ],
      },
    },
  });
export const goOtp = () =>
  Navigation.setRoot({
    root: {
      stack: {
        id: 'App',
        children: [
          {
            component: {
              name: 'OTP',
              // name:"EmployeeDashboard",
              passProps: {
                text: '',
              },
              options: {
                statusBar: {
                  visible: false,
                  drawBehind: true,
                },
                topBar: {
                  visible: false,
                  drawBehind: true,
                },
              },
            },
          },
        ],
      },
    },
  });
export const goStore = () =>
  Navigation.setRoot({
    root: {
      stack: {
        id: 'App',
        children: [
          {
            component: {
              name: 'Store',
              passProps: {
                text: '',
              },
              options: {
                statusBar: {
                  visible: false,
                  drawBehind: true,
                },
                topBar: {
                  visible: false,
                  drawBehind: true,
                },
              },
            },
          },
        ],
      },
    },
  });
