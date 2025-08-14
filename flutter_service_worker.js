'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "2c1d688a8dc09f83e132ac641d545450",
"version.json": "8fd0d74ce2e3d452bd5579e9b8cb9782",
"index.html": "1c213fd0fd2089b924dde66a9569612d",
"/": "1c213fd0fd2089b924dde66a9569612d",
"main.dart.js": "f982c4b21eced4fa0fe5fba0d64dd5e4",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "84b1c3a47cc3203022c0d27c80876c44",
"assets/AssetManifest.json": "a6370bca7d5470642e2b3dcd22d5911b",
"assets/NOTICES": "038964b4a405b8fca4546287965c6a5e",
"assets/FontManifest.json": "d77d19b89179ff5bc18eee22b54513ed",
"assets/AssetManifest.bin.json": "029a49884350675c4d0536908e463487",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "a2eb084b706ab40c90610942d98886ec",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "4769f3245a24c1fa9965f113ea85ec2a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "dd89e62efa6a76ffa39d82e4f3f6a76f",
"assets/fonts/MaterialIcons-Regular.otf": "f52383b1a4f0f118da87d1045ef6ded2",
"assets/assets/images/ic_c_logo.png": "cac40f82c331b95c531dd35ce8b9a892",
"assets/assets/images/triangle_SVG.png": "d3aea40a47b78d6361cab57bbd4c35e2",
"assets/assets/images/ic_gym_app.png": "c38b6cc94fa0b109f106bd5fecac99b2",
"assets/assets/images/ic_ai.png": "ba3bbdfc8971c41cc5b06b69535fc173",
"assets/assets/images/rating_v1.png": "e4e11346510472ead082da4a6e6fda56",
"assets/assets/images/ic_unity_logo.png": "246bba100d0e6c056f286f300d7d2dfa",
"assets/assets/images/3x/ic_gym_app.png": "c38b6cc94fa0b109f106bd5fecac99b2",
"assets/assets/images/3x/ic_real_estate_logo.png": "64f023f003faf3f27f65e189b9117cdc",
"assets/assets/images/3x/ic_gym_icon.png": "5ce8ed9d74b4fe0ca544b5b47fdb2e0d",
"assets/assets/images/ic_react_logo.png": "32daf4ba082a0ad3e03512d6c9bc47c8",
"assets/assets/images/ic_cross_app.png": "d199304374318bf38ef592a274fbf663",
"assets/assets/images/ic_mobile_game.png": "8c6ab1fea2f1b8648fd455a8f5055dbd",
"assets/assets/images/ic_enterprise.png": "016ef7a64839d4d10ff165b5524aa745",
"assets/assets/images/ic_ios_app.png": "cb34bd894b292eab4c3bf7da8ff168a5",
"assets/assets/images/ic_app_on_demand.png": "c7dafcbdfd86b602333973c9e9643aa3",
"assets/assets/images/title.png": "f6b2271641129520f01868470e5a14c6",
"assets/assets/images/ic_linkedin.png": "2d2ffd0a72b57f0f9573f62824990a5b",
"assets/assets/images/ic_finance.png": "fafca194f4992fd6c2e14f91102808c0",
"assets/assets/images/ic_js_logo.png": "6e45966672386ca670321182c0275cf0",
"assets/assets/images/app_ic_white.png": "1ba9d2fbf72df3abd3816a32e56684cb",
"assets/assets/images/ic_wordpress_logo.png": "24d344d7d02db7f047eb9108569045f7",
"assets/assets/images/ic_vr_app.png": "4d04302dcded261a9db15b4cc728d949",
"assets/assets/images/ic_real_estate_logo.png": "64f023f003faf3f27f65e189b9117cdc",
"assets/assets/images/ic_gym_icon.png": "5ce8ed9d74b4fe0ca544b5b47fdb2e0d",
"assets/assets/images/ic_mobile_n_entertainment.png": "805e06b70d4dbba07303f6b7ebd567b4",
"assets/assets/images/ic_games_large.png": "a574e343763b08e639db9d349ee91073",
"assets/assets/images/circle.png": "e3527f34a44238b84c83119f582c2166",
"assets/assets/images/ic_manufacturing.png": "b237eea8986780a29d9fc274257030ed",
"assets/assets/images/ic_msg.png": "e686f2ee6ab331fab961920ac4b387d9",
"assets/assets/images/ic_clutch.png": "527b342b3b9624f414bae052a76fcc07",
"assets/assets/images/ic_insta.png": "44e2bb8bb56bd28ad27661f3be0e97de",
"assets/assets/images/ic_real_estate.png": "c48a6e5dc2e348e4592a6f4174173c38",
"assets/assets/images/ic_real_estate_app.png": "330e5aee7448016c52966a576bb680c0",
"assets/assets/images/ic_trust.png": "f22937c17e76b379d91e42309f5b118d",
"assets/assets/images/ic_php_logo.png": "b640010e8270356060c1cd515ac44d3b",
"assets/assets/images/ic_phone.png": "2d42e97f7d154c28baedc1884b071f34",
"assets/assets/images/ic_education.png": "b3d4ec474afde3d598c0d1f756371a48",
"assets/assets/images/ic_i.png": "12de42b22b835e5af739b5d9b51790fe",
"assets/assets/images/ic_ecommerce.png": "f874caf2840b71910d9133f01383d4ad",
"assets/assets/images/ic_node_logo.png": "458b8ede736e45ca22a917d233764876",
"assets/assets/images/ic_unreal_logo.png": "d247cce4cbc42f88a8d112e256bb6e8a",
"assets/assets/images/ic_wearable_app.png": "a986dfcd2f21ecd0fa25b9a9ca2eef9c",
"assets/assets/images/logo.png": "44cefaf3d3267f48619cfed44479bac5",
"assets/assets/images/ic_angular_logo.png": "e6aa261cdc011f845e0e7c476f2a0ff2",
"assets/assets/images/ic_sports.png": "9afb02ab1241683efea2f66f1b171842",
"assets/assets/images/ic_mr_app.png": "9b56602e2eb93899b805b8e0fe77e182",
"assets/assets/images/ic_marketplaces.png": "21fa1165861a9d1b61d0745e25513bc0",
"assets/assets/images/app_ic_black.png": "92114e059854332d83c89a044b147d09",
"assets/assets/images/ic_photon_logo.png": "b915e4385287f0af64f828544fdd305f",
"assets/assets/images/contact_whatsapp.png": "709b7b90e18d2b27a6f18fe9cd6bdb0f",
"assets/assets/images/sprinkle.png": "5075a0a3d2803439e66b5ce025701ee5",
"assets/assets/images/ic_choose.png": "d142639e007e2c002e79bf263451dd61",
"assets/assets/images/ic_android_app.png": "fdd180c7e016e15b48d5be78ffa75134",
"assets/assets/images/ic_web_app.png": "4de00a2f8af63efb860ea02b4ba55014",
"assets/assets/images/pizza.png": "08fa2249d2d5ff532f9552232dbbbf3d",
"assets/assets/images/ic_food.png": "4f2f980b170015fe907b24dd2cc9029a",
"assets/assets/images/contact_us.png": "d3e221d23e90c28d117f82d007e5fdc3",
"assets/assets/images/ic_game_app.png": "991578593d712319fd96bf7e4a8191b2",
"assets/assets/images/ic_python_logo.png": "836e0a19fb80bf85787028d121b77636",
"assets/assets/images/ic_engineering.png": "94f57b5a8c359c9f57596677e80eb486",
"assets/assets/images/ic_blender_logo.png": "0dcc89bf8c2a5991bd55522138f11c8b",
"assets/assets/images/ic_ar_app.png": "acf8c3c5497c0158924c9058f9f2cf2e",
"assets/assets/images/ic_laravel_logo.png": "65d9052e563eb8f890be435241e056a0",
"assets/assets/images/2x/ic_gym_app.png": "c38b6cc94fa0b109f106bd5fecac99b2",
"assets/assets/images/2x/ic_real_estate_logo.png": "64f023f003faf3f27f65e189b9117cdc",
"assets/assets/images/2x/ic_gym_icon.png": "5ce8ed9d74b4fe0ca544b5b47fdb2e0d",
"assets/assets/images/ic_html_logo.png": "e07c76eea1c2cf4a4110eeadb2a292f7",
"assets/assets/images/trust_pilot_reviews.png": "bac2db8f86598bc8c6e8d8ca0d23dc60",
"assets/assets/images/ic_travel.png": "a082b8a7a16431ce7f9a62962a1fd757",
"assets/assets/fonts/mono/mono_bold_700.ttf": "742c57825a3ef5a820fd5222791b7448",
"assets/assets/fonts/mono/mono_regular_400.ttf": "aed8bfb8c76000abb80fb8fed587cebc",
"assets/assets/fonts/mono/mono_medium_500.ttf": "f28b884173e34dee647e05a1ddb678f5",
"assets/assets/fonts/mono/mono_semibold_600.ttf": "2650633df31eb7aa5ab87c380916f287",
"assets/assets/fonts/mono/mono_light_300.ttf": "ecbdc2e9896eff7849740a6c77472636",
"assets/assets/fonts/mono/mono_extrabold_800.ttf": "6d9fc1db31da8edda9efae79a3d73233",
"assets/assets/fonts/mono/mono_thin_100.ttf": "48a964f8654dde6ed7dc39f851f63fb4",
"assets/assets/fonts/avenir/avenir_lt_std_light.ttf": "92bd73bb1c6825b9a2f9a29f677b6679",
"assets/assets/fonts/avenir/avenir_lt_std_heavy.ttf": "fcbcefcb10e05340f3cb61a6247bbf85",
"assets/assets/fonts/avenir/avenir_lt_std_light_oblique.ttf": "2bfb316b83153d710ec2cb0487293cc7",
"assets/assets/fonts/avenir/avenir_lt_std_medium_oblique.ttf": "65c7554b57a40a27ad1a2d6f1523dc7f",
"assets/assets/fonts/avenir/avenir_lt_std_roman.ttf": "7af2f2322005eb4b6ec9c8b6c122320e",
"assets/assets/fonts/avenir/avenir_lt_std_book_oblique.ttf": "d14916dbff4b6833edada6f1cd9ff455",
"assets/assets/fonts/avenir/avenir_lt_std_medium.ttf": "f8e17122029b74434a97cc9521fa396b",
"assets/assets/fonts/avenir/avenir_lt_std_black.ttf": "a6c4279e5882456f98698683a19ad214",
"assets/assets/fonts/avenir/avenir_lt_std_black_oblique.ttf": "f152027021fe6a7df92c60ebd83fe99a",
"assets/assets/fonts/avenir/avenir_lt_std_book.ttf": "7615258865de477d91fd504ed6f18b64",
"assets/assets/fonts/avenir/avenir_lt_std_heavy_oblique.ttf": "d7219dc20d1d1943b2619399d88a8137",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
