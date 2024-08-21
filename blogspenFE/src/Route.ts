export const routes = {
    home: '/',
    signUp: '/Signup',
    signIn: '/Signin',
    write: '/new-story',
    profile: '/profile/:username',
  }
  
export type Route = keyof typeof routes
  