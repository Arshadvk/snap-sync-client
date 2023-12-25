import {
    useQuery,
    useMutation,
    useQueryClient,
    useInfiniteQuery,
  } from "@tanstack/react-query";
  
  import { QUERY_KEYS } from "@/lib/react-query/queryKeys";
  import {
    createUserAccount,
    signInAccount,
    signOutAccount,
    createPost,
  } from "@/lib/appwrite/api";
  import { INewPost, INewUser, IUpdatePost, IUpdateUser } from "@/types";
  
  // ============================================================
  // AUTH QUERIES
  // ============================================================
  
  export const useCreateUserAccount = () => {
    return useMutation({
      mutationFn: (user: INewUser) => createUserAccount(user),
    });
  };
  
  export const useSignInAccount = () => {
    return useMutation({
      mutationFn: (user: { email: string; password: string }) =>
        signInAccount(user),
    });
  };
  
  export const useSignOutAccount = () => {
    return useMutation({
      mutationFn: signOutAccount,
    });
  };
  
  // ============================================================
  // POST QUERIES
  // ============================================================  
  export const useCreatePost = () => {
    const queryClient = useQueryClient();
    return useMutation({
      mutationFn: (post: INewPost) => createPost(post),
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: [QUERY_KEYS.GET_RECENT_POSTS],
        });
      },
    });
  };
  
 