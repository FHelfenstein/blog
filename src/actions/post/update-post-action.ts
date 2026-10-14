'use server';

import {
  makePartialPublicPost,
  makePublicPostFromDb,
  PublicPost,
} from '@/dto/post/dto';
import { PostUpdateSchema } from '@/lib/post/validation';
import { postRepository } from '@/repositories/post';
import { getErrorMessages } from '@/utils/get-zod-error-messages';
import { revalidateTag } from 'next/cache';
import { z } from 'zod';

type UpdatePostActionState = {
  formState: PublicPost;
  errors: string[];
  success?: true;
};

export async function updatePostAction(
  prevState: UpdatePostActionState,
  formData: FormData,
): Promise<UpdatePostActionState> {
  // TODO: verificar se o usuário tá logado

  if (!(formData instanceof FormData)) {
    return {
      formState: prevState.formState,
      errors: ['Dados inválidos'],
    };
  }

  const id = formData.get('id')?.toString() || '';

  if (!id || typeof id !== 'string') {
    return {
      formState: prevState.formState,
      errors: ['ID inválido'],
    };
  }

  const formDataObj = Object.fromEntries(formData.entries());
  const zodParsedObj = PostUpdateSchema.safeParse(formDataObj);

  if (!zodParsedObj.success) {
    const errors = getErrorMessages(z.treeifyError(zodParsedObj.error));
    return {
      formState: makePartialPublicPost(formDataObj),
      errors,
    };
  }

  const validPostData = zodParsedObj.data;
  const updatePost = {
    ...validPostData,
  };

  let post;
  try {
    post = await postRepository.update(id, updatePost);
  } catch (e: unknown) {
    if (e instanceof Error) {
      return {
        formState: makePartialPublicPost(formDataObj),
        errors: [e.message],
      };
    }

    return {
      formState: makePartialPublicPost(formDataObj),
      errors: ['Erro desconhecido'],
    };
  }

  revalidateTag('posts');
  revalidateTag(`post-${post?.slug}`);

  return {
    formState: makePublicPostFromDb(post),
    errors: [],
    success: true,
  };
}
