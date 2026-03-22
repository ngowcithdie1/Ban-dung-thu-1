const DEFAULT_ITEMS = [
  {
    id: "tom-con",
    name: "Tôm con",
    category: "Đông lạnh",
    stockUnit: "g",
    onHand: 1800,
    minLevel: 1000,
    purchaseUnits: [
      { label: "bịch", factor: 500, example: "1 bịch = 500 g" },
      { label: "khay", factor: 250, example: "1 khay = 250 g" }
    ]
  },
  {
    id: "muc-xoan",
    name: "Mực xoắn",
    category: "Đông lạnh",
    stockUnit: "g",
    onHand: 1200,
    minLevel: 800,
    purchaseUnits: [
      { label: "bịch", factor: 500, example: "1 bịch = 500 g" },
      { label: "khay", factor: 250, example: "1 khay = 250 g" }
    ]
  },
  {
    id: "ho-lo-vien",
    name: "Hồ lô viên",
    category: "Đông lạnh",
    stockUnit: "g",
    onHand: 2200,
    minLevel: 1200,
    purchaseUnits: [
      { label: "bịch", factor: 500, example: "1 bịch = 500 g" },
      { label: "khay", factor: 250, example: "1 khay = 250 g" }
    ]
  },
  {
    id: "xuc-xich",
    name: "Xúc xích",
    category: "Đông lạnh",
    stockUnit: "g",
    onHand: 1450,
    minLevel: 800,
    purchaseUnits: [
      { label: "thùng", factor: 4000, example: "1 thùng = 4.000 g" },
      { label: "gói", factor: 1000, example: "1 gói = 1.000 g" }
    ]
  },
  {
    id: "bo-vien",
    name: "Bò viên",
    category: "Đông lạnh",
    stockUnit: "g",
    onHand: 2650,
    minLevel: 2200,
    purchaseUnits: [
      { label: "bịch", factor: 500, example: "1 bịch = 500 g" },
      { label: "khay", factor: 250, example: "1 khay = 250 g" }
    ]
  },
  {
    id: "ca-vien",
    name: "Cá viên",
    category: "Đông lạnh",
    stockUnit: "g",
    onHand: 3800,
    minLevel: 2400,
    purchaseUnits: [
      { label: "bịch", factor: 500, example: "1 bịch = 500 g" },
      { label: "khay", factor: 250, example: "1 khay = 250 g" }
    ]
  },
  {
    id: "rau-cu-vien",
    name: "Rau củ viên",
    category: "Đông lạnh",
    stockUnit: "g",
    onHand: 2100,
    minLevel: 1400,
    purchaseUnits: [
      { label: "bịch", factor: 500, example: "1 bịch = 500 g" },
      { label: "khay", factor: 250, example: "1 khay = 250 g" }
    ]
  },
  {
    id: "tom-vien",
    name: "Tôm viên",
    category: "Đông lạnh",
    stockUnit: "g",
    onHand: 2100,
    minLevel: 2200,
    purchaseUnits: [
      { label: "bịch", factor: 500, example: "1 bịch = 500 g" },
      { label: "khay", factor: 250, example: "1 khay = 250 g" }
    ]
  },
  {
    id: "pho-mai-vien",
    name: "Phô mai viên",
    category: "Đông lạnh",
    stockUnit: "g",
    onHand: 1600,
    minLevel: 1000,
    purchaseUnits: [
      { label: "bịch", factor: 500, example: "1 bịch = 500 g" },
      { label: "khay", factor: 250, example: "1 khay = 250 g" }
    ]
  },
  {
    id: "ha-cao",
    name: "Há cảo",
    category: "Đông lạnh",
    stockUnit: "g",
    onHand: 1800,
    minLevel: 1000,
    purchaseUnits: [
      { label: "bịch", factor: 500, example: "1 bịch = 500 g" },
      { label: "khay", factor: 250, example: "1 khay = 250 g" }
    ]
  },
  {
    id: "nem-chua",
    name: "Nem chua",
    category: "Đông lạnh",
    stockUnit: "g",
    onHand: 900,
    minLevel: 500,
    purchaseUnits: [
      { label: "bịch", factor: 500, example: "1 bịch = 500 g" },
      { label: "thùng", factor: 2500, example: "1 thùng = 2.500 g" }
    ]
  },
  {
    id: "ga-xien-que",
    name: "Gà xiên que",
    category: "Đông lạnh",
    stockUnit: "g",
    onHand: 1500,
    minLevel: 800,
    purchaseUnits: [
      { label: "bịch", factor: 500, example: "1 bịch = 500 g" },
      { label: "thùng", factor: 2500, example: "1 thùng = 2.500 g" }
    ]
  },
  {
    id: "rau-cu",
    name: "Rau củ",
    category: "Rau củ",
    stockUnit: "g",
    onHand: 14500,
    minLevel: 8000,
    purchaseUnits: [
      { label: "kg", factor: 1000, example: "5 kg = 5.000 g" },
      { label: "thùng xốp", factor: 8000, example: "1 thùng xốp = 8.000 g" }
    ]
  },
  {
    id: "rau-muong",
    name: "Rau muống",
    category: "Rau củ",
    stockUnit: "g",
    onHand: 6800,
    minLevel: 5000,
    purchaseUnits: [
      { label: "kg", factor: 1000, example: "1 kg = 1.000 g" },
      { label: "bó", factor: 500, example: "1 bó = 500 g" }
    ]
  }
];

const DEFAULT_PURCHASE_LOG = [
  {
    date: "2026-03-20",
    time: "07:25",
    itemId: "rau-cu",
    unit: "kg",
    quantity: 8,
    factor: 1000,
    price: 220000,
    supplier: "Cơ sở rau sạch"
  },
  {
    date: "2026-03-20",
    time: "08:10",
    itemId: "xuc-xich",
    unit: "thùng",
    quantity: 2,
    factor: 4000,
    price: 360000,
    supplier: "Kho đông lạnh A"
  },
  {
    date: "2026-03-19",
    time: "08:45",
    itemId: "ca-vien",
    unit: "bịch",
    quantity: 3,
    factor: 500,
    price: 540000,
    supplier: "Kho đông lạnh A"
  }
];

const DEFAULT_COUNT_ENTRIES = [
  { itemId: "tom-con", actual: 1760 },
  { itemId: "muc-xoan", actual: 1180 },
  { itemId: "ho-lo-vien", actual: 2150 },
  { itemId: "rau-muong", actual: 6500 },
  { itemId: "xuc-xich", actual: 1440 },
  { itemId: "ca-vien", actual: 3720 },
  { itemId: "rau-cu-vien", actual: 2050 },
  { itemId: "tom-vien", actual: 1950 },
  { itemId: "bo-vien", actual: 2650 },
  { itemId: "pho-mai-vien", actual: 1540 },
  { itemId: "ha-cao", actual: 1750 },
  { itemId: "nem-chua", actual: 880 },
  { itemId: "ga-xien-que", actual: 1440 },
  { itemId: "rau-cu", actual: 13800 }
];

const DEFAULT_HISTORY_EVENTS = [
  {
    time: "07:25",
    actor: "Nhân viên kho",
    title: "Tạo phiếu nhập rau củ",
    detail: "Nhập 8 kg và hệ thống tự đổi thành 8.000 g tồn kho."
  },
  {
    time: "08:10",
    actor: "Nhân viên kho",
    title: "Nhập 2 thùng xúc xích",
    detail: "Hệ thống tự cộng thêm 8.000 g vào tồn kho."
  },
  {
    time: "20:30",
    actor: "Nhân viên ca tối",
    title: "Bắt đầu kiểm kho cuối ngày",
    detail: "Nhân viên so sánh tồn hệ thống với tồn thực tế cho toàn bộ kho."
  },
  {
    time: "20:45",
    actor: "Quản lý",
    title: "Duyệt 3 dòng chênh lệch",
    detail: "Xác nhận điều chỉnh tồn kho cho rau muống, cá viên và tôm viên."
  }
];

const DEFAULT_DAILY_SALES = [
  {
    id: "mi-tron-indomie",
    name: "Mì trộn Indomie",
    quantity: 28,
    appliedQuantity: 0,
    price: 25000,
    note: "Bán mạnh buổi tối"
  },
  {
    id: "xien-chien-mam",
    name: "Xiên chiên mắm",
    quantity: 46,
    appliedQuantity: 0,
    price: 12000,
    note: "Món bán chạy"
  },
  {
    id: "combo-ca-vien",
    name: "Cá viên chiên",
    quantity: 22,
    appliedQuantity: 0,
    price: 18000,
    note: "Bán đều cả ngày"
  }
];

