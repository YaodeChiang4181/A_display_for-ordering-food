const stores = [
  {
    id: '1', name: '店家 1・小日子食堂', category: '便當', emoji: '🍱', color: '#e6edda', sticker: '人氣首選', rating: '4.9', desc: '每天現做的家常好味道', price: 85, tags: ['人氣便當', '可客製'], decor: ['✿', '〰'], menu: {
      '周一': [
        ['招牌日式唐揚雞飯', '酥脆雞腿排、溏心蛋與季節時蔬', 110],
        ['香煎鯖魚野菜餐盒', '炙燒鯖魚配上清爽野菜', 120]
      ],
      '周三': [
        ['招牌日式唐揚雞飯', '酥脆雞腿排、溏心蛋與季節時蔬', 110],
        ['厚切豬排咖哩飯', '濃郁日式咖哩與現炸豬排', 125],
        ['蔬食豆腐菇菇飯', '香煎板豆腐與時令菇類', 95]
      ]
    }
  },
  {
    id: '2', name: '店家 2・麵麵俱到', category: '麵食', emoji: '🍜', color: '#f4e4cf', sticker: '暖心湯麵', rating: '4.8', desc: '一碗熱湯麵，補充上課能量', price: 90, tags: ['湯麵', '手作'], decor: ['〰', '✳'], menus: {
      '周二': [
        ['紅燒牛肉麵', '慢燉牛腱、白蘿蔔與手工麵', 140],
        ['香菇雞湯麵', '暖胃香菇雞湯搭配細麵', 105]
      ],
      '周四': [
        ['麻醬乾拌麵', '濃香手作麻醬與脆口小黃瓜', 85]
      ],
      '周日': [
        ['餛飩鮮肉湯麵', '每日手包鮮肉餛飩', 100]
      ]
    }
  },
  {
    id: '3', name: '店家 3・綠日子沙拉', category: '輕食', emoji: '🥗', color: '#e0ecdc', sticker: '清爽無負擔', rating: '4.9', desc: '新鮮蔬果，吃完剛好有精神', price: 95, tags: ['新鮮蔬果', '輕食'], decor: ['✳', '❋'], menus: {
      '周三': [
        ['酪梨雞胸能量碗', '舒肥雞胸、酪梨與藜麥', 135],
        ['活力水果優格杯', '季節水果、堅果與希臘優格', 80]
      ],
      '周五': [['炙燒鮭魚沙拉', '炙燒鮭魚搭配當季生菜', 155],
      ['香煎豆腐溫沙拉', '香煎豆腐與烤時蔬', 115]
      ]
    }
  },
  {
    id: '4', name: '店家 4・手作飯糰研究所', category: '輕食', emoji: '🍙', color: '#f1e8d4', sticker: '快速取餐', rating: '4.7', desc: '現包現做的飽足系手作飯糰', price: 55, tags: ['手作飯糰', '方便帶著走'], decor: ['✷', '〰'], menus: {
      '周四': [
        ['明太子鮭魚飯糰', '炙燒明太子與鮭魚碎肉', 75],
        ['炙燒燒肉飯糰', '日式醬燒豬肉與海苔', 65]
      ],
      '周五': [
        ['香鬆玉子飯糰', '厚煎玉子燒與特調香鬆', 55]
      ],
      '周六': [
        ['韓式泡菜豆腐飯糰', '微辣泡菜與板豆腐', 60]
      ]
    }
  },
  {
    id: '5', name: '店家 5・午後一杯', category: '飲品', emoji: '🧋', color: '#f1e2db', sticker: '第二杯有優惠', rating: '4.8', desc: '手搖飲與甜點，午休的小確幸', price: 45, tags: ['手搖飲', '甜點'], decor: ['✿', '☼'], menus: {
      '周五': [
        ['招牌珍珠鮮奶茶', '濃郁鮮奶茶配Q彈黑糖珍珠', 65],
        ['桂花青茶', '清香桂花與甘醇青茶', 45]
      ],
      '周日': [
        ['檸檬冬瓜冰茶', '手熬冬瓜搭配新鮮檸檬', 50],
        ['小山園抹茶布丁', '濃郁抹茶與滑順布丁', 70]]
    }
  },
  {
    id: '6', name: '店家 6・烤好吃飯盒', category: '便當', emoji: '🍛', color: '#f3e5d2', sticker: '本週新夥伴', rating: '4.6', desc: '炭香直火燒烤，配菜天天換', price: 90, tags: ['炭火燒烤', '份量十足'], decor: ['✷', '✳'], menus: {
      '周六': [['炭烤蜜汁雞腿飯', '直火炭烤雞腿與每日配菜', 120], ['蔥鹽燒肉飯', '特製蔥鹽醬與炭香豬五花', 110], ['鹽烤鯖魚雙拼飯', '鹽烤鯖魚、唐揚雞雙拼', 135], ['烤時蔬菇菇飯', '季節蔬菜與香烤綜合菇', 100]]
    }
  },
  {
    id: '7', name: '店家 7・義式料理', category: '輕食', emoji: '🍛', color: '#f3e5d2', sticker: '本週新夥伴', rating: '4.4', desc: '義心一義為了你', price: 90, tags: ['精心手工', '美味'], decor: ['✿', '✳'], menus: {
      '周一': [
        ['鮮蔬雞腿排義大利麵', '奶油海鮮義大利麵', 110]
      ],
      '周二': [
        ['羅勒海鮮義大利麵', '青醬海鮮義大利麵', 130],
        ['燻雞起司捲', '火腿蛋三明治', 70]
      ],
      '周日': [
        ['烤時蔬菇菇飯', '季節蔬菜與香烤綜合菇', 100]
      ]
    }
  }];

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
  selectedOrderDay = (filterDay !== '全部' && storeDays.includes(filterDay))
    ? filterDay
    : storesDays[0];

  $('#menu-title').textContent = currentStore.name;
  $('#menu-description').textContent = currentStore.desc;
  if ($('#menu-emoji')) $('#menu-emoji').textContent = currentStore.emoji;
  if ($('#menu-cover')) $('#menu-cover').style.setProperty('--cover', currentStore.color);

  const renderMenuItemsForDay = (day) => {
    selectedOrderDay = day;
    if ($('#menu-tag')) $('#menu-tag').textContent = `${day}限定菜單`;

    const dayMenu = getDayMenu(currentStore, day);
    $('#menu-list').innerHTML = dayMenu.map((item, i) => `
      <article class="menu-item">
        <div>
          <h3>${escapeHtml(item[0])}</h3>
          <p>${escapeHtml(item[1])}</p>
        </div>
        <div class="menu-item-price">${money(item[2])}</div>
        <button type="button" class="add-item" data-index="${i}">＋ 加入 (${day})</button>
      </article>
    `).join('');

    $$('.add-item', $('#menu-list')).forEach(btn => {
      btn.addEventListener('click', () => {
        const item = dayMenu[Number(btn.dataset.index)];
        addToCart(currentStore.id, item[0], item[2], selectedOrderDay);
      });
    });
  };

  // 2. 在菜單內渲染營業日切換按鈕（讓使用者可自由切換要訂哪一天）
  const daySelector = $('#menu-day-selector');
  if (daySelector) {
    daySelector.innerHTML = storeDays.map(day => `
      <button type="button" class="chip ${day === selectedOrderDay ? 'selected' : ''}" data-day="${day}">
        ${day}
      </button>
    `).join('');

    $$('[data-day]', daySelector).forEach(btn => {
      btn.addEventListener('click', () => {
        $$('[data-day]', daySelector).forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        renderMenuItemsForDay(btn.dataset.day);
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

  renderMenuItemsForDay(selectedOrderDay);
  $('#menu-dialog').showModal();
}
function addToCart(storeId, itemName, price, day) {
  const existing = cart.find(row => row.storeId === storeId && row.itemName === itemName && row.day === day);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ storeId, itemName, price, day, qty: 1 });
  }
  persist();
  renderCart();
  showToast(`已加入 ${day}・${itemName}`);
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
    const searchable = [store.name, store.desc, ...storeDays, ...allDishNames].join(' ').toLowerCase();
    const matchTerm = !term || searchable.includes(term);
    const matchCategory = category === '全部' || store.category === category;
    const matchDay = chosenDay === '全部' || storesDays.includes(chosenDay);
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

let totalAmount = 0;

function renderCart() {
  const totalQty = cart.reduce((sum, row) => sum + row.qty, 0);
  const totalAmount = cart.reduce((sum, row) => sum + row.price * row_qty, 0);
  $('#cart-count').textContent = totalQty;
  if ($('#panel-count')) $('#panel-count').textContent = totalQty ? `・${totalQty} 項` : '';
  if ($('#cart-empty')) $('#cart-empty').classList.toggle('hidden', cart.length > 0);
  if ($('#cart-footer')) $('#cart-footer').classList.toggle('hidden', cart.length === 0);

  if (!cart.length) {
    $('#cart-items').innerHTML = '<p class="empty-cart">購物車還是空的，快去挑幾樣吧！</p>';
    $('#cart-total').textContent = money(0);
    return;
  }

  // 按照周一到周日排序
  const sortedCart = [...cart].sort((a, b) => WEEK_DAYS.indexOf(a.day) - WEEK_DAYS.indexOf(b.day));

  $('#cart-items').innerHTML = sortedCart.map(row => {
    const store = findStore(row.storeId);
    const availableDays = getAvailableDaysForItem(store, row.itemName);

    const dayControlHtml = availableDays.length > 1
      ? `<select class="cart-day-select" data-store="${row.storeId}" data-name="${escapeHtml(row.itemName)}" data-old-day="${row.day}" aria-label="調整預訂星期">
          ${availableDays.map(d => `<option value="${d}" ${d === row.day ? 'selected' : ''}>${d}</option>`).join('')}
         </select>`
      : `<span class="cart-day-badge">[${row.day}限定]</span>`;

    return `
      <article class="cart-row">
        <div>
          <div class="cart-row-name">${dayControlHtml} ${escapeHtml(row.itemName)}</div>
          <div class="cart-row-detail">${escapeHtml(store.name)} · ${money(row.price)} × ${row.qty}</div>
          <div class="cart-row-actions">
            <div class="qty-control">
              <button type="button" data-qty="-1" data-store="${row.storeId}" data-name="${escapeHtml(row.itemName)}" data-day="${row.day}">−</button>
              <span>${row.qty}</span>
              <button type="button" data-qty="1" data-store="${row.storeId}" data-name="${escapeHtml(row.itemName)}" data-day="${row.day}">＋</button>
            </div>
            <button type="button" class="remove-item" data-remove="${row.storeId}" data-name="${escapeHtml(row.itemName)}" data-day="${row.day}">刪除</button>
          </div>
        </div>
        <div class="cart-row-price">${money(row.price * row.qty)}</div>
      </article>
    `;
  }).join('');

  $('#cart-total').textContent = money(totalAmount);

  $$('.cart-day-select').forEach(sel => {
    sel.addEventListener('change', () => {
      changeCartDay(sel.dataset.store, sel.dataset.name, sel.dataset.oldDay, sel.value);
    });
  });
  $$('[data-qty]').forEach(btn => {
    btn.addEventListener('click', () => changeQty(btn.dataset.store, btn.dataset.name, btn.dataset.day, Number(btn.dataset.qty)));
  });
  $$('[data-remove]').forEach(btn => {
    btn.addEventListener('click', () => removeItem(btn.dataset.store, btn.dataset.name, btn.dataset.day));
  });

}


function showCart() {
  $('#cart-panel').classList.remove('hidden'); $('#cart-panel').setAttribute('aria-hidden', 'false'); $('#overlay').classList.remove('hidden'); requestAnimationFrame(() => { $('#overlay').classList.add('visible'); $('#cart-panel').classList.add('visible') }); document.body.style.overflow = 'hidden';
}
function hideCart() {
  $('#overlay').classList.remove('visible'); $('#cart-panel').classList.remove('visible'); $('#cart-panel').setAttribute('aria-hidden', 'true'); document.body.style.overflow = ''; setTimeout(() => { $('#overlay').classList.add('hidden'); $('#cart-panel').classList.add('hidden') }, 220);
}
function showToast(message) {
  const toast = $('#toast'); toast.textContent = message; toast.classList.add('show'); clearTimeout(toastTimer); toastTimer = setTimeout(() => toast.classList.remove('show'), 2100)
}
function getAvailableDaysForItem(store, itemName) {
  if (!store?.menus) return [];
  return Object.keys(store.menus)
    .filter(day => store.menus[day].some(item => item[0] === itemName))
    .sort((a, b) => WEEK_DAYS.indexOf(a) - WEEK_DAYS.indexOf(b));
}
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

function changeCartDay(storeId, itemName, oldDay, newDay) {
  if (oldDay === newDay) return;
  const sourceIndex = cart.findIndex(r => r.storeId === storeId && r.itemName === itemName && r.day === oldDay);
  if (sourceIndex === -1) return;

  const sourceRow = cart[sourceIndex];
  const store = findStore(storeId);
  // 取得新日期對應的正確價格（防止不同日有不同定價）
  const targetMenuItem = getDayMenu(store, newDay).find(m => m[0] === itemName);
  const updatedPrice = targetMenuItem ? targetMenuItem[2] : sourceRow.price;

  const targetRow = cart.find(r => r.storeId === storeId && r.itemName === itemName && r.day === newDay);
  if (targetRow) {
    targetRow.qty += sourceRow.qty;
    cart.splice(sourceIndex, 1);
  } else {
    sourceRow.day = newDay;
    sourceRow.price = updatedPrice;
  }

  persist();
  renderCart();
  showToast(`已將「${itemName}」調整至 ${newDay}`);
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
