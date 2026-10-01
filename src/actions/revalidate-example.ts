// Definição de server actions
// São funções que são executadas dentro do servidor , para que o next reconheça uma server action é obrigatório informar a diretiva 'use server'

'use server';

export async function revalidateExampleAction(formData: FormData) {
  const path = formData.get('path') || null;
  const name = formData.get('name') || null;

  console.log('Estou em uma server action', path);
  console.log('Server action meu nome é: ', name);
}