const DEFAULT_RECIPE_DEFINITIONS = [
  {
    id: "mi-tron-indomie",
    name: "Mì trộn Indomie",
    sampleSalesQuantity: 28,
    ingredients: [
      { itemId: "rau-cu", amount: 80 },
      { itemId: "rau-muong", amount: 30 }
    ]
  },
  {
    id: "xien-chien-mam",
    name: "Xiên chiên mắm",
    sampleSalesQuantity: 46,
    ingredients: [
      { itemId: "xuc-xich", amount: 35 },
      { itemId: "tom-vien", amount: 40 },
      { itemId: "bo-vien", amount: 40 }
    ]
  },
  {
    id: "combo-ca-vien",
    name: "Cá viên chiên",
    sampleSalesQuantity: 22,
    ingredients: [
      { itemId: "ca-vien", amount: 120 },
      { itemId: "rau-cu", amount: 40 }
    ]
  }
];

const DEFAULT_EMPLOYEE_ERRORS = [
  {
    id: "error-1",
    date: "2026-03-20",
    employeeName: "Nhân viên kho ca sáng",
    area: "Nhập hàng",
    type: "Nhập sai đơn vị",
    status: "Đã nhắc",
    detail: "Đã nhập 2 bịch cá viên thành 2 kg nên tồn kho bị cộng sai.",
    note: "Quản lý đã sửa lại phiếu nhập và nhắc lại cách quy đổi bịch sang gam."
  },
  {
    id: "error-2",
    date: "2026-03-20",
    employeeName: "Nhân viên ca tối",
    area: "Kiểm kho",
    type: "Kiểm kho sai",
    status: "Chưa xử lý",
    detail: "Đếm thiếu tôm viên cuối ca nên số thực tế ghi vào hệ thống thấp hơn kho thật.",
    note: "Cần kiểm lại với quản lý trước khi chốt kiểm kho hôm nay."
  },
  {
    id: "error-3",
    date: "2026-03-19",
    employeeName: "Nhân viên quầy",
    area: "Bán trong ngày",
    type: "Quên ghi phiếu",
    status: "Đã sửa xong",
    detail: "Có bán thêm một đợt xiên chiên nhưng chưa nhập lại vào bảng bán trong ngày.",
    note: "Đã bổ sung số liệu và nhắc nhân viên nhập ngay sau mỗi ca."
  }
];

const STORAGE_KEY = "inventory-internal-site-v1";
const DEFAULT_USERS = [
  {
    id: "user-seed-nachago-ngoc",
    fullName: "Tai khoan chu quan",
    username: "nachago.ngoc",
    password: "12345678",
    role: "owner",
    createdAt: "2026-03-22T00:00:00.000Z"
  }
];

function buildDefaultState() {
  return {
    items: structuredClone(DEFAULT_ITEMS),
    purchaseLog: structuredClone(DEFAULT_PURCHASE_LOG),
    countEntries: structuredClone(DEFAULT_COUNT_ENTRIES),
    historyEvents: structuredClone(DEFAULT_HISTORY_EVENTS),
    dailySales: structuredClone(DEFAULT_DAILY_SALES),
    recipeDefinitions: structuredClone(DEFAULT_RECIPE_DEFINITIONS),
    employeeErrors: structuredClone(DEFAULT_EMPLOYEE_ERRORS),
    users: structuredClone(DEFAULT_USERS),
    currentUserId: null
  };
}

function syncUsers(users = []) {
  const normalizedUsers = Array.isArray(users) ? structuredClone(users) : [];

  DEFAULT_USERS.forEach((seedUser) => {
    const hasUser = normalizedUsers.some(
      (user) => (user.username || "").toLowerCase() === seedUser.username.toLowerCase()
    );

    if (!hasUser) {
      normalizedUsers.push(structuredClone(seedUser));
    }
  });

  return normalizedUsers;
}

function normalizeDailySales(dailySales = []) {
  return dailySales.map((sale) => ({
    ...sale,
    quantity: Number(sale.quantity) || 0,
    appliedQuantity: Number(sale.appliedQuantity) || 0,
    price: Number(sale.price) || 0,
    note: sale.note || ""
  }));
}

function syncCountEntries(items, countEntries) {
  const entryMap = new Map(countEntries.map((entry) => [entry.itemId, entry]));
  return items.map((item) => ({
    itemId: item.id,
    actual: entryMap.get(item.id)?.actual ?? item.onHand
  }));
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      const defaults = buildDefaultState();
      defaults.countEntries = syncCountEntries(defaults.items, defaults.countEntries);
      return defaults;
    }

    const parsed = JSON.parse(raw);
    const items = Array.isArray(parsed.items) ? parsed.items : structuredClone(DEFAULT_ITEMS);
    const purchaseLog = Array.isArray(parsed.purchaseLog) ? parsed.purchaseLog : structuredClone(DEFAULT_PURCHASE_LOG);
    const historyEvents = Array.isArray(parsed.historyEvents) ? parsed.historyEvents : structuredClone(DEFAULT_HISTORY_EVENTS);
    const dailySales = normalizeDailySales(Array.isArray(parsed.dailySales) ? parsed.dailySales : structuredClone(DEFAULT_DAILY_SALES));
    const recipeDefinitions = Array.isArray(parsed.recipeDefinitions) ? parsed.recipeDefinitions : structuredClone(DEFAULT_RECIPE_DEFINITIONS);
    const employeeErrors = Array.isArray(parsed.employeeErrors) ? parsed.employeeErrors : structuredClone(DEFAULT_EMPLOYEE_ERRORS);
    const users = syncUsers(Array.isArray(parsed.users) ? parsed.users : []);
    const countEntries = syncCountEntries(items, Array.isArray(parsed.countEntries) ? parsed.countEntries : []);
    const currentUserId = typeof parsed.currentUserId === "string" && users.some((user) => user.id === parsed.currentUserId)
      ? parsed.currentUserId
      : null;

    return { items, purchaseLog, countEntries, historyEvents, dailySales, recipeDefinitions, employeeErrors, users, currentUserId };
  } catch {
    const defaults = buildDefaultState();
    defaults.countEntries = syncCountEntries(defaults.items, defaults.countEntries);
    return defaults;
  }
}

const state = loadState();

const authShell = document.getElementById("auth-shell");
const appShell = document.getElementById("app-shell");
const authStateCopy = document.getElementById("auth-state-copy");
const authMessage = document.getElementById("auth-message");
const loginForm = document.getElementById("login-form");
const registerForm = document.getElementById("register-form");
const loginUsernameInput = document.getElementById("login-username");
const loginPasswordInput = document.getElementById("login-password");
const registerNameInput = document.getElementById("register-name");
const registerUsernameInput = document.getElementById("register-username");
const registerPasswordInput = document.getElementById("register-password");
const navButtons = [...document.querySelectorAll(".nav-item")];
const screenPanels = [...document.querySelectorAll("[data-screen-panel]")];
const catalogGrid = document.getElementById("catalog-grid");
const catalogItemSelect = document.getElementById("catalog-item-select");
const catalogNameInput = document.getElementById("catalog-name");
const catalogCategoryInput = document.getElementById("catalog-category");
const catalogWeightInput = document.getElementById("catalog-weight");
const catalogOnHandInput = document.getElementById("catalog-on-hand");
const catalogMinLevelInput = document.getElementById("catalog-min-level");
const catalogUnitOneNameInput = document.getElementById("catalog-unit-1-name");
const catalogUnitOneFactorInput = document.getElementById("catalog-unit-1-factor");
const catalogUnitOneExampleInput = document.getElementById("catalog-unit-1-example");
const resetCatalogFormButton = document.getElementById("reset-catalog-form");
const deleteCatalogItemButton = document.getElementById("delete-catalog-item");
const dashboardStats = document.getElementById("dashboard-stats");
const dashboardAlerts = document.getElementById("dashboard-alerts");
const purchaseItemSelect = document.getElementById("purchase-item");
const purchaseUnitSelect = document.getElementById("purchase-unit");
const purchaseQuantityInput = document.getElementById("purchase-quantity");
const purchaseCustomWeightInput = document.getElementById("purchase-custom-weight");
const purchasePriceInput = document.getElementById("purchase-price");
const purchaseSupplierInput = document.getElementById("purchase-supplier");
const purchaseHistoryDateInput = document.getElementById("purchase-history-date");
const purchaseHistorySummary = document.getElementById("purchase-history-summary");
const conversionPreview = document.getElementById("conversion-preview");
const purchaseLogBody = document.getElementById("purchase-log");
const recipeNameInput = document.getElementById("recipe-name");
const recipeSaleQuantityInput = document.getElementById("recipe-sale-quantity");
const recipeIngredientsList = document.getElementById("recipe-ingredients-list");
const addIngredientRowButton = document.getElementById("add-ingredient-row");
const recipePreview = document.getElementById("recipe-preview");
const recipeTable = document.getElementById("recipe-table");
const countTable = document.getElementById("count-table");
const salesTable = document.getElementById("sales-table");
const consumptionTable = document.getElementById("consumption-table");
const salesSyncStatus = document.getElementById("sales-sync-status");
const saveSalesUpdatesButton = document.getElementById("save-sales-updates");
const lowStockList = document.getElementById("low-stock-list");
const healthyStockList = document.getElementById("healthy-stock-list");
const historyList = document.getElementById("history-list");
const storageStatus = document.getElementById("storage-status");
const exportDataButton = document.getElementById("export-data");
const importDataInput = document.getElementById("import-data");
const resetDataButton = document.getElementById("reset-data");
const currentUserLabel = document.getElementById("current-user-label");
const logoutButton = document.getElementById("logout-button");
const accountPanel = document.getElementById("account-panel");
const dashboardErrorPanel = document.getElementById("dashboard-error-panel");
const dashboardSalesPanel = document.getElementById("dashboard-sales-panel");
const hideDashboardErrorsButton = document.getElementById("hide-dashboard-errors");
const hideDashboardSalesButton = document.getElementById("hide-dashboard-sales");
const accountForm = document.getElementById("account-form");
const accountNameInput = document.getElementById("account-name");
const accountUsernameInput = document.getElementById("account-username");
const accountPasswordInput = document.getElementById("account-password");
const accountRoleInput = document.getElementById("account-role");
const accountList = document.getElementById("account-list");
const employeeErrorSelect = document.getElementById("employee-error-select");
const employeeErrorForm = document.getElementById("employee-error-form");
const errorDateInput = document.getElementById("error-date");
const errorEmployeeInput = document.getElementById("error-employee");
const errorAreaInput = document.getElementById("error-area");
const errorTypeInput = document.getElementById("error-type");
const errorStatusInput = document.getElementById("error-status");
const errorDetailInput = document.getElementById("error-detail");
const errorNoteInput = document.getElementById("error-note");
const resetErrorFormButton = document.getElementById("reset-error-form");
const deleteErrorButton = document.getElementById("delete-error-button");
const employeeErrorsTable = document.getElementById("employee-errors-table");
const employeeErrorSummary = document.getElementById("employee-error-summary");
let ingredientRowId = 0;

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify({
    items: state.items,
    purchaseLog: state.purchaseLog,
    countEntries: state.countEntries,
    historyEvents: state.historyEvents,
    dailySales: state.dailySales,
    recipeDefinitions: state.recipeDefinitions,
    employeeErrors: state.employeeErrors,
    users: state.users,
    currentUserId: state.currentUserId
  }));
  storageStatus.textContent = `Dữ liệu đã được lưu trên trình duyệt lúc ${new Date().toLocaleTimeString("vi-VN", { hour: "2-digit", minute: "2-digit" })}.`;
}

