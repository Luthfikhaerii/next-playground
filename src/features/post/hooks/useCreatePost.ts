import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { createPost, CreatePostParams } from "../api/createPost";
import { queryClient } from "@/lib/react-query";
import { postKeys } from "../api/getPost";

type useCreatePostParams = {
    options: Omit<UseMutationOptions<any, Error, CreatePostParams>, 'mutationFn'>
}

export default function useCreatePost(params: useCreatePostParams) {
    return useMutation({
        mutationFn: createPost,
        onSuccess: (data, variables, onMutateResult, context) => {
            queryClient.invalidateQueries({ queryKey: postKeys.all })

            params.options?.onSuccess?.(data, variables, onMutateResult, context)
        },
        ...params.options
    })
}