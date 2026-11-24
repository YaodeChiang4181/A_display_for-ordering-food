const stores = [
  { id: '1', name: '店家 1・小日子食堂', category: '便當', kind: ['周一', '周三'], emoji: '🍱', color: '#e6edda', sticker: '人氣首選', rating: '4.9', desc: '每天現做的家常好味道', price: 85, tags: ['人氣便當', '可客製'], decor: ['✿', '〰'], menu: [['招牌日式唐揚雞飯', '酥脆雞腿排、溏心蛋與季節時蔬', 110], ['香煎鯖魚野菜餐盒', '炙燒鯖魚配上清爽野菜', 120], ['厚切豬排咖哩飯', '濃郁日式咖哩與現炸豬排', 125], ['蔬食豆腐菇菇飯', '香煎板豆腐與時令菇類', 95]] },
  { id: '2', name: '店家 2・麵麵俱到', category: '麵食', kind: ['周二', '周四', '周日'], emoji: '🍜', color: '#f4e4cf', sticker: '暖心湯麵', rating: '4.8', desc: '一碗熱湯麵，補充上課能量', price: 90, tags: ['湯麵', '手作'], decor: ['〰', '✳'], menu: [['紅燒牛肉麵', '慢燉牛腱、白蘿蔔與手工麵', 140], ['香菇雞湯麵', '暖胃香菇雞湯搭配細麵', 105], ['麻醬乾拌麵', '濃香手作麻醬與脆口小黃瓜', 85], ['餛飩鮮肉湯麵', '每日手包鮮肉餛飩', 100]] },
  { id: '3', name: '店家 3・綠日子沙拉', category: '輕食', kind: ['周三', '周五'], emoji: '🥗', color: '#e0ecdc', sticker: '清爽無負擔', rating: '4.9', desc: '新鮮蔬果，吃完剛好有精神', price: 95, tags: ['新鮮蔬果', '輕食'], decor: ['✳', '❋'], menu: [['酪梨雞胸能量碗', '舒肥雞胸、酪梨與藜麥', 135], ['炙燒鮭魚沙拉', '炙燒鮭魚搭配當季生菜', 155], ['香煎豆腐溫沙拉', '香煎豆腐與烤時蔬', 115], ['活力水果優格杯', '季節水果、堅果與希臘優格', 80]] },
  { id: '4', name: '店家 4・手作飯糰研究所', category: '輕食', kind: ['周四', '周五', '周六'], emoji: '🍙', color: '#f1e8d4', sticker: '快速取餐', rating: '4.7', desc: '現包現做的飽足系手作飯糰', price: 55, tags: ['手作飯糰', '方便帶著走'], decor: ['✷', '〰'], menu: [['明太子鮭魚飯糰', '炙燒明太子與鮭魚碎肉', 75], ['炙燒燒肉飯糰', '日式醬燒豬肉與海苔', 65], ['香鬆玉子飯糰', '厚煎玉子燒與特調香鬆', 55], ['韓式泡菜豆腐飯糰', '微辣泡菜與板豆腐', 60]] },
  { id: '5', name: '店家 5・午後一杯', category: '飲品', kind: ['周五', '周日'], emoji: '🧋', color: '#f1e2db', sticker: '第二杯有優惠', rating: '4.8', desc: '手搖飲與甜點，午休的小確幸', price: 45, tags: ['手搖飲', '甜點'], decor: ['✿', '☼'], menu: [['招牌珍珠鮮奶茶', '濃郁鮮奶茶配Q彈黑糖珍珠', 65], ['桂花青茶', '清香桂花與甘醇青茶', 45], ['檸檬冬瓜冰茶', '手熬冬瓜搭配新鮮檸檬', 50], ['小山園抹茶布丁', '濃郁抹茶與滑順布丁', 70]] },
  { id: '6', name: '店家 6・烤好吃飯盒', category: '便當', kind: ['周六'], emoji: '🍛', color: '#f3e5d2', sticker: '本週新夥伴', rating: '4.6', desc: '炭香直火燒烤，配菜天天換', price: 90, tags: ['炭火燒烤', '份量十足'], decor: ['✷', '✳'], menu: [['炭烤蜜汁雞腿飯', '直火炭烤雞腿與每日配菜', 120], ['蔥鹽燒肉飯', '特製蔥鹽醬與炭香豬五花', 110], ['鹽烤鯖魚雙拼飯', '鹽烤鯖魚、唐揚雞雙拼', 135], ['烤時蔬菇菇飯', '季節蔬菜與香烤綜合菇', 100]] },
  { id: '7', name: '店家 7・義式料理', category: '輕食', kind: ['周一', '周二', '周日'], emoji: '🍛', color: '#f3e5d2', sticker: '本週新夥伴', rating: '4.4', desc: '義心一義為了你', price: 90, tags: ['精心手工', '美味'], decor: ['✿', '✳'], menu: [['鮮蔬雞腿排義大利麵', '奶油海鮮義大利麵', 110], ['羅勒海鮮義大利麵', '青醬海鮮義大利麵', 130], ['燻雞起司捲', '火腿蛋三明治', 70], ['烤時蔬菇菇飯', '季節蔬菜與香烤綜合菇', 100]] }
];

