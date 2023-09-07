'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "01eb2c11c2685e04a0e3b0556549b914",
".git/config": "e5715afaef2911db1266d4cddf49e626",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "68f29c50781ec3f2845beafbb159f094",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/index": "cfa59e4b7e47b6b065c271d01bd721d6",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "b91ec522b241a167111f7234fe7f5160",
".git/logs/refs/heads/master": "b29aa6396c364ffd66222ad908f58355",
".git/logs/refs/remotes/origin/master": "9beb59399c41911c7e2ccf1cfeb8df06",
".git/objects/02/68888037eac6b7de0b88b577eb4846233860a7": "350c7dae9c23921d6499e5fee8ed493b",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/07/f965a6769f0618c2a166e57b9197d9633e4ae4": "62b1d20e4db36a16a907b7d4b6d8b441",
".git/objects/08/dc820567b3c7b012e64d9aaf1a7c49df8c1331": "7287d18d34d7ccadb4c049736790aeec",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/17/a4de0aa37da6ae5ee7d0d9c14d2f59bf44dc72": "9ea3daed8e42ae1e70aef767c8fa1119",
".git/objects/18/1cbd8945f1a53262bd1f9ab8aa1fbfa1c95ab6": "948458d3a7bc4994cf70684ba0f4b183",
".git/objects/1a/555999d4226f014475767efa772cb76623b025": "05b22cf416739fa61a6185d58a0a9490",
".git/objects/1a/c7fed18a58963392314028c4140cf1d5677b5c": "863298d7e1301ab81f956fb0ea29798a",
".git/objects/1c/726254592a71e9c6b32039d0c88d038aa96623": "30bcdb40fd979b5d14b02d5e531d3d0d",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/1d/5c72b19d7327ca13013e0e503bcc599fe3b4c7": "602c3005848c7e2d2ca3031ec462c74b",
".git/objects/1d/7dc079b3bf5aa9285e67722cb6bff6f050af06": "c47fe340fc72be693a7fe1cc2a2d5a61",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/1f/686edd1465272558af328ca43cb7189a0059e6": "5e83820f6d3e5392693d45bc239b2b61",
".git/objects/20/8c9ad96ba634e6363e01d66f891bcd8880006d": "4f6a8a2b4179c68afc70d65377aeae0a",
".git/objects/21/1c703e68459e2076fe0a4fda7c0c37e9116b4e": "38bee80bc8023ec5b950dbeb9be242d2",
".git/objects/22/9aae2c81e4acdcfed693215661bdc94bc15694": "cff160d34b93582e0867a3572c6dffca",
".git/objects/22/feb4c88aa2d3a62b86080b67cb0a90fcf04ad5": "4610ed83fe2b5853d909eac40642c136",
".git/objects/26/c55670eb78d7920800a4c654bea87f6acb6f06": "76c49aee07e90ac0ffcb7c28526a7ccc",
".git/objects/27/2ae9ed6e1a4c8b8a16fb5ab59d9325fc79d613": "4eed0b5849d5f6f57bba42c98f764266",
".git/objects/28/99e300ea472e1e34bace8715aa4e5a176de409": "e28565a9bbbdcb92fe0b76ec261a3a6c",
".git/objects/28/b6d54519047d6b9e7fb5160ab2d411ee349636": "ea303b253263e48400f488973a5fa3c8",
".git/objects/2b/52efc8e2a39ffb6e428bb59eed6b6b2a7df2fb": "24fd5e1363816a505d0956b2b4caf4b9",
".git/objects/2d/21492e0db206f57ed9104bdf40fe46fd0bb2ed": "e1e40f168be3e5e137d79004e982331d",
".git/objects/2e/42c275b453b0368a6dffee32e198fbb747f580": "e141103e91920441c97b5e2b9f5870ee",
".git/objects/2f/9a5c9356c30fa0dc442a2c0ff763e9fe998ca5": "6d78a55a787440b5e5f42065923a8b16",
".git/objects/33/625ad70bb085a2269674979e69768f287e3a6c": "a2d8388a3ebcad812e65d62f4abe99ba",
".git/objects/33/cf9e362cf604f1d05b80bfd67d6d5e563b4c4a": "7eba8541c400f6206fbaa3219fa44585",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/35/d6bd780c394a0a4ae05333df6b3a866e7cd813": "c6d8fa055a3b5738eb6a6fd061074704",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/3b/49ad63464606cb2018c0e8c25a844ef01a33db": "361f1a5a60e6ab62f17a546c6102e1b6",
".git/objects/3b/a099a3b871538aac853808928301d36ea56ecb": "014cb16e3d66a45d09892f378f0ea991",
".git/objects/3c/4231f1b8880f444d0dbc89c7e9137d94ace22d": "37fbd7a312c83c0f832e65531521b726",
".git/objects/40/0e29deb869bf8a2bd40bd458f54f0b784f226e": "3cc02e7de298c89186ac2b49a30a57f9",
".git/objects/42/a0bcd8bb490270983afbd7314279b20be288cc": "e5f2e67624382f45b21d8bf8361135ee",
".git/objects/44/d746f731abd48b36c4261f0efab841cbd1405f": "488294823338b63cad37eae3f2bd9925",
".git/objects/48/1dc2f25ad9942c633fed4132ddb0f604f9560a": "4419bb1163e584abcd380dc7c01b16c3",
".git/objects/48/2002bdbc094379129a706ce75d671415d212e8": "d9b181884b9c84a48eff106e00802d94",
".git/objects/4a/c93b4b39efb4e741709718b778bd06ee7c771e": "ea2d9ebba023e79e0416da3e27f1a126",
".git/objects/4d/afdfe71d4d3e5596374d9673ca7a9e346c1042": "2a6a7f7f78ead9c9c8d387a23c68f645",
".git/objects/4e/2d68fa9a9e35e052e8213ae2e2205a1f1cdad0": "b58cf6bd032dbbebc0937efc25009c5f",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/58/0d4e03eedf6cc9a70f886ff353020e869fe1f2": "33b23cf372973fc6bba95db9027efe60",
".git/objects/59/77a51f7f60e69d17e309e5e5ef1f8d84a523b7": "40003928918078ee8058945441343304",
".git/objects/5b/2c242d3c7ff508d01b704bce1bcda55197c3eb": "98da71ddc80ffbcdc1b58e8732341f74",
".git/objects/60/d5bc3fe704b9117391ab76a5cfb7a676a022c1": "ec4aa95c010ce0642bacfa1cdb8021b8",
".git/objects/61/083838c65d610f77e557fcdd85e5c789dc75c8": "7f9b20ce31d6daaf2ed5b9d7fc112c19",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/63/ccdd4f1df84de2232dc528f0da5dee7eac96c1": "a2249e88d382736ef0910508d91bea3c",
".git/objects/69/2f20751030c4928576112dd36703233631b9c4": "b62dad7ea8839abdf748010697b0324e",
".git/objects/6c/a8f7682ffe812e8154af1554bc0d8d16a76727": "d79c3c750ed068ecfc4989b6ae6263bc",
".git/objects/6e/a0a3f946083ca3f862f1210f4abdf5a2610ce9": "ea0978fd2f6c1db7e400d03473aef122",
".git/objects/70/010cc4761157d9d7cc2d082cf342e63fe1190a": "baf21d1dacab382149ee93266543ff40",
".git/objects/70/895c0e4809d7c8712d050dc9847d4b63514ea1": "ec382107df59092b2716943b4b21da14",
".git/objects/71/3c5aafa3c97c3c8933ca24c001271c5a5ce4d5": "3a772660822ccf42234707e8c75374a2",
".git/objects/72/743a7e67985b32b95e3a008341cf7e3a140c9a": "2de298c785f972a3550aae9c775f53c3",
".git/objects/75/5b9e6fa4c1418bdf856db81ae4c0145f465d43": "fb64fe82dea73cc44db62c778f5c50d0",
".git/objects/77/1681fb848558a95da5546f1f1bcae7d243ffbf": "18a0f688cfa5e768e468a87a63f24185",
".git/objects/77/739262bdd1b39ec463dee50ecd91809a9ed5c8": "4386251c863e493a085562848ef6a2f3",
".git/objects/78/d9190ecf1d94f8e809072110fc5ace987a9132": "3db2ed4f422a089025b062abf2dc454c",
".git/objects/7a/901ab3c9ea35fd03249ec08848c815ea630ff6": "9a34d5401a65b60d9a530fa085c87b7f",
".git/objects/7a/d6a5ab724ccfac453c16594d58ce6d14b0d9b3": "df83a4fae75e068f4f24f694910dd718",
".git/objects/7e/ce5e443059ae75e940f18209561bda605b145b": "3323bb1a1ec1eae905de9a9e7122f8b6",
".git/objects/84/9bea7724ffa03ffdaf81fb7507176918509b0e": "42cef85901fc706bdf8c9ecd1aff33db",
".git/objects/84/c4f2b18d461e6839568dff2ae3ab179c6e1e12": "e5c6d9d4c78da768f859ff46c147c9e3",
".git/objects/84/d5b8aa9ffebfdc3bd0d240f435cf5aced4e97c": "e52266d270abfd208db72954320125f4",
".git/objects/85/21d2a6ecbf268df6bc0d3a42a12369d3431d1a": "fc3485c1177e343fb6bd8db637947624",
".git/objects/87/480301b702481c225158c7cdd0c14f80483563": "1dbf8b03fca0e3711ca9d069976bfa97",
".git/objects/8a/61e5d8ebc8563b68cf5cb08d863b93a14b98a2": "0d0c03064ebcef645ed0e0809274dcb3",
".git/objects/8b/d52d9e31f2e2af4dc29344a2653ba1e2feea3e": "3566624a0fabd29d3dd6588e35d56e96",
".git/objects/8d/443d5d56ac36091e9689cd5d1b1948d9124545": "eb1c5a32937a98bb8b8612d5fad02130",
".git/objects/8e/2d09b6ba618e083fd3083466fbeccd047f4674": "81b0d825fcb96d80ff29c2a0dff1a1d4",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/91/c7409dc92500e78e2113ef86bc316830ca6a11": "6a08a9a598e2c97bb657f21bf6d54932",
".git/objects/94/bfbcf702721fce27475b93d160add48558c6c8": "53f85714270d8346b8b77a11f0e2635a",
".git/objects/9c/18822406260b93aba93d207ac58e318b1e5927": "ae836f61a04c1e0e5a68f11d57dee12e",
".git/objects/9c/72f0967221c414af9a5610dfbbe766c8004e59": "83c07b28f8addcd82a9a5b109ff7c4cc",
".git/objects/9f/20c17ce2ee9b97cd8f9a2be7b4fbce20958f9c": "ae2c012c4620b6082ff24e509669629c",
".git/objects/a0/dbb3c52de45974a99d87a3e16c35d270bf0f7c": "4575ee7f08a56387d00809aec8c4fc73",
".git/objects/a2/71397e3a287a27288cbf1133491c67194774bc": "a813b66314c20e5178e99feceb554016",
".git/objects/a4/bb390cc123d274d8efd5fecf7b497319786630": "f917bf0d94e8daabde58d37a761af181",
".git/objects/a7/16916b3fe31cf2060e172628a2355d95d26234": "6ad841a33b3d109111a2c930d3161725",
".git/objects/a9/0762845d658c5c4850ccdc2456d3a3e3fd075a": "058664cbfc5f4d1cbcb3f7261b7f9d5c",
".git/objects/a9/91f51138ffe059d588003dc7936aff059a0428": "b73a35563fa129bd884d8b5c53ee9231",
".git/objects/a9/e0b6b8203f4a98f35c49d72372aa912338f82e": "067d38da72caa85a918af64f6dc281d1",
".git/objects/aa/0a7bd653ec20b94f49b64f9b71f9ac286398e6": "9de4a2178aac294ebbfb7a5013dac4d5",
".git/objects/ad/2f90b78480aeb6608226d9db4ecbd3ec06aaeb": "4add97a99941aa0e9eed0f2173416ade",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/ae/42751784ed318ddde0ddfa41ebe6555ce184d4": "e42702707d494a373aa7d1bacea23454",
".git/objects/ae/5fddbf18b831e63056393cb256226acd3d0ead": "221b82181cb0855f8364eb3a384c35c6",
".git/objects/af/6719ace2c155cee049b7f456c55cc0dd4a82ce": "dd438cc5aabd42f23ea22195c31e8875",
".git/objects/b0/46c0d58274966cb474466c803bc2ee5b6b246e": "25fff34036b0cc48c8983dda84036fa7",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/b2/b39aee19fb9e5428d45d9326275c95667ab04d": "c4ed29d347251e3942297d791e535d9a",
".git/objects/b5/9f405dd988ade17a05fdc0e7f4141d59b9db51": "5b8f82722bf8d06bc39efd697f1bbc89",
".git/objects/b8/9db7c581e3a5a5eae9a914c9643039d7c47c5f": "1885dd742f80989f6634dc85d060c8b1",
".git/objects/ba/50c828254e73c225377b30de8f6be700a35916": "87328c8715b1cdbdf29836385def957b",
".git/objects/ba/86c5eb654a153d6b89f4e79fcc04fd460231f7": "4bd062c75319de20a39a861dd9dd0867",
".git/objects/bb/64f9bf34faff78246dca252f2fb00f9af091d4": "7a97bbd793b02878efec8507defd3010",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/bc/0cff99d64b7e8de94c36e1ef43af8c5d1a8b75": "774651e535fcb1cb7cd473c868ec792c",
".git/objects/bc/2f08030c8d1fc3be6109b8d676ac0558f44383": "b9ad631c23460794fce6ab66955412a0",
".git/objects/c1/5b6051c4002c18c04d7cd730589615f49424a3": "e8fa6ba80687d6b30aca29e9961061cc",
".git/objects/c2/4f6fd781c6fa2766ed4c828cbc5999e2fd8819": "febd1be470eb6c9238e4cf9638f0a44f",
".git/objects/c2/ce2f145b8dab089b780762afbf4eea4f2a4d7e": "883d82c23f7d5627dd96e0e331ab32bc",
".git/objects/c3/9efac0a8a785cf305b269a22157c5a3ea8d48e": "2c0ce75df570d4fa3248eae76c66ae32",
".git/objects/c3/bce9606013219fb864795eed78ee925e1043b4": "bee2a2a8decbbcf7c697400d6e9ebb19",
".git/objects/c5/b3dcbe13248e451950d0ec2563e938659b90e1": "00b36bbe8849776cde4330460b59c4c9",
".git/objects/c5/f4fe25edf4c2ceee175eb131d53bb897c31a91": "b82162bfddc0d7c3e4626d35f72d2547",
".git/objects/c6/42c4407383040e2118b9f130c5b37015cb90a8": "0a650bda2019ff9d87abba2cdfd41bc7",
".git/objects/c6/52a2a8c92e135637cca2b0d8c39ae59911ef70": "8ea54df50724e6ec53ed28ea30914920",
".git/objects/c9/c40b232c94713c2df25f27435c204e80d0be85": "54a50a7aaa79376b60536cb2ba3944d9",
".git/objects/c9/fffc92840206ff157a9a1211497dbbe0df1920": "7b49077d4e23bea6fb5bfc1f53783162",
".git/objects/cc/fab74c1f56c330985060e2247607eaedb3c7d7": "ad5b6117df489509af208438785f208b",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d6/ff26ea56af225bf5019779451f9110f748433e": "cf7985aaddf4ca6ecdd35d1078369310",
".git/objects/d9/29cbc638ca660b25dcfcf9f3784fdfad387730": "472ee6df67cc56f34173d839613dfee5",
".git/objects/d9/8b2ab795119e7fd8b2e85dfd59dfa3721c5951": "e2c3b78598701bc83988486c88d1cb4d",
".git/objects/d9/b1bafde86c08d3055b7cba680a14b33631bde9": "727ae629b98bce35d1e8394ea1c677ca",
".git/objects/da/f22582087d4ea9f88ad575ebcdc8e0a3173b39": "a6429270f5e1def792f3ad94307f0611",
".git/objects/dd/26c1dba69f30dad246b510833a101c85d458dc": "a14f9ee16ddb228f4212d2ec4f26e26e",
".git/objects/df/c0eda68261192d29278143a6a3f12051fa8e0e": "00fcc04d9eb83c58ab7263d9336d85fa",
".git/objects/e0/4de294698c835e97e1bed23d5ed0b7510e947d": "efd84b15f9b8346c1768010a879bb3f6",
".git/objects/e1/a489244af064038dadcff0a966ace32cd301bb": "e4f7e50a5fe2356414067d087dc06278",
".git/objects/e4/1cc3369257b56483fe8e91550af3aaabfce9f0": "1e5c6b3f66c64e582a9f336f5892801a",
".git/objects/e6/02972a5e9b863e59054f618942eade45128da3": "fbc761c63a212eb5aee417bbc2acba6f",
".git/objects/e6/5c55a5b595e20e25bd59a1c8bd161d5b13e8a3": "a790fab1222de456f3faf3ebd3e8b99d",
".git/objects/e7/2468f31057576a4932d6dc44d89e22c87ef456": "944295fafba4f8076b623d2006dec555",
".git/objects/e8/04c742d5271e0923243598d37e58bf8ff4e0bd": "d565aadc9b3cf640f112863a7d22f4b5",
".git/objects/e8/8345f292a1cbd961e19e907a14c445620ed605": "4bcf1b609f2fdc2f6bf28f7d072cf881",
".git/objects/e9/172768203f60643504abf5fa308a2a037f838e": "fc974735853730b9f636cc6e7d959dbe",
".git/objects/eb/bcb66c98cec4a14756d7cd36b6f66f03195465": "b50770d5a62dd9ea2d34a7cd23eb3ebe",
".git/objects/ef/6cc5f3ae68afea36d37046b4772f14e737c8bf": "14de7f4b26be2e6cf934cdb0e1cfebaf",
".git/objects/f1/8a2c67e0995b7020ffe7aad4bf9042579664dd": "4ea4d5d1d427cb3dbddbcb21a6c6d2e5",
".git/objects/f9/c2986e592f6ea3ebc33c1a8cbf6dd5de20014a": "168d6c37679a355d643c54cfa20fc65f",
".git/objects/fb/323a97b7f8411a1d791e1b181c47c4ebcf5005": "6b276612d045a86210c1aa3636aa89ae",
".git/ORIG_HEAD": "36a5a89d57404d57c866711ae2737d29",
".git/refs/heads/master": "e54a0d6491683ebbf593db3eedf9b790",
".git/refs/remotes/origin/master": "e54a0d6491683ebbf593db3eedf9b790",
"assets/AssetManifest.json": "6fce78feb6a5cdd12ae1d528b1607701",
"assets/AssetManifest.smcbin": "1680e7b63a4ac3759c76e9fff0c093a8",
"assets/assets/1.png": "39754f9cc1f6b5a417587c766ff55c0b",
"assets/assets/bns.png": "d446ac6b472c97ecbbc297d448060123",
"assets/assets/dsc.png": "bd954ceeeb42b91899ebe1c3b0d79850",
"assets/assets/flutterIsl.png": "ac7129376003882c038a22112591c71c",
"assets/assets/fonts/agustina.otf": "7b9833076716a8d14eec0cf885a3153c",
"assets/assets/fonts/montserrat.ttf": "ee6539921d713482b8ccd4d0d23961bb",
"assets/assets/hi.gif": "cad5918d86b6a7e83f1fb4acead70e4c",
"assets/assets/logo.png": "44f15cc1245221da88a2a61b53f8693b",
"assets/assets/mob.png": "a038e212c5b612a1a26ea0d08a1b3996",
"assets/assets/nafezly.png": "51caf3094256cb5cd700fd7347c41143",
"assets/assets/projects/assets.JPG": "1f9d387c33dff1fdab73f7b09c3ab687",
"assets/assets/projects/assetsB.png": "fe2961e5d12587d0a2f8d3735cf7a096",
"assets/assets/projects/covid.png": "7969271793ee92d42d48026ca3b8d229",
"assets/assets/projects/covidB.png": "828437b9d1a7a9a6003809f06a1fc84f",
"assets/assets/projects/driveit.png": "10d62cd603bb56c46747b3afb7426d33",
"assets/assets/projects/driveitB.png": "5ef549cb1c8790e511a6a116bc38e122",
"assets/assets/projects/easeB.png": "5d7fb7e3d61762bccd48d63ffe21b2c7",
"assets/assets/projects/easeme.JPG": "0787d33152d64816dae75ad23bad70bd",
"assets/assets/projects/expo-MB.png": "172e9120f5a5af21f14eee23a9afaa5c",
"assets/assets/projects/expo-UB.png": "ea06d21218e8516a4e754d30399b16fe",
"assets/assets/projects/expo.JPG": "a0d9c793b6e5f32c0b9671088389a350",
"assets/assets/projects/getfit.png": "be16f4281f75a57c846cc6b1d69bb5be",
"assets/assets/projects/getfitB.png": "d6e0edfe17fdfb05c80e844af316f534",
"assets/assets/projects/hereiam.png": "479fc2a7733d2faebf390fa3ef353be9",
"assets/assets/projects/hereiamB.png": "13fe5b689e51941ae7b8818f70abecc7",
"assets/assets/projects/medkit.png": "b8077af7853c8a7101b7566bb886b1ee",
"assets/assets/projects/medkitB.png": "eb1682db294dc14a08948ccb491685e4",
"assets/assets/projects/restcafe.png": "54209174b8cec7865a5f0273d4fabc26",
"assets/assets/projects/restcafeB.png": "6879bda7d4515782963afc024396fec7",
"assets/assets/projects/scs.JPG": "321a9732209b724ff4e9bb8bf785a3af",
"assets/assets/projects/scsB.png": "9d580bc8d8ca4b47731d9ab3665abda1",
"assets/assets/projects/setelbanat.png": "8bc15cef56d5b10bd88c21f3b98a4458",
"assets/assets/projects/setelbanatB.png": "a51c9c748f94705d5cf740e3a18f47ec",
"assets/assets/services/app.png": "9d2da88edb7f550ef24874b306b4ae12",
"assets/assets/services/blog.png": "5e1cbb2c67e2b8ea9ae4bcce0705d2a4",
"assets/assets/services/open.png": "4a5996597d32b06d91183f0860c29aab",
"assets/assets/services/open_b.png": "b65517dd1a07922b014409bb8dcb1e81",
"assets/assets/services/rapid.png": "8d3ff9fbdddae77403af46662f011ee8",
"assets/assets/services/ui.png": "3cf727247752b730a05f51fe0177036f",
"assets/assets/web.png": "343fc3f234e793d651c02ff08112e848",
"assets/FontManifest.json": "9bdb557c6b2f6cedd7a1dc0d926f5bd0",
"assets/fonts/MaterialIcons-Regular.otf": "0ea57a9963eee30b2f9b0976b7b3f36c",
"assets/NOTICES": "2f95750a4a9d53473afdd41315ecabf9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_AMS-Regular.ttf": "657a5353a553777e270827bd1630e467",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Bold.ttf": "a9c8e437146ef63fcd6fae7cf65ca859",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Regular.ttf": "7ec92adfa4fe03eb8e9bfb60813df1fa",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Bold.ttf": "46b41c4de7a936d099575185a94855c4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Regular.ttf": "dede6f2c7dad4402fa205644391b3a94",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Bold.ttf": "9eef86c1f9efa78ab93d41a0551948f7",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-BoldItalic.ttf": "e3c361ea8d1c215805439ce0941a1c8d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Italic.ttf": "ac3b1882325add4f148f05db8cafd401",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Regular.ttf": "5a5766c715ee765aa1398997643f1589",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-BoldItalic.ttf": "946a26954ab7fbd7ea78df07795a6cbc",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-Italic.ttf": "a7732ecb5840a15be39e1eda377bc21d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Bold.ttf": "ad0a28f28f736cf4c121bcb0e719b88a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Italic.ttf": "d89b80e7bdd57d238eeaa80ed9a1013a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Regular.ttf": "b5f967ed9e4933f1c3165a12fe3436df",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Script-Regular.ttf": "55d2dcd4778875a53ff09320a85a5296",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size1-Regular.ttf": "1e6a3368d660edc3a2fbbe72edfeaa85",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size2-Regular.ttf": "959972785387fe35f7d47dbfb0385bc4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size3-Regular.ttf": "e87212c26bb86c21eb028aba2ac53ec3",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size4-Regular.ttf": "85554307b465da7eb785fd3ce52ad282",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Typewriter-Regular.ttf": "87f56927f1ba726ce0591955c8b3b42d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "0db203e8632f03baae0184700f3bda48",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "01bb14ae3f14c73ee03eed84f480ded9",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "efc6c90b58d765987f922c95c2031dd2",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "eb7ed599db8314d4ad58bc8f219acbf6",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "db23ea5b393384c299b1b1f285534efc",
"icons/Icon-512.png": "8c077d291180abac0a5449e580a05492",
"index.html": "194fbe5e219930bfae9678278d519325",
"/": "194fbe5e219930bfae9678278d519325",
"main.dart.js": "e76ff95bbacdc8a18bb2bee7b793150f",
"manifest.json": "5d00bbe70d5374d44bf60c68d9249abc",
"version.json": "a29e8b22a08aa0274b027931eec216c4"};
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
