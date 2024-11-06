// catalogGenerator.js

import catalogData from './catalogData.js';

function generateCatalog() {
  const catalogContainer = document.getElementById('catalog-generator');

  catalogData.forEach(item => {
    catalogContainer.innerHTML += `
      <div class="catalog-card">
        <img src="${item.image}" alt="${item.name}" />
        <div class="card-desc">
          <h4>${item.name}</h4>
          <p>${item.description}</p>
          <p>Price : Rp, ${item.price.toLocaleString()}</p>
          <div class="button">
            <a href="https://wa.link/5ahuxg" style="--clr: #8ABFA3">
              <span>Buy Now</span>
            </a>
          </div>
        </div>
      </div>
    `;
  });
}

// Menjalankan fungsi generateCatalog saat halaman dimuat
document.addEventListener('DOMContentLoaded', generateCatalog);
