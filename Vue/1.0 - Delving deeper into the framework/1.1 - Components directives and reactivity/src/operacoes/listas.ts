export function comparaListas(lista1: unknown[], lista2: unknown[]) {
    return lista1.every((i) => lista2.includes(i))
}
