const puppeteer = require('puppeteer');

(async () => {
    // Khởi tạo trình duyệt
    const browser = await puppeteer.launch({ headless: false }); // headless: false để xem trình duyệt
    const page = await browser.newPage();

    // Mở một trang web
    await page.goto('https://chatgpt.com/');

    // Tìm ô tìm kiếm và nhập dữ liệu
    await page.type('input[name="q"]', 'Hello, World!'); // Thay 'q' bằng tên thực tế của ô tìm kiếm
    await page.keyboard.press('Enter'); // Nhấn Enter

    // Đợi một chút để trang tải
    await page.waitForTimeout(2000);

    // Lấy và in ra tiêu đề trang
    const title = await page.title();
    console.log(`Tiêu đề trang: ${title}`);

    // Đóng trình duyệt
    await browser.close();
})();

