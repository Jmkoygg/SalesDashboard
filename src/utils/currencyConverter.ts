/**
 * Convert to BRL currency format
 * @param pixels - Number to be converted
 * @returns Converted BRL string
 */
export function currencyConterter(value: number): string {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value)
}
