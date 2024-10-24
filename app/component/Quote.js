export async function getServerSideProps() {
    try {
        const response = await fetch("https://api.api-ninjas.com/v1/quotes", {
            headers: {
                'X-Api-Key': 'your api key'
            }
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const [data] = await response.json();

        return {
            props: {
                quote: {
                    content: data.quote,
                    author: data.author
                },
            },
        };
    } catch (error) {
        console.error("Fetch error: ", error);
        return {
            props: {
                quote: null,
                error: "Error fetching quote",
            },
        };
    }
}

export default function Quote({ quote, error }) {
    return (
        <div className="container flex flex-col pt-16">
            <h3>Quote Generator</h3>
            <div className="w-full">
                {error ? (
                    <div className="text-red-500">{error}</div>
                ) : quote ? (
                    <div className="p-4 border rounded">
                        <p className="text-lg">{quote.content}</p>
                        <p className="text-sm mt-2">- {quote.author}</p>
                    </div>
                ) : (
                    <div>No quote available.</div>
                )}
            </div>
        </div>
    );
}