const $ = (s, root = document) => root.querySelector(s);
const $$ = (s, root = document) => [...root.querySelectorAll(s)];
const money = n => `$${n.toLocaleString('zh-TW')}`;
const escapeHtml = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const findStore = id => stores.find(store => store.id === id);
let cart = loadCart();
let currentStore = null;
let toastTimer;
let selectedOrderDay = '周一'; // 記錄目前菜單彈窗選中的預訂星期


function openMenu(id) {
  currentStore = findStore(id);
  if (!currentStore) return;

  // 1. 判斷目前篩選器選中的星期
  const filterDay = $('#category-chips .selected')?.dataset.kind || '全部';
  // 若篩選器選了特定星期且該店有營業，就帶入該星期；否則預設選該店第一個營業日
  selectedOrderDay = (filterDay !== '全部' && currentStore.kind.includes(filterDay))
    ? filterDay
    : currentStore.kind[0];

  $('#menu-title').textContent = currentStore.name;
  $('#menu-description').textContent = currentStore.desc;

  // 2. 在菜單內渲染營業日切換按鈕（讓使用者可自由切換要訂哪一天）
  const daySelector = $('#menu-day-selector');
  if (daySelector) {
    daySelector.innerHTML = currentStore.kind.map(day => `
      <button type="button" class="day-pill ${day === selectedOrderDay ? 'selected' : ''}" data-day="${day}">
        ${day}
      </button>
    `).join('');

    $$('.day-pill', daySelector).forEach(btn => {
      btn.addEventListener('click', () => {
        $$('.day-pill', daySelector).forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        selectedOrderDay = btn.dataset.day;
      });
    });
  }

  // 3. 渲染菜單項目（加入購物車時帶入 selectedOrderDay）
  $('#menu-list').innerHTML = currentStore.menu.map((item, i) => `
    <article class="menu-item">
      <div><h3>${escapeHtml(item[0])}</h3><p>${escapeHtml(item[1])}</p></div>
      <div class="menu-item-actions">
        <strong>${money(item[2])}</strong>
        <button type="button" class="add-item" data-index="${i}">+ 加入</button>
      </div>
    </article>
  `).join('');

  $$('.add-item', $('#menu-list')).forEach(btn => {
    btn.addEventListener('click', () => addToCart(currentStore.id, Number(btn.dataset.index), selectedOrderDay));
  });

  $('#menu-dialog').showModal();
}
function addToCart(storeId, itemIndex, day) {
  const existing = cart.find(row => row.storeId === storeId && row.itemIndex === itemIndex && row.day === day);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ storeId, itemIndex, day, qty: 1 });
  }
  persist();
  renderCart();
  showToast(`已加入 ${day} 訂單`);
}

function changeQty(storeId, itemIndex, day, delta) {
  const row = cart.find(item => item.storeId === storeId && item.itemIndex === itemIndex && item.day === day);
  if (!row) return;
  row.qty += delta;
  if (row.qty <= 0) {
    removeItem(storeId, itemIndex, day);
    return;
  }
  persist();
  renderCart();
}

