'use strict';

export const Strings = {
  error: {
    email: 'Please enter a valid email address.',
    phoneNumber: 'Please enter a valid phone number.',
    pageNotFound: 'Page Not Found',
    '404': '404',
    error: 'Error',
    goBack: 'Go Backsdfsd',
    noRecFound: 'No Record Found!',
  },
  prompt: {
    pointHeading: 'Points Calendar or Promotional Events',
    howItWorks: 'How Rewards System Works ?',
    howItWorks1: 'The more you visit, the more you earn !',
    howItWorks2: 'Earn bonus points on special occasions !',
    howItWorks3: 'Join into special promotions giveaway events !',
    pointsOn: 'Points on',
  },
  placeholder: {
    phone: 'Phone',
    firstname: 'First Name',
    lastname: 'Last Name',
    email: 'Email',
    dob: 'Date of Birth',
    address: 'Address',
    city: 'City',
    state: 'State',
    zipCode: 'Zip Code',
  },
  common: {
    savenCont: 'Save & Continue',
    goBack: 'Go Back',
    request: 'Request',
    continue: 'Continue',
    cancel: 'Cancel',
    enter: 'Enter',
    points: 'Points',
    point: 'Point',
    ok: 'Ok',
  },
  auth: {
    signIn: 'Sign In',
    signUp: 'Sign Up',
    notAmember: 'Not yet a Member? ',
    signInHere: 'Already a member? Sign in here!',
    submit: 'Submit',
    createAcAggrement: 'By creating an account you agree to our',
    tNcPP: 'Terms of Service and Privacy Policy',
    logout: 'Logout',
    logoutConfirmMessage: 'Are you sure to logout?',
    checkin: 'Check In',
    checkout: 'Check Out',
    checkoutConfirmation: 'Do you really want to check out?',
    checkinConfirmation:
      'Enter Phone and Pin Number and Press Check In Button to check in',
    checkoutPhoneInfo1:
      'Enter Phone Number and Press Check Out Button to close app',
  },
  otp: {
    acVerific: 'Account Verification',
    enterMessage: 'Please enter the authentication code',
    sendMessage: 'sent to',
    verfy: 'Verify',
    resend: 'Resend?',
  },
  dashboard: {
    dashboard: 'Dashboard',
    redeemPoints: 'Redeem Points',
    redeemPointsText1: 'Turns Points into',
    redeemPointsText2: 'Free Match Plays',
    promotionalEvents: 'Promotional Events',
    promotionalEventsText1: 'Click here for',
    promotionalEventsText2: 'Promotional Events',
    offers: 'Offers',
    offersText1: 'Click here for',
    offersText2: 'available offers',
    pointsHistory: 'Points History',
    pointsHistoryText1: 'View detailed',
    pointsHistoryText2: 'points history',
    profile: 'Profile',
    goToAdmin: 'Go to Admin',
    earnedCheckInPoints: 'Earned Check In Points',
    earnedCheckOutPoints: 'Earned Check Out Points',
  },
  offers: {
    offers: 'Offers',
    enterOfferConfirmation: 'Are you sure to enter in this offer?',
  },
  redeemPoints: {
    redeemPointsInfo: 'Please click below to redeem points',
    checkInPoints: 'Available Check In Points',
    checkOutPoints: 'Available Check Out Points',
    earnedCheckInPoints: 'Earned Check In Points',
    earnedCheckOutPoints: 'Earned Check Out Points',
    redeemPointsConfirmMsg: 'Are you sure want to redeem this point?',
    notEnoughPoints: 'Sorry, You do now have enough points to redeem',
  },
  pointHistory: {
    pointsHistoryInfo: 'Your all history points',
  },
  promotionalEvents: {
    weeklyEvents: 'Weekly Promotions',
    weeklyEventSubText1: 'Enter into weekly promotion Event drawings',
    weeklyEventSubText2: 'Each Player may order once a day',
    enterOfferMessage: 'Are you sure to enter in this event?',
  },
  profile: {
    profile: 'Profile',
    profileMsg1: 'Phone number cannot be changed,',
    profileMsg2: 'request Phone number change to admin',
  },
  admin: {
    userMngmt: 'User Management',
    rolesMngmt: 'Roles Management',
    rewardsMngmt: 'Rewards Management',
    rewardAct: 'Reward Activity',
    storeMngmt: 'Store Management',
    user: 'Users',
    admin: 'Admins',
    addStore: 'Add Store',
    viewStore: 'View Store',
    redeemRequest: 'Redeem Request',
    promoOffers:'Promo Offers',
    addPromoOffers: 'Add Promo Offers',
    viewPromoOffers:'View Promo Offers',
    promotionalEvents:'Promotional Events',
    addPromotionalEvents: 'Add Promotional Events',
    viewPromotionalEvents:'View Promotional Events'
  },
  tableHeaders:{
    redeemRequestHeaders :[
      {
        name: 'S.No'
      },
      {
        name: 'Full Name'
      },
      {
        name: 'Phone'
      },
      {
        name: 'Offer Name'
      }, 
      {
        name: 'Action'
      },
      {
        name: 'reason'
      },
    ],
    
     promoOfferHeaders : [
      {
        name: 'S.No'
      },
      {
        name: 'Promotion Name'
      },
      {
        name: 'Start Date'
      },
      {
        name: 'End Date'
      },
      {
        name: 'Amount'
      },
      {
        name: 'Current User'
      },
      {
        name: 'Max User'
      }
    ],
    
     promoEventHeaders: [
      {
        name: 'S.No'
      },
      {
        name: 'Event Name'
      },
      {
        name: 'Start Date'
      },
      {
        name: 'End Date'
      },
      {
        name: 'Amount'
      },
      {
        name: 'Max User'
      },
      {
        name: 'Purpose'
      },
      {
        name: 'Image'
      }
    ],
    usermanagementUserHeaders:[
      {
        name: 'S.No'
      },
      {
        name:'Full Name'
      },
      {
        name:'Phone'
      },
      {
        name:'Role'
      },
      {
        name:'Action'
      }
    ],
    userManagementAdminHeaders:[
      {
        name: 'S.No'
      },
      {
        name:'Full Name'
      },
      {
        name:'Phone'
      },
      {
        name:'Role'
      }
    ],
    roleManagementUserHeaders:[
      {
        name:'S.NO'
      },
      {
        name:'First Name'
      },
      {
        name:'Last Name'
      },
      {
        name:'Phone'
      },
      {
        name:'Role'
      }
    ],
    roleManagementUserHeaders:[
      {
        name:'S.NO'
      },
      {
        name:'First Name'
      },
      {
        name:'Last Name'
      },
      {
        name:'Phone'
      },
      {
        name:'Role'
      }
    ],
    roleManagementAdminHeaders:[
      {
        name:'S.NO'
      },
      {
        name:'First Name'
      },
      {
        name:'Last Name'
      },
      {
        name:'Phone'
      },
      {
        name:'Role'
      }
    ],
    viewStoreHeaders:[
      {
        name:'S.NO'
      },
      {
        name:'Store Name'
      },
      {
        name:'Latitude'
      },
      {
        name:'Longitude'
      }
    ],
    addStoreHeaders:[
      {
        name:'S.NO'
      },
      {
        name:'Store Name'
      },
      {
        name:'Latitude'
      },
      {
        name:'Longitude'
      }
    ],
    rewardsactivityHeaders:[
      {
        name:'S.NO'
      },
      {
        name:'Full Name'
      },
      {
        name:'Phone'
      },
      {
        name:'Offer Name'
      },
      {
        name:'Date Claimed'
      },
      {
        name:'Date Accepted'
      },
      {
        name:'Accepted By'
      }
    ]
  },

};
