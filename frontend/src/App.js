import React from 'react';
import RepoList from './components/RepoList';
import MainPage from './components/MainPage';
import FooterComponent from "./components/FooterComponent ";
import AboutMe from "./components/AboutMe";

function App() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <main style={{ flex: 1 }}>
                <MainPage />
                <AboutMe/>
                <RepoList/>
            </main>
            <FooterComponent />
        </div>
    );
}

export default App;
