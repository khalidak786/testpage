const cassandra = require('cassandra-driver');
const config = require('./.gitignore/config');

const client = new cassandra.Client({
    cloud: { secureConnectBundle: 'secure-connect-jsonmsgtest.zip' },
    credentials: { username: config.username, password: config.password }
});

async function fetchData() {
    try {
        await client.connect();
        const query = 'SELECT * FROM default_keyspace.testreport';
        const result = await client.execute(query);
        return result.rows;
    } catch (error) {
        console.error('Error fetching data:', error);
    } finally {
        await client.shutdown();
    }
}

document.addEventListener('DOMContentLoaded', async () => {
    const dataDiv = document.getElementById('dataDiv');
    const data = await fetchData();
    dataDiv.innerHTML = JSON.stringify(data, null, 2);
});
