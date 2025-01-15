const cassandra = require('cassandra-driver');

const client = new cassandra.Client({
    cloud: { secureConnectBundle: 'secure-connect-jsonmsgtest.zip' },
    credentials: { username: 'wePFbGGPCofPrqOxUUiMcEWc', password: 'Z6tDh8rZeKRwbT-deyf+FRu8,75MD3q3GIFKinGkw-t22BE3D8uFqSLuPmboYOamyLUo++YZ_Bs-KbU2w25PZTIFAJ14CbszdvZeF8W-yU.EjdbgH8UzKcm.osM3_-EZ' }
});

async function writeData() {
    try {
        await client.connect();
        const query = 'INSERT INTO default_keyspace.testreport(test1, test2) VALUES (?, ?)';
        const params = ['20', '30'];
        await client.execute(query, params, { prepare: true });
        console.log('Data written successfully!');
    } catch (error) {
        console.error('Error writing data:', error);
    } finally {
        await client.shutdown();
    }
}

writeData();
