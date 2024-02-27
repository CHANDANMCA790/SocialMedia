'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "01eb2c11c2685e04a0e3b0556549b914",
".git/config": "a5d9093b553f075250c47c3561a903dc",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
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
".git/index": "e97cc665d7649d40854c7b3e9e625bbf",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "b86a7524a776e110aa602307f0f3b652",
".git/logs/refs/heads/main": "bc59230dbcf1c74262b39bbddd30d47e",
".git/logs/refs/remotes/origin/main": "877ffc68e6351d7854c5a1f5114c2a58",
".git/objects/01/b432cf0b251b663f22a7a94386457dbfe04252": "0c422a3033876ac7a114c7bc09b83dc1",
".git/objects/01/bcca7d1c23955f7aeda6a269b1b7f540802096": "635a6822e2a56f7f333d54c66b0234db",
".git/objects/02/a397ec6b43efe29e64dc2667ad9e28a7590290": "77709b236243d9afa499c9532dfadea7",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/0d/d68f360843dd0e01085e0a0bcddcf373b557f8": "e140a4b707e03c183f98e00cefdfc064",
".git/objects/0d/ea33f6531c4b8397b942ede1ffef934e25b04c": "f39d6825928d583f5798f005126156c7",
".git/objects/12/59d049c5132676fb7b249a263caa0fbee39857": "7c1c2c03373264f06db7d0ab13680960",
".git/objects/14/918c97eb34904c392568d8d628713fc7fb814b": "acb6544c905ba71193aa08c2351735de",
".git/objects/17/5b96f41048ee497bcde2678d0021f5c5c89adf": "2a1a7c6cb6d3e39b7a95d114f8790120",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/1e/4f8c2dc50b1531a8a3a6d30a1918f01e18b095": "87f937dffa11a76e6aba5fcfaa7062d7",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/1f/686edd1465272558af328ca43cb7189a0059e6": "5e83820f6d3e5392693d45bc239b2b61",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/24/7991e72c57dd1e19c236c69218cfe349d60926": "a4ecfec5997b9ac85243418ce9d775e0",
".git/objects/25/5ccca3a60608f9c46c311f62d3ae3301a8fb8f": "2f8186c865e64c11d2cbe990f499e183",
".git/objects/26/fe9d48f231fb15a62073bcad29542127405f11": "503006ac82d29c8eb0e87e75d3860700",
".git/objects/2b/e1421a1e90eb27b41d01331ae4b6516a38562e": "0a28b4b881cc6e0c66cf2613e1c922ae",
".git/objects/2f/804ca3167546f337d5e8665cd5359149a531d6": "37cf727f2856691f4b78fa961232a121",
".git/objects/30/6dac5ed8d40c1a67b51105b2c459a386061bc3": "0a17491a92c8dee602194b7eabdb73a1",
".git/objects/32/dacaa60d9fb2ff3cd75790687f94b31600918b": "a5303f04fa709fcd7f08d25fe74fc400",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/3c/03b409144532fa409b9caecda337a2db763d35": "5476075d95ce38e275f0b5cb36a808f4",
".git/objects/3e/b04160a36078173743d7acad98e105b9305b6a": "28c6ba518a625cb28afdcd23df8d8ef6",
".git/objects/48/710941ec632db0514369f3b61f0e7b723fb631": "a30eff6d8ba451fd9b125587ce886d04",
".git/objects/4c/a2a7c226d2c3e26f0b9dde74214486d0baa896": "734657b1f27c72d07dd9e52a25c020c1",
".git/objects/4d/a7f0e2c36d96a21e0f9fcaea56d9382e0eb5cc": "4113073dd9d0a0e8311fdbc5fc34c129",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/52/bb6966d7aadfd5f1ebfd79a71a65d49ef53cd8": "3bc2319dee40cfddce807de72fa9a626",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/61/8792e502a08b8bb219a5ffbd753d42b9aa83cc": "1ce383b85425f8aa11d5583ca11bd835",
".git/objects/62/1209e2b7be67bb2f5a3974469683ad86537df3": "a384b24608d74b24f749bf0636d2577a",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/63/c9d77e3d7b6ffbc66172b713c5b16f94901b0e": "a65d6fb35ada0745af3e17f6eedeee4d",
".git/objects/6a/4c99ff95e35b18ff6db89926e9d16b59b88654": "e41ecc2d4fc5b4897fb876b1d8a62f1b",
".git/objects/6e/a39a3c762c2b269b7453df35289d6721baa67a": "161743e7f9d23bd204cfac57e7d5b1f6",
".git/objects/70/010cc4761157d9d7cc2d082cf342e63fe1190a": "baf21d1dacab382149ee93266543ff40",
".git/objects/72/009f703d3241e8e68a5379a25d337a8f6ddde6": "49c5c3b4fdef50438fa1992c43f5fdc3",
".git/objects/7a/9d6dfe8f51fb4df278e3048df1d0fe87cf0f54": "c88a110e2746cee6513725553c6b7d45",
".git/objects/7d/ae4436eafabd0c653b821c07461a6a8f0a7ef3": "df8ef219626fe7279065928f869b6b8a",
".git/objects/83/0e3d19e7f2ff19bbb4b955e3a38e3328837e12": "4412f19a8aebd49e1c2fb821b641e232",
".git/objects/86/723c9ea047e6fef6f82e1ec57f278a93dfacbc": "d67f44b8d506a651971aca6701d1aed7",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/e760c39dcd09b3676fd696e63de8e3a2926749": "88937c18ea8c84d1f10d646efe5edcee",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/92/0c8b248f1cdb83a3999f7fcf8037800f40ac5d": "cb710b1744d3c776403578bea7093e38",
".git/objects/96/5f268e91b7f468ea4ded85a8f2abcddfe1f5a9": "6cde620475753acf951a3fbb6b42aca1",
".git/objects/97/a9e57fbeefc8ebf71d9efa68e4f134c7a18d67": "22c47ce3be0d1ba798cd3c83fedcdf70",
".git/objects/9c/fbd88006a92b0a895f7c3a57bd6576d28c0147": "ebe54daa677401d344c057ef8c2cbb91",
".git/objects/a3/003ea0c4e58c6a85a14991b61b3cf1366020ef": "e6c7d1d83e841e131e0d06011b21a9b2",
".git/objects/a5/8f6dfe8a5139373ce33ce8deaabf85214d42fa": "86fd01aa2b0575a3057b587a27c30759",
".git/objects/a8/234e78324011301c932efde8dd789fba10495a": "5ad9ca983e505191e13f526cf3be6ade",
".git/objects/ab/7b356f86fa013866a167b0d140e7b5a5d863ff": "01c84963957006b2a0bdea36b5167ad7",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/af/abc5896b637ea75d0efe0a69308704d4df1dcb": "a0f05916bdd181e19d147326bc28a313",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/17c24c17f2bb176ec0829d045b1b4700df5d88": "70f58ae6a2de9ab530ab7d846a220cf7",
".git/objects/b8/764a880886ecb2ea51002c59757ceef4fa90cd": "ead23793886bbb94b487699afb489a31",
".git/objects/b8/b6c8e902225369e2cb792bc6755eb8f1922cd8": "85df68b934190257d63bb558c3c628ab",
".git/objects/b8/bc934acd7e66c9871396b35f6b6f7eab2e66f8": "d170e0eeeee0d62e67e06c0db38e6353",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/bb/ae88ed101c04ebc42a58ff1628f0d6c88bc86c": "8e219f00d090e25edb035877509304c7",
".git/objects/bc/4626ee0f30191dd971e93ac030501b84ade505": "c465e99c7c0c491355d3dfcaa7c04b02",
".git/objects/c4/c82e20eb153a8a0a89293e15d2090162ce654b": "9d00077406b3163ca41beb9f227c02f0",
".git/objects/cd/03de7267b6233617e9048b03c1698f49e48a41": "79ca03058276c8645cf69e4581c1ea69",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/d2ac2a4defd4a5626e4d0f3356c8934794c072": "710899f2c01787595d012fdcfe3a4b6c",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/db/cff9614fff80277bf8ce4bcc47760bca02080e": "ddd11dc8ab1c672e4e411cef2f45f26d",
".git/objects/df/041cd32bec55d35c3b08e3662fa1283f384d1a": "e98d2e937a2c4b3aed77e631e25274e9",
".git/objects/df/3cb96d0d9888ae6b8bc00066d5b1fcaf807519": "a815c7c65349de13430b5a7258361343",
".git/objects/e0/36ef7f037d5030a97848f187fe06b8a8f83c57": "40e77f8add453e6c22f1598be0f31efc",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e8/55dc987b0db3ccd24a8869a087233a0e124f27": "9b242467f4dfe05ce7d2727a68a1ea66",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f1/0a07db7cc295bafe4e9a0ceea8417433ecbb20": "12a7bd69cae2b3a46f4545771c01d159",
".git/objects/f2/1e02a159b3458f474f748d1885a2057101aaa3": "67c89178fab231dbc80c5fda116632ee",
".git/objects/f4/bcddea5c9e70869ba314d466bf7ba217c726a8": "345479f443a3e754a7a822fb113a718e",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/refs/heads/main": "cef41130dbcdefb2ed45990709b3e82b",
".git/refs/remotes/origin/main": "cef41130dbcdefb2ed45990709b3e82b",
"assets/AssetManifest.bin": "d36708832dd2b2fa9af89703a511f791",
"assets/AssetManifest.json": "11907f2158b411be967b36675bb7fe32",
"assets/assets/bg.png": "e4a0824c7874962d4fe50527b2bfe32d",
"assets/assets/fb.png": "98f7d71b672e1f32c62bacda3a8e9eb5",
"assets/assets/gh.png": "461220d753672506d30e7c148cc59d7b",
"assets/assets/gl.png": "f4a4e159a32bb1a1f87cd60c2b2cbc76",
"assets/assets/ig.png": "43a9a700b7c19b9d492cfc39fa10c8f3",
"assets/assets/in.png": "a6463e8e4705662f2a80d8305b78517f",
"assets/assets/pro.png": "433e9442ba773051f818f1a14187a5d6",
"assets/assets/ps.png": "314c35d5ae20dc1e4869bb2d7c6fa3e2",
"assets/assets/so.png": "3fe3be9b2a6fb70899d9b39b41d8ab24",
"assets/assets/tg.png": "eca1089698124d78df17033e56f5ce60",
"assets/assets/wc.png": "331e551376270888bdc5fa37697100d5",
"assets/assets/x.png": "34ccaaee1f967e691d9f5cd6c07d0366",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "6fc425946cc001970357035708a4b21d",
"assets/NOTICES": "70c6f2928953b48083e00c3934e4f506",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "f25e8e701660fb45e2a81ff3f43c6d5c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "a5d7457fda15b7622c14f432ba63039a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "b72c617acdf2227c8b1413215f620711",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "b46259c9097b55fd9e5bf500d9642531",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "9de43ffa1107af483046009602d82f7f",
"icons/Icon-512.png": "b8af321f0d705938dd1853b28674737d",
"icons/Icon-maskable-192.png": "9de43ffa1107af483046009602d82f7f",
"icons/Icon-maskable-512.png": "b8af321f0d705938dd1853b28674737d",
"index.html": "2ebc124cde53ce7338a46a55ff311a24",
"/": "2ebc124cde53ce7338a46a55ff311a24",
"main.dart.js": "626bf9114347ca16e4b9546b7cfafbc6",
"manifest.json": "cd822ad8e9fa73116a257d530222ed3a",
"version.json": "07193733b152788432a64aac3c34bb58"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
