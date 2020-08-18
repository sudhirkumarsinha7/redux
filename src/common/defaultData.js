const user = {
  registerationForm: {
    userName: {
      displayName: 'Name',
      stateName: 'name',
      type: 'String',
      required: true,
      maxLength: 32,
    },
    mob: {
      displayName: 'Mob:',
      stateName: 'mob',
      type: 'String',
      required: true,
      keyboardType: 'numeric',
      maxLength: 10,
    },
    email: {
      displayName: 'Email:',
      stateName: 'email',
      type: 'String',
      required: true,
      maxLength: 15,
    },
    password: {
      displayName: 'Password:',
      stateName: 'password',
      type: 'String',
      required: true,
      maxLength: 15,
    },
    role: {
      displayName: 'Role',
      stateName: 'role',
      type: 'dropdown',
      isDropdownStatic: true,
    },
    address: {
      displayName: 'Adress',
      stateName: 'address',
      type: 'String',
      required: true,
      maxLength: 32,
    },
    city: {
      displayName: 'City',
      stateName: 'city',
      type: 'String',
      required: true,
      maxLength: 32,
    },
    buttons: {
      type: 'buttons',
      leftButton: {
        displayName: 'Cancel',
        buttonStyles: {
          block: true,
          light: true,
        },
      },
      rightButton: {
        displayName: 'Register',
        buttonStyles: {
          block: true,
          info: true,
        },
      },
    },
  },
  userFormValidation: {
    requiredFields: [
      'city',
      'address',
      'role',
      'password',
      'email',
      'mob',
      'name',
    ], // written in reverse order to validate from top to bottom
  },
};
const userRole = [
  {value: 'customer', key: 1, label: 'Customer'},
  {value: 'admin', key: 2, label: 'admin'},
  {value: 'vendor', key: 3, label: 'vendor'},
];
const displayNames = {
  name: 'User name',
  mob: 'Mobile number',
  address: 'address',
  role: 'Role',
  email: 'Email',
  password: 'Password',
  city: 'City',
};
export {user, userRole, displayNames};
