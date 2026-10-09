'use server';

import {
  IMAGE_SERVER_URL,
  IMAGE_UPLOADER_DIRECTORY,
  IMAGE_UPLOADER_MAX_SIZE,
} from '@/lib/constants';
import { asyncDelay } from '@/utils/async-delay';
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

  //TODO: Rewmover delay
  await asyncDelay(5000, true);

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

  const imageExtension = extname(file.name); // pega a extensão do arquivo
  const imageName = `${Date.now()}${imageExtension}`; // monta o nome do arquivo + extensão

  const fullPath = resolve(process.cwd(), 'public', IMAGE_UPLOADER_DIRECTORY); // monta o caminho completo aonde o arquivo será salvo

  await mkdir(fullPath, { recursive: true }); // cria o diretório de acordo com o caminho completo fornecido

  const bytes = await file.arrayBuffer(); // pega o array de bytes
  const buffer = Buffer.from(bytes); // transforma o array de bytes em buffer
  const fullPathAbsolute = resolve(fullPath, imageName); // monta o caminho absoluto com o nome do arquivo

  await writeFile(fullPathAbsolute, buffer); // salva o arquivo

  const url = `${IMAGE_SERVER_URL}/${imageName}`; // monta a url de retorno para visualizar a imagem

  return makeResult({ url });
}