function replaceState(nextState) {
  state.items = nextState.items;
  state.purchaseLog = nextState.purchaseLog;
  state.countEntries = syncCountEntries(nextState.items, nextState.countEntries);
  state.historyEvents = nextState.historyEvents;
  state.dailySales = normalizeDailySales(nextState.dailySales);
  state.recipeDefinitions = nextState.recipeDefinitions;
  state.employeeErrors = Array.isArray(nextState.employeeErrors) ? nextState.employeeErrors : structuredClone(DEFAULT_EMPLOYEE_ERRORS);
  state.users = syncUsers(Array.isArray(nextState.users) ? nextState.users : state.users);
  state.currentUserId = typeof nextState.currentUserId === "string" && state.users.some((user) => user.id === nextState.currentUserId)
    ? nextState.currentUserId
    : null;
  saveState();
}

function findItem(itemId) {
  return state.items.find((item) => item.id === itemId);
}

function findEmployeeError(errorId) {
  return state.employeeErrors.find((entry) => entry.id === errorId);
}

function getCurrentUser() {
  return state.users.find((user) => user.id === state.currentUserId) || null;
}

function isOwner() {
  return getCurrentUser()?.role === "owner";
}

function createId(prefix) {
  return `${prefix}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

function roleLabel(role) {
  return role === "owner" ? "Chủ quán" : "Nhân viên";
}

function actorLabel(fallback) {
  const user = getCurrentUser();
  return user ? user.fullName : fallback;
}

function setSalesSyncStatus(message, tone = "") {
  salesSyncStatus.textContent = message;
  salesSyncStatus.style.color = tone === "danger"
    ? "var(--danger)"
    : tone === "good"
      ? "var(--good)"
      : "var(--muted)";
  salesSyncStatus.style.borderColor = tone === "danger"
    ? "#e7c0bc"
    : tone === "good"
      ? "#cde5d7"
      : "var(--line)";
}

function showDashboardErrors(scrollIntoView = false) {
  dashboardErrorPanel.hidden = false;
  if (scrollIntoView) {
    dashboardErrorPanel.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function hideDashboardErrors() {
  dashboardErrorPanel.hidden = true;
}

function showDashboardSales(scrollIntoView = false) {
  dashboardSalesPanel.hidden = false;
  if (scrollIntoView) {
    dashboardSalesPanel.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function hideDashboardSales() {
  dashboardSalesPanel.hidden = true;
}

function formatNumber(value) {
  return new Intl.NumberFormat("vi-VN").format(value);
}

function formatCurrency(value) {
  return `${formatNumber(value)} đ`;
}

function formatDateDisplay(value) {
  if (!value) return "";
  const [year, month, day] = value.split("-");
  return `${day}/${month}/${year}`;
}

function formatDisplayQuantity(value, unit) {
  if (unit === "g") {
    return `${formatNumber(value)} g`;
  }

  if (unit === "ml" && value >= 1000) {
    return `${(value / 1000).toFixed(value % 1000 === 0 ? 0 : 1)} lít`;
  }

  return `${formatNumber(value)} ${unit}`;
}

function varianceMeta(systemValue, actualValue, unit) {
  const diff = actualValue - systemValue;

  if (diff === 0) {
    return { label: "Khớp đúng", badgeClass: "good", diffText: `0 ${unit}` };
  }

  if (diff > 0) {
    return {
      label: "Thừa so với hệ thống",
      badgeClass: "warning",
      diffText: `+${formatDisplayQuantity(diff, unit)}`
    };
  }

  return {
    label: "Thiếu so với hệ thống",
    badgeClass: "danger",
    diffText: `-${formatDisplayQuantity(Math.abs(diff), unit)}`
  };
}

function setAuthMessage(message, tone = "") {
  authMessage.textContent = message;
  authMessage.style.color = tone === "danger"
    ? "var(--danger)"
    : tone === "good"
      ? "var(--good)"
      : "var(--muted)";
}

function renderAccountList() {
  accountList.innerHTML = state.users.length === 0
    ? `<article class="account-item"><h5>Chưa có tài khoản</h5><p>Bạn hãy tạo tài khoản đầu tiên để bắt đầu dùng website.</p></article>`
    : state.users
        .map((user) => `
          <article class="account-item">
            <h5>${user.fullName}</h5>
            <p><strong>Tên đăng nhập:</strong> ${user.username}</p>
            <p><strong>Vai trò:</strong> ${roleLabel(user.role)}</p>
          </article>
        `)
        .join("");
}

function renderAuthState() {
  const currentUser = getCurrentUser();
  const hasUsers = state.users.length > 0;

  authShell.hidden = Boolean(currentUser);
  appShell.hidden = !currentUser;
  document.body.classList.toggle("auth-open", !currentUser);

  loginForm.hidden = !hasUsers;
  registerForm.hidden = hasUsers;

  if (hasUsers) {
    authStateCopy.textContent = "Dùng tài khoản bạn đã tạo để đăng nhập. Muốn thêm tài khoản mới, hãy đăng nhập bằng tài khoản chủ quán.";
  } else {
    authStateCopy.textContent = "Lần đầu sử dụng, bạn tạo tài khoản chủ quán trước. Sau đó đăng nhập để tạo thêm tài khoản cho nhân viên.";
  }

  if (!currentUser) {
    currentUserLabel.textContent = "Chưa đăng nhập";
    accountPanel.hidden = true;
    renderAccountList();
    return;
  }

  currentUserLabel.textContent = `${currentUser.fullName} • ${roleLabel(currentUser.role)}`;
  accountPanel.hidden = !isOwner();
  renderAccountList();
}

function createOwnerAccount(event) {
  event.preventDefault();

  const fullName = registerNameInput.value.trim();
  const username = registerUsernameInput.value.trim();
  const password = registerPasswordInput.value.trim();

  if (!fullName || !username || !password) {
    setAuthMessage("Bạn cần nhập đủ họ tên, tên đăng nhập và mật khẩu.", "danger");
    return;
  }

  if (state.users.some((user) => user.username.toLowerCase() === username.toLowerCase())) {
    setAuthMessage("Tên đăng nhập này đã tồn tại, bạn hãy chọn tên khác.", "danger");
    return;
  }

  const user = {
    id: createId("user"),
    fullName,
    username,
    password,
    role: "owner",
    createdAt: new Date().toISOString()
  };

  state.users.push(user);
  state.currentUserId = user.id;
  setAuthMessage("Đã tạo tài khoản chủ quán và đăng nhập thành công.", "good");
  saveState();
  renderAuthState();
  renderAll();
  registerForm.reset();
}

function login(event) {
  event.preventDefault();

  const username = loginUsernameInput.value.trim().toLowerCase();
  const password = loginPasswordInput.value.trim();
  const user = state.users.find((entry) => entry.username.toLowerCase() === username && entry.password === password);

  if (!user) {
    setAuthMessage("Sai tên đăng nhập hoặc mật khẩu.", "danger");
    return;
  }

  state.currentUserId = user.id;
  setAuthMessage(`Đăng nhập thành công với tài khoản ${user.fullName}.`, "good");
  saveState();
  renderAuthState();
  renderAll();
  loginForm.reset();
}

function logout() {
  state.currentUserId = null;
  saveState();
  renderAuthState();
  changeScreen("dashboard");
  setAuthMessage("Bạn đã đăng xuất khỏi website nội bộ.", "good");
}

function createManagedAccount(event) {
  event.preventDefault();

  if (!isOwner()) {
    window.alert("Chỉ tài khoản chủ quán mới tạo được tài khoản mới.");
    return;
  }

  const fullName = accountNameInput.value.trim();
  const username = accountUsernameInput.value.trim();
  const password = accountPasswordInput.value.trim();
  const role = accountRoleInput.value;

  if (!fullName || !username || !password) {
    window.alert("Bạn hãy nhập đủ họ tên, tên đăng nhập và mật khẩu.");
    return;
  }

  if (state.users.some((user) => user.username.toLowerCase() === username.toLowerCase())) {
    window.alert("Tên đăng nhập này đã tồn tại.");
    return;
  }

  state.users.push({
    id: createId("user"),
    fullName,
    username,
    password,
    role,
    createdAt: new Date().toISOString()
  });

  state.historyEvents.push({
    time: new Date().toLocaleTimeString("vi-VN", { hour: "2-digit", minute: "2-digit" }),
    actor: actorLabel("Chủ quán"),
    title: `Tạo tài khoản ${username}`,
    detail: `Đã tạo tài khoản ${roleLabel(role).toLowerCase()} cho ${fullName}.`
  });

  saveState();
  renderAccountList();
  renderHistory();
  accountForm.reset();
  accountRoleInput.value = "employee";
}

function fillEmployeeErrorOptions() {
  const currentValue = employeeErrorSelect.value;
  employeeErrorSelect.innerHTML = `
    <option value="">Tạo lỗi mới</option>
    ${state.employeeErrors
      .slice()
      .sort((a, b) => (a.date < b.date ? 1 : -1))
      .map((entry) => `<option value="${entry.id}">${formatDateDisplay(entry.date)} • ${entry.employeeName} • ${entry.type}</option>`)
      .join("")}
  `;

  if (currentValue && state.employeeErrors.some((entry) => entry.id === currentValue)) {
    employeeErrorSelect.value = currentValue;
  }
}

function resetEmployeeErrorForm() {
  employeeErrorSelect.value = "";
  errorDateInput.value = new Date().toISOString().slice(0, 10);
  errorEmployeeInput.value = "";
  errorAreaInput.value = "Nhập hàng";
  errorTypeInput.value = "Nhập sai đơn vị";
  errorStatusInput.value = "Chưa xử lý";
  errorDetailInput.value = "";
  errorNoteInput.value = "";
}

function populateEmployeeErrorForm() {
  const entry = findEmployeeError(employeeErrorSelect.value);
  if (!entry) {
    resetEmployeeErrorForm();
    return;
  }

  errorDateInput.value = entry.date;
  errorEmployeeInput.value = entry.employeeName;
  errorAreaInput.value = entry.area;
  errorTypeInput.value = entry.type;
  errorStatusInput.value = entry.status;
  errorDetailInput.value = entry.detail;
  errorNoteInput.value = entry.note;
}

function renderEmployeeErrors() {
  fillEmployeeErrorOptions();

  const unresolvedCount = state.employeeErrors.filter((entry) => entry.status !== "Đã sửa xong").length;
  const fixedCount = state.employeeErrors.filter((entry) => entry.status === "Đã sửa xong").length;
  const latestEntry = state.employeeErrors
    .slice()
    .sort((a, b) => `${b.date}`.localeCompare(a.date))[0];

  employeeErrorSummary.innerHTML = `
    <article class="summary-card">
      <h5>Lỗi còn mở</h5>
      <p>${unresolvedCount} lỗi đang cần xem lại hoặc nhắc nhân viên.</p>
    </article>
    <article class="summary-card">
      <h5>Lỗi đã xử lý</h5>
      <p>${fixedCount} lỗi đã được ghi nhận là sửa xong.</p>
    </article>
    <article class="summary-card">
      <h5>Bản ghi gần nhất</h5>
      <p>${latestEntry ? `${formatDateDisplay(latestEntry.date)} • ${latestEntry.employeeName} • ${latestEntry.type}` : "Chưa có lỗi nào được ghi nhận."}</p>
    </article>
  `;

  employeeErrorsTable.innerHTML = state.employeeErrors
    .slice()
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .map((entry) => `
      <tr>
        <td>${formatDateDisplay(entry.date)}</td>
        <td>${entry.employeeName}</td>
        <td>${entry.area}</td>
        <td>${entry.type}</td>
        <td><span class="badge ${entry.status === "Đã sửa xong" ? "good" : entry.status === "Đã nhắc" ? "warning" : "danger"}">${entry.status}</span></td>
        <td><button type="button" class="link-btn" data-edit-error="${entry.id}">Mở sửa</button></td>
      </tr>
    `)
    .join("");

  [...document.querySelectorAll("[data-edit-error]")].forEach((button) => {
    button.addEventListener("click", () => {
      employeeErrorSelect.value = button.dataset.editError;
      populateEmployeeErrorForm();
      changeScreen("dashboard", { showEmployeeErrors: true, activeNav: "dashboard" });
    });
  });
}

function saveEmployeeError(event) {
  event.preventDefault();

  const selectedId = employeeErrorSelect.value;
  const payload = {
    date: errorDateInput.value || new Date().toISOString().slice(0, 10),
    employeeName: errorEmployeeInput.value.trim() || "Chưa ghi tên",
    area: errorAreaInput.value,
    type: errorTypeInput.value,
    status: errorStatusInput.value,
    detail: errorDetailInput.value.trim(),
    note: errorNoteInput.value.trim()
  };

  if (!payload.detail) {
    window.alert("Bạn hãy nhập mô tả lỗi để sau này xem lại dễ hơn.");
    return;
  }

  const existing = findEmployeeError(selectedId);
  if (existing) {
    Object.assign(existing, payload);
  } else {
    state.employeeErrors.push({
      id: createId("error"),
      ...payload
    });
  }

  state.historyEvents.push({
    time: new Date().toLocaleTimeString("vi-VN", { hour: "2-digit", minute: "2-digit" }),
    actor: actorLabel("Quản lý"),
    title: existing ? `Cập nhật lỗi của ${payload.employeeName}` : `Ghi nhận lỗi của ${payload.employeeName}`,
    detail: `${payload.area} • ${payload.type} • ${payload.status}.`
  });

  saveState();
  renderAll();

  const latest = existing
    ? existing.id
    : state.employeeErrors[state.employeeErrors.length - 1]?.id || "";
  employeeErrorSelect.value = latest;
  populateEmployeeErrorForm();
}

function deleteEmployeeError() {
  const selectedId = employeeErrorSelect.value;
  if (!selectedId) return;

  const entry = findEmployeeError(selectedId);
  if (!entry) return;
  if (!window.confirm(`Bạn có chắc muốn xóa lỗi của "${entry.employeeName}" không?`)) return;

  state.employeeErrors = state.employeeErrors.filter((item) => item.id !== selectedId);
  state.historyEvents.push({
    time: new Date().toLocaleTimeString("vi-VN", { hour: "2-digit", minute: "2-digit" }),
    actor: actorLabel("Quản lý"),
    title: `Xóa lỗi của ${entry.employeeName}`,
    detail: `${entry.area} • ${entry.type}.`
  });

  saveState();
  renderAll();
  resetEmployeeErrorForm();
}

function renderCatalog() {
  catalogGrid.innerHTML = state.items
    .map((item) => {
      const purchaseSummary = item.purchaseUnits
        .map((unit) => `${unit.label}: ${unit.example}`)
        .join(" | ");

      return `
        <article class="catalog-card">
          <div class="catalog-top">
            <div>
              <h5>${item.name}</h5>
              <p>${item.category}</p>
            </div>
            <span class="catalog-tag">${item.stockUnit}</span>
          </div>
          <div class="catalog-meta">
            <p><strong>Tồn kho đang theo dõi:</strong> ${formatDisplayQuantity(item.onHand, item.stockUnit)}</p>
            <p><strong>Đơn vị nhập quen thuộc:</strong> ${item.purchaseUnits.map((unit) => unit.label).join(", ")}</p>
            <p><strong>Ví dụ quy đổi:</strong> ${purchaseSummary}</p>
          </div>
          <div class="meta-row">
            <span>Mức cảnh báo</span>
            <strong>${formatDisplayQuantity(item.minLevel, item.stockUnit)}</strong>
          </div>
        </article>
      `;
    })
    .join("");
}

function fillCatalogItemOptions() {
  catalogItemSelect.innerHTML = state.items
    .map((item) => `<option value="${item.id}">${item.name}</option>`)
    .join("");
}

function populateCatalogForm() {
  const item = findItem(catalogItemSelect.value);
  if (!item) return;

  catalogNameInput.value = item.name;
  catalogCategoryInput.value = item.category;
  catalogWeightInput.value = item.purchaseUnits[0]?.factor || "";
  catalogOnHandInput.value = item.onHand;
  catalogMinLevelInput.value = item.minLevel;
  catalogUnitOneNameInput.value = item.purchaseUnits[0]?.label || "";
  catalogUnitOneFactorInput.value = item.purchaseUnits[0]?.factor || "";
  catalogUnitOneExampleInput.value = item.purchaseUnits[0]?.example || "";
}

function saveCatalogItem(event) {
  event.preventDefault();

  const item = findItem(catalogItemSelect.value);
  if (!item) return;

  item.name = catalogNameInput.value.trim() || item.name;
  item.category = catalogCategoryInput.value.trim() || item.category;
  item.onHand = Number(catalogOnHandInput.value) || 0;
  item.minLevel = Number(catalogMinLevelInput.value) || 0;
  const weightValue = Number(catalogWeightInput.value) || Number(catalogUnitOneFactorInput.value) || 1;
  const conversionFactor = Number(catalogUnitOneFactorInput.value) || weightValue;
  item.purchaseUnits = [
    {
      label: catalogUnitOneNameInput.value.trim() || "đơn vị 1",
      factor: conversionFactor,
      example: catalogUnitOneExampleInput.value.trim() || `1 ${catalogUnitOneNameInput.value.trim() || "đơn vị"} = ${formatNumber(weightValue)}g`
    }
  ];

  const now = new Date();
  const time = `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;
  state.historyEvents.push({
    time,
    actor: actorLabel("Quản lý"),
    title: `Cập nhật mặt hàng ${item.name}`,
    detail: "Đã chỉnh sửa thông tin mặt hàng trong danh mục hàng hóa."
  });

  fillCatalogItemOptions();
  catalogItemSelect.value = item.id;
  populateCatalogForm();
  saveState();
  renderAll();
}

