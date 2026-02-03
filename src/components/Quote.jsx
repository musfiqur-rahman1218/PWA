import React, { useState, useEffect } from 'react';

export default function Quote() {
    const [quote, setQuote] = useState({ content: "Loading motivation...", author: "" });
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchQuote = async () => {
            try {
                // Try to get from cache first if offline, but SW handles this mostly.
                // We add a timestamp to force fresh if online, but SW StaleWhileRevalidate handles it better.
                const response = await fetch('https://api.quotable.io/random');
                if (!response.ok) throw new Error('Network response was not ok');
                const data = await response.json();
                setQuote({ content: data.content, author: data.author });
                localStorage.setItem('cachedQuote', JSON.stringify({ content: data.content, author: data.author }));
            } catch (e) {
                console.error("Fetch failed", e);
                setError(true);
                // Fallback to localStorage if available
                const cached = localStorage.getItem('cachedQuote');
                if (cached) {
                    setQuote(JSON.parse(cached));
                    setError(false);
                } else {
                    setQuote({ content: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" });
                }
            }
        };

        fetchQuote();
    }, []);

    return (
        <div className="card" style={{ textAlign: 'center', fontStyle: 'italic' }}>
            <blockquote>
                "{quote.content}"
            </blockquote>
            <p style={{ marginTop: '0.5rem', fontWeight: 'bold' }}>- {quote.author}</p>
        </div>
    );
}
