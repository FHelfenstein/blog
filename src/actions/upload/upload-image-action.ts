'use server';

import { IMAGE_UPLOADER_MAX_SIZE } from '@/lib/constants';

type uploadImageActionResult = {
  url: string;
  error: string;
};

export async function uploadImageAction(
  formData: FormData,
): Promise<uploadImageActionResult> {
  const makeResult = ({ url = '', error = '' }) => ({ url, error });

  if (!(formData instanceof FormData)) {
    return makeResult({ error: 'Dados inválidos!' });
  }

  const file = formData.get('file');

  if (!(file instanceof File)) {
    return makeResult({ error: 'Arquivo inválido!' });
  }

  if (file.size > IMAGE_UPLOADER_MAX_SIZE) {
    const readableMaxSize = IMAGE_UPLOADER_MAX_SIZE / 1024;
    return makeResult({
      error: `Arquivo de imagem muito grande, Máx: ${readableMaxSize}KB.`,
    });
  }

  if (!file.type.startsWith('image/')) {
    return makeResult({ error: 'Imagem inválida!' });
  }

  //TODO: enviei o arquivo
  return makeResult({ url: 'URL' });
}
