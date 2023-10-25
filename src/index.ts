const input = document.querySelector('.quantity-input') as HTMLInputElement;
const button = document.querySelector('.data-button') as HTMLButtonElement;
const container = document.querySelector('.data-container') as HTMLDivElement;

interface responseData {
  name: string;
}

button.addEventListener('click', async () => {
  const quantity: number = Number(input.value);
  // Сделал проверку, потому что при значении quantity = 0, api возвращал 10 объектов.
  if (!quantity) return;

  try {
    const res = await fetch(`https://fakerapi.it/api/v1/companies?_quantity=${quantity}
    `);
    const { data }: { data: responseData[] } = await res.json();

    container.innerHTML = '';

    if (data.length === 0) {
      container.textContent = 'No Items';
    } else {
      data.forEach((item: { name: string }) => {
        const name = item.name;
        const itemElement = document.createElement('div');
        itemElement.textContent = name;
        container.appendChild(itemElement);
      });
    }
  } catch (err) {
    console.log(err);
  }
});
