import React, { useState } from 'react'
import { useSynonymSuggestions } from './api'

export default function Search({ onSearch }) {
    const [synonymWord, setSynonymWord] = useState('');
    const { data: suggestedWord } = useSynonymSuggestions(synonymWord);

    const handleSearch = () => {
        onSearch(synonymWord);
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    }

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