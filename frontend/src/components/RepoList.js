import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Typography, Button, Box, Grid, LinearProgress, Alert } from '@mui/material';
import MuiMarkdown from 'mui-markdown';


const fetchData = async (repoName, setRepoDetails, setLoading, setError) => {
    setRepoDetails(null)
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
         <Container maxWidth="md">
            <Typography variant="h4" gutterBottom>Repositories</Typography>
            <Box mb={2} display="flex" justifyContent="center" width="100%">
                {repoList.length > 0 ? (
                    <Grid container spacing={{ xs: 2, md: 3 }} justifyContent="center">
                        {repoList.map(item => (
                            <Grid item xs={12} sm={6} md={3} key={item} display="flex" justifyContent="center">
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={() => fetchData(item, setRepoDetails, setLoading, setError)}
                                    sx={{
                                        width: '200px',
                                        height: '100px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        textAlign: 'center',
                                        wordBreak: 'break-word'
                                    }}
                                >
                                    {item}
                                </Button>
                            </Grid>
                        ))}
                    </Grid>
                ) : (
                    <Typography>Backend Loading, Please Wait. (10-30 Seconds)</Typography>
                )}
            </Box>

            {loading && <LinearProgress />}
            {error && <Alert severity="error">{error}</Alert>}

            {repoDetails && (
                <Box mt={4}>
                    <Typography variant="h5" gutterBottom>Repository Details</Typography>
                    <Typography variant="body1">
                        <strong>URL:</strong>
                        <a href={repoDetails.html_url} target="_blank" rel="noopener noreferrer"> {repoDetails.html_url}</a>
                    </Typography>
                    <Typography variant="body1"><strong>Description:</strong></Typography>
                    <Box style={{ border: '1px solid #ccc', padding: '16px',overflow: 'auto'}}>
                        <MuiMarkdown
                        overrides={{
                              h1: {},
                            }}
                        >{atob(repoDetails.content)}</MuiMarkdown>
                    </Box>
                </Box>
            )}
        </Container>
    );
};

export default RepoList;
