import React, { useState, useEffect } from 'react';

const BlygoButton = ({ projectKey, email, phone, title }) => {
    const [sdkLoaded, setSdkLoaded] = useState(false);

    useEffect(() => {
        if (!sdkLoaded) {
            const script = document.createElement('script');
            script.src = 'https://blygo.io/sdk.min.js';
            script.async = true;
            script.defer = true;
            document.body.appendChild(script);
            setSdkLoaded(true);
        }
    }, [sdkLoaded]);

    if (!projectKey || !email) {
        return <div>Error: Both projectKey and email are required.</div>;
    }

    return (
        <div>
            <blygo-button projectKey={projectKey} email={email}  phone={phone} title={title}/>
        </div>
    );
};

export default BlygoButton;
