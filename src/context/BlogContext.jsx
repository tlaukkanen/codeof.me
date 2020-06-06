import React, {
    createContext, useState, useCallback, useEffect,
} from 'react'
import PropTypes from 'prop-types'

const BlogContext = createContext()

const BlogContextProvider = ({ children }) => {
    const [posts, setPosts] = useState([])

    const fetchPosts = useCallback(() => {
        fetch('api/posts')
            .then((response) => {
                if (response.ok) {
                    return response.json()
                }
                throw new Error('Could not fetch configurations')
            })
            .then((data) => {
                setPosts(data)
            })
    }, [])

    useEffect(() => {
        fetchPosts()
    }, [])


    return (
        <BlogContext.Provider
            value={
                {
                    posts: [],
                }
            }
        >
            {children}
        </BlogContext.Provider>
    )
}

BlogContextProvider.propTypes = {
    children: PropTypes.node,
}

BlogContextProvider.defaultProps = {
    children: undefined,
}

export { BlogContext, BlogContextProvider }