function deleteCatalogItem() {
  const itemId = catalogItemSelect.value;
  const item = findItem(itemId);
  if (!item || state.items.length === 1) return;
  if (!window.confirm(`Bạn có chắc muốn xóa mặt hàng "${item.name}" không?`)) return;

  state.items = state.items.filter((entry) => entry.id !== itemId);
  state.countEntries = state.countEntries.filter((entry) => entry.itemId !== itemId);

  state.recipeDefinitions = state.recipeDefinitions
    .map((recipe) => ({
      ...recipe,
      ingredients: recipe.ingredients.filter((ingredient) => ingredient.itemId !== itemId)
    }))
    .filter((recipe) => recipe.ingredients.length > 0);

  state.dailySales = state.dailySales.filter((sale) =>
    state.recipeDefinitions.some((recipe) => recipe.id === sale.id)
  );

  const now = new Date();
  const time = `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;
  state.historyEvents.push({
    time,
    actor: actorLabel("Quản lý"),
    title: `Xóa mặt hàng ${item.name}`,
    detail: "Đã xóa mặt hàng này khỏi danh mục và làm sạch dữ liệu liên quan."
  });

  fillCatalogItemOptions();
  fillPurchaseItemOptions();
  fillRecipeItemOptions();

  if (state.items[0]) {
    catalogItemSelect.value = state.items[0].id;
    populateCatalogForm();
    purchaseItemSelect.value = state.items[0].id;
    updatePurchaseUnits();
  }

  saveState();
  renderAll();
}

function renderDashboard() {
  const lowStockItems = state.items.filter((item) => item.onHand <= item.minLevel);
  const countVarianceItems = state.countEntries.filter((entry) => {
    const item = findItem(entry.itemId);
    return item && entry.actual !== item.onHand;
  });
  const unresolvedEmployeeErrors = state.employeeErrors.filter((entry) => entry.status !== "Đã sửa xong");
  const totalSoldQuantity = state.dailySales.reduce((sum, sale) => sum + (Number(sale.quantity) || 0), 0);

  const stats = [
    {
      label: "Tổng mặt hàng đang theo dõi",
      value: `${state.items.length}`,
      meta: "Bao gồm nguyên liệu, đông lạnh và bao bì"
    },
    {
      label: "Mặt hàng sắp hết",
      value: `${lowStockItems.length}`,
      meta: "Nên xem để nhập thêm"
    },
    {
      label: "Dòng chênh lệch kiểm kho",
      value: `${countVarianceItems.length}`,
      meta: "Cần quản lý xem và duyệt"
    },
    {
      label: "Bán trong ngày",
      value: `${formatNumber(totalSoldQuantity)}`,
      meta: "Bấm để cập nhật món bán và tự trừ kho",
      action: "sales-panel"
    },
    {
      label: "Lỗi nhân viên cần xem",
      value: `${unresolvedEmployeeErrors.length}`,
      meta: "Bấm để xem lịch sử lỗi và chỉnh sửa ngay trong tổng quan",
      action: "employee-errors"
    }
  ];

  dashboardStats.innerHTML = stats
    .map(
      (stat) => `
        <${stat.action ? "button" : "article"} class="stat-card ${stat.action ? "action-card" : ""}" ${stat.action ? `type="button" data-dashboard-action="${stat.action}"` : ""}>
          <p class="stat-label">${stat.label}</p>
          <p class="stat-value">${stat.value}</p>
          <p class="stat-meta">${stat.meta}</p>
          ${stat.action ? `<span class="stat-hint">Mở chi tiết</span>` : ""}
        </${stat.action ? "button" : "article"}>
      `
    )
    .join("");

  [...dashboardStats.querySelectorAll("[data-dashboard-action]")].forEach((button) => {
    button.addEventListener("click", () => {
      if (button.dataset.dashboardAction === "employee-errors") {
        changeScreen("dashboard", { showEmployeeErrors: true, activeNav: "dashboard" });
      }
      if (button.dataset.dashboardAction === "sales-panel") {
        changeScreen("dashboard", { showSalesPanel: true, activeNav: "dashboard" });
      }
    });
  });

  const alerts = [
    ...lowStockItems.map((item) => ({
      title: `${item.name} đang sắp hết`,
      detail: `Tồn hiện tại ${formatDisplayQuantity(item.onHand, item.stockUnit)}, mức cảnh báo ${formatDisplayQuantity(item.minLevel, item.stockUnit)}.`,
      tag: "Nên nhập thêm"
    })),
    ...countVarianceItems.slice(0, 3).map((entry) => {
      const item = findItem(entry.itemId);
      const meta = varianceMeta(item.onHand, entry.actual, item.stockUnit);
      return {
        title: `${item.name} đang lệch kho`,
        detail: `Hệ thống ${formatDisplayQuantity(item.onHand, item.stockUnit)}, thực tế ${formatDisplayQuantity(entry.actual, item.stockUnit)}.`,
        tag: meta.diffText
      };
    })
  ];

  dashboardAlerts.innerHTML = alerts
    .map(
      (alert) => `
        <article class="alert-card">
          <h5>${alert.title}</h5>
          <p>${alert.detail}</p>
          <div class="meta-row">
            <span>Ghi chú</span>
            <strong>${alert.tag}</strong>
          </div>
        </article>
      `
    )
    .join("");
}

function fillPurchaseItemOptions() {
  purchaseItemSelect.innerHTML = state.items
    .map((item) => `<option value="${item.id}">${item.name}</option>`)
    .join("");
}

function fillRecipeItemOptions() {
  const currentIngredients = getRecipeFormIngredients();
  recipeIngredientsList.innerHTML = "";
  ingredientRowId = 0;

  if (currentIngredients.length > 0) {
    currentIngredients.forEach((ingredient) => addIngredientRow(ingredient.itemId, ingredient.amount));
    return;
  }

  const defaults = state.items.slice(0, 3);
  defaults.forEach((item, index) => {
    addIngredientRow(item.id, index === 0 ? 80 : 1);
  });
}

function ingredientOptions(selectedValue = "") {
  return state.items
    .map((item) => `<option value="${item.id}" ${item.id === selectedValue ? "selected" : ""}>${item.name}</option>`)
    .join("");
}

function addIngredientRow(defaultItemId = "", defaultAmount = 1) {
  ingredientRowId += 1;
  const row = document.createElement("div");
  row.className = "ingredient-row";
  row.dataset.ingredientRow = String(ingredientRowId);
  row.innerHTML = `
    <label>
      <span>Nguyên liệu</span>
      <select class="recipe-ingredient-item">${ingredientOptions(defaultItemId)}</select>
    </label>
    <label>
      <span>Lượng dùng cho 1 phần</span>
      <input class="recipe-ingredient-amount" type="number" min="0.1" step="0.1" value="${defaultAmount}">
    </label>
    <button type="button" class="secondary-btn ingredient-remove-btn">Xóa dòng</button>
  `;

  recipeIngredientsList.appendChild(row);

  row.querySelector(".recipe-ingredient-item").addEventListener("change", renderRecipePreview);
  row.querySelector(".recipe-ingredient-amount").addEventListener("input", renderRecipePreview);
  row.querySelector(".ingredient-remove-btn").addEventListener("click", () => {
    row.remove();
    renderRecipePreview();
  });
}

function getRecipeFormIngredients() {
  return [...recipeIngredientsList.querySelectorAll(".ingredient-row")]
    .map((row) => {
      const itemId = row.querySelector(".recipe-ingredient-item").value;
      const amount = Number(row.querySelector(".recipe-ingredient-amount").value) || 0;
      return { itemId, amount };
    })
    .filter((ingredient) => ingredient.itemId && ingredient.amount > 0);
}

function updatePurchaseUnits() {
  const item = findItem(purchaseItemSelect.value);
  if (!item) return;

  purchaseUnitSelect.innerHTML = item.purchaseUnits
    .map((unit) => `<option value="${unit.label}">${unit.label}</option>`)
    .join("");

  renderConversionPreview();
}

function renderConversionPreview() {
  const item = findItem(purchaseItemSelect.value);
  if (!item) return;

  const selectedUnit = item.purchaseUnits.find((unit) => unit.label === purchaseUnitSelect.value) || item.purchaseUnits[0];
  const quantity = Number(purchaseQuantityInput.value) || 0;
  const customWeight = Number(purchaseCustomWeightInput.value) || 0;
  const converted = customWeight > 0 ? customWeight : quantity * selectedUnit.factor;
  const currentStock = item.onHand;
  const projectedStock = currentStock + converted;
  const conversionText = customWeight > 0
    ? `${quantity} ${selectedUnit.label} = ${formatDisplayQuantity(customWeight, item.stockUnit)}`
    : `${quantity} ${selectedUnit.label} = ${formatDisplayQuantity(converted, item.stockUnit)}`;
  const helperText = customWeight > 0
    ? "Bạn đã nhập khối lượng thực tế, nên hệ thống sẽ ưu tiên dùng số này để cộng kho."
    : `Nhân viên nhập theo đơn vị quen thuộc, hệ thống tự cộng vào tồn kho chuẩn của ${item.name}.`;

  conversionPreview.innerHTML = `
    <div class="conversion-main">
      <strong>${conversionText}</strong>
      <p>${helperText}</p>
    </div>
    <div class="conversion-steps">
      <div class="conversion-step">
        <strong>Tồn hiện tại</strong>
        <p>${formatDisplayQuantity(currentStock, item.stockUnit)}</p>
      </div>
      <div class="conversion-step">
        <strong>Sau khi nhập xong</strong>
        <p>${formatDisplayQuantity(projectedStock, item.stockUnit)}</p>
      </div>
      <div class="conversion-step">
        <strong>Ví dụ quy đổi</strong>
        <p>${selectedUnit.example}</p>
      </div>
      <div class="conversion-step">
        <strong>Khối lượng thực nhập</strong>
        <p>${customWeight > 0 ? formatDisplayQuantity(customWeight, item.stockUnit) : "Chưa nhập, đang dùng quy đổi mặc định"}</p>
      </div>
      <div class="conversion-step">
        <strong>Đơn giá phiếu mẫu</strong>
        <p>${formatCurrency(Number(purchasePriceInput.value) || 0)}</p>
      </div>
    </div>
  `;
}

function renderPurchaseLog() {
  const selectedDate = purchaseHistoryDateInput.value || "2026-03-20";
  const filteredEntries = state.purchaseLog.filter((entry) => entry.date === selectedDate);
  const totalConverted = filteredEntries.reduce((sum, entry) => sum + entry.quantity * entry.factor, 0);

  purchaseHistorySummary.innerHTML = filteredEntries.length > 0
    ? `Ngày ${formatDateDisplay(selectedDate)} có <strong>${filteredEntries.length}</strong> phiếu nhập, tổng cộng <strong>${formatDisplayQuantity(totalConverted, "g")}</strong>.`
    : `Ngày ${formatDateDisplay(selectedDate)} hiện chưa có phiếu nhập nào.`;

  purchaseLogBody.innerHTML = filteredEntries
    .slice()
    .reverse()
    .map((entry) => {
      const item = findItem(entry.itemId);
      const converted = entry.quantity * entry.factor;
      return `
        <tr>
          <td>${formatDateDisplay(entry.date)}</td>
          <td>${entry.time}</td>
          <td>${item.name}</td>
          <td>${entry.quantity} ${entry.unit}</td>
          <td>${formatDisplayQuantity(converted, item.stockUnit)}</td>
          <td>${formatCurrency(entry.price)}</td>
          <td>${entry.supplier}</td>
        </tr>
      `;
    })
    .join("");
}

function renderRecipePreview() {
  const ingredients = getRecipeFormIngredients();
  const salesQuantity = Number(recipeSaleQuantityInput.value) || 0;

  recipePreview.innerHTML = `
    <div class="conversion-main">
      <strong>${recipeNameInput.value || "Món mới"}</strong>
      <p>Đây là phần xem nhanh món này sẽ dùng nguyên liệu gì cho mỗi phần bán ra.</p>
    </div>
    <div class="conversion-steps">
      ${ingredients
        .map((ingredient) => {
          const item = findItem(ingredient.itemId);
          return `
            <div class="conversion-step">
              <strong>${item.name}</strong>
              <p>Dùng ${formatDisplayQuantity(ingredient.amount, item.stockUnit)} cho 1 phần.</p>
              <p>Nếu bán ${salesQuantity} phần thì sẽ trừ ${formatDisplayQuantity(ingredient.amount * salesQuantity, item.stockUnit)}.</p>
            </div>
          `;
        })
        .join("")}
    </div>
  `;
}

function renderRecipeTable() {
  recipeTable.innerHTML = state.recipeDefinitions
    .map((recipe) => {
      const ingredientText = recipe.ingredients
        .map((ingredient) => {
          const item = findItem(ingredient.itemId);
          return `${item.name}: ${formatDisplayQuantity(ingredient.amount, item.stockUnit)}`;
        })
        .join(" | ");

      const deductedText = recipe.ingredients
        .map((ingredient) => {
          const item = findItem(ingredient.itemId);
          return `${item.name}: ${formatDisplayQuantity(ingredient.amount * recipe.sampleSalesQuantity, item.stockUnit)}`;
        })
        .join(" | ");

      return `
        <tr>
          <td>${recipe.name}</td>
          <td>${ingredientText}</td>
          <td>${formatNumber(recipe.sampleSalesQuantity)} phần</td>
          <td>${deductedText}</td>
          <td><button type="button" class="danger-btn" data-delete-recipe="${recipe.id}">Xóa món</button></td>
        </tr>
      `;
    })
    .join("");

  [...document.querySelectorAll("[data-delete-recipe]")].forEach((button) => {
    button.addEventListener("click", () => {
      deleteRecipe(button.dataset.deleteRecipe);
    });
  });
}

function renderCountTable() {
  countTable.innerHTML = state.countEntries
    .map((entry) => {
      const item = findItem(entry.itemId);
      const meta = varianceMeta(item.onHand, entry.actual, item.stockUnit);
      return `
        <tr>
          <td>${item.name}</td>
          <td>${formatDisplayQuantity(item.onHand, item.stockUnit)}</td>
          <td>
            <input class="count-input" type="number" min="0" step="1" value="${entry.actual}" data-count-input="${entry.itemId}">
          </td>
          <td data-variance-text="${entry.itemId}">${meta.diffText}</td>
          <td><span class="badge ${meta.badgeClass}" data-variance-badge="${entry.itemId}">${meta.label}</span></td>
        </tr>
      `;
    })
    .join("");

  [...document.querySelectorAll("[data-count-input]")].forEach((input) => {
    input.addEventListener("input", (event) => {
      const itemId = event.currentTarget.dataset.countInput;
      const entry = state.countEntries.find((countEntry) => countEntry.itemId === itemId);
      entry.actual = Number(event.currentTarget.value) || 0;
      updateVarianceRow(itemId);
      renderDashboard();
      renderReport();
    });
  });
}

function updateVarianceRow(itemId) {
  const item = findItem(itemId);
  const entry = state.countEntries.find((countEntry) => countEntry.itemId === itemId);
  const meta = varianceMeta(item.onHand, entry.actual, item.stockUnit);
  document.querySelector(`[data-variance-text="${itemId}"]`).textContent = meta.diffText;
  const badge = document.querySelector(`[data-variance-badge="${itemId}"]`);
  badge.textContent = meta.label;
  badge.className = `badge ${meta.badgeClass}`;
}

function renderReport() {
  const lowStockItems = state.items.filter((item) => item.onHand <= item.minLevel);
  const healthyItems = state.items.filter((item) => item.onHand > item.minLevel);

  lowStockList.innerHTML = lowStockItems
    .map(
      (item) => `
        <article class="mini-card">
          <h5>${item.name}</h5>
          <p>Tồn hiện tại: <strong>${formatDisplayQuantity(item.onHand, item.stockUnit)}</strong></p>
          <p>Mức cảnh báo: ${formatDisplayQuantity(item.minLevel, item.stockUnit)}</p>
        </article>
      `
    )
    .join("");

  healthyStockList.innerHTML = healthyItems
    .slice(0, 5)
    .map(
      (item) => `
        <article class="mini-card">
          <h5>${item.name}</h5>
          <p>Tồn hiện tại: <strong>${formatDisplayQuantity(item.onHand, item.stockUnit)}</strong></p>
          <p>Số lượng này đang ở mức an toàn để tiếp tục bán.</p>
        </article>
      `
    )
    .join("");
}

function getConsumptionSummary() {
  const totals = new Map();

  state.dailySales.forEach((sale) => {
    const recipe = state.recipeDefinitions.find((recipeItem) => recipeItem.id === sale.id);
    const ingredients = recipe ? recipe.ingredients : [];
    const appliedQuantity = Number(sale.appliedQuantity) || 0;

    ingredients.forEach((ingredient) => {
      const current = totals.get(ingredient.itemId) || 0;
      totals.set(ingredient.itemId, current + ingredient.amount * appliedQuantity);
    });
  });

  return [...totals.entries()].map(([itemId, amount]) => ({ itemId, amount }));
}

function renderSalesStats() {
  salesTable.innerHTML = state.dailySales
    .map((sale) => `
      <tr>
        <td>${sale.name}</td>
        <td><input class="count-input sales-inline-input" type="number" min="0" step="1" value="${sale.quantity}" data-sales-quantity="${sale.id}"></td>
        <td>${formatNumber(sale.appliedQuantity || 0)} món</td>
        <td>${formatCurrency(sale.price)}</td>
        <td>${formatCurrency(sale.quantity * sale.price)}</td>
        <td><input class="count-input sales-note-input" type="text" value="${sale.note || ""}" data-sales-note="${sale.id}"></td>
      </tr>
    `)
    .join("");

  const consumptionSummary = getConsumptionSummary();

  consumptionTable.innerHTML = consumptionSummary
    .map(({ itemId, amount }) => {
      const item = findItem(itemId);
      const remain = item.onHand - amount;
      return `
        <tr>
          <td>${item.name}</td>
          <td>${formatDisplayQuantity(amount, item.stockUnit)}</td>
          <td>${formatDisplayQuantity(item.onHand, item.stockUnit)}</td>
          <td>${formatDisplayQuantity(remain, item.stockUnit)}</td>
        </tr>
      `;
    })
    .join("");

  const totalSales = state.dailySales.reduce((sum, sale) => sum + (Number(sale.quantity) || 0), 0);
  const totalAppliedSales = state.dailySales.reduce((sum, sale) => sum + (Number(sale.appliedQuantity) || 0), 0);
  setSalesSyncStatus(
    `Hôm nay đang ghi ${formatNumber(totalSales)} món bán ra. Kho hiện đã được khấu trừ theo ${formatNumber(totalAppliedSales)} món đã lưu.`,
    totalSales === totalAppliedSales ? "good" : ""
  );
}

function saveDailySalesUpdates() {
  const quantityInputs = [...document.querySelectorAll("[data-sales-quantity]")];
  const noteInputs = [...document.querySelectorAll("[data-sales-note]")];
  const nextValues = new Map();
  const noteValues = new Map();
  const stockAdjustments = new Map();
  const blockingItems = [];

  quantityInputs.forEach((input) => {
    nextValues.set(input.dataset.salesQuantity, Number(input.value) || 0);
  });

  noteInputs.forEach((input) => {
    noteValues.set(input.dataset.salesNote, input.value.trim());
  });

  state.dailySales.forEach((sale) => {
    const nextQuantity = nextValues.get(sale.id) ?? sale.quantity;
    const appliedQuantity = Number(sale.appliedQuantity) || 0;
    const deltaQuantity = nextQuantity - appliedQuantity;
    const recipe = state.recipeDefinitions.find((recipeItem) => recipeItem.id === sale.id);

    if (deltaQuantity !== 0 && (!recipe || recipe.ingredients.length === 0)) {
      blockingItems.push(`${sale.name} chưa có công thức nên chưa thể tự trừ kho.`);
      return;
    }

    if (recipe) {
      recipe.ingredients.forEach((ingredient) => {
        const current = stockAdjustments.get(ingredient.itemId) || 0;
        stockAdjustments.set(ingredient.itemId, current + ingredient.amount * deltaQuantity);
      });
    }
  });

  if (blockingItems.length > 0) {
    setSalesSyncStatus(blockingItems.join(" "), "danger");
    window.alert(blockingItems.join("\n"));
    return;
  }

  stockAdjustments.forEach((deductionAmount, itemId) => {
    const item = findItem(itemId);
    if (!item) return;
    const projectedStock = item.onHand - deductionAmount;
    if (projectedStock < 0) {
      blockingItems.push(`${item.name} không đủ tồn kho để khấu trừ thêm ${formatDisplayQuantity(deductionAmount, item.stockUnit)}.`);
    }
  });

  if (blockingItems.length > 0) {
    setSalesSyncStatus(blockingItems.join(" "), "danger");
    window.alert(blockingItems.join("\n"));
    return;
  }

  let changedSales = 0;

  state.dailySales.forEach((sale) => {
    const nextQuantity = nextValues.get(sale.id) ?? sale.quantity;
    const nextNote = noteValues.get(sale.id) ?? sale.note;
    if (sale.quantity !== nextQuantity || sale.note !== nextNote || (sale.appliedQuantity || 0) !== nextQuantity) {
      changedSales += 1;
    }
    sale.quantity = nextQuantity;
    sale.note = nextNote;
    sale.appliedQuantity = nextQuantity;
  });

  stockAdjustments.forEach((deductionAmount, itemId) => {
    const item = findItem(itemId);
    if (item) {
      item.onHand -= deductionAmount;
    }
  });

  const totalAdjustedItems = [...stockAdjustments.values()].filter((value) => value !== 0).length;
  const time = new Date().toLocaleTimeString("vi-VN", { hour: "2-digit", minute: "2-digit" });
  state.historyEvents.push({
    time,
    actor: actorLabel("Nhân viên bán hàng"),
    title: "Cập nhật bán trong ngày",
    detail: `Đã lưu ${changedSales} món bán và tự khấu trừ kho cho ${totalAdjustedItems} nguyên liệu theo công thức món.`
  });

  saveState();
  renderAll();
  setSalesSyncStatus(
    `Đã lưu bán trong ngày và tự trừ kho thành công lúc ${time}. Tồn kho hiện đã phản ánh đúng số món bán vừa cập nhật.`,
    "good"
  );
}

function saveRecipe(event) {
  event.preventDefault();

  const name = recipeNameInput.value.trim() || "Món mới";
  const id = name
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

  const ingredients = getRecipeFormIngredients();

  if (ingredients.length === 0) {
    renderRecipePreview();
    return;
  }

  const sampleSalesQuantity = Number(recipeSaleQuantityInput.value) || 0;
  const existingRecipe = state.recipeDefinitions.find((recipe) => recipe.id === id);
  const existingSale = state.dailySales.find((sale) => sale.id === id);

  if (existingRecipe) {
    existingRecipe.name = name;
    existingRecipe.sampleSalesQuantity = sampleSalesQuantity;
    existingRecipe.ingredients = ingredients;
    if (existingSale) {
      existingSale.name = name;
    }
  } else {
    state.recipeDefinitions.push({
      id,
      name,
      sampleSalesQuantity,
      ingredients
    });

    state.dailySales.push({
      id,
      name,
      quantity: sampleSalesQuantity,
      appliedQuantity: 0,
      price: 0,
      note: "Món mới vừa thêm công thức"
    });
  }

  const now = new Date();
  const time = `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;
  state.historyEvents.push({
    time,
    actor: actorLabel("Quản lý"),
    title: `Lưu công thức ${name}`,
    detail: `Đã khai báo ${ingredients.length} nguyên liệu cho món này để hệ thống khấu trừ tồn kho khi bán ra.`
  });

  saveState();
  renderAll();
}

