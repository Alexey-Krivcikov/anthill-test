var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const input = document.querySelector('.quantity-input');
const button = document.querySelector('.data-button');
const container = document.querySelector('.data-container');
button.addEventListener('click', () => __awaiter(this, void 0, void 0, function* () {
    const quantity = Number(input.value);
    // Сделал проверку, потому что при значении quantity = 0, api возвращал 10 объектов.
    if (!quantity)
        return;
    try {
        const res = yield fetch(`https://fakerapi.it/api/v1/companies?_quantity=${quantity}
    `);
        const { data } = yield res.json();
        console.log(res);
        console.log(data);
        container.innerHTML = '';
        if (data.length === 0) {
            container.textContent = 'No Items';
        }
        else {
            data.forEach((item) => {
                const name = item.name;
                const itemElement = document.createElement('div');
                itemElement.textContent = name;
                container.appendChild(itemElement);
            });
        }
    }
    catch (err) {
        console.log(err);
    }
}));
