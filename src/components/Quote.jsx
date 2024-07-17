import { useEffect, useState } from "react";

export default function Quote(){

    const [quote, setQuote] = useState({
        quote: "Stoic Quotes to get you through the day",
        author: "Not Gaurav",
        quoteIndex: 0,
        authorIndex: 0,
    });

    const fetchQuote = () => {
        fetch('https://stoic-quotes.com/api/quote')
        .then(response => response.json())
        .then(data => {
            if (data.text.length <= 100){
                setQuote({
                    quote: data.text,
                    author: data.author,
                    quoteIndex: 0,
                    authorIndex: 0,
                });
            } else {
                fetchQuote();
            }
        })
        .catch(err => console.error('Error fetching the quote:', err));
    };

    const increaseCount = () => {
        if(quote.quoteIndex < quote.quote.length){
            setQuote({
                ...quote,
                quoteIndex: quote.quoteIndex+1,
            });
        } else if(quote.authorIndex < quote.author.length) {
            setQuote({
                ...quote,
                authorIndex: quote.authorIndex+1,
            });
        }
    }
    
    useEffect(()=> {
        const interval = setInterval(fetchQuote, 5000);
        const interval2 = setInterval(increaseCount, 100);

        return () => {
            clearInterval(interval);
            clearInterval(interval2);
        };
    }, [quote]);

    return (
    <div className="relative w-full h-full">
        <span className="w-full absolute top-0 left-100 ">{`${quote.quote.slice(0,quote.quoteIndex)}${quote.quoteIndex<quote.quote.length ? "_" : ""}`}</span>
        <span className="absolute bottom-0 right-0 text-green-400">{`${quote.authorIndex<quote.author.length && quote.authorIndex>0 ? "_" : ""}${quote.author.slice(0,quote.authorIndex)}`}</span>
    </div>
    );
}