function deleteRecipe(recipeId) {
  const recipe = state.recipeDefinitions.find((item) => item.id === recipeId);
  if (!recipe) return;
  if (!window.confirm(`Bạn có chắc muốn xóa món "${recipe.name}" không?`)) return;

  state.recipeDefinitions = state.recipeDefinitions.filter((item) => item.id !== recipeId);
  state.dailySales = state.dailySales.filter((sale) => sale.id !== recipeId);

  const now = new Date();
  const time = `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;
  state.historyEvents.push({
    time,
    actor: actorLabel("Quản lý"),
    title: `Xóa công thức ${recipe.name}`,
    detail: "Đã xóa món ăn này khỏi danh sách công thức và phần bán trong ngày."
  });

  saveState();
  renderAll();
}

function resetCatalogForm() {
  populateCatalogForm();
}

function exportData() {
  const blob = new Blob([
    JSON.stringify({
      items: state.items,
      purchaseLog: state.purchaseLog,
      countEntries: state.countEntries,
      historyEvents: state.historyEvents,
      dailySales: state.dailySales,
      recipeDefinitions: state.recipeDefinitions,
      employeeErrors: state.employeeErrors,
      users: state.users,
      currentUserId: state.currentUserId
    }, null, 2)
  ], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `du-lieu-kho-${new Date().toISOString().slice(0, 10)}.json`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function importData(event) {
  const file = event.target.files?.[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = () => {
    try {
      const parsed = JSON.parse(String(reader.result));
      replaceState({
        items: Array.isArray(parsed.items) ? parsed.items : structuredClone(DEFAULT_ITEMS),
        purchaseLog: Array.isArray(parsed.purchaseLog) ? parsed.purchaseLog : [],
        countEntries: Array.isArray(parsed.countEntries) ? parsed.countEntries : [],
        historyEvents: Array.isArray(parsed.historyEvents) ? parsed.historyEvents : [],
        dailySales: Array.isArray(parsed.dailySales) ? parsed.dailySales : [],
        recipeDefinitions: Array.isArray(parsed.recipeDefinitions) ? parsed.recipeDefinitions : [],
        employeeErrors: Array.isArray(parsed.employeeErrors) ? parsed.employeeErrors : structuredClone(DEFAULT_EMPLOYEE_ERRORS),
        users: Array.isArray(parsed.users) ? parsed.users : state.users,
        currentUserId: typeof parsed.currentUserId === "string" ? parsed.currentUserId : state.currentUserId
      });

      fillCatalogItemOptions();
      fillPurchaseItemOptions();
      fillRecipeItemOptions();

      if (state.items[0]) {
        catalogItemSelect.value = state.items[0].id;
        purchaseItemSelect.value = state.items[0].id;
        populateCatalogForm();
        updatePurchaseUnits();
      }

      renderAll();
      renderAuthState();
    } catch {
      window.alert("File dữ liệu không hợp lệ.");
    }

    importDataInput.value = "";
  };

  reader.readAsText(file, "utf-8");
}

function resetData() {
  if (!window.confirm("Bạn có chắc muốn khôi phục toàn bộ dữ liệu mẫu không?")) return;
  const defaults = buildDefaultState();
  defaults.users = structuredClone(state.users);
  defaults.currentUserId = state.currentUserId;
  replaceState(defaults);
  fillCatalogItemOptions();
  fillPurchaseItemOptions();
  fillRecipeItemOptions();

  if (state.items[0]) {
    catalogItemSelect.value = state.items[0].id;
    purchaseItemSelect.value = state.items[0].id;
    populateCatalogForm();
    updatePurchaseUnits();
  }

  renderAll();
  renderAuthState();
}

function renderHistory() {
  historyList.innerHTML = state.historyEvents
    .slice()
    .reverse()
    .map(
      (event) => `
        <article class="timeline-item">
          <p class="timeline-meta">${event.time} • ${event.actor}</p>
          <h5>${event.title}</h5>
          <p>${event.detail}</p>
        </article>
      `
    )
    .join("");
}

function changeScreen(screenName, options = {}) {
  const effectiveScreen = screenName === "employee-errors" ? "dashboard" : screenName;
  const activeNav = options.activeNav || (screenName === "employee-errors" ? "dashboard" : screenName);

  navButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.screen === activeNav);
  });

  screenPanels.forEach((panel) => {
    panel.classList.toggle("is-visible", panel.dataset.screenPanel === effectiveScreen);
  });

  const shouldShowErrors = screenName === "employee-errors" || options.showEmployeeErrors;
  const shouldShowSales = options.showSalesPanel;

  if (shouldShowErrors) {
    showDashboardErrors(options.scrollToErrors !== false);
    hideDashboardSales();
    return;
  }

  if (shouldShowSales) {
    showDashboardSales(options.scrollToSales !== false);
    hideDashboardErrors();
    return;
  }

  hideDashboardErrors();
  hideDashboardSales();
}

function addPurchaseEntry(event) {
  event.preventDefault();

  const item = findItem(purchaseItemSelect.value);
  const selectedUnit = item.purchaseUnits.find((unit) => unit.label === purchaseUnitSelect.value) || item.purchaseUnits[0];
  const quantity = Number(purchaseQuantityInput.value) || 0;
  const price = Number(purchasePriceInput.value) || 0;
  const supplier = purchaseSupplierInput.value.trim() || "Nhà cung cấp quen";
  const customWeight = Number(purchaseCustomWeightInput.value) || 0;
  const converted = customWeight > 0 ? customWeight : quantity * selectedUnit.factor;

  item.onHand += converted;

  const now = new Date();
  const date = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;
  const time = `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;
  state.purchaseLog.push({
    date,
    time,
    itemId: item.id,
    unit: selectedUnit.label,
    quantity,
    factor: selectedUnit.factor,
    price,
    supplier
  });

  state.historyEvents.push({
    time,
    actor: actorLabel("Nhân viên kho"),
    title: `Thêm phiếu nhập ${item.name}`,
    detail: `Nhập ${quantity} ${selectedUnit.label} và hệ thống tự cộng ${formatDisplayQuantity(converted, item.stockUnit)} vào tồn kho.`
  });

  saveState();
  renderAll();
}

