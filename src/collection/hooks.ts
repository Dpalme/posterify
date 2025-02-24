import { TMDBImage } from '#shared/models/image';
import {
  addToCollection,
  getCollection,
  removeFromCollection,
} from '#shared/providers/database';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useMemo, useState } from 'react';

export const useAddToCollection = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (values: {
      file_path: string;
      movie_id: string;
      aspect_ratio: number;
      width: number;
      height: number;
      type: 'backdrop' | 'logo' | 'poster' | 'profile' | 'still';
    }) =>
      addToCollection({
        file_path: values.file_path,
        movie_id: values.movie_id,
        aspect_ratio: values.aspect_ratio,
        height: values.height,
        width: values.width,
        type: values.type,
      }),
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: ['collection'],
        type: 'all',
        refetchType: 'active',
      }),
  });
};

export const useRemoveFromCollection = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (values: {
      file_path: string;
      movie_id: string;
      aspect_ratio: number;
      width: number;
      height: number;
      type: 'backdrop' | 'logo' | 'poster' | 'profile' | 'still';
    }) => removeFromCollection(values.file_path),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['collection'],
        type: 'all',
        refetchType: 'active',
      });
    },
  });
};

export const useGetCollection = ({
  query = undefined,
  limit = undefined,
}: {
  query?: string;
  limit?: number;
} = {}) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['collection', { query, limit }],
    queryFn: () => getCollection(query, limit),
  });

  return {
    collection: data,
    isLoading,
    error,
  };
};

export function useImageIsInCollection(image: TMDBImage | string) {
  const imageId = typeof image === 'string' ? image : image.file_path;
  return useQuery({
    queryKey: ['collection', imageId],
    queryFn: () => getCollection(imageId, 1).then((res) => res?.[0] || false),
  });
}
