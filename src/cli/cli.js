import { CategoryService } from './CategoryService.js';

async function processarComando(args) {
  const cmm = args[2];
  const id = args[3];
  const dataFile = args[3];
  const updateDataFile = args[4];

  switch (cmm) {
    case '--listarCategorias':
      await CategoryService.findCategories();
      break;
    case '--recuperarCategoriaPorId':
      await CategoryService.findCategoryById(id);
      break;
    case '--inserirCategoria':
      await CategoryService.createCategory(dataFile);
      break;
    case '--atualizarCategoria':
      await CategoryService.updateCategory(id, updateDataFile);
      break;
    case '--excluirCategoria':
      await CategoryService.deleteCategory(id);
      break;
    default:
        throw new Error('Invalid command')
  }
}

await processarComando(process.argv);