const catalog = [
  { id: "moon-6", name: "月光白晶", group: "白色", size: 6, price: 5, swatch: "linear-gradient(135deg,#ffffff,#dce1e8 58%,#f8fafc)" },
  { id: "moon-8", name: "月光白晶", group: "白色", size: 8, price: 6, swatch: "linear-gradient(135deg,#ffffff,#cfd5df 58%,#f8fafc)" },
  { id: "moon-10", name: "月光白晶", group: "白色", size: 10, price: 8, swatch: "linear-gradient(135deg,#f4f7fa,#bfc7d2 58%,#ffffff)" },
  { id: "clear-8", name: "冰透白晶", group: "白色", size: 8, price: 7, swatch: "linear-gradient(135deg,#fbfdff,#e6edf4 50%,#ffffff)" },
  { id: "clear-10", name: "冰透白晶", group: "白色", size: 10, price: 8, swatch: "linear-gradient(135deg,#fbfdff,#dbe4ed 50%,#ffffff)" },
  { id: "clear-12", name: "冰透白晶", group: "白色", size: 12, price: 11, swatch: "linear-gradient(135deg,#ffffff,#c9d4df 55%,#f7fbff)" },
  { id: "rose-6", name: "柔粉晶", group: "红色", size: 6, price: 5, swatch: "linear-gradient(135deg,#feeaf1,#e3a8bd 56%,#fff7fa)" },
  { id: "rose-8", name: "柔粉晶", group: "红色", size: 8, price: 7, swatch: "linear-gradient(135deg,#fde4ed,#d894ad 56%,#fff7fa)" },
  { id: "rose-10", name: "玫瑰星尘", group: "红色", size: 10, price: 9, swatch: "linear-gradient(135deg,#f7d3e1,#b57394 58%,#fff)" },
  { id: "rose-12", name: "玫瑰星尘", group: "红色", size: 12, price: 12, swatch: "linear-gradient(135deg,#ecc2d3,#9f607f 58%,#fff)" },
  { id: "amethyst-6", name: "淡紫晶", group: "紫色", size: 6, price: 6, swatch: "linear-gradient(135deg,#f4edff,#aa94c2 58%,#fbf7ff)" },
  { id: "amethyst-8", name: "淡紫晶", group: "紫色", size: 8, price: 8, swatch: "linear-gradient(135deg,#eee5fb,#8c76a8 58%,#f8f3ff)" },
  { id: "amethyst-10", name: "淡紫晶", group: "紫色", size: 10, price: 10, swatch: "linear-gradient(135deg,#d9cbeb,#735d91 58%,#f8f3ff)" },
  { id: "amethyst-12", name: "深紫晶", group: "紫色", size: 12, price: 13, swatch: "linear-gradient(135deg,#c9b1de,#5f4a79 62%,#f7efff)" },
  { id: "obsidian-8", name: "黑曜石", group: "黑色", size: 8, price: 7, swatch: "linear-gradient(135deg,#535962,#15171d 62%,#8a909a)" },
  { id: "obsidian-10", name: "黑曜石", group: "黑色", size: 10, price: 8, swatch: "linear-gradient(135deg,#444952,#111319 62%,#8a909a)" },
  { id: "obsidian-12", name: "黑曜石", group: "黑色", size: 12, price: 11, swatch: "linear-gradient(135deg,#343943,#090b0f 62%,#777e88)" },
  { id: "lapis-8", name: "青金星点", group: "黑色", size: 8, price: 9, swatch: "linear-gradient(135deg,#32456d,#10182d 58%,#b7a35f)" },
  { id: "green-6", name: "绿幽光", group: "绿色", size: 6, price: 5, swatch: "linear-gradient(135deg,#d8eadc,#789a81 60%,#ffffff)" },
  { id: "green-8", name: "绿幽光", group: "绿色", size: 8, price: 7, swatch: "linear-gradient(135deg,#cce5d2,#648971 60%,#ffffff)" },
  { id: "green-10", name: "苔原绿晶", group: "绿色", size: 10, price: 9, swatch: "linear-gradient(135deg,#bfd8c4,#4f715c 60%,#edf7ef)" },
  { id: "citrine-6", name: "浅黄晶", group: "黄色", size: 6, price: 5, swatch: "linear-gradient(135deg,#fff7d8,#e4c974 58%,#fffdf2)" },
  { id: "citrine-8", name: "浅黄晶", group: "黄色", size: 8, price: 7, swatch: "linear-gradient(135deg,#fff4c7,#d9b852 58%,#fffdf2)" },
  { id: "citrine-10", name: "蜜黄晶", group: "黄色", size: 10, price: 10, swatch: "linear-gradient(135deg,#ffe8a2,#b99236 58%,#fff8de)" }
];

