'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "bb4185d55f9cba6e02e165558878bc81",
"assets/assets/images/add_course_right_bg_icon.png": "4139b64eebb175abe996918d5b389468",
"assets/assets/images/add_course_right_font_icon.png": "676f8e01e9dc6aaf111771da74eb00bd",
"assets/assets/images/add_course_right_shape_icon.png": "372017de87bc227baac2741b98348590",
"assets/assets/images/add_course_right_source_material_icon.png": "4f9f1f8236b711ef8bebba415c29e446",
"assets/assets/images/add_course_right_template_icon.png": "9eb45a91802ac6aaa2dab5f3e9df6f55",
"assets/assets/images/add_course_right_upload_icon.png": "1953bfc23b752d35da10f556d1c618dc",
"assets/assets/images/add_course_right_utils_icon.png": "96a9d58b4150037ee40f4b7689cc8f71",
"assets/assets/images/bg.png": "d836f8109c1e486db7e70bec7bbf199b",
"assets/assets/images/cache.png": "bbaa0e1de6cd1fc080e437b2577216b3",
"assets/assets/images/collection.png": "e23ebe2a61ba3ecdf609e15bd6527fe8",
"assets/assets/images/course.png": "6b52444d1c16473ea403fb5012717847",
"assets/assets/images/course_main_banner.png": "a95cce1974506a69d75b9ae9c9b5d9b4",
"assets/assets/images/draw.png": "cfcef60f83dddda2daaae1b4c7b44c5f",
"assets/assets/images/font.png": "b86213552d27bb682a2e7f67c1b372b6",
"assets/assets/images/growing_yun.png": "e85c18826879e02f4ac9381af36a1090",
"assets/assets/images/left_next_icon.png": "ed4018cd092e789ba40cc84217a5ca7b",
"assets/assets/images/list_icon.png": "159c9bcf4b3c69b355d17a386533cc1a",
"assets/assets/images/list_plan_banner.png": "cb047d134adde1daa22e267ca228c524",
"assets/assets/images/main_icon.png": "ac680e394164799c7d770aa1adb19db2",
"assets/assets/images/max_bg.png": "06fd0edd4c323ef4c6d03ce708cf3e35",
"assets/assets/images/max_bg_1.png": "9db30a879c585e79d33770f0aebff64b",
"assets/assets/images/max_bg_2.png": "a292ac988cc5a0b1e9587eb42131a8dc",
"assets/assets/images/max_bg_3.png": "e13a1d1240433808af0b456ade96f9c1",
"assets/assets/images/max_bg_4.png": "f506921b5fd4d95fc952051b28c677ac",
"assets/assets/images/max_bg_5.png": "cb0ed794f02009e7070d913251c7bd51",
"assets/assets/images/more1.png": "28cdbea50cd8bdae847c26fad5506b77",
"assets/assets/images/more2.png": "f9d0f3343d045b1e8a7ff3ea9f0e75de",
"assets/assets/images/more3.png": "40268aa6d719b5ac1d8ccb73c79cc256",
"assets/assets/images/more4.png": "70c9af16d4219866dc08315032e8dd18",
"assets/assets/images/more5.png": "ae83e8dcb2006f00024f83c6c7228893",
"assets/assets/images/more6.png": "3bf0644cf0d24e9497b1bfd0b649a8a7",
"assets/assets/images/more7.png": "346912aa02e5f781592dc76be027fbd9",
"assets/assets/images/more8.png": "4760f68ceaf96287bef57aadd19e8502",
"assets/assets/images/music.png": "d4d3d3c7da896d4af3381e3a157b25af",
"assets/assets/images/paint.png": "6324d55102bfb993cd953e601caff3f0",
"assets/assets/images/plan.png": "e156e67a482484b849f8dbd5a683bdaf",
"assets/assets/images/reading.png": "e44a7b97d85c4234ea519139cdc9dbe8",
"assets/assets/images/recovery.png": "fdbca50b0369f81f47db00da18212fa6",
"assets/assets/images/recycle_bin.png": "c6ad75873273b6fafbd6dfaf02c6bfa6",
"assets/assets/images/revoke.png": "b9e5e3f3d8b321f1df684c1b0732b4b8",
"assets/assets/images/right_next_icon.png": "c1fa48173ff1b131345cb3f98d985cbb",
"assets/assets/images/scene.png": "af1a16bf7e608d9a145cc1aaa429f375",
"assets/assets/images/shape.png": "6020d3afc411b4349af46d8c40f6cfc7",
"assets/assets/images/share_icon.png": "03247bba6801239b94c548c37b346a89",
"assets/assets/images/source_material.png": "3a9bc136b78f93c39f6b7b1adfd658f5",
"assets/assets/images/yun.png": "195ab31366ce6a235ff289495948acdc",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "58ad7fab4c211ae96222d5b38b44d342",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "08ee50b761965d7f6272aefe4e24f92e",
"/": "08ee50b761965d7f6272aefe4e24f92e",
"main.dart.js": "ee97f25dda8c3071c349e68c018dd032",
"manifest.json": "546373abd25b953b37ab8e36e098d8fb",
"version.json": "9c814618b262ab6be8a4f0995aee6df7"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
