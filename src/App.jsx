import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import { QueryClient, QueryClientProvider } from 'react-query'
import './App.css'

const queryClient = new QueryClient();

export default function App() {
    const [synonyms, setSynonyms] = useState([]);

    const handleSearch = async (query) => {
        try {
            const response = await fetch(`https://api.datamuse.com/words?ml=${query}&max=5`);
            const data = await response.json();
            setSynonyms(data);
        } catch (error) {
            console.error('Error', error);
        }
    };

    return (
        <QueryClientProvider client={queryClient}>
            <div className="app">
                <Navbar onSearch={handleSearch} />
                <div className="content-container">
                    <h2>Synonyms:</h2>
                    <ul>
                        {synonyms.map((synonym) => (
                            <li key={synonym.word}>{synonym.word}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </QueryClientProvider>
    );
}