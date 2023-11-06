import { useQuery } from "@tanstack/react-query";



const useBook = () => {

    const {data, isLoading, isFetching, refetch} = useQuery({
        queryKey: ["books"],
        queryFn: async()=>{
            const data = await fetch('http://localhost:5000/api/v1/books')
            return await data.json();
        }
        
    })
    return {data, isLoading, isFetching, refetch}
};

export default useBook;