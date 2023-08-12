const fetch = require("node-fetch");

exports.findUsers = async () => {
    const response = await fetch("http://localhost:3030/users", { method: 'get' });

    const json = response.json();
    return json;
}