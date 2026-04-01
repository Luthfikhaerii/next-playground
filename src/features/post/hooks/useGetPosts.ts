import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { GetPostsParams, getPost, postKeys } from "../api/getPost";

type UseGetPostsParams = {
    params: GetPostsParams,
    options?: Omit<UseQueryOptions, 'queryFn' | 'queryKey'>
}

export default function useGetPosts({ params, options }: UseGetPostsParams) {
    return useQuery({
        queryFn: () => getPost(params),
        queryKey: postKeys.params(params),
        staleTime: 60 * 5,
        ...options
    })
}
