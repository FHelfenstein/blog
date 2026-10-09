'use client';

import { uploadImageAction } from '@/actions/upload/upload-image-action';
import { showMessage } from '@/adapters/showMessage';
import { Button } from '@/components/Button';
import { IMAGE_UPLOADER_MAX_SIZE } from '@/lib/constants';
import { ImageUpIcon } from 'lucide-react';
import { useRef, useState, useTransition } from 'react';

export function ImageUploader() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isUploading, startTransition] = useTransition();
  const [imgUrl, setImgUrl] = useState('');

  function handleChooseFile() {
    if (!fileInputRef.current) return;
    fileInputRef.current.click();
  }

  function handleChange() {
    showMessage.dismiss();

    if (!fileInputRef.current) {
      setImgUrl('');
      return;
    }

    const fileInput = fileInputRef.current;
    const file = fileInput?.files?.[0];

    if (!file) {
      setImgUrl('');
      return;
    }

    if (file.size > IMAGE_UPLOADER_MAX_SIZE) {
      const readableMaxSize = IMAGE_UPLOADER_MAX_SIZE / 1024;
      showMessage.error(`Imagem muito grande. Máx: ${readableMaxSize}KB.`);

      fileInput.value = '';
      setImgUrl('');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    startTransition(async () => {
      const result = await uploadImageAction(formData);

      if (result.error) {
        showMessage.error(result.error);
        fileInput.value = '';
        setImgUrl('');
        return;
      }

      setImgUrl(result.url);
      showMessage.success('Imagem enviada');
    });

    fileInput.value = '';
  }

  return (
    <div className='flex flex-col gap-4 py-4'>
      <Button
        onClick={handleChooseFile}
        type='button'
        variant='warning'
        className='self-start'
        disabled={isUploading}
      >
        <ImageUpIcon />
        Enviar uma imagem
      </Button>

      {!!imgUrl && (
        <div className='flex flex-col gap-4'>
          <p>
            <b>URL:</b> {imgUrl}
          </p>

          {/* eslint-disable-next-line */}
          <img className='rounded-lg' src={imgUrl} />
        </div>
      )}

      <input
        onChange={handleChange}
        ref={fileInputRef}
        className='hidden'
        name='file'
        type='file'
        accept='image/*'
        disabled={isUploading}
      />
    </div>
  );
}
