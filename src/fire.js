import firebase  from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyCtZDObspSDhK95U31pYsvZDGkXgXC4KGs",
    authDomain: "donate-for-the-relief-covid-19.firebaseapp.com",
    projectId: "donate-for-the-relief-covid-19",
    storageBucket: "donate-for-the-relief-covid-19.appspot.com",
    messagingSenderId: "971960553468",
    appId: "1:971960553468:web:b91c2476e7e4686d716c79",
    measurementId: "G-XQCHKVKSQZ"
  };
  // Initialize Firebase
  
   const fire = firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  const provider = new firebase.auth.GoogleAuthProvider();
  const auth = firebase.auth();	
  export default fire;
  export { auth, provider,  firebase };

  const [user, setUser]= useState('');
  const [email, setEmail]= React.useState('');
  const [password, setPassword] =  React.useState('');
  const {emailError, setEmailError} = useState('');
  const {passwordError, setPasswordError} = useState('');
  const {hasAccount, setHasAccount} = useState(false);

const clearInputs = () => {
  setEmail('');
  setPassword('');
}

const clearErrors = () => {
  setEmailError('');
  setPasswordError('');
}

const handleLogin = () => {
  clearErrors();
  fire
    .auth()
    .signInWithEmailAndPassword(email, password)
    .catch((err) => {
      switch(err.code){
        case "auth/invalid-email":
        case "auth/user-disabled":
        case "auth/user-not-found":
          setEmailError(err.message);
          break;
        case "auth/wrong-password":
          setPasswordError(err.message);
          break;
      }
    });
};

const handleSignUp = () => {
  clearErrors();
  fire
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .catch((err) => {
      switch(err.code){
        case "auth/email-already-in-use":
        case "auth/invalid-email":
          setEmailError(err.message);
          break;
        case "auth/weak-password":
          setPasswordError(err.message);
          break;
      }
    });
}

const handleLogout = () => {
  fire.auth().signOut();
};

const authListener = () => {
  fire.auth().onAuthStateChanged((user) => {
    if (user) {
      clearInputs();
      setUser(user);
    } else {
      setUser("");
    }
  });
};

useEffect(() =>{
  authListener();
}, [])
      
    
      
       


  