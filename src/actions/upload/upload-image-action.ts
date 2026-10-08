'use server';

import {
  IMAGE_SERVER_URL,
  IMAGE_UPLOADER_DIRECTORY,
  IMAGE_UPLOADER_MAX_SIZE,
} from '@/lib/constants';
import { mkdir, writeFile } from 'fs/promises';
import { extname, resolve } from 'path';

type uploadImageActionResult = {
  url: string;
  error: string;
};

export async function uploadImageAction(
  formData: FormData,
): Promise<uploadImageActionResult> {
  // TODO: Verificar se o usuário está logado

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
  const imageExtension = extname(file.name);
  const imageName = `${Date.now()}${imageExtension}`;

  const fullPath = resolve(process.cwd(), 'public', IMAGE_UPLOADER_DIRECTORY);

  await mkdir(fullPath, { recursive: true });

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);
  const fullPathAbsolute = resolve(fullPath, imageName);

  await writeFile(fullPathAbsolute, buffer);

  const url = `${IMAGE_SERVER_URL}/${imageName}`;

  console.log('URL: ', url);

  return makeResult({ url });
}
