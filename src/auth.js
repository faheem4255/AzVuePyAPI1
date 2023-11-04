import { UserAgentApplication } from 'msal';

const msalConfig = {
  auth: {
    clientId: '6fcffccd-dc9c-4604-83f3-ded3e3f19d49', // Your Azure AD Client ID
    authority: 'https://login.microsoftonline.com/6cb4ad49-7e84-42c5-ba32-c5fc37482796', // Your Azure AD Authority URI
    redirectUri: 'http://localhost:5174/signedinsuccess', // Use a secure https:// URI
  },
  cache: {
    cacheLocation: 'localStorage',
    storeAuthStateInCookie: true,
  },
};

const msalInstance = new UserAgentApplication(msalConfig);

export default msalInstance;