const state = {
  wristCm: 15.5,
  activeGroup: "白色",
  dragging: null,
  beads: []
};

const els = {
  homeView: document.querySelector("#homeView"),
  designerView: document.querySelector("#designerView"),
  sizeModal: document.querySelector("#sizeModal"),
  heroCanvas: document.querySelector("#heroCanvas"),
  catalogGroups: document.querySelector("#catalogGroups"),
  colorTabs: document.querySelector("#colorTabs"),
  activeGroupLabel: document.querySelector("#activeGroupLabel"),
  wristInput: document.querySelector("#wristInput"),
  finishedSizeText: document.querySelector("#finishedSizeText"),
  totalPrice: document.querySelector("#totalPrice"),
  remainingLength: document.querySelector("#remainingLength"),
  beadCount: document.querySelector("#beadCount"),
  braceletRing: document.querySelector("#braceletRing"),
  emptyState: document.querySelector("#emptyState"),
  trashZone: document.querySelector("#trashZone"),
  codePanel: document.querySelector("#codePanel"),
  generatedCode: document.querySelector("#generatedCode"),
  warningText: document.querySelector("#warningText"),
  toastMessage: document.querySelector("#toastMessage"),
  galleryDrawer: document.querySelector("#galleryDrawer"),
  designCodeModal: document.querySelector("#designCodeModal"),
  codeDialogTitle: document.querySelector("#codeDialogTitle"),
  codeDialogEyebrow: document.querySelector("#codeDialogEyebrow"),
  savedCodeView: document.querySelector("#savedCodeView"),
  loadCodeView: document.querySelector("#loadCodeView"),
  savedCodeText: document.querySelector("#savedCodeText"),
  loadCodeText: document.querySelector("#loadCodeText"),
  savedCodeHint: document.querySelector("#savedCodeHint"),
  loadCodeHint: document.querySelector("#loadCodeHint")
};

function finishedCm() {
  return Number((state.wristCm + 0.8).toFixed(1));
}

function usedCm() {
  return state.beads.reduce((sum, bead) => sum + bead.size / 10, 0);
}

function totalPrice() {
  return state.beads.reduce((sum, bead) => sum + bead.price, 0);
}

function renderCatalog() {
  const groups = catalog.reduce((acc, item) => {
    acc[item.group] ||= [];
    acc[item.group].push(item);
    return acc;
  }, {});

  const groupNames = Object.keys(groups);
  if (!groups[state.activeGroup]) state.activeGroup = groupNames[0];

  els.colorTabs.innerHTML = groupNames.map(group => `
    <button class="color-tab ${group === state.activeGroup ? "active" : ""}" type="button" data-group="${group}">
      <span>${group}</span>
    </button>
  `).join("");

  els.activeGroupLabel.textContent = state.activeGroup;
  const items = groups[state.activeGroup] || [];
  els.catalogGroups.innerHTML = `
    <section class="catalog-group active">
      <div class="sku-grid">
        ${items.map(item => `
          <button class="sku-card" type="button" data-sku="${item.id}" aria-label="添加 ${item.name}">
            <span class="sku-swatch" style="--swatch:${item.swatch}"></span>
            <strong>${item.name}</strong>
            <span>${item.size}mm · ¥${item.price}/颗</span>
          </button>
        `).join("")}
      </div>
    </section>
  `;
}

