'use server';

type CreatePostActionState = {
  numero: number;
};

export async function createPostAction(
  prevState: CreatePostActionState,
): Promise<CreatePostActionState> {
  console.log('ServerAction: ', prevState);

  return {
    numero: prevState.numero + 1,
  };
}
