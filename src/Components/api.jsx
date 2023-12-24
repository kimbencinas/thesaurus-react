import { useQuery } from 'react-query';

export const useSynonymSuggestions = (word) => {
    return useQuery(['synonymSuggestions', word], async () => {
        const response = await fetch(`https://api.datamuse.com/sug?s=${word}&max=5`);
        const data = await response.json();
        return data;
    })
}