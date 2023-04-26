import puppeteer from 'puppeteer'
import { demoUseCase } from '../../src/use_case/demoUseCase'

test('puppeteer', async () => {
  const browser = await puppeteer.launch({
    headless: false,
  })
  const page = await browser.newPage()

  const result = await demoUseCase(page)

  await browser.close()

  console.log(result)

  expect(result).toBe('Google')
})
