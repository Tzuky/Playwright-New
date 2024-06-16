import { test, expect } from '@playwright/test';

test('Open Page - Check Login - Search - Logout', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/');
  await page.getByPlaceholder('Username').click();
  await page.getByPlaceholder('Username').fill('Admin');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'Admin' }).click();
  await expect(page.getByText('User Management')).toBeVisible;
  await page.locator('div:nth-of-type(2) > .oxd-input').fill('Micheal')
  await page.locator('.orangehrm-left-space').click();
  await expect(page.locator('.oxd-table-card [role=\'cell\']:nth-of-type(4) div')).toHaveText('Odis Adalwin');
  await expect(page.locator('.oxd-table-card [role=\'cell\']:nth-of-type(5) div')).toHaveText('Enabled');
  await page.locator('.oxd-userdropdown-tab').click();
  await page.locator('li:nth-of-type(4) > a[role=\'menuitem\']').click();

});