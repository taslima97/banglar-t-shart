import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const sharts = useLoaderData()
    return (
        <div>
            home is here:{sharts.length}
        </div>
    );
};

export default Home;