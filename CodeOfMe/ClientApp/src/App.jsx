import React from 'react'
import Blog from './components/Blog'
import './App.css'

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'

const client = new ApolloClient({
  uri: 'https://localhost:5001/cms/api/graphql',
  cache: new InMemoryCache(),
})

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Blog />
      </div>
    </ApolloProvider>
  )
}

export default App
