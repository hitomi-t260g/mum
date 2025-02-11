import { test, expect } from "@playwright/test"

/* サイト稼働の確認のためファーストビューのタイトル確認のみとする */
test("Introタイトルの表示確認", async ({ page }) => {
  await page.goto("/")

  const introTextFirst = page.getByRole("heading", {
    name: /いきいきと好きなことをする/,
  })
  const introTextSecond = page.getByRole("heading", {
    name: /ママデベロッパーであるために/,
  })

  // h2タイトルの確認
  await expect(introTextFirst).toBeVisible()
  await expect(introTextSecond).toBeVisible()
})
