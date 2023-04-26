import { APIGatewayEvent, APIGatewayProxyResult } from 'aws-lambda'
import puppeteer from 'puppeteer-core'
import chromium from '@sparticuz/chromium'
import { demoUseCase } from './use_case/demoUseCase'

export const handler = async (event: APIGatewayEvent): Promise<APIGatewayProxyResult> => {
  const browser = await puppeteer.launch({
    args: chromium.args,
    defaultViewport: chromium.defaultViewport,
    executablePath: await chromium.executablePath(),
    headless: true,
    ignoreHTTPSErrors: true,
  })

  const page = await browser.newPage()
  const result = await demoUseCase(page)
  console.log(result)
  await browser.close()

  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: result,
    }),
  }
  return response
}