function renderBracelet(previousRects = null) {
  els.braceletRing.querySelectorAll(".preview-bead").forEach(node => node.remove());
  els.emptyState.hidden = state.beads.length > 0;

  const visualBeads = state.beads;
  const count = visualBeads.length;
  const ringSize = els.braceletRing.getBoundingClientRect().width || 420;
  const layout = getBeadLayout(visualBeads, ringSize);
  els.braceletRing.style.setProperty("--ring-guide-inset", `${50 - layout.guideRadiusPct}%`);
  visualBeads.forEach((bead, index) => {
    const node = document.createElement("div");
    const position = layout.positions[index];
    const size = layout.sizes[index];
    const isDragging = state.dragging?.instanceId === bead.instanceId;
    const x = isDragging && state.dragging.pointerPct ? state.dragging.pointerPct.x : position.x;
    const y = isDragging && state.dragging.pointerPct ? state.dragging.pointerPct.y : position.y;
    node.className = `preview-bead${isDragging ? " dragging" : ""}`;
    node.dataset.index = String(state.beads.findIndex(item => item.instanceId === bead.instanceId));
    node.dataset.instanceId = bead.instanceId;
    node.style.left = `${x}%`;
    node.style.top = `${y}%`;
    node.style.setProperty("--bead-size", `${size}px`);
    node.style.setProperty("--swatch", bead.swatch);
    node.title = `${bead.name} ${bead.size}mm`;
    els.braceletRing.appendChild(node);
  });

  if (previousRects) {
    animateBeadsFrom(previousRects);
  }
}

function captureBeadRects() {
  const rects = new Map();
  els.braceletRing.querySelectorAll(".preview-bead").forEach(node => {
    rects.set(node.dataset.instanceId, node.getBoundingClientRect());
  });
  return rects;
}

function animateBeadsFrom(previousRects) {
  requestAnimationFrame(() => {
    els.braceletRing.querySelectorAll(".preview-bead").forEach(node => {
      const previous = previousRects.get(node.dataset.instanceId);
      if (!previous) return;

      const current = node.getBoundingClientRect();
      const deltaX = previous.left - current.left;
      const deltaY = previous.top - current.top;
      if (Math.abs(deltaX) < 1 && Math.abs(deltaY) < 1) return;

      node.animate(
        [
          { transform: `translate(calc(-50% + ${deltaX}px), calc(-50% + ${deltaY}px))` },
          { transform: "translate(-50%, -50%)" }
        ],
        { duration: 260, easing: "cubic-bezier(.2,.8,.2,1)" }
      );
    });
  });
}

function getBeadPosition(angle, guideRadiusPct) {
  return {
    x: 50 + Math.cos(angle) * guideRadiusPct,
    y: 50 + Math.sin(angle) * guideRadiusPct
  };
}

function getBeadLayout(beads, ringSize) {
  const baseSizes = beads.map(bead => getBeadDisplaySize(bead, beads.length, ringSize));
  const defaultGuideRadiusPct = 37;
  if (!isNearFinished()) {
    return {
      guideRadiusPct: defaultGuideRadiusPct,
      positions: beads.map((_, index) => getEvenBeadPosition(index, beads.length, defaultGuideRadiusPct)),
      sizes: baseSizes
    };
  }

  const tangentLayout = getClosedTangentLayout(baseSizes, ringSize);
  const guideRadiusPct = (tangentLayout.guideRadiusPx / ringSize) * 100;
  let angle = -Math.PI / 2;
  const positions = tangentLayout.sizes.map((size, index) => {
    if (index > 0) {
      const prevSize = tangentLayout.sizes[index - 1];
      angle += getTangentAngleStep(prevSize, size, tangentLayout.guideRadiusPx);
    }
    return getBeadPosition(angle, guideRadiusPct);
  });

  return { guideRadiusPct, positions, sizes: tangentLayout.sizes };
}

