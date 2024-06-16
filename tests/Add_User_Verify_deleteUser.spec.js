// @ts-check
const { test, expect } = require('@playwright/test');

test('Add User - Verify - Delete - Logout', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/');
  await page.getByPlaceholder('Username').click();
  await page.getByPlaceholder('Username').fill('Admin');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'Admin' }).click();
  await expect(page.getByText('User Management')).toBeVisible;
  await page.locator('.orangehrm-header-container .oxd-button--secondary').click();
  await page.locator('//div[@id=\'app\']/div[@class=\'oxd-layout\']/div[@class=\'oxd-layout-container\']/div[@class=\'oxd-layout-context\']//form[@class=\'oxd-form\']/div[@class=\'oxd-form-row\']/div/div[1]/div/div[2]/div[@class=\'oxd-select-wrapper\']/div//i').click();
  await page.keyboard.press("ArrowDown");
  await page.keyboard.press("ArrowDown");
  await page.keyboard.press('Enter');
  await page.locator('[placeholder=\'Type for hints\.\.\.\']').fill('Alice Duval');
  await page.waitForTimeout(2000);
  await page.keyboard.press("ArrowDown");
  await page.keyboard.press('Enter');
  await page.locator('//div[@id=\'app\']/div[@class=\'oxd-layout\']/div[@class=\'oxd-layout-container\']/div[@class=\'oxd-layout-context\']//form[@class=\'oxd-form\']/div[@class=\'oxd-form-row\']/div/div[3]/div/div[2]/div[@class=\'oxd-select-wrapper\']/div//i').click();
  await page.keyboard.press("ArrowDown");
  await page.keyboard.press('Enter');
  await page.locator('.oxd-form .oxd-form-row:nth-of-type(1) [autocomplete]').fill('New-User');
  await page.locator('.oxd-grid-item.oxd-grid-item--gutters.user-password-cell > .oxd-input-field-bottom-space.oxd-input-group  .oxd-input').fill('pass123');
  await page.locator('.oxd-grid-item--gutters:nth-of-type(2) [type]').fill('pass123');
  await page.locator('.orangehrm-left-space.oxd-button.oxd-button--medium.oxd-button--secondary').click();
  await page.waitForTimeout(5000);
  await page.locator('[class] .oxd-grid-item--gutters:nth-of-type(1) input').fill('New-User');
  await page.locator('.orangehrm-left-space.oxd-button.oxd-button--medium.oxd-button--secondary').click();
  await expect(page.getByText('Alice Duval')).toBeVisible;
  await page.locator('.bi-trash').click();
  await page.locator('.oxd-button--label-danger').click();
  await expect(page.getByText('New-User')).toBeHidden();
  await page.locator('.oxd-userdropdown-tab').click();
  await page.locator('li:nth-of-type(4) > a[role=\'menuitem\']').click();

});