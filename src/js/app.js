// --- Translations Data ---
        const translations = {
            'en': {
                appTitle: 'Tsubame-Sanjo Factory Festival', appSubtitle: 'Click a factory below to locate it on the map.',
                searchPlaceholder: 'Search for factories...', filterTitle: 'Category Filter', selectAll: 'Select All', deselectAll: 'Deselect All',
                openInGoogleMaps: 'Open in Google Maps', dataLoadError: 'Could not load factory data. Please ensure \'factory_data.js\' is included and correctly formatted.',
                listView: 'List View', mapView: 'Map View', filterView: 'Filter', toggleFilter: 'Toggle Filter', hideFilter: 'Hide Filter', showFilter: 'Show Filter',
                noCoordinates: '(coordinates unavailable)'
            },
            'ja': {
                appTitle: '燕三条 工場の祭典', appSubtitle: '下のリストをクリックすると地図が移動します。',
                searchPlaceholder: '工場を検索...', filterTitle: '業種フィルター', selectAll: 'すべて選択', deselectAll: 'すべて解除',
                openInGoogleMaps: 'Googleマップで開く', dataLoadError: '工場データを読み込めませんでした。「factory_data.js」が正しく設置されているか確認してください。',
                listView: 'リスト表示', mapView: 'マップ表示', filterView: 'フィルター', toggleFilter: 'フィルター切替', hideFilter: 'フィルター非表示', showFilter: 'フィルター表示',
                noCoordinates: '(座標利用不可)'
            },
            'zh-TW': {
                appTitle: '燕三條工廠祭典', appSubtitle: '點擊下方工廠以在地圖上定位。',
                searchPlaceholder: '搜尋工廠...', filterTitle: '產業類別篩選', selectAll: '全部選取', deselectAll: '全部取消',
                openInGoogleMaps: '在 Google 地圖中開啟', dataLoadError: '無法載入工廠資料。請確認 \'factory_data.js\' 檔案已正確載入。',
                listView: '清單檢視', mapView: '地圖檢視', filterView: '篩選', toggleFilter: '切換篩選', hideFilter: '隱藏篩選', showFilter: '顯示篩選',
                noCoordinates: '(座標不可用)'
            }
        };

        // Category translations
        const categoryTranslations = {
            'en': {
                '金属製品製造': 'Metal Products Manufacturing', '金属加工': 'Metal Processing', '金属部品製造': 'Metal Parts Manufacturing', '金属材料': 'Metal Materials',
                '金型': 'Molds/Dies', '木工': 'Woodworking', '食品製造': 'Food Manufacturing', '小売': 'Retail', '飲食': 'Food & Beverage',
                '小売・道の駅': 'Retail & Roadside Station', '道の駅': 'Roadside Station', '資料館': 'Museum', 'その他サービス': 'Other Services',
                '印刷パッケージ': 'Printing & Packaging', '金物卸売': 'Hardware Wholesale', '農家': 'Farm', 
                '自動車鈑金塗装': 'Automotive Body & Paint', 'アート': 'Art', '小売・飲食': 'Retail & Food', 'その他製造': 'Other Manufacturing',
                'リサイクル': 'Recycling', 'プラスチック': 'Plastics', '塗料販売': 'Paint Sales',
                'default': 'Other'
            },
            'ja': {
                '金属製品製造': '金属製品製造', '金属加工': '金属加工', '金属部品製造': '金属部品製造', '金属材料': '金属材料',
                '金型': '金型', '木工': '木工', '食品製造': '食品製造', '小売': '小売', '飲食': '飲食',
                '小売・道の駅': '小売・道の駅', '道の駅': '道の駅', '資料館': '資料館', 'その他サービス': 'その他サービス',
                '印刷パッケージ': '印刷パッケージ', '金物卸売': '金物卸売', '農家': '農家',
                '自動車鈑金塗装': '自動車鈑金塗装', 'アート': 'アート', '小売・飲食': '小売・飲食', 'その他製造': 'その他製造',
                'リサイクル': 'リサイクル', 'プラスチック': 'プラスチック', '塗料販売': '塗料販売',
                'default': 'その他'
            },
            'zh-TW': {
                '金属製品製造': '金屬製品製造', '金属加工': '金屬加工', '金属部品製造': '金屬零件製造', '金属材料': '金屬材料',
                '金型': '模具', '木工': '木工', '食品製造': '食品製造', '小売': '零售', '飲食': '餐飲',
                '小売・道の駅': '零售・道之驛', '道の駅': '道之驛', '資料館': '資料館', 'その他サービス': '其他服務',
                '印刷パッケージ': '印刷包裝', '金物卸売': '五金批發', '農家': '農家',
                '自動車鈑金塗裝': '汽車鈑金塗裝', 'アート': '藝術', '小売・飲食': '零售・餐飲', 'その他製造': '其他製造',
                'リサイクル': '回收', 'プラスチック': '塑膠', '塗料販売': '塗料銷售',
                'default': '其他'
            }
        };

        // --- Global Variables & App State ---
        let currentLanguage = 'zh-TW';
        let locations = [];
        const categoryColors = {
            '金属製品製造': '#1f77b4', '金属加工': '#ff7f0e', '金属部品製造': '#aec7e8', '金属材料': '#9467bd',
            '金型': '#ffbb78', '木工': '#8c564b', '食品製造': '#d62728', '小売': '#e377c2', '飲食': '#f7b6d2',
            '小売・道の駅': '#2ca02c', '道の駅': '#98df8a', '資料館': '#bcbd22', 'その他サービス': '#7f7f7f',
            '印刷パッケージ': '#c49c94', '金物卸売': '#dbdb8d', '農家': '#9edae5', 
            '自動車鈑金塗装': '#ff9999', 'アート': '#b19cd9', '小売・飲食': '#ffb347', 'その他製造': '#87ceeb',
            'リサイクル': '#32cd32', 'プラスチック': '#ff6347', '塗料販売': '#dda0dd',
            'default': '#cccccc'
        };
        let selectedCategories = new Set(Object.keys(categoryColors));
        let isFilterVisible = window.innerWidth >= 768; // Hide on mobile by default

        // --- UI Elements ---
        const map = L.map('map').setView([37.64, 138.94], 11);
        const allMarkers = {};
        const allListItems = {};
        const visibleMarkersLayer = L.layerGroup().addTo(map);
        let categoryFilterControl = L.control({ position: 'bottomright' });
        const factoryListElement = document.getElementById('factory-list');
        const searchInput = document.getElementById('search-input');
        const clearSearchBtn = document.getElementById('clear-search-btn');
        const factoryCountElement = document.getElementById('factory-count');

        // --- Core Functions ---
        const createSvgIcon = (color) => {
            const svgIconHtml = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" fill="${color}" style="filter: drop-shadow(1px 1px 2px rgba(0,0,0,0.5));"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>`;
            return L.divIcon({ html: svgIconHtml, className: 'svg-icon', iconSize: [28, 28], iconAnchor: [14, 28], popupAnchor: [0, -28] });
        };

        function createAllElements() {
            console.log('Creating elements for', locations.length, 'locations');
            let markersCreated = 0;
            let listItemsCreated = 0;
            
            locations.forEach(location => {
                const color = categoryColors[location.category] || categoryColors['default'];
                const icon = createSvgIcon(color);
                const hasValidCoordinates = location.hasValidCoordinates;

                // Create marker only if coordinates are valid
                if (hasValidCoordinates) {
                    const marker = L.marker([location.lat, location.lng], { icon: icon });
                    allMarkers[location.originalName] = marker;
                    markersCreated++;
                } else {
                    console.log(`No valid coordinates for ${location.name}: lat=${location.lat}, lng=${location.lng}`);
                }

                // Always create list item regardless of coordinate validity
                const listItem = document.createElement('div');
                const baseClasses = 'p-3 flex items-center bg-gray-50 rounded-lg transition duration-300';
                const interactiveClasses = hasValidCoordinates ? 'hover:bg-blue-100 cursor-pointer' : 'opacity-60 cursor-not-allowed';
                listItem.className = `${baseClasses} ${interactiveClasses}`;

                const displayName = location.multilingual[currentLanguage] || location.name;
                const displayCategory = categoryTranslations[currentLanguage][location.category] || location.category;

                // Add a visual indicator for items without coordinates
                const coordinateIndicator = hasValidCoordinates ? '' : `<span class="text-xs text-gray-400 ml-1">${translations[currentLanguage].noCoordinates}</span>`;
                listItem.innerHTML = `<span class="w-3 h-3 rounded-full mr-3 flex-shrink-0" style="background-color: ${color};"></span><div class="flex-grow"><h3 class="font-semibold text-sm ${hasValidCoordinates ? 'text-blue-800' : 'text-gray-600'}">${displayName}${coordinateIndicator}</h3><p class="text-xs text-gray-500">${displayCategory}</p></div>`;

                // Only add click handler if coordinates are valid
                if (hasValidCoordinates) {
                    listItem.addEventListener('click', () => {
                        if (allMarkers[location.originalName]) {
                            map.setView([location.lat, location.lng], 16);
                            allMarkers[location.originalName].openPopup();
                            
                            // Switch to map view on mobile devices
                            if (window.innerWidth < 768) {
                                const showMapBtn = document.getElementById('show-map-btn');
                                if (showMapBtn) {
                                    showMapBtn.click();
                                }
                            }
                        }
                    });
                }
                allListItems[location.originalName] = listItem;
                listItemsCreated++;
            });
            
            console.log('Created', markersCreated, 'markers and', listItemsCreated, 'list items');
        }

        function updateVisibleFactories() {
            visibleMarkersLayer.clearLayers();
            factoryListElement.innerHTML = '';

            const searchTerm = searchInput.value.toLowerCase();
            clearSearchBtn.classList.toggle('hidden', searchTerm.length === 0);

            const filteredLocations = locations.filter(location => {
                const nameMatch = searchTerm.length === 0 || 
                    location.name.toLowerCase().includes(searchTerm) ||
                    location.originalName.toLowerCase().includes(searchTerm);
                const categoryMatch = selectedCategories.has(location.category);
                return nameMatch && categoryMatch;
            });

            let count = 0;
            filteredLocations.forEach(location => {                
                if (allListItems[location.originalName]) {
                    count++;
                    factoryListElement.appendChild(allListItems[location.originalName]);
                }
            });

            if (factoryCountElement) {
                let label = `${count} factories shown`;
                if (currentLanguage === 'zh-TW') label = `顯示 ${count} 筆資料`;
                if (currentLanguage === 'ja') label = `表示中: ${count} 件`;
                factoryCountElement.textContent = label;
            }

            filteredLocations.forEach(location => {
                const displayName = location.multilingual[currentLanguage] || location.name;
                const displayCategory = categoryTranslations[currentLanguage][location.category] || location.category;

                if (allMarkers[location.originalName]) {
                    const popupHtml = `<div class="popup-content space-y-2"><h3 class="font-bold text-lg">${displayName}</h3><p class="text-gray-600">${displayCategory}</p><p class="text-sm text-gray-800">${location.address}</p><a href="${location.link}" target="_blank" class="font-semibold inline-block mt-1">${translations[currentLanguage].openInGoogleMaps} →</a></div>`;
                    allMarkers[location.originalName].bindPopup(popupHtml);

                    visibleMarkersLayer.addLayer(allMarkers[location.originalName]);
                }
            });
        }

        function changeLanguage(lang) {
            currentLanguage = lang;
            document.documentElement.lang = lang === 'zh-TW' ? 'zh-Hant' : lang;

            document.querySelectorAll('[data-lang-key]').forEach(el => {
                const key = el.getAttribute('data-lang-key');
                if (translations[lang][key]) el.textContent = translations[lang][key];
            });

            searchInput.placeholder = translations[lang].searchPlaceholder;

            // Update locations data with new language
            locations = locations.map(location => ({
                ...location,
                name: location.multilingual[lang] || location.originalName,
                categoryDisplay: categoryTranslations[lang][location.category] || location.category
            }));

            // Recreate list items with new language
            Object.keys(allListItems).forEach(key => {
                const location = locations.find(loc => loc.originalName === key);
                if (location) {
                    const color = categoryColors[location.category] || categoryColors['default'];
                    const displayName = location.multilingual[lang] || location.originalName;
                    const displayCategory = categoryTranslations[lang][location.category] || location.category;
                    const hasValidCoordinates = location.hasValidCoordinates;
                    
                    // Add visual indicator for items without coordinates
                    const coordinateIndicator = hasValidCoordinates ? '' : `<span class="text-xs text-gray-400 ml-1">${translations[lang].noCoordinates}</span>`;
                    
                    allListItems[key].innerHTML = `<span class="w-3 h-3 rounded-full mr-3 flex-shrink-0" style="background-color: ${color};"></span><div class="flex-grow"><h3 class="font-semibold text-sm ${hasValidCoordinates ? 'text-blue-800' : 'text-gray-600'}">${displayName}${coordinateIndicator}</h3><p class="text-xs text-gray-500">${displayCategory}</p></div>`;
                }
            });

            map.removeControl(categoryFilterControl);
            categoryFilterControl.onAdd = function (map) {
                const div = L.DomUtil.create('div', 'category-filter-container');
                
                // Toggle button
                const toggleBtn = L.DomUtil.create('button', 'filter-toggle-btn bg-white hover:bg-gray-100 p-2 rounded-lg shadow-lg mb-2 text-sm font-medium border', div);
                toggleBtn.innerHTML = `<span data-filter-toggle-text>${isFilterVisible ? translations[lang].hideFilter : translations[lang].showFilter}</span>`;
                toggleBtn.style.display = 'block';
                toggleBtn.style.width = '100%';
                
                // Filter content
                const filterDiv = L.DomUtil.create('div', `category-filter p-4 rounded-lg shadow-lg ${isFilterVisible ? '' : 'hidden'}`, div);
                filterDiv.innerHTML = `<h4 class="font-bold mb-2">${translations[lang].filterTitle}</h4>
                    <div class="flex justify-between mb-2 text-sm">
                        <button id="select-all-btn" class="text-blue-600 hover:underline">${translations[lang].selectAll}</button>
                        <button id="deselect-all-btn" class="text-blue-600 hover:underline">${translations[lang].deselectAll}</button>
                    </div>
                    <div id="category-checkboxes"></div>`;

                const checkboxesContainer = filterDiv.querySelector('#category-checkboxes');
                Object.keys(categoryColors).filter(c => c !== 'default').sort().forEach(category => {
                    const item = document.createElement('div');
                    item.className = 'category-filter-item';
                    const displayCategory = categoryTranslations[lang][category] || category;
                    item.innerHTML = `
                        <input type="checkbox" id="cat-${category}" value="${category}" class="form-checkbox h-4 w-4 text-blue-600">
                        <div class="color-box" style="background-color:${categoryColors[category]}"></div>
                        <label for="cat-${category}" class="text-sm">${displayCategory}</label>
                    `;
                    checkboxesContainer.appendChild(item);
                    const checkbox = item.querySelector('input');
                    checkbox.checked = selectedCategories.has(category);
                    checkbox.addEventListener('change', (e) => {
                        if (e.target.checked) {
                            selectedCategories.add(e.target.value);
                        } else {
                            selectedCategories.delete(e.target.value);
                        }
                        updateVisibleFactories();
                        // Sync with mobile filter
                        const mobileCheckbox = document.getElementById(`mobile-cat-${e.target.value}`);
                        if (mobileCheckbox) {
                            mobileCheckbox.checked = e.target.checked;
                        }
                    });
                });

                // Toggle button event listener
                toggleBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    isFilterVisible = !isFilterVisible;
                    filterDiv.classList.toggle('hidden');
                    const toggleText = toggleBtn.querySelector('[data-filter-toggle-text]');
                    toggleText.textContent = isFilterVisible ? translations[lang].hideFilter : translations[lang].showFilter;
                });

                L.DomEvent.disableClickPropagation(div);
                return div;
            };
            categoryFilterControl.addTo(map);

            // Create mobile filter interface
            createMobileFilter(lang);

            setTimeout(() => {
                document.getElementById('select-all-btn').addEventListener('click', () => {
                    selectedCategories = new Set(Object.keys(categoryColors));
                    document.querySelectorAll('.category-filter-item input').forEach(cb => cb.checked = true);
                    // Sync with mobile filter
                    document.querySelectorAll('#mobile-category-checkboxes input').forEach(cb => cb.checked = true);
                    updateVisibleFactories();
                });
                document.getElementById('deselect-all-btn').addEventListener('click', () => {
                    selectedCategories.clear();
                    document.querySelectorAll('.category-filter-item input').forEach(cb => cb.checked = false);
                    // Sync with mobile filter
                    document.querySelectorAll('#mobile-category-checkboxes input').forEach(cb => cb.checked = false);
                    updateVisibleFactories();
                });
            }, 0);

            updateVisibleFactories();
        }

        // Create mobile filter interface
        function createMobileFilter(lang) {
            const mobileCheckboxesContainer = document.getElementById('mobile-category-checkboxes');
            mobileCheckboxesContainer.innerHTML = '';
            
            Object.keys(categoryColors).filter(c => c !== 'default').sort().forEach(category => {
                const item = document.createElement('div');
                item.className = 'mobile-filter-item';
                const displayCategory = categoryTranslations[lang][category] || category;
                item.innerHTML = `
                    <input type="checkbox" id="mobile-cat-${category}" value="${category}" class="rounded text-blue-600 focus:ring-blue-500 focus:ring-2">
                    <div class="color-box" style="background-color:${categoryColors[category]}"></div>
                    <label for="mobile-cat-${category}" class="text-sm">${displayCategory}</label>
                `;
                mobileCheckboxesContainer.appendChild(item);
                
                const checkbox = item.querySelector('input');
                checkbox.checked = selectedCategories.has(category);
                checkbox.addEventListener('change', (e) => {
                    if (e.target.checked) {
                        selectedCategories.add(e.target.value);
                    } else {
                        selectedCategories.delete(e.target.value);
                    }
                    updateVisibleFactories();
                    // Sync with desktop filter if it exists
                    const desktopCheckbox = document.getElementById(`cat-${category}`);
                    if (desktopCheckbox) {
                        desktopCheckbox.checked = e.target.checked;
                    }
                });
            });

            // Setup mobile select/deselect all buttons
            const mobileSelectAllBtn = document.getElementById('mobile-select-all-btn');
            const mobileDeselectAllBtn = document.getElementById('mobile-deselect-all-btn');
            
            mobileSelectAllBtn.addEventListener('click', () => {
                selectedCategories = new Set(Object.keys(categoryColors).filter(c => c !== 'default'));
                document.querySelectorAll('#mobile-category-checkboxes input').forEach(cb => cb.checked = true);
                // Sync with desktop filter
                document.querySelectorAll('.category-filter-item input').forEach(cb => cb.checked = true);
                updateVisibleFactories();
            });
            
            mobileDeselectAllBtn.addEventListener('click', () => {
                selectedCategories.clear();
                document.querySelectorAll('#mobile-category-checkboxes input').forEach(cb => cb.checked = false);
                // Sync with desktop filter
                document.querySelectorAll('.category-filter-item input').forEach(cb => cb.checked = false);
                updateVisibleFactories();
            });
        }

        // --- Event Listeners and Initializers that depend on data ---
        function initializeApp() {
            // This now runs only after factoryData is loaded and processed.

            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 19, attribution: '© <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>' }).addTo(map);

            createAllElements();
            setupMobileViewToggle();

            // Setup event listeners that don't depend on language
            searchInput.addEventListener('input', updateVisibleFactories);
            clearSearchBtn.addEventListener('click', () => {
                searchInput.value = '';
                updateVisibleFactories();
            });
            document.getElementById('language-switcher').addEventListener('change', (e) => changeLanguage(e.target.value));

            // Initial UI setup with default language
            changeLanguage('zh-TW');
        }

        // --- Mobile View Toggle Function ---
        function setupMobileViewToggle() {
            const showListBtn = document.getElementById('show-list-btn');
            const showMapBtn = document.getElementById('show-map-btn');
            const showFilterBtn = document.getElementById('show-filter-btn');
            const sidebar = document.getElementById('sidebar');
            const mapContainer = document.getElementById('map-container');
            const mobileFilterContainer = document.getElementById('mobile-filter-container');

            function resetButtonStyles() {
                [showListBtn, showMapBtn, showFilterBtn].forEach(btn => {
                    btn.classList.remove('text-blue-600', 'bg-blue-50', 'border-b-2', 'border-blue-600');
                    btn.classList.add('text-gray-600');
                });
            }

            function showListView() {
                sidebar.classList.remove('hidden');
                sidebar.classList.add('flex');
                mapContainer.classList.add('hidden');
                mobileFilterContainer.classList.add('hidden');
                
                resetButtonStyles();
                showListBtn.classList.add('text-blue-600', 'bg-blue-50', 'border-b-2', 'border-blue-600');
                showListBtn.classList.remove('text-gray-600');
            }

            function showMapView() {
                sidebar.classList.add('hidden');
                sidebar.classList.remove('flex');
                mapContainer.classList.remove('hidden');
                mobileFilterContainer.classList.add('hidden');
                
                resetButtonStyles();
                showMapBtn.classList.add('text-blue-600', 'bg-blue-50', 'border-b-2', 'border-blue-600');
                showMapBtn.classList.remove('text-gray-600');
                
                // Invalidate map size when showing map view to ensure proper rendering
                setTimeout(() => {
                    map.invalidateSize();
                }, 100);
            }

            function showFilterView() {
                sidebar.classList.add('hidden');
                sidebar.classList.remove('flex');
                mapContainer.classList.add('hidden');
                mobileFilterContainer.classList.remove('hidden');
                
                resetButtonStyles();
                showFilterBtn.classList.add('text-blue-600', 'bg-blue-50', 'border-b-2', 'border-blue-600');
                showFilterBtn.classList.remove('text-gray-600');
            }

            showListBtn.addEventListener('click', showListView);
            showMapBtn.addEventListener('click', showMapView);
            showFilterBtn.addEventListener('click', showFilterView);

            // Default to list view on mobile
            showListView();
        }

        // --- Main App Entry Point ---
        window.onload = () => {
            if (typeof factoryData !== 'undefined') {
                console.log('Original factory data count:', factoryData.length);
                
                locations = factoryData.map(item => {
                    // Check if coordinates are valid for mapping
                    const hasLat = item.api_lat != null && item.api_lat !== '' && item.api_lat !== undefined;
                    const hasLng = item.api_lng != null && item.api_lng !== '' && item.api_lng !== undefined;
                    const validLat = hasLat && !isNaN(parseFloat(item.api_lat));
                    const validLng = hasLng && !isNaN(parseFloat(item.api_lng));
                    const inRange = validLat && validLng && 
                        parseFloat(item.api_lat) >= -90 && parseFloat(item.api_lat) <= 90 &&
                        parseFloat(item.api_lng) >= -180 && parseFloat(item.api_lng) <= 180;
                    
                    if (!inRange) {
                        console.warn(`Factory without valid coordinates: ${item.name}, lat: ${item.api_lat}, lng: ${item.api_lng}`);
                    }
                    
                    // Always include the item, but mark coordinate validity
                    // Use helper functions if available, otherwise use our own translations
                    const getTranslatedName = (lang) => {
                        if (item.names && item.names[lang]) return item.names[lang];
                        if (typeof getNameTranslation === 'function') return getNameTranslation(item.name, lang);
                        return item.name;
                    };

                    const getTranslatedCategory = (lang) => {
                        if (item.categories && item.categories[lang]) return item.categories[lang];
                        if (typeof getCategoryTranslation === 'function') return getCategoryTranslation(item.category, lang);
                        return categoryTranslations[lang] ? categoryTranslations[lang][item.category] || item.category : item.category;
                    };

                    return {
                        name: getTranslatedName(currentLanguage),
                        originalName: item.name,
                        city: item.city,
                        category: item.category,
                        categoryDisplay: getTranslatedCategory(currentLanguage),
                        lat: inRange ? parseFloat(item.api_lat) : null,
                        lng: inRange ? parseFloat(item.api_lng) : null,
                        address: item.api_found_address ? item.api_found_address.replace('日本、', '') : '',
                        link: item.google_maps_link || '',
                        hasValidCoordinates: inRange,
                        multilingual: {
                            ja: getTranslatedName('ja'),
                            en: getTranslatedName('en'),
                            'zh-TW': getTranslatedName('zh-TW')
                        }
                    };
                });

                console.log('Processed locations count:', locations.length);
                console.log('Categories found:', [...new Set(locations.map(l => l.category))]);

                initializeApp();
            } else {
                console.error("Factory data not loaded. Make sure factory_data.js is included correctly.");
                document.getElementById('factory-list').innerHTML = `<p class="p-4 text-red-500">${translations[currentLanguage].dataLoadError}</p>`;
            }
        };
