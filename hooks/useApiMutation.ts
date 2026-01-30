/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation, } from "@tanstack/react-query";

type UseApiMutationConfig<TData = any, TVariables = any, TError = any> = {
  method?: "POST" | "PUT" | "PATCH" | "DELETE";
  path: string | ((variables: TVariables) => string);
  headers?: Record<string, string>;
  bodyTransform?: (variables: TVariables) => any;
  onSuccess?: (data: TData, variables: TVariables) => void;
  onError?: (error: TError, variables: TVariables) => void;
};

export const useApiMutation = <TData = any, TVariables = any, TError = any>({
  method = "POST",
  path,
  headers = { "Content-Type": "application/json" },
  bodyTransform,
  onSuccess,
  onError,
}: UseApiMutationConfig<TData, TVariables, TError>) => {
  return useMutation<TData, TError, TVariables>({
    mutationFn: async (variables: TVariables) => {
      const url = typeof path === "function" ? path(variables) : path;

      const response = await fetch(url, {
        method,
        headers,
        body: bodyTransform
          ? JSON.stringify(bodyTransform(variables))
          : JSON.stringify(variables),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw errorData;
      }

      return (await response.json()) as TData;
    },
    onSuccess: (data, variables) => {
      if (onSuccess) onSuccess(data, variables);
    },
    onError: (error: TError, variables) => {
      if (onError) onError(error, variables);
    },
  });
};
