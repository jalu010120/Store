// script.js

// 1. Dapatkan tempat di HTML (container-link)
const container = document.getElementById('container-link');
let htmlContent = '';

// 2. Loop (putar) melalui setiap data di Array dataAffiliate
dataAffiliate.forEach(item => {
    // 3. Buat kerangka HTML untuk setiap item (link)
    const linkHTML = `
        <div style="margin-bottom: 20px; border: 1px solid #eee; padding: 15px; border-radius: 8px;">
            <h3>${item.nama}</h3>
            <p>${item.deskripsi}</p>
            <a href="${item.link}" target="_blank" style="
                display: inline-block;
                padding: 10px 15px;
                background-color: ${item.warnaTombol}; 
                color: white;
                text-decoration: none;
                border-radius: 4px;
                font-weight: bold;
            ">
                BELI DI SHOPEE
            </a>
        </div>
    `;
    
    // 4. Gabungkan semua kerangka HTML
    htmlContent += linkHTML;
});

// 5. Masukkan semua HTML yang sudah dibuat ke dalam halaman
container.innerHTML = htmlContent;
