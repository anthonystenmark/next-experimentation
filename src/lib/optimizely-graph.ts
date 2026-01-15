import { ApolloClient, HttpLink, InMemoryCache, gql } from "@apollo/client";

const endpoint = process.env.OPTIMIZELY_GRAPH_ENDPOINT;
const apiKey = process.env.OPTIMIZELY_GRAPH_SINGLE_KEY;

if (!endpoint || !apiKey) {
    console.warn(
        'Optimizely Graph environment variables missing. Please check OPTIMIZELY_GRAPH_ENDPOINT and OPTIMIZELY_GRAPH_SINGLE_KEY.'
    );
}

const client = new ApolloClient({
    link: new HttpLink({ uri: `${endpoint}?auth=${apiKey}` }),
    cache: new InMemoryCache(),
});

export const fetchContent = async <T>(query: string, variables?: Record<string, any>): Promise<T> => {
    try {
        const response = await client.query({
            query: gql`${query}`,
            variables,
        });
        return response.data as T;
    } catch (error) {
        console.error('Error fetching content from Optimizely Graph:', error);
        console.log('Failing Query:', query);
        console.log('Failing Variables:', variables);
        throw error;
    }
}
