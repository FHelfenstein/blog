// Definição de server actions
// São funções que são executadas dentro do servidor , para que o next reconheça uma server action é obrigatório informar a diretiva 'use server'

'use server';

//import { revalidatePath } from 'next/cache';
import { revalidateTag } from 'next/cache';

export async function revalidateExampleAction(formData: FormData) {
  const path = formData.get('path') || '';
  console.log('Estou em uma server action', path);

  //revalidatePath(`${path}`);
  revalidateTag('randomuser', '');
}
