function renderSidebar(active) {
  const NAV = [
    { id: 'analytics', href: 'index.html',           icon: 'layout-dashboard', label: 'Центр аналитики' },
    { id: 'import',    href: 'import-registry.html', icon: 'package-search',   label: 'Реестр импорта' },
    { id: 'payments',  href: 'payments.html',        icon: 'wallet',           label: 'Платежи' },
    { id: 'treaties',  href: 'treaties.html',        icon: 'file-signature',   label: 'Договоры' },
    { id: 'reports',   href: 'reports.html',         icon: 'file-bar-chart-2', label: 'Отчёты' },
    { id: 'calc',      href: 'calculator.html',      icon: 'calculator',       label: 'Калькулятор' }
  ];

  const html = `
    <aside id="sidebar" class="sidebar w-[260px] bg-white border-r border-slate-200 flex flex-col fixed inset-y-0 left-0 z-40">
      <button id="toggleSidebar" class="sidebar-toggle-float">
        <i data-lucide="chevron-left" id="toggleIcon" class="w-3.5 h-3.5 text-slate-500"></i>
      </button>
      <div class="sidebar-header h-16 flex items-center px-5 border-b border-slate-200 shrink-0">
        <a href="index.html" class="logo-full flex items-center gap-2.5">
          <img src="../logo.svg" alt="" class="w-8 h-8">
          <div>
            <div class="font-bold text-slate-900 tracking-tight leading-none">TANBA</div>
            <div class="text-[10px] text-slate-400 uppercase tracking-wider mt-0.5">Чистые носители</div>
          </div>
        </a>
        <a href="index.html" class="logo-icon items-center justify-center hidden"><img src="../logo.svg" alt="" class="w-8 h-8"></a>
      </div>
      <nav class="flex-1 overflow-y-auto scrollbar-thin px-3 py-4">
        <div class="sidebar-section-title text-[10.5px] font-semibold text-slate-400 uppercase tracking-wider px-3 mb-2">Модули</div>
        <div class="space-y-1">
          ${NAV.map(n => `
            <a href="${n.href}" class="nav-item relative ${n.id === active ? 'active' : ''}">
              <i data-lucide="${n.icon}" class="w-[18px] h-[18px] shrink-0"></i>
              <span class="sidebar-label">${n.label}</span>
              <span class="tooltip-right">${n.label}</span>
            </a>`).join('')}
        </div>
      </nav>
      <div class="border-t border-slate-200 p-3 shrink-0">
        <div class="relative">
          <button id="sidebarUserBtn" class="w-full flex items-center gap-3 px-2 py-2 rounded-xl hover:bg-slate-50 transition-colors">
            <div class="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 text-white flex items-center justify-center text-[12px] font-bold shrink-0 shadow-sm">АЕ</div>
            <div class="sidebar-user-info text-left min-w-0 flex-1">
              <p class="text-[13px] font-semibold text-slate-900 truncate">Айдана Ермекова</p>
              <p class="text-[11px] text-slate-500 truncate">Эксперт НИИС</p>
            </div>
            <i data-lucide="chevron-up" class="w-4 h-4 text-slate-400 shrink-0 sidebar-label"></i>
          </button>
          <div id="sidebarDropdown" class="hidden absolute bottom-full left-0 right-0 mb-2 bg-white rounded-xl shadow-xl shadow-slate-300/40 border border-slate-200 py-2 z-50 overflow-hidden">
            <div class="px-4 py-3 border-b border-slate-100 bg-slate-50/50">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 text-white flex items-center justify-center text-[13px] font-bold shrink-0">АЕ</div>
                <div class="min-w-0">
                  <p class="text-[13px] font-semibold text-slate-900 truncate">Айдана Ермекова</p>
                  <p class="text-[11px] text-slate-500 truncate">aermekova@niis.kz</p>
                </div>
              </div>
              <div class="mt-3 flex items-center gap-2">
                <span class="text-[10px] font-semibold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded-full uppercase tracking-wide">Эксперт НИИС</span>
                <span class="text-[10px] text-slate-500">ID: EX-0142</span>
              </div>
            </div>
            <button class="w-full flex items-center gap-2.5 px-4 py-2.5 text-[13px] text-slate-700 hover:bg-slate-50"><i data-lucide="user" class="w-4 h-4 text-slate-400"></i> Мой профиль</button>
            <button class="w-full flex items-center gap-2.5 px-4 py-2.5 text-[13px] text-slate-700 hover:bg-slate-50"><i data-lucide="settings" class="w-4 h-4 text-slate-400"></i> Настройки</button>
            <button class="w-full flex items-center gap-2.5 px-4 py-2.5 text-[13px] text-slate-700 hover:bg-slate-50"><i data-lucide="life-buoy" class="w-4 h-4 text-slate-400"></i> Поддержка</button>
            <div class="border-t border-slate-100 my-1"></div>
            <a href="../login.html" class="w-full flex items-center gap-2.5 px-4 py-2.5 text-[13px] text-red-600 hover:bg-red-50"><i data-lucide="log-out" class="w-4 h-4"></i> Выйти из системы</a>
          </div>
        </div>
      </div>
    </aside>
  `;

  document.getElementById('sidebar-slot').outerHTML = html;

  setTimeout(() => {
    lucide.createIcons();
    const sidebar = document.getElementById('sidebar');
    const mainArea = document.getElementById('mainArea');
    const toggleBtn = document.getElementById('toggleSidebar');
    const toggleIcon = document.getElementById('toggleIcon');
    toggleBtn.addEventListener('click', () => {
      sidebar.classList.toggle('collapsed');
      const c = sidebar.classList.contains('collapsed');
      mainArea.classList.toggle('ml-[260px]', !c);
      mainArea.classList.toggle('ml-[76px]', c);
      toggleIcon.setAttribute('data-lucide', c ? 'chevron-right' : 'chevron-left');
      lucide.createIcons();
    });
    const userBtn = document.getElementById('sidebarUserBtn');
    const dropdown = document.getElementById('sidebarDropdown');
    userBtn.addEventListener('click', e => { e.stopPropagation(); dropdown.classList.toggle('hidden'); });
    document.addEventListener('click', e => { if (!dropdown.contains(e.target) && !userBtn.contains(e.target)) dropdown.classList.add('hidden'); });
  }, 0);
}
