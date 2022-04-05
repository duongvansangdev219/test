const config = {
    HOST: process.env.REACT_APP_URL_BASE_API,
    HEADERS: (isNotJSON) => {
        const header = {
            crossDomain: true,
            // Authorization: getToken()
        }
        if (!isNotJSON) {
            header['Content-Type'] = 'application/json';
        }
        return header;
    },
};
export default config;