"client"
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useAuthContext } from '@/contexts/AuthContext'; // Adjust import path
import styles from '@/styles/SignIn.module.css';
import LogoutButton from '@/components/elements/LogOutBtn';

const auth = getAuth();

const SignIn: React.FC = () => {
  const router = useRouter();
  const { user } = useAuthContext();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false); // Flag for signup/signin toggle
  const [error, setError] = useState<string | null>(null);

  const handleSignIn = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Email and password are required.');
      return;
    }

    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      const { user: firebaseUser } = result;

      if (firebaseUser) {
        console.log('User signed in:', firebaseUser.uid);
        router.push('/dashboard'); // Redirect to dashboard
      }
    } catch (error: any) {
      console.error('Error signing in:', error);
      setError('Failed to sign in. Please check your credentials.');
    }
  };

  const handleSignUp = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Email and password are required.');
      return;
    }

    try {
      const result = await createUserWithEmailAndPassword(auth, email, password);
      const { user: firebaseUser } = result;

      if (firebaseUser) {
        console.log('User created:', firebaseUser.uid);
        router.push('/dashboard'); // Redirect to dashboard
      }
    } catch (error: any) {
      console.error('Error creating user:', error);
      setError('Failed to create account. Please try again.');
    }
  };

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider);
      const { user: firebaseUser } = result;

      if (firebaseUser) {
        console.log('User signed in with Google:', firebaseUser.uid);
        router.push('/dashboard'); // Redirect to dashboard
      }
    } catch (error: any) {
      console.error('Error signing in with Google:', error);
      setError('Failed to sign in with Google. Please try again.');
    }
  };

  return (
    <div className={styles.container}>
      {user ? (
        <>
          <LogoutButton />
        </>
      ) : (
        <form onSubmit={isSignUp ? handleSignUp : handleSignIn} className={styles.form}>
          <h1 className={styles.title}>{isSignUp ? 'Sign Up' : 'Sign In'}</h1>
          <button type="button" onClick={handleGoogleSignIn} className={styles.googleButton}>
            Sign in with Google
          </button>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <label htmlFor="email" className={styles.label}>Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.input}
            required
          />
          <label htmlFor="password" className={styles.label}>Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={styles.input}
            required
          />
          <button type="submit" className={styles.button}>
            {isSignUp ? 'Create Account' : 'Sign In'}
          </button>
          <p className={styles.link} onClick={() => setIsSignUp(!isSignUp)}>
            {isSignUp ? 'Already have an account? Sign In' : 'New user? Sign Up'}
          </p>

        </form>
      )}
    </div>
  );
};

export default SignIn;
