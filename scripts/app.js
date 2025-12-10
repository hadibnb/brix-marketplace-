// simple prototype data + checkout flow (client-side simulation)
const PRODUCTS = [
  { id: 'p1', title: 'Persian Rug — Handmade', priceBRX: 100, country: 'IR' },
  { id: 'p2', title: 'Turkish Leather Bag', priceBRX: 75, country: 'TR' },
  { id: 'p3', title: 'Dubai Perfume', priceBRX: 40, country: 'AE' },
  { id: 'p4', title: 'Omani Dates Giftbox', priceBRX: 25, country: 'OM' }
];

const CART = [];
let user = {
  country: 'AE', // change to simulate country-based pricing/currency display
  bricsBalance: 500 // simulated token balance
};

function formatPriceBRX(brx){
  // BRX token unit — display as `BRX 100`
  return `${brx} BRX`;
}

function countryCurrencyLabel(country){
  const map = { IR: 'IRR', TR: 'TRY', AE: 'AED', OM: 'OMR', QA:'QAR' };
  return map[country] || 'USD';
}

function renderProducts(){
  const grid = document.getElementById('products-grid');
  grid.innerHTML = '';
  PRODUCTS.forEach(p=>{
    const el = document.createElement('div');
    el.className = 'product';
    el.innerHTML = `
      <img src="assets/placeholder.jpg" alt="${p.title}">
      <h4>${p.title}</h4>
      <div class="muted">From: ${p.country}</div>
      <div style="margin-top:8px;display:flex;justify-content:space-between;align-items:center">
        <div>${formatPriceBRX(p.priceBRX)}</div>
        <button class="cta" data-id="${p.id}">خرید</button>
      </div>
    `;
    grid.appendChild(el);
  });

  document.querySelectorAll('.product .cta').forEach(b=>{
    b.addEventListener('click', (e)=>{
      const id = e.currentTarget.dataset.id;
      const prod = PRODUCTS.find(x=>x.id===id);
      CART.push(prod);
      document.getElementById('cart-count').textContent = CART.length;
      alert('محصول به سبد اضافه شد');
    });
  });
}

// Checkout modal
document.getElementById('btn-cart').addEventListener('click', ()=>{
  const modal = document.getElementById('checkout-modal');
  const body = document.getElementById('checkout-body');
  if(CART.length===0){ alert('سبد خرید خالی است'); return; }
  body.innerHTML = `<p>محصولات: ${CART.map(p=>p.title).join(', ')}</p>
    <p>مجموع: ${formatPriceBRX(CART.reduce((s,p)=>s+p.priceBRX,0))}</p>
    <p>BRICS Balance: ${user.bricsBalance} BRX</p>`;
  modal.classList.remove('hidden');
});

// Close modal
document.getElementById('close-modal').addEventListener('click', ()=>{
  document.getElementById('checkout-modal').classList.add('hidden');
});

// Confirm pay — simulate escrow
document.getElementById('confirm-pay').addEventListener('click', ()=>{
  const total = CART.reduce((s,p)=>s+p.priceBRX,0);
  if(user.bricsBalance < total){ alert('موجودی BRICS کافی نیست'); return; }

  // "Transfer" to escrow (simulate)
  user.bricsBalance -= total;
  const escrow = { amount: total, seller: 'multi-seller-escrow', createdAt: Date.now(), products: [...CART] };
  CART.length = 0; document.getElementById('cart-count').textContent = 0;
  alert('پرداخت انجام شد — توکن‌ها در اَسکرو قرار گرفت. (در دِمو پس از 20 ثانیه آزاد می‌شود)');

  // show escrow status and simulate 24h -> here 20s demo
  setTimeout(()=>{
    // no dispute -> send to seller
    alert('تایید خودکار خرید: توکن‌ها به حساب فروشنده واریز شد.');
    // In production: call backend to trigger on-chain distribution
  }, 20000);

  document.getElementById('checkout-modal').classList.add('hidden');
});

// create card flow (mock)
document.getElementById('create-card').addEventListener('click', ()=>{
  alert('کارت BRIX ایجاد شد و به کیف پول شما متصل شده (mock). لطفا 50 BRX شارژ کنید.');
  user.bricsBalance += 50;
});

// init
renderProducts();
