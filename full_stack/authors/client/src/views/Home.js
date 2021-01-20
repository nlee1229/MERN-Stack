import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AuthorForm from '../components/AuthorForm';
import AuthorList from '../components/AuthorList';

export default () => {
    const [authors, setAuthors] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/')
            .then(res => {
                setAuthors(res.data);
                setLoaded(true);
            });
    }, [])

    return (
        <div>
            <AuthorList />

        </div>
    )
}

/* {loaded && <AuthorList authors={authors} />} */