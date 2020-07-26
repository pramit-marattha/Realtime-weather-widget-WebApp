import React from 'react';


function useFetchhook({ url }) {
    const [response, setResponse] = React.useState({});
    const [loading, setLoading] = React.useState(true);
    const [hasError, setHasError] = React.useState(false);

    React.useEffect(() => {
        setLoading(true);
        fetch(url)
            .then((res) => {
                if (res.status !== 200) {
                    throw new Error(res.statusText);
                }
                return res.json();
            })
            .then((res) => {
                setResponse(res);
                setLoading(false);
            })
            .catch(() => {
                setHasError(true);
                setLoading(false);
            })
    }, [url]);

    return [response, loading, hasError]
}

export { useFetchhook };