function removeItem(storeId, itemIndex, day) {
  cart = cart.filter(item => !(item.storeId === storeId && item.itemIndex === itemIndex && item.day === day));
  persist();
  renderCart();
}
function loadCart() { try { return JSON.parse(localStorage.getItem('yi-ding-cart') || '[]') } catch { return [] } }
function persist() { try { localStorage.setItem('yi-ding-cart', JSON.stringify(cart)) } catch { } }
function renderStores() {
  const term = $('#search-stores').value.trim().toLowerCase();
  const category = $('#category-filter').value;
  const chosenDay = $('#category-chips .selected')?.dataset.kind || '全部';
  const filtered = stores.filter(store => {
    const searchable = [store.name, store.desc, ...store.kind, ...store.menu.map(item => item[0])].join(' ').toLowerCase();
    const matchTerm = !term || searchable.includes(term);
    const matchCategory = category === '全部' || store.category === category;
    const matchDay = chosenDay === '全部' || store.kind.includes(chosenDay);
    return matchTerm && matchCategory && matchDay;
  });
  $('#store-grid').innerHTML = filtered.map(store => `<article class="store-card" data-store="${store.id}" tabindex="0" role="button" aria-label="打開${escapeHtml(store.name)}菜單">
    <div class="store-visual" style="background:${store.color}"><span class="visual-sticker">${escapeHtml(store.sticker)}</span><span class="visual-illustration a">${store.decor[0]}</span><span class="store-emoji">${store.emoji}</span><span class="visual-illustration b">${store.decor[1]}</span></div>
    <div class="store-info"><div class="store-topline"><span class="store-name">${escapeHtml(store.name)}</span><span class="store-rating"><span>★</span>${store.rating}</span></div><p class="store-desc">${escapeHtml(store.desc)}</p><div class="store-bottom"><div class="store-tags">${store.tags.map(tag => `<span class="tag">${escapeHtml(tag)}</span>`).join('')}</div><span class="store-price">$<b>${store.price}</b> 起</span><span class="open-store">看菜單 ↗</span></div></div>
  </article>`).join('');
  $('#empty-search').classList.toggle('hidden', filtered.length > 0);
  $$('.store-card').forEach(card => { card.addEventListener('click', () => openMenu(card.dataset.store)); card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openMenu(card.dataset.store) } }) });
}

const WEEK_DAYS = ['周一', '周二', '周三', '周四', '周五', '周六', '周日'];

function renderCart() {
  const totalQty = cart.reduce((sum, row) => sum + row.qty, 0);
  $('#cart-count').textContent = totalQty;

  if (!cart.length) {
    $('#cart-items').innerHTML = '<p class="empty-cart">購物車還是空的，快去挑幾樣吧！</p>';
    $('#cart-total').textContent = money(0);
    return;
  }

  // 按照周一到周日排序
  const sortedCart = [...cart].sort((a, b) => WEEK_DAYS.indexOf(a.day) - WEEK_DAYS.indexOf(b.day));

  let totalAmount = 0;
  $('#cart-items').innerHTML = sortedCart.map(row => {
    const store = findStore(row.storeId);
    const item = store.menu[row.itemIndex];
    const subtotal = item[2] * row.qty;
    totalAmount += subtotal;

    return `
      <div class="cart-row">
        <div>
          <span class="cart-day-badge">[${row.day}]</span>
          <strong>${escapeHtml(item[0])}</strong>
          <small>${escapeHtml(store.name)} · ${money(item[2])}</small>
        </div>
        <div class="cart-row-controls">
          <button type="button" onclick="changeQty('${row.storeId}', ${row.itemIndex}, '${row.day}', -1)">-</button>
          <span>${row.qty}</span>
          <button type="button" onclick="changeQty('${row.storeId}', ${row.itemIndex}, '${row.day}', 1)">+</button>
        </div>
      </div>
    `;
  }).join('');

  $('#cart-total').textContent = money(totalAmount);
}


