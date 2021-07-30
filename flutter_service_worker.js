'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "0beb0911c49063c70710c3c1363ccf48",
".git/config": "98cdd6b2919f3808ef30f5e5028104d1",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "92d485d67e08dbc7c991746bfbd9dbb9",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "c48e86488337e624cc3168b56ffc99c3",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "0df7fef850eebafa4615c3682639d31d",
".git/logs/refs/heads/main": "0df7fef850eebafa4615c3682639d31d",
".git/logs/refs/remotes/origin/main": "e3888c03a91574a2e224cfc840fca74e",
".git/logs/refs/remotes/origin1/main": "c391b0931588bf71b489ee055978e255",
".git/objects/00/0cded972fb336fd23cf04ce1b5b2dd1580921f": "4f75d4a68beb6150a33b213d7ef9f2f4",
".git/objects/04/9e7bab4017a62369701f2be3db0e359b30a795": "77bfbae3142ed6eca39e7becefc12f1f",
".git/objects/05/12fa9f43b9e6e1e2a7797f8e813109c91527ad": "7d517b1d3b788bd37eb1ba00d08dd6bf",
".git/objects/06/cf111ac02518fbe1a7c1a85215bf38daa2e0f6": "579bab5745057234bff54e738697f52f",
".git/objects/07/f245fb7beaea7301ae3bedf73adbde99b2d807": "e3424ae538876601d2ce3839d25cef6d",
".git/objects/08/bf1a23f543cd85cfcde434ace810c82dcf13f6": "2b589cd7a889fa112c04852be6158e91",
".git/objects/08/ec0a90527ba92d47402a487eca876d6166dc7b": "a957d2b7510a71f725be6a4baaea2194",
".git/objects/0a/0b03c90ebfd37507220dfab8845e7b3f51176c": "0ab4bc9b58f1e594782c02b29425536d",
".git/objects/0f/6564658d17de185649ba00362b1858e883563e": "c98a3fb812f3a2500e20cba5d967bda4",
".git/objects/16/83b617a0954687eb5225d4eac44c7ff6987617": "45908dcd73a6b3057c065946c96423d0",
".git/objects/1c/03cda5a6dc142f5d20a6ddccf5b0edd53b5d42": "9ae20dc8d4f167ce7a6d358ac1da1f22",
".git/objects/1c/bcfc42ceffcf57cb02a4ae9ad00fd7acba86f2": "3018ab8a80ec51c73367450632b6d940",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/20/8923132c6b6728532b62c83bdc1cb394aedf4c": "d16a56e316a58c17b06bd3dd9eb60b4c",
".git/objects/26/8f69ef5415a218f859898893dd6d36b38ac66a": "abab653b5d9097a1c8b1a7d0e6f7421b",
".git/objects/2c/762068186ed09c0339c1bed28e4767b585de64": "f4dd5f3add56a41ea86a0b96d41a8d3c",
".git/objects/2c/b1b3f0c2ce7bf79eeaf68558deefebed4fe9cf": "7007e26bbd887c8468342fc2ce4caca2",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/34/bc0af2e3b1203b52493a00d1c94a8ded951d56": "ce790f43d979e2c1dec2d796033587b3",
".git/objects/37/f18af6e3afe504e74fb96dce3dc13f5997cd4d": "71f343df060ccf03a46a459d4820cc6e",
".git/objects/39/6068792347b92dfd9c6f6cd34ba3db2cc3493b": "200998f96429f319cc2d4e0adaee0fa9",
".git/objects/3a/98b1b08b7cb6cb779342c5048eb3415ee0809f": "e634b72d00c405b3c6643b6804dd2625",
".git/objects/3a/c71e9635204465cbec43d1c404bf60bbaab1a9": "fbc6ce1d59bc7f9e046217150e0b8ac5",
".git/objects/3c/6c9c7c92cda1801e13976b026850059743f2ac": "2675b61d74dbd5a7c84512eb3ec47d25",
".git/objects/3d/abffe498843502e5e380d454934df681202ce5": "88c44c5ed6a2ace67118930be02c8eb7",
".git/objects/3e/15bb09478d610e942fb1a80ea75834850663f0": "bd3bf496349aab319daf82f1b4020c2f",
".git/objects/3f/b05ad8095459b461b7780fa8410ed509e999cd": "e44980a9b18656b79d5a12b8cbcfea01",
".git/objects/43/5ebbcbcf498a50d2043be2cd47c76faf1ecc66": "8b8707843cd7858771417bbb42627ee0",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/fb360ee0ee4cd23538fa77c5b1db54f64eda3e": "d95feb3fd4ede2c5b8fa30721cac23a2",
".git/objects/48/62c5b7a28a6bb88e0310f6b7b5515f4f2af508": "3f2fe753aaf177dc69eef13957d60d53",
".git/objects/4b/4e29c68467e04b95521a15a78e230176301e7c": "ab13911091256c5bce684c0501557d1d",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4c/9ddb7b29062855c8894e66878249afd127fd35": "41f4e2791cae0e49569840e37b033a5e",
".git/objects/4d/6e65a66272f5c44712f43212711123031ab01d": "61497d5731c93d318359120b7f507255",
".git/objects/51/db4af8ae6bd63f899446c3bd2d7c795393c900": "6f1161bf1895a40782beb524cd9a0d74",
".git/objects/52/66a661f4b1aeade1263c07b6d2795a659b7a17": "e906f46a9a280f681219e49499f929eb",
".git/objects/56/082bce7612f0cabeaee86624ac2befea748c70": "41e689273fc336399a1a92e8c5b57221",
".git/objects/56/ecb9b0b735b710059f9dcf2b54f37dd3118596": "f96391e86d236c63ce864f8813b0298c",
".git/objects/57/c1539ba343e840a55afa43fe57434d647dc07f": "adf61891a3dd611b8ea6e3570c2288ec",
".git/objects/66/8a090e1a8c0c8661976426c48a65a7e3798702": "f4ad7da7d27e89d16ef54867aa406fc6",
".git/objects/6b/768da40dc3bd97099420e0e55270d17d7bd371": "e2bb9c2bc862751db4365683e93e8e17",
".git/objects/6e/ca7fe43c11409a449a8f1dbe9899fff71b23c1": "a55e94ec3e06094443e79e995eb55458",
".git/objects/75/bde549bb80c0f477ea0602e6eb4d19bf3e0edf": "4ed7c8f2738bedeef0f6ea61e5dd7853",
".git/objects/77/39e60810bdf70fa38d43de4691254260ba765b": "269a286c2d7e7e1c1725577530c408ca",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/79/cf52a95fd52b304a1cb379d7da2b970660da41": "3e2f3dbae8b31d53052b1cf4c7c11b08",
".git/objects/7b/10b73f7e944f19909e248cdc8f5d5a17960141": "1d3393db56b691bb668b53be9bb5ea20",
".git/objects/7f/c0f3cf1c1018db3bc344f19e744445a95c83d7": "09fb66bdf82418da78de36e51e550278",
".git/objects/81/bc9e9baff4929eb2cb4a018ac20743e68205eb": "f6ce32e3d2e5e476953b176f5e176617",
".git/objects/82/1435463d8fa0ca6b22d4d75475e3a2f9d85a18": "03925586d5284d83ba7ff192e7fa0cd5",
".git/objects/84/607111506eb9fecdba424135412ec56cd8d926": "94b43ed4d8171f2abef5523f3659450c",
".git/objects/87/ec72923ee8484f54ded4f8fe4126c98e4877b1": "dc7e244ea0c530073b4bfabb29bbf3cd",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/d0b05d5b5fd482755580c86b626dec129e2080": "e8d901e0c26f09f09443c4017c0a3e76",
".git/objects/91/87f5761f033c9e3ad9353aa2982fefc9230bc7": "1afcac230ab0193e7892e7dd2ba29e60",
".git/objects/91/b810aafb8eb95c1971e7cc8512290ccae39215": "fcc49ab4036721128fa0952329b68f89",
".git/objects/91/d5f8794f1a9774948274127d58707386c96b6a": "631153d62ff8309a54dc560de0066ddd",
".git/objects/92/4d8c0f07ac3bc1ed1855be94559ed21f99c096": "fb25515c3ce3814a424c1cfc27f3bf12",
".git/objects/95/36736805e0436239412310838018579cc28e6b": "2bb5eddc1d45fa7dcb2fe68d4c4bfc81",
".git/objects/9a/376648c4896ce788a1a57b1014d5df097e469a": "60dd6cdfe80813ea78f0b2c4a78cb563",
".git/objects/9c/96f9fb65c0eca53acfd5f4bc33ff41554b1ee9": "bbd0e1060d19c0cc1cb9468b5b1ba46d",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/aa/c1d253b351f6756b452a6a5d58aa6f9c3bb3e4": "28026cfdbfe77af25822359fe3a3aa0d",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ac/5d762dffc9671ad3909c3ab554591aea556f49": "0f8e0f5749fa13ce65e8209f74198ca1",
".git/objects/b3/ee85cf709404bc5d416c4bba482b100f3588ce": "739ef3ac90a5fabd8d049c6e393efaa7",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/ba/f664b01e2a887573bb29aa27386197241e0736": "3235b0b0f2389c06c15655ea61deb286",
".git/objects/bb/b9a5f2eacdca86793e620ea4222d1f8c103e84": "4e3a9bb89163e58f5e95a138698ac10b",
".git/objects/be/822508d692c98760db721ee89bf9c302b4b18d": "e819489d66bbc9b6454bd4a8a678e35d",
".git/objects/be/a88a6cf52e326994bbe7542f1de0b0042240e0": "8c3cafe47ee195da9dbc4a985242483b",
".git/objects/c3/f4692734ae0e477c4248a0a5ef57367a399470": "37987f3534ea450cbfdf7854b59b31a2",
".git/objects/c7/3661384ea5b8d629b33625bf7be7cc9a742cc2": "a9fbcc6ec35f4a93bf999e5a8ae27ac6",
".git/objects/cc/1b36ac48df4affed97f40c26f1d448d1523243": "302a3ebfef256e89d56ea71b6efcc1fd",
".git/objects/d0/429bdf558ea1804b2e901c0096305ea1f18244": "41b325243efe5a08043790fb8ed21c6c",
".git/objects/d0/c8df12d5926e944db929164cd213c47e81c8dd": "ef2bf4fbb73ec5190f64418cca07ab22",
".git/objects/dc/46ccbb4260a06c03f7ab7946c2b4c967e888c7": "8c0b5f96723dd4ca3f686eeb272e3c99",
".git/objects/dd/bcc438333722920c0371aaa02574693e626afc": "f04c4f2a07d78522df6891317abb2593",
".git/objects/e5/00986c005cba498ec47fef2b0305bbf784be14": "5943d9867079177d6e2c72fa3e117205",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/180a49bd2b3887403da1e46630da4b458e54fd": "8ca22f2be5e483d3d28f72fc872910e7",
".git/objects/e6/f2066e838f7f5f3f3bfb4ed3cbe121cbcb38e9": "db88d1c768ec98aae7ae0edd9acab9b2",
".git/objects/ea/f3934f71a7e1f1bcb167f4cddfd4c7edb93fa3": "d4f4d672db5d681d66ad6902e6323ad7",
".git/objects/f6/9553bdb32ab557b695b1528131dd421e49c35b": "1c1fbc61b132975e3cc56c395aeae933",
".git/objects/fb/03adcfdea6b58abd16defe8284eb770f513931": "871338697f64254c9e2fd69bf73f0191",
".git/objects/ff/02cd00bd41469c128311dcafed24635ce168ce": "9fb2d2c156fb94cccdfc4001c8ceb5b5",
".git/ORIG_HEAD": "58869836d854dad7fa314bcd9e159798",
".git/refs/heads/main": "1258e39909245510167b52380297a405",
".git/refs/remotes/origin/main": "9b5343e657058d60f0f7abb264df43c7",
".git/refs/remotes/origin1/main": "1258e39909245510167b52380297a405",
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
"index.html": "a7abe27884b6a766efa2c3d53a6d9ee2",
"/": "a7abe27884b6a766efa2c3d53a6d9ee2",
"main.dart.js": "1ea06a346efcf23797ae1dcc51978577",
"manifest.json": "9bf0b25ab9fec1b216059734c2d2ce20",
"README.md": "d7006cfda71f8460ace48f017ee790ab",
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
