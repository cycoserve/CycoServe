// components/LogoutButton.tsx
import React from 'react';
import { useAuthContext } from '@/contexts/AuthContext';

const LogoutButton: React.FC = () => {
    const { logout } = useAuthContext();

    return (
        <button onClick={logout} style={styles.button}>
            Logout
        </button>
    );
};

const styles = {
    button: {
        padding: '0.5rem 1rem',
        fontSize: '1rem',
        color: '#fff',
        backgroundColor: '#ff4d4d',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    },
};

export default LogoutButton;