function getEvenBeadPosition(index, count, guideRadiusPct) {
  const angle = count === 1 ? -Math.PI / 2 : -Math.PI / 2 + (Math.PI * 2 / count) * index;
  return getBeadPosition(angle, guideRadiusPct);
}

function isNearFinished() {
  return finishedCm() - usedCm() <= 0.5;
}

function getClosedTangentLayout(baseSizes, ringSize) {
  if (baseSizes.length <= 1) {
    return { guideRadiusPx: ringSize * 0.37, sizes: baseSizes };
  }

  const availableOuterRadius = (ringSize / 2) - 4;
  let sizes = [...baseSizes];
  let guideRadiusPx = solveTangentGuideRadius(sizes);

  const largestRadius = Math.max(...sizes) / 2;
  const requiredOuterRadius = guideRadiusPx + largestRadius;
  if (requiredOuterRadius > availableOuterRadius) {
    const scale = Math.max(0.52, (availableOuterRadius / requiredOuterRadius) * 0.995);
    sizes = sizes.map(size => size * scale);
    guideRadiusPx = solveTangentGuideRadius(sizes);
  }

  return { guideRadiusPx, sizes };
}

function solveTangentGuideRadius(sizes) {
  const largestPairDistance = sizes.reduce((max, size, index) => {
    const nextSize = sizes[(index + 1) % sizes.length];
    return Math.max(max, (size / 2) + (nextSize / 2));
  }, 0);

  let low = (largestPairDistance / 2) + 0.001;
  let high = Math.max(low * 1.2, largestPairDistance);

  while (getTangentAngleSum(sizes, high) > Math.PI * 2) {
    high *= 1.35;
  }

  for (let i = 0; i < 42; i += 1) {
    const mid = (low + high) / 2;
    if (getTangentAngleSum(sizes, mid) > Math.PI * 2) {
      low = mid;
    } else {
      high = mid;
    }
  }

  return high;
}

function getTangentAngleSum(sizes, guideRadiusPx) {
  return sizes.reduce((sum, size, index) => {
    const nextSize = sizes[(index + 1) % sizes.length];
    return sum + getTangentAngleStep(size, nextSize, guideRadiusPx);
  }, 0);
}

function getTangentAngleStep(sizeA, sizeB, guideRadiusPx) {
  const centerDistance = (sizeA / 2) + (sizeB / 2);
  const ratio = Math.min(1, centerDistance / (guideRadiusPx * 2));
  return 2 * Math.asin(ratio);
}

function getBeadDisplaySize(bead, count, ringSize) {
  const guideRadiusPx = ringSize * 0.37;
  const pxPerCm = (Math.PI * 2 * guideRadiusPx) / finishedCm();
  const physicalDiameterPx = (bead.size / 10) * pxPerCm;
  const touchBoost = window.matchMedia("(max-width: 700px)").matches ? 1.08 : 1.03;
  return Math.max(26, physicalDiameterPx * touchBoost);
}

function renderMetrics() {
  const remaining = Math.max(0, finishedCm() - usedCm());
  els.finishedSizeText.textContent = `成品 ${finishedCm().toFixed(1)}cm`;
  els.totalPrice.textContent = `¥${totalPrice()}`;
  els.remainingLength.textContent = `${remaining.toFixed(1)}cm`;
  els.beadCount.textContent = `${state.beads.length}`;
}

function render() {
  renderMetrics();
  renderBracelet();
}

function renderAfterArrangement(previousRects) {
  renderMetrics();
  renderBracelet(previousRects);
}

function addBead(skuId) {
  const item = catalog.find(sku => sku.id === skuId);
  if (!item) return;
  const nextUsed = usedCm() + item.size / 10;
  if (nextUsed > finishedCm()) {
    showToast("当前手围已满，不能再加入这颗珠子。");
    return;
  }
  state.beads.push({ ...item, instanceId: `${item.id}-${Date.now()}-${Math.random().toString(16).slice(2)}` });
  els.codePanel.hidden = true;
  render();
}

