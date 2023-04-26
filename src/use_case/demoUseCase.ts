export const demoUseCase = async (page: any): Promise<string> => {
  await page.goto('https://www.google.com/', { waitUntil: 'domcontentloaded' })

  const title = await page.title()

  return title
}