function removeItem(storeId, index) { cart = cart.filter(item => !(item.storeId === storeId && item.itemIndex === index)); persist(); renderCart(); showToast('已刪除這項餐點') }
function showCart() {
  $('#cart-panel').classList.remove('hidden'); $('#cart-panel').setAttribute('aria-hidden', 'false'); $('#overlay').classList.remove('hidden'); requestAnimationFrame(() => { $('#overlay').classList.add('visible'); $('#cart-panel').classList.add('visible') }); document.body.style.overflow = 'hidden';
}
function hideCart() {
  $('#overlay').classList.remove('visible'); $('#cart-panel').classList.remove('visible'); $('#cart-panel').setAttribute('aria-hidden', 'true'); document.body.style.overflow = ''; setTimeout(() => { $('#overlay').classList.add('hidden'); $('#cart-panel').classList.add('hidden') }, 220);
}
function showToast(message) { const toast = $('#toast'); toast.textContent = message; toast.classList.add('show'); clearTimeout(toastTimer); toastTimer = setTimeout(() => toast.classList.remove('show'), 2100) }
function checkout() {
  if (!cart.length) {
    showToast('先挑幾樣喜歡的餐點吧！');
    return;
  }

  const orderId = `YD${Date.now().toString().slice(-7)}`;
  const placedAt = new Date().toISOString();

  // 1. 整理使用者端總訂單與畫面摘要（依星期排序）
  const sortedSnapshot = [...cart]
    .sort((a, b) => WEEK_DAYS.indexOf(a.day) - WEEK_DAYS.indexOf(b.day))
    .map(row => {
      const store = findStore(row.storeId);
      const item = store.menu[row.itemIndex];
      return {
        ...row,
        storeName: store.name,
        itemName: item[0],
        unitPrice: item[2],
        subtotal: item[2] * row.qty
      };
    });

  // 2. 派發至商家端資料結構（依「商家 + 星期」分單，存入 yi-ding-merchant-orders）
  const merchantDispatchMap = {};
  sortedSnapshot.forEach(entry => {
    const key = `${entry.storeId}_${entry.day}`;
    if (!merchantDispatchMap[key]) {
      merchantDispatchMap[key] = {
        merchantOrderId: `${orderId}-${entry.storeId}-${entry.day}`,
        parentOrderId: orderId,
        storeId: entry.storeId,
        storeName: entry.storeName,
        targetDay: entry.day,
        status: 'pending', // 商家端初始狀態：待接單
        placedAt,
        items: [],
        totalAmount: 0
      };
    }
    merchantDispatchMap[key].items.push({
      itemIndex: entry.itemIndex,
      itemName: entry.itemName,
      unitPrice: entry.unitPrice,
      qty: entry.qty,
      subtotal: entry.subtotal
    });
    merchantDispatchMap[key].totalAmount += entry.subtotal;
  });

  try {
    // 寫入商家端佇列（供日後商家後台讀取）
    const merchantOrders = JSON.parse(localStorage.getItem('yi-ding-merchant-orders') || '[]');
    merchantOrders.unshift(...Object.values(merchantDispatchMap));
    localStorage.setItem('yi-ding-merchant-orders', JSON.stringify(merchantOrders));

    // 寫入使用者端歷史訂單
    const userOrders = JSON.parse(localStorage.getItem('yi-ding-orders') || '[]');
    userOrders.unshift({ id: orderId, placedAt, items: sortedSnapshot });
    localStorage.setItem('yi-ding-orders', JSON.stringify(userOrders));
  } catch (e) {
    console.error('儲存訂單失敗:', e);
  }

  // 3. 更新結帳成功彈窗畫面
  const totalMoney = sortedSnapshot.reduce((sum, item) => sum + item.subtotal, 0);
  $('#order-summary').innerHTML = sortedSnapshot.map(item => `
    <div class="summary-group">
      <span>[${item.day}] ${escapeHtml(item.storeName)} ・ ${escapeHtml(item.itemName)} × ${item.qty}</span>
      <strong>${money(item.subtotal)}</strong>
    </div>
  `).join('');
  $('#success-total').textContent = money(totalMoney);

  // 4. 清空購物車並顯示完成彈窗
  cart = [];
  persist();
  renderCart();
  hideCart();
  $('#checkout-dialog').showModal();
}

$('#store-total').textContent = String(stores.length).padStart(2, '0'); renderStores(); renderCart();
$('#search-stores').addEventListener('input', renderStores); $('#category-filter').addEventListener('change', renderStores);
$$('.chip').forEach(chip => { chip.addEventListener('click', () => { $$('.chip').forEach(item => item.classList.remove('selected')); chip.classList.add('selected'); renderStores(); }); });
$('#open-cart').addEventListener('click', showCart); $('#overlay').addEventListener('click', hideCart);
$$('[data-close]').forEach(button => button.addEventListener('click', hideCart));
$$('[data-menu-close]').forEach(button => button.addEventListener('click', () => $('#menu-dialog').close()));
$('#clear-cart').addEventListener('click', () => { if (!cart.length) return; cart = []; persist(); renderCart(); showToast('購物車已清空') });
$('#checkout').addEventListener('click', checkout); $$('[data-checkout-close]').forEach(button => button.addEventListener('click', () => $('#checkout-dialog').close()));
$('#menu-dialog').addEventListener('click', event => { if (event.target === $('#menu-dialog')) $('#menu-dialog').close() });
document.addEventListener('keydown', event => { if (event.key === 'Escape' && !$('#cart-panel').classList.contains('hidden')) hideCart() });
