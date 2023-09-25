export default async function handler(req, res) {


    const fetchResponse = await fetch(`https://api.shrtco.de/v2/shorten?url=${req.query.url}`, {
        method: 'GET'
    });
    // res.status(200).json(await fetchResponse.json());
    res.json(await fetchResponse.json());
}