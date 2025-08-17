import React from 'react'
import axios from 'axios'

const All_movies = () => {
    const [movies, setMovies] = React.useState([])
    const [loading, setLoading] = React.useState(true)
    const [error, setError] = React.useState(null)
    const fetchMovies = async () => {
        try {
            const response = await axios.get('http://localhost:3000/api/admin')
            setMovies(response.data)
        } catch (err) {
            setError('Failed to fetch movies')
        } finally {
            setLoading(false)
        }
    }   
    React.useEffect(() => {
        fetchMovies()
    }, [])
    if (loading) return <div>Loading...</div>
    if (error) return <div>{error}</div>
    if (movies.length === 0) return <div>No movies available</div>
    return (
        <div className="p-10 w-[1000px]">
            <h1 className="text-3xl font-bold mb-6">All Movies</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {movies.map((movie) => (
                    <div key={movie.id} className="bg-gradient-to-br from-[#2f0c20] to-[#3f0b2c] rounded-lg p-4">
                        <img src={movie.image} alt={movie.showName} className="w-full h-48 object-cover rounded-lg mb-4" />
                        <h2 className="text-xl font-semibold text-white">{movie.showName}</h2>
                        <p className="text-gray-400">{movie.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default All_movies