function updateWristSize(value) {
  const parsed = Number(value);
  if (!Number.isFinite(parsed)) return;
  state.wristCm = Math.min(22, Math.max(10, parsed));
  els.wristInput.value = state.wristCm;
  document.querySelectorAll(".size-presets button").forEach(button => {
    button.classList.toggle("active", Number(button.dataset.size) === state.wristCm);
  });
  render();
}

function generateCode() {
  const remainder = finishedCm() - usedCm();
  const code = createDesignCode();
  const hint = remainder > 2
    ? `当前还剩 ${remainder.toFixed(1)}cm，方案可能还未完整。`
    : "方案已接近完整，可以发送给商家。";
  showToast("设计代码已生成。");
  openSaveCodeModal(code, hint);
}

function createDesignCode() {
  const payload = {
    v: 1,
    wrist: state.wristCm,
    total: totalPrice(),
    beads: state.beads.map(bead => bead.id)
  };
  const json = JSON.stringify(payload);
  return `HX1-${btoa(unescape(encodeURIComponent(json)))}`;
}

function restoreDesignFromCode(code) {
  const trimmed = code.trim();
  if (!trimmed.startsWith("HX1-")) {
    throw new Error("代码格式不正确。");
  }
  const json = decodeURIComponent(escape(atob(trimmed.slice(4))));
  const payload = JSON.parse(json);
  if (!payload || payload.v !== 1 || !Array.isArray(payload.beads)) {
    throw new Error("代码内容不完整。");
  }

  state.wristCm = Number(payload.wrist) || state.wristCm;
  els.wristInput.value = state.wristCm;
  state.beads = payload.beads.map((skuId, index) => {
    const item = catalog.find(sku => sku.id === skuId);
    if (!item) return null;
    return { ...item, instanceId: `${item.id}-loaded-${index}-${Date.now()}` };
  }).filter(Boolean);
  render();
}

function openDesigner() {
  closeSizeModal();
  els.homeView.hidden = true;
  els.designerView.hidden = false;
  render();
}

function openHome() {
  els.designerView.hidden = true;
  els.homeView.hidden = false;
}

function openGallery() {
  els.galleryDrawer.hidden = false;
}

function closeGallery() {
  els.galleryDrawer.hidden = true;
}

function openSizeModal() {
  els.sizeModal.hidden = false;
}

function closeSizeModal() {
  els.sizeModal.hidden = true;
}

function openSaveCodeModal(code, hint) {
  els.codeDialogEyebrow.textContent = "SAVED DESIGN";
  els.codeDialogTitle.textContent = "保存设计";
  els.savedCodeView.hidden = false;
  els.loadCodeView.hidden = true;
  els.savedCodeText.value = code;
  els.savedCodeHint.textContent = hint;
  els.designCodeModal.hidden = false;
}

function openLoadCodeModal() {
  els.codeDialogEyebrow.textContent = "LOAD DESIGN";
  els.codeDialogTitle.textContent = "载入设计";
  els.savedCodeView.hidden = true;
  els.loadCodeView.hidden = false;
  els.loadCodeText.value = "";
  els.loadCodeHint.textContent = "载入后会还原手围、珠子顺序和当时保存的总价。";
  els.designCodeModal.hidden = false;
  requestAnimationFrame(() => els.loadCodeText.focus());
}

function closeCodeModal() {
  els.designCodeModal.hidden = true;
}

function showToast(message) {
  els.toastMessage.textContent = message;
  els.toastMessage.hidden = false;
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => {
    els.toastMessage.hidden = true;
  }, 2200);
}

function clearDesign() {
  state.beads = [];
  state.dragging = null;
  els.codePanel.hidden = true;
  showToast("已清空当前设计。");
  render();
}

async function copySavedCode() {
  const code = els.savedCodeText.value;
  if (!code) {
    els.savedCodeHint.textContent = "还没有可复制的设计代码。";
    return;
  }

  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(code);
    } else {
      fallbackCopyText(code);
    }
    els.savedCodeHint.textContent = "已复制，可以直接粘贴发送。";
  } catch {
    const copied = fallbackCopyText(code);
    els.savedCodeHint.textContent = copied
      ? "已复制，可以直接粘贴发送。"
      : "复制失败，请长按或全选上方代码手动复制。";
  }
}

