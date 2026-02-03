import React, { useState, useEffect } from 'react';

export default function OfflineIndicator() {
    const [isOnline, setIsOnline] = useState(navigator.onLine);

    useEffect(() => {
        const handleOnline = () => setIsOnline(true);
        const handleOffline = () => setIsOnline(false);

        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffline);

        return () => {
            window.removeEventListener('online', handleOnline);
            window.removeEventListener('offline', handleOffline);
        };
    }, []);

    return (
        <div className={`offline-badge ${isOnline ? 'status-online' : 'status-offline'}`}>
            {isOnline ? 'Online' : 'Offline Mode'}
        </div>
    );
}
