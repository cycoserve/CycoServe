// utils/withAuth.tsx
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuthContext } from '@/contexts/AuthContext';

const withAuth = <P extends object>(WrappedComponent: React.ComponentType<P>) => {
    const ComponentWithAuth: React.FC<P> = (props: P) => {
        const { user, loading } = useAuthContext();
        const router = useRouter();

        useEffect(() => {
            if (!loading && !user) {
                router.push('/signin'); // Redirect to sign-in page if not authenticated
            }
        }, [user, loading, router]);

        if (loading) {
            return <div>Loading...</div>; // Show loading spinner or message while checking auth status
        }

        return <WrappedComponent {...props} />;
    };

    return ComponentWithAuth;
};

export default withAuth;
