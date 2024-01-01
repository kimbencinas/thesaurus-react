import React, { useState, useEffect } from 'react'
import { useSynonymSuggestions } from './api'

export default function Search({ onSearch }) {
    const [synonymWord, setSynonymWord] = useState('');
    const { data: suggestedWord, refetch } = useSynonymSuggestions(synonymWord);

    const handleSearch = () => {
        onSearch(synonymWord);
        setSynonymWord('');
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    }

    useEffect(() => {
        const fetchSuggestions = async () => {
            if (synonymWord === '') {
                await refetch();
            }
        };
        fetchSuggestions();
    }, [synonymWord, refetch]);

    return (
        <div className="search-bar">
            <input
                type="text"
                value={synonymWord}
                onChange={e => setSynonymWord(e.target.value)}
                onKeyPress={handleKeyPress}
            />
            <button onClick={handleSearch}>Search</button>

            {suggestedWord && (
                <ul>
                    {suggestedWord.map((word) => (
                        <li key={word.word}>{word.word}</li>
                    ))}
                </ul>
            )}
        </div>
    );
}