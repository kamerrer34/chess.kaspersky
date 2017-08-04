'use strict';

import polyfills from './libraries/polyfills';

import 'components/scroller/scroller';
import 'components/dropdown/dropdown';
import 'components/anchor/anchor';
import 'components/search/search';
import 'components/popup/popup';
import 'components/gallery-list/gallery-list';
import 'components/map-tabs/map-tabs';
import 'components/map-location/map-location';




$(() => {
    polyfills.init();
    // ================ Здесь инициализируем модули =====================
});
