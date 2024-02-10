// @ts-check
import { test, expect } from '@playwright/test'

const LOCALHOST_URL = 'http://localhost:5173/'
const CAT_IMAGE_URL = 'https://cataas.com/cat/says/'
const RANDOME_CAT_FACT_API_URL = 'https://catfact.ninja/fact'

test('app shows random fact and image', async ({ page }) => {
  await page.goto(LOCALHOST_URL)

  const text = page.getByRole('paragraph')
  const image = page.getByRole('img')

  const textContent = await text.textContent()
  const imageSrc = await image.getAttribute('src')

  expect(textContent?.length).toBeGreaterThan(0)
  expect(imageSrc?.startsWith(CAT_IMAGE_URL)).toBeTruthy()
})

test('user click on get new fact button and a new fact is shown', async ({
  page
}) => {
  await page.goto(LOCALHOST_URL)

  const text = page.getByRole('paragraph')
  const image = page.getByRole('img')

  const textContent = await text.textContent()
  const imageSrc = await image.getAttribute('src')

  const responsePromise = page.waitForResponse(RANDOME_CAT_FACT_API_URL)
  const button = page.getByRole('button')

  await button.click()
  await responsePromise

  const newTextContent = await text.textContent()
  const newImageSrc = await image.getAttribute('src')

  expect(newTextContent).not.toBe(textContent)
  expect(newImageSrc).not.toBe(imageSrc)
})
