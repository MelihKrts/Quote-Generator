import React, { useEffect, useState } from 'react'

export default function QuotesArea() {

    const [quoteData, setQuoteData] = useState({ content: '', author: "" })

    const fetchQuote = async () => {
        try {
            const response = await fetch('https://api.quotable.io/random')
            if (!response.ok) {
                throw new Error("Failed to fetch quote")
            }
            const data = await response.json()
            setQuoteData(data)
        }
        catch (error) {
            console.log('Error fetching quote:', error)
        }
    }

    const handleQuote = () => {
        fetchQuote()
    }

    useEffect(() => {
        fetchQuote()
    }, [])

    return (
        <section className='full'>
            <div className='container'>
                <div className='quotes-main-box'>
                    <div className='main-title'>
                        <h3>Quotes Generator</h3>
                    </div>
                    <div className='quotes'>
                        {quoteData.content && (
                            <div className='qutoes-container'>
                                <p className='quote-text'>{quoteData.content}</p>
                                <p className='quote-author'>{quoteData.author}</p>
                            </div>
                        )}
                        <button onClick={handleQuote} className='button'>
                            Get Quote
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
