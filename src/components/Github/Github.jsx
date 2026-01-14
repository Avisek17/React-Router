import { useLoaderData } from 'react-router-dom'

function Github() {
//     const [data, setData] = useState({})
//     useEffect(() => {
//         fetch('https://api.github.com/users/avisek17')
//         .then((res) => res.json())
//         .then(data => {
//             setData(data)
//     })
// }, [data])

    const data = useLoaderData()

  return (
    <>
    <div className='text-center m-4 bg-gray-400 text-white'>Github followers: {data.followers}
        <img className='bg-gray-400' src={data.avatar_url} alt='Git Picture' width={300}/>
    </div>
    
 </>
  )
}

export default Github


export const githubInfoLoader = async() =>{
    const response = await fetch('https://api.github.com/users/avisek17')

    return response;

}