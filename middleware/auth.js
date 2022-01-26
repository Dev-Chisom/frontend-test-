export default function ({  redirect }) {
    // check if the user is logged in with the correct info
   const isAuthenicated = sessionStorage.getItem('savedUser')
   if ( !isAuthenicated) {
      return redirect('/auth/signin')
    }
  }
  
  