function fallbackCopyText(text) {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.left = "-9999px";
  textarea.style.top = "0";
  document.body.appendChild(textarea);
  textarea.select();
  textarea.setSelectionRange(0, textarea.value.length);

  let copied = false;
  try {
    copied = document.execCommand("copy");
  } catch {
    copied = false;
  }
  textarea.remove();

  if (!copied) {
    els.savedCodeText.focus();
    els.savedCodeText.select();
  }
  return copied;
}

function reorderBead(fromIndex, pointerX, pointerY) {
  if (fromIndex < 0 || fromIndex >= state.beads.length) return;
  const targetIndex = getTargetIndex(pointerX, pointerY, state.beads.length);
  const [moved] = state.beads.splice(fromIndex, 1);
  state.beads.splice(Math.max(0, Math.min(state.beads.length, targetIndex)), 0, moved);
}

function getTargetIndex(pointerX, pointerY, count) {
  if (count <= 1) return 0;
  const ringRect = els.braceletRing.getBoundingClientRect();
  const centerX = ringRect.left + ringRect.width / 2;
  const centerY = ringRect.top + ringRect.height / 2;
  const angle = Math.atan2(pointerY - centerY, pointerX - centerX);
  const normalized = (angle + Math.PI / 2 + Math.PI * 2) % (Math.PI * 2);
  return Math.round(normalized / (Math.PI * 2) * count) % count;
}

function isOverTrash(pointerX, pointerY) {
  const rect = els.trashZone.getBoundingClientRect();
  return pointerX >= rect.left && pointerX <= rect.right && pointerY >= rect.top && pointerY <= rect.bottom;
}

function drawHeroBracelet() {
  const canvas = els.heroCanvas;
  const ctx = canvas.getContext("2d");
  const w = canvas.width;
  const h = canvas.height;
  ctx.clearRect(0, 0, w, h);

  const beads = [
    ["#d9dde3", 42], ["#23375f", 48], ["#a97fb0", 50], ["#eff3f6", 56], ["#273a66", 45],
    ["#8f6da0", 46], ["#d1d5dc", 50], ["#21345e", 47], ["#ba8fba", 46], ["#e9edf1", 54],
    ["#2b3f6b", 48], ["#9270a0", 44], ["#dfe3e8", 46], ["#24375f", 48], ["#b184b5", 45]
  ];
  const cx = w * 0.62;
  const cy = h * 0.55;
  const rx = w * 0.36;
  const ry = h * 0.25;

  ctx.save();
  ctx.strokeStyle = "rgba(60,64,72,.16)";
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.ellipse(cx, cy, rx, ry, 0, 0, Math.PI * 2);
  ctx.stroke();
  ctx.restore();

  beads.forEach((bead, index) => {
    const angle = -0.15 + (Math.PI * 2 * index) / beads.length;
    const x = cx + Math.cos(angle) * rx;
    const y = cy + Math.sin(angle) * ry;
    const [color, size] = bead;
    const depth = 0.6 + Math.sin(angle) * 0.35;
    const radius = size * (0.75 + depth * 0.28);
    const gradient = ctx.createRadialGradient(x - radius * 0.32, y - radius * 0.35, radius * 0.12, x, y, radius);
    gradient.addColorStop(0, "rgba(255,255,255,.92)");
    gradient.addColorStop(0.38, color);
    gradient.addColorStop(1, "rgba(24,28,38,.34)");

    ctx.save();
    ctx.shadowColor = "rgba(25,29,38,.24)";
    ctx.shadowBlur = 18;
    ctx.shadowOffsetY = 16;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fillStyle = gradient;
    ctx.fill();
    ctx.restore();

    ctx.save();
    ctx.globalAlpha = 0.34;
    ctx.beginPath();
    ctx.arc(x - radius * 0.24, y - radius * 0.22, radius * 0.18, 0, Math.PI * 2);
    ctx.fillStyle = "#fff";
    ctx.fill();
    ctx.restore();
  });
}

