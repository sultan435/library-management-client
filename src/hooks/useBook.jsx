import { useQuery } from "@tanstack/react-query";



const useBook = () => {

    const {data, isLoading, isFetching, refetch} = useQuery({
        queryKey: ["books"],
        queryFn: async()=>{
            const data = await fetch('https://library-management-server-gamma.vercel.app/api/v1/books')
            return await data.json();
        }
        
    })
    return {data, isLoading, isFetching, refetch}
};

export default useBook;