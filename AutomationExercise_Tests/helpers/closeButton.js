function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function startAdWatcher(page, intervalMs = 1000) {
  let running = true;

  const loop = async () => {
    while (running) {
      try {
        const adCloseButton = page.locator('iframe[name="aswift_4"]').contentFrame().getByRole('button', { name: 'Close ad' });
        if (await adCloseButton.isVisible({ timeout: 2000 })) {
          await adCloseButton.click();
        }
      } catch {
      }

      if (!running) break;
      await delay(intervalMs);
    }
  };

  loop();

  return () => {
    running = false;
  };
}

module.exports = { startAdWatcher };