document.addEventListener("click", event => {
  const actionTarget = event.target.closest("[data-action]");
  const skuTarget = event.target.closest("[data-sku]");

  if (skuTarget) {
    addBead(skuTarget.dataset.sku);
    return;
  }

  if (!actionTarget) return;
  const action = actionTarget.dataset.action;
  if (action === "open-designer") openSizeModal();
  if (action === "confirm-size") openDesigner();
  if (action === "close-size-modal") closeSizeModal();
  if (action === "back-home") openHome();
  if (action === "open-gallery") openGallery();
  if (action === "close-gallery") closeGallery();
  if (action === "generate-code") generateCode();
  if (action === "restore-code") openLoadCodeModal();
  if (action === "close-code-modal") closeCodeModal();
  if (action === "copy-code") copySavedCode();
  if (action === "confirm-load-code") {
    try {
      restoreDesignFromCode(els.loadCodeText.value);
      closeCodeModal();
      showToast("设计已还原，可以继续编辑。");
    } catch (error) {
      els.loadCodeHint.textContent = error.message || "代码无效，请检查后重试。";
    }
  }
  if (action === "clear-design") clearDesign();
  if (action === "capture") {
    showToast("截图功能下一步接入。");
  }
});

els.braceletRing.addEventListener("pointerdown", event => {
  const bead = event.target.closest(".preview-bead");
  if (!bead) return;
  event.preventDefault();
  const index = Number(bead.dataset.index);
  const ringRect = els.braceletRing.getBoundingClientRect();
  state.dragging = {
    pointerId: event.pointerId,
    index,
    instanceId: state.beads[index]?.instanceId,
    pointerPct: {
      x: ((event.clientX - ringRect.left) / ringRect.width) * 100,
      y: ((event.clientY - ringRect.top) / ringRect.height) * 100
    }
  };
  renderBracelet();
});

document.addEventListener("pointermove", event => {
  if (!state.dragging || state.dragging.pointerId !== event.pointerId) return;
  const ringRect = els.braceletRing.getBoundingClientRect();
  const overTrash = isOverTrash(event.clientX, event.clientY);
  state.dragging.pointerPct = {
    x: ((event.clientX - ringRect.left) / ringRect.width) * 100,
    y: ((event.clientY - ringRect.top) / ringRect.height) * 100
  };
  els.trashZone.classList.toggle("hot", overTrash);
  renderBracelet();
});

document.addEventListener("pointerup", event => {
  if (!state.dragging || state.dragging.pointerId !== event.pointerId) return;
  const index = state.dragging.index;
  const previousRects = captureBeadRects();
  els.trashZone.classList.remove("hot");

  if (isOverTrash(event.clientX, event.clientY)) {
    state.beads.splice(index, 1);
  } else {
    reorderBead(index, event.clientX, event.clientY);
  }

  state.dragging = null;
  renderAfterArrangement(previousRects);
});

document.addEventListener("pointercancel", () => {
  els.trashZone.classList.remove("hot");
  state.dragging = null;
  render();
});

document.addEventListener("click", event => {
  const sizeButton = event.target.closest(".size-presets button");
  if (sizeButton) updateWristSize(sizeButton.dataset.size);

  const groupButton = event.target.closest("[data-group]");
  if (groupButton) {
    state.activeGroup = groupButton.dataset.group;
    renderCatalog();
  }
});

els.wristInput.addEventListener("change", event => updateWristSize(event.target.value));

renderCatalog();
render();
drawHeroBracelet();
window.addEventListener("resize", () => {
  drawHeroBracelet();
  renderBracelet();
});

const params = new URLSearchParams(window.location.search);
if (params.get("screen") === "designer") {
  openDesigner();
}

if (params.get("sample") === "1") {
  ["moon-8", "lapis-8", "rose-8", "clear-10", "amethyst-8", "obsidian-10", "green-6", "rose-10"].forEach(addBead);
}
