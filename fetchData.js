const cassandra = require('cassandra-driver');

const client = new cassandra.Client({
    cloud: { secureConnectBundle: './path/to/secure-connect-database_name.zip' },
    credentials: { username: 'token', password: 'your_token_here' }
});

async function fetchData() {
    try {
        await client.connect();
        const result = await client.execute('SELECT * FROM keyspace_name.table_name');
        return result.rows;
    } catch (error) {
        console.error('Error fetching data:', error);
    } finally {
        await client.shutdown();
    }
}

fetchData().then(data => {
    const div = document.getElementById('json-data');
    data.forEach(row => {
        const title = document.createElement('h1');
        title.textContent = row.title;
        const message = document.createElement('p');
        message.textContent = row.message;
        div.appendChild(title);
        div.appendChild(message);
    });
});
