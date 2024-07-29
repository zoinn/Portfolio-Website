import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Typography, Button, Box, CircularProgress, Alert } from '@mui/material';

const fetchData = async (repoName, setRepoDetails, setLoading, setError) => {
    setLoading(true);
    setError(null);

    try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/repos/repodetail?repo_name=${repoName}`);
        const data = response.data;

        setRepoDetails(data);
    } catch (err) {
        setError('Error fetching data');
    } finally {
        setLoading(false);
    }
};

export const RepoList = () => {
    const [repoList, setRepoList] = useState([]);
    const [repoDetails, setRepoDetails] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/api/repos/repolist`)
            .then(response => {
                setRepoList(response.data.repo_names || response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the repo list!', error);
                setError('Error fetching repository list');
            });
    }, []);

    return (
        <Container>
            <Typography variant="h4" gutterBottom>Repositories</Typography>
            <Box mb={2}>
                {repoList.length > 0 ? (
                    <Box component="ul" sx={{ padding: 0, listStyle: 'none' }}>
                        {repoList.map(item => (
                            <Box component="li" key={item} sx={{ marginBottom: 1 }}>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={() => fetchData(item, setRepoDetails, setLoading, setError)}
                                >
                                    {item}
                                </Button>
                            </Box>
                        ))}
                    </Box>
                ) : (
                    <Typography>No repositories available</Typography>
                )}
            </Box>

            {loading && <CircularProgress />}
            {error && <Alert severity="error">{error}</Alert>}

            {repoDetails && (
                <Box mt={4}>
                    <Typography variant="h6" gutterBottom>Repository Details</Typography>
                    <Typography variant="body1"><strong>Description:</strong> {atob(repoDetails.content)}</Typography>
                    <Typography variant="body1">
                        <strong>URL:</strong>
                        <a href={repoDetails.html_url} target="_blank" rel="noopener noreferrer">{repoDetails.html_url}</a>
                    </Typography>
                </Box>
            )}
        </Container>
    );
};

export default RepoList;