function approveAdjustments() {
  const now = new Date();
  const time = `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;
  let changedCount = 0;

  state.countEntries.forEach((entry) => {
    const item = findItem(entry.itemId);
    if (item.onHand !== entry.actual) {
      item.onHand = entry.actual;
      changedCount += 1;
    }
  });

  if (changedCount > 0) {
    state.historyEvents.push({
      time,
      actor: actorLabel("Quản lý"),
      title: "Duyệt điều chỉnh tồn kho",
      detail: `Đã duyệt ${changedCount} dòng chênh lệch sau khi kiểm kho cuối ngày.`
    });
  }

  saveState();
  renderAll();
}

function renderAll() {
  fillCatalogItemOptions();
  renderCatalog();
  renderDashboard();
  renderAccountList();
  renderConversionPreview();
  renderPurchaseLog();
  renderRecipePreview();
  renderRecipeTable();
  renderCountTable();
  renderSalesStats();
  renderEmployeeErrors();
  renderReport();
  renderHistory();
}

navButtons.forEach((button) => {
  button.addEventListener("click", () => changeScreen(button.dataset.screen));
});

loginForm.addEventListener("submit", login);
registerForm.addEventListener("submit", createOwnerAccount);
logoutButton.addEventListener("click", logout);
hideDashboardErrorsButton.addEventListener("click", () => changeScreen("dashboard", { activeNav: "dashboard" }));
hideDashboardSalesButton.addEventListener("click", () => changeScreen("dashboard", { activeNav: "dashboard" }));
accountForm.addEventListener("submit", createManagedAccount);
catalogItemSelect.addEventListener("change", populateCatalogForm);
purchaseItemSelect.addEventListener("change", updatePurchaseUnits);
purchaseUnitSelect.addEventListener("change", renderConversionPreview);
purchaseQuantityInput.addEventListener("input", renderConversionPreview);
purchaseCustomWeightInput.addEventListener("input", renderConversionPreview);
purchasePriceInput.addEventListener("input", renderConversionPreview);
document.getElementById("catalog-form").addEventListener("submit", saveCatalogItem);
resetCatalogFormButton.addEventListener("click", resetCatalogForm);
deleteCatalogItemButton.addEventListener("click", deleteCatalogItem);
document.getElementById("purchase-form").addEventListener("submit", addPurchaseEntry);
purchaseHistoryDateInput.addEventListener("change", renderPurchaseLog);
document.getElementById("recipe-form").addEventListener("submit", saveRecipe);
document.getElementById("approve-adjustments").addEventListener("click", approveAdjustments);
employeeErrorSelect.addEventListener("change", populateEmployeeErrorForm);
employeeErrorForm.addEventListener("submit", saveEmployeeError);
resetErrorFormButton.addEventListener("click", resetEmployeeErrorForm);
deleteErrorButton.addEventListener("click", deleteEmployeeError);
saveSalesUpdatesButton.addEventListener("click", saveDailySalesUpdates);
exportDataButton.addEventListener("click", exportData);
importDataInput.addEventListener("change", importData);
resetDataButton.addEventListener("click", resetData);
addIngredientRowButton.addEventListener("click", () => {
  addIngredientRow(state.items[0]?.id || "", 1);
  renderRecipePreview();
});

[
  recipeNameInput,
  recipeSaleQuantityInput
].forEach((element) => {
  element.addEventListener("input", renderRecipePreview);
  element.addEventListener("change", renderRecipePreview);
});

fillPurchaseItemOptions();
fillRecipeItemOptions();
updatePurchaseUnits();
purchaseHistoryDateInput.value = state.purchaseLog[0]?.date || "2026-03-20";
populateCatalogForm();
resetEmployeeErrorForm();
saveState();
renderAuthState();
renderAll();
