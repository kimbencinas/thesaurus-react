import React, { useState } from 'react'

export default function Search({ onSearch }) {
    const [synonymWord, setSynonymWord] = useState('');

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

        </div>
    );
}