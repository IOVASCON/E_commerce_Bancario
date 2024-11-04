const fs = require('fs');
const path = require('path');

const baseDir = './src';

const folders = [
    `${baseDir}/app/cart/cart-details`,
    `${baseDir}/app/cart/cart-status`,
    `${baseDir}/app/checkout`,
    `${baseDir}/app/products/product-details`,
    `${baseDir}/app/products/product-list`,
    `${baseDir}/app/shared/models`,
    `${baseDir}/app/shared/services`,
    `${baseDir}/assets/images`,
    `${baseDir}/environments`
];

const files = [
    `${baseDir}/index.html`,
    `${baseDir}/main.ts`,
    `${baseDir}/polyfills.ts`,
    `${baseDir}/styles.css`,
    `${baseDir}/test.ts`,
    `${baseDir}/environments/environment.ts`,
    `${baseDir}/environments/environment.prod.ts`,
    `${baseDir}/app/app-routing.module.ts`,
    `${baseDir}/app/app.module.ts`,
    `${baseDir}/app/cart/cart-details/cart-details.component.css`,
    `${baseDir}/app/cart/cart-details/cart-details.component.html`,
    `${baseDir}/app/cart/cart-details/cart-details.component.ts`,
    `${baseDir}/app/cart/cart-status/cart-status.component.css`,
    `${baseDir}/app/cart/cart-status/cart-status.component.html`,
    `${baseDir}/app/cart/cart-status/cart-status.component.ts`,
    `${baseDir}/app/checkout/checkout.component.css`,
    `${baseDir}/app/checkout/checkout.component.html`,
    `${baseDir}/app/checkout/checkout.component.ts`,
    `${baseDir}/app/products/product-details/product-details.component.css`,
    `${baseDir}/app/products/product-details/product-details.component.html`,
    `${baseDir}/app/products/product-details/product-details.component.ts`,
    `${baseDir}/app/products/product-list/product-list.component.css`,
    `${baseDir}/app/products/product-list/product-list.component.html`,
    `${baseDir}/app/products/product-list/product-list.component.ts`,
    `${baseDir}/app/shared/models/product.model.ts`,
    `${baseDir}/app/shared/models/product-category.model.ts`,
    `${baseDir}/app/shared/services/product.service.ts`,
    `${baseDir}/assets/images/.gitkeep`,
    './.gitignore',
    './Informacoes_Extras.md',
    './README.md',
    './proxy-config.json'
];

function createStructure() {
    folders.forEach(folder => {
        const dirPath = path.join(__dirname, folder);
        if (!fs.existsSync(dirPath)) {
            fs.mkdirSync(dirPath, { recursive: true });
            console.log(`Created directory: ${dirPath}`);
        } else {
            console.log(`Directory already exists: ${dirPath}`);
        }
    });

    files.forEach(file => {
        const filePath = path.join(__dirname, file);
        if (!fs.existsSync(filePath)) {
            fs.writeFileSync(filePath, '');
            console.log(`Created file: ${filePath}`);
        } else {
            console.log(`File already exists: ${filePath}`);
        }
    });
}

createStructure();
