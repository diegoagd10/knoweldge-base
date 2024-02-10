const RANDOME_CAT_FACT_API_URL = 'https://catfact.ninja/fact'

export async function fetchRandomCatFact () {
  const response = await fetch(RANDOME_CAT_FACT_API_URL)
  const { fact } = await response.json()
  return fact
}
