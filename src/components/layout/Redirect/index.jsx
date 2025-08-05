const Redirect = ({url}) => {
    useEffect(() => {
        window.location.href = url;
    }, []);

    return <h5>Redirecting...</h5>;
}

export default Redirect;