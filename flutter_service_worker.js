'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "3906fc5d38199c243ab81a45fee32c66",
"index.html": "ee2e52cbf1798edfb0d26cb4df871136",
"/": "ee2e52cbf1798edfb0d26cb4df871136",
"main.dart.js": "e35de65db5ca2ce445a9b9567e74d814",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/logo-aerium-1.png": "c9c1749b275f61ebc563d6596ccf2569",
"icons/logo-aerium-2.png": "58b131c1e81194452cb702693c040a92",
"icons/logo.png": "81b30a916797c7f8d2b959dbdc2acb2a",
"manifest.json": "fea751f5c2808e161310ca4fce8aca63",
"assets/AssetManifest.json": "cc6f088d0526d65954da2bf52aa97fda",
"assets/NOTICES": "805af6f7a7f6d8e765bda8164b5bdec8",
"assets/FontManifest.json": "a78f950d25c1e29b92a4a309465e60cd",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "ffed6899ceb84c60a1efa51c809a57e4",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "eaed33dc9678381a55cb5c13edaf241d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "3241d1d9c15448a4da96df05f3292ffe",
"assets/packages/flutter_feather_icons/fonts/feather.ttf": "c96dc22ca29a082af83cce866d35cebc",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/screenshots/8.jpg": "95799f71c9817f376085c3898b75d287",
"assets/assets/screenshots/9.jpg": "e727c315acf66548049c51eb6c6bbc9e",
"assets/assets/screenshots/5.gif": "63b922b2439e4b9d8c82cb0d70d49b29",
"assets/assets/screenshots/6.gif": "73e6970dd99c11e67c4ef508b6375487",
"assets/assets/screenshots/3.gif": "045c76d00225ca68992c0dfdeca8d667",
"assets/assets/screenshots/11.jpg": "865a19485fc0879161062afd25ce23bf",
"assets/assets/screenshots/10.jpg": "ee1b6eee2d5df5a5bfdcb686266b75a0",
"assets/assets/screenshots/4.jpg": "f114c609432d9115658f5477900f66a7",
"assets/assets/screenshots/7.jpg": "2a56579d6ae3958c6ef6e14285d436dd",
"assets/assets/screenshots/2.jpg": "e16664ace87aa12b2266e6f8127ca05f",
"assets/assets/screenshots/1.jpg": "396c571e13c03fa3ddd14f13c601b8ad",
"assets/assets/screenshots/0.jpg": "d7a4be69fcea5718ce8fdaa844ce0988",
"assets/assets/images/ios-down-arrow.png": "fa4679d2972f1d11355142a60ed34ede",
"assets/assets/images/DAVID_COBBINA_CV.pdf": "0516a6d443027d43295e07518ea5c67a",
"assets/assets/images/down-arrow.png": "4393cd5feeb20fb468c7eb223d1bbd06",
"assets/assets/images/david-cobbina-cv.pdf": "056eac309f96f0152447de93b0d9f6ab",
"assets/assets/images/associate_android_dev.png": "496dc53d08eec0434eeeae9887955ec8",
"assets/assets/images/cloud_developer_cert.png": "1ca2e8a34f3acd90d81a67673b3b42be",
"assets/assets/images/data_science_cert.png": "1364c23105bfbb8c9197f7ad1f9dd245",
"assets/assets/images/projects/aerium-v1/portfolio_cover.png": "44d787594b26ade2562489ced20d9914",
"assets/assets/images/projects/aerium-v1/portfolio_design_2.png": "415b12138860ce60055b3ce39e517fde",
"assets/assets/images/projects/aerium-v1/portfolio_design_3.png": "4b8a024161c0d3f30b858ac60b9286d0",
"assets/assets/images/projects/roam/wireframes_signup_login.jpeg": "3f9c2d5af711cbc401036749fca0ec76",
"assets/assets/images/projects/roam/roam_profile.jpeg": "3351fb0171a75f53d2974e20e586db86",
"assets/assets/images/projects/roam/roam_onboarding.jpeg": "d6f2a2c09df8af0fc8708db8bd3c9a93",
"assets/assets/images/projects/roam/roam_home.jpeg": "9bcacb5453047dca89cf69352742765f",
"assets/assets/images/projects/roam/wireframes_app.jpeg": "2fba25598d725ec44a6b828448535e3a",
"assets/assets/images/projects/roam/wireframes_onboarding.jpeg": "0793bcaad704dc77c2115eca32ec488b",
"assets/assets/images/projects/roam/roam_cover.jpeg": "a67b0ed338d81feb4cf60955c3a821b2",
"assets/assets/images/projects/roam/roam_explore.jpeg": "545a73fcfd824fdc7aa66ec3b5601cf8",
"assets/assets/images/projects/roam/roam_overall.jpeg": "5c76cf22ede0a7955733f39d4439a055",
"assets/assets/images/projects/roam/roam_flow_chart.png": "50aa1d22e98a682fb24ad8beca7f306f",
"assets/assets/images/projects/login_catalog/login7.jpeg": "34412e31d874c3147f29d3bc522efbd2",
"assets/assets/images/projects/login_catalog/login_catalog_cover.jpg": "8142a609044c0f5b26df2964fe9304c4",
"assets/assets/images/projects/login_catalog/login8.png": "2bf8b3ab8d940dfb5c48069195c2d039",
"assets/assets/images/projects/login_catalog/login9.png": "4eb5737139e26eb31c1bea5e6e2c0a6b",
"assets/assets/images/projects/login_catalog/login4.png": "f5eb46c00b1ad99b48dc75648ae232c0",
"assets/assets/images/projects/login_catalog/login5.png": "bafb620a4388df5ef86cff21ef895491",
"assets/assets/images/projects/drop/drop_simple.png": "c4c00ba6b1933a304067dda102a922dd",
"assets/assets/images/projects/drop/drop_flowchart.png": "6601108c834215bb982c5fa49f586591",
"assets/assets/images/projects/drop/drop_minimal_design.png": "06c3434542050151428b3f66a0193244",
"assets/assets/images/projects/drop/drop_easy_access.gif": "7657c8f99a7a3a405cb71cb1f4bee892",
"assets/assets/images/projects/drop/drop_wireframes.gif": "155af5f6c5def746328626cfce09c163",
"assets/assets/images/projects/drop/drop_description.gif": "7a0eede4ed79d2468eeaec6d30347b3c",
"assets/assets/images/projects/drop/drop_thanks.gif": "7f63f39ed7c894ee6e0755f77a39afb5",
"assets/assets/images/projects/drop/drop_cover.png": "c50dd8fc206812051747e58cf5a8b345",
"assets/assets/images/projects/nimbus/nimbus.jpg": "9f925a888c2ff02c9f1206f99c2b155d",
"assets/assets/images/projects/nimbus/nimbus_cover.jpg": "454409edbf32cc8432d70c69155a6016",
"assets/assets/images/projects/outfitr/outfitr_2.jpeg": "b5c6638904552202a14d3d65f6d69116",
"assets/assets/images/projects/outfitr/outfitr_5.jpeg": "32317c7e7d7bf50c3ca110d6d393e670",
"assets/assets/images/projects/outfitr/outfitr_4.jpeg": "4f45a2d1f2735a813f9e3ce4ca83f351",
"assets/assets/images/projects/outfitr/outfitr_6.jpeg": "8a986255dfcd301d00891cf0a6288df8",
"assets/assets/images/projects/outfitr/outfitr_cover.jpg": "73c49501f831207eb63ca115c5b1dd31",
"assets/assets/images/projects/outfitr/outfitr_1.jpeg": "5a72c14039670e01bcbfaccbff889551",
"assets/assets/images/projects/logo2.jpeg": "6a0dd73824c8df0c6c8bb10f83301159",
"assets/assets/images/projects/logo.png": "81b30a916797c7f8d2b959dbdc2acb2a",
"assets/assets/images/projects/otp_package/otp_cover.png": "6fc7ff3a9d1b6d8cbb81348c8f2df184",
"assets/assets/images/projects/flutter_catalog/screens.png": "f384d904e19edcdf3b83ac9fab4a2514",
"assets/assets/images/projects/flutter_catalog/typography.png": "b12b17f85e8e12bd2ccab08e987c640c",
"assets/assets/images/projects/flutter_catalog/flutter_catalog_cover.png": "529c018ceb7db5d85e0bba13a4cd19c3",
"assets/assets/images/projects/flutter_catalog/stats.png": "c6c5da388e4771644e3a0057737cc018",
"assets/assets/images/projects/flutter_catalog/onboarding.png": "78cd62661bd65bca48016781ec5af76d",
"assets/assets/images/projects/flutter_catalog/activities.png": "56b8a82f91b3bb17fc2da735be8309e2",
"assets/assets/images/projects/flutter_catalog/thanks.png": "f23385476a0df7db049d7b8f94714706",
"assets/assets/images/projects/aerium-v2/typography.jpg": "e16664ace87aa12b2266e6f8127ca05f",
"assets/assets/images/projects/aerium-v2/aerium_v2.jpg": "33ec4d62fe74fb6ee3b01301f92ceb9c",
"assets/assets/images/projects/aerium-v2/overall.jpg": "f114c609432d9115658f5477900f66a7",
"assets/assets/images/projects/aerium-v2/last.jpg": "ee1b6eee2d5df5a5bfdcb686266b75a0",
"assets/assets/images/projects/aerium-v2/first.jpg": "d7a4be69fcea5718ce8fdaa844ce0988",
"assets/assets/images/projects/logo.jpeg": "973da8e0c75bdc90774a3e48bbc6c4d6",
"assets/assets/images/projects/foodybite/foodybite_home_flow.png": "f144497bae302b17e440392f547410e7",
"assets/assets/images/projects/foodybite/foodybite_cover.png": "969daa4932408c630eb26f795cd84840",
"assets/assets/images/projects/foodybite/foodybite_starting_flow.png": "77c7833485f0a71c95e3a74f3f01b7c4",
"assets/assets/images/projects/foodybite/foodybite_typography.png": "af6e1b156ad00cfb382824b30ba38a35",
"assets/assets/images/projects/foodybite/foodybite_home.png": "831c86f2e1dd6fa238acd532e41b3607",
"assets/assets/images/projects/foodybite/foodybite_review_favorite_notifications_flow.png": "e80ce1073e823a2fc83ddbf1515794f7",
"assets/assets/images/projects/disneyplus/disneyplus_header.png": "1ef584f42c10fd2f994f44e35d281751",
"assets/assets/images/projects/disneyplus/1.jpeg": "c9afbdb5647d7097de9e9cc4f05a6887",
"assets/assets/images/projects/disneyplus/disneyplus_great_menu.png": "d13b01ee672be2e3e884fe866db90359",
"assets/assets/images/projects/disneyplus/disneyplus_downloads_feature.png": "3bb3d18e2b7af7b62e3bc90a8deed037",
"assets/assets/images/projects/disneyplus/disneyplus_more_description.png": "54c40930e0035fee095cc5f26e09e8d4",
"assets/assets/images/projects/disneyplus/disneyplus_components.png": "74d9e2263cebd38337ac2ae9d2f23b16",
"assets/assets/images/projects/disneyplus/3.webp": "4cbcf6951ce5b117a9cafd2b6ebd91e5",
"assets/assets/images/projects/disneyplus/disneyplus_cover.png": "ffa11a0c8f114e0a24b31bb1790f2ef8",
"assets/assets/images/projects/disneyplus/2.webp": "74a2d2d452c1309a3e24a730bdee8265",
"assets/assets/images/projects/disneyplus/disneyplus_mockups.png": "ec3d2333044bc2622030e38eb84a1b90",
"assets/assets/images/projects/disneyplus/disneyplus_the_end.png": "32e658209ce45e9227860a8c0fbf1b54",
"assets/assets/images/projects/disneyplus/mockups.png": "bfec31223be46e6c269d8bc71f3f707e",
"assets/assets/images/projects/disneyplus/disneyplus_profiles.png": "ee5c8f987396dbb6157911982b9e983d",
"assets/assets/images/projects/disneyplus/1.webp": "8608d7010d06b4b1c6544cbf5b02c184",
"assets/assets/images/projects/disneyplus/disneyplus_description.png": "f049e03a0d786b44d57f80e702f10a5c",
"assets/assets/images/projects/disneyplus/disneyplus_theme.png": "b4a28335035d4b169f1033313801fcc5",
"assets/assets/images/projects/disneyplus/mens/10.jpeg": "e86b8334e915821e723c506ad1790e28",
"assets/assets/images/projects/disneyplus/mens/1.jpeg": "8ffd3b914debed7b5f533a4fa16e679a",
"assets/assets/images/projects/disneyplus/mens/11.jpeg": "f426e8e3c469ccc3442e5548ba3e4945",
"assets/assets/images/projects/disneyplus/mens/6.jpeg": "c636cf1a9a55df5e941e83fd3820cf70",
"assets/assets/images/projects/disneyplus/mens/7.jpeg": "decf53daa5914cf1333a1a882dee2340",
"assets/assets/images/projects/disneyplus/mens/8.jpeg": "c5dcc553422a6595330765a109259ce0",
"assets/assets/images/projects/disneyplus/mens/4.jpeg": "68522d35dd48b31c733141806aa249bf",
"assets/assets/images/projects/disneyplus/mens/5.jpeg": "a426d2fb0628ca77faa870a544e1b56d",
"assets/assets/images/projects/disneyplus/mens/9.jpeg": "a2dfca41adb17558683f8de39295ec9d",
"assets/assets/images/projects/disneyplus/mens/2.jpeg": "11670b9eb73cc1bcc76b64e564b54dfd",
"assets/assets/images/projects/disneyplus/mens/3.jpeg": "a34b83bf6a8535902df966499c8a6584",
"assets/assets/images/projects/disneyplus/2.jpeg": "b866cb03e385f5aebbfc3dc08fd743dd",
"assets/assets/images/projects/disneyplus/womens/47.jpeg": "c71707b592edf247434d250a1e821279",
"assets/assets/images/projects/disneyplus/womens/10.jpeg": "0a7c6ae5834277b30d695cc6564e8461",
"assets/assets/images/projects/disneyplus/womens/51.jpeg": "71e954526da802d09c7c33f1b8c97204",
"assets/assets/images/projects/disneyplus/womens/26.jpeg": "36cc267d5255904b28be326bc9d1abab",
"assets/assets/images/projects/disneyplus/womens/71.jpeg": "1e600a52d95e730cd57c2153bad82f56",
"assets/assets/images/projects/disneyplus/womens/67.jpeg": "57b17d89854cab697e927cf48a791254",
"assets/assets/images/projects/disneyplus/womens/30.jpeg": "83651b1a91be37a61ce0d3f7eadc1bde",
"assets/assets/images/projects/disneyplus/womens/31.jpeg": "b5bab7ba200ecb4b8e06c5f553bc347b",
"assets/assets/images/projects/disneyplus/womens/66.jpeg": "169b16a79943f93b1af3c6ac12e68d24",
"assets/assets/images/projects/disneyplus/womens/70.jpeg": "992fa4fc865848a46df18f0f1acaa9ba",
"assets/assets/images/projects/disneyplus/womens/27.jpeg": "88a8fef6e832002a20a3c2d8953a66b4",
"assets/assets/images/projects/disneyplus/womens/1.jpeg": "dd192f62f5d38fd2becdc546222ae28a",
"assets/assets/images/projects/disneyplus/womens/50.jpeg": "71e954526da802d09c7c33f1b8c97204",
"assets/assets/images/projects/disneyplus/womens/11.jpeg": "5c7abcef262bb9ffe84827f7c87397f2",
"assets/assets/images/projects/disneyplus/womens/46.jpeg": "c5dcc553422a6595330765a109259ce0",
"assets/assets/images/projects/disneyplus/womens/20.jpeg": "fc29fd3dc3fcca078b0f94bf26a4479c",
"assets/assets/images/projects/disneyplus/womens/61.jpeg": "6774b432c432679bda6fd3d47f041564",
"assets/assets/images/projects/disneyplus/womens/36.jpeg": "e7ea4659603a0a06cea06b76186cbc8c",
"assets/assets/images/projects/disneyplus/womens/41.jpeg": "23c01040fbd77e4eafb768a44ca440fa",
"assets/assets/images/projects/disneyplus/womens/16.jpeg": "6f96ae1cd17e813151601f4a0cae8b12",
"assets/assets/images/projects/disneyplus/womens/57.jpeg": "da87f6bf39a76779ad56a0ba5a93e863",
"assets/assets/images/projects/disneyplus/womens/6.jpeg": "022496bdb74bceb5eae5a8c9f665fd6e",
"assets/assets/images/projects/disneyplus/womens/7.jpeg": "2da8d8698aa91b52604eb34e62d59b04",
"assets/assets/images/projects/disneyplus/womens/56.jpeg": "bccab9e761fde02ec7f1093fbb1c2653",
"assets/assets/images/projects/disneyplus/womens/17.jpeg": "38705899797feebeee2740680e4500e5",
"assets/assets/images/projects/disneyplus/womens/40.jpeg": "a426d2fb0628ca77faa870a544e1b56d",
"assets/assets/images/projects/disneyplus/womens/37.jpeg": "a34b83bf6a8535902df966499c8a6584",
"assets/assets/images/projects/disneyplus/womens/60.jpeg": "424a04d60c9b4ad7dc160a591d542b47",
"assets/assets/images/projects/disneyplus/womens/21.jpeg": "b82a35a200ddf14e806140a7889d70f0",
"assets/assets/images/projects/disneyplus/womens/34.jpeg": "11670b9eb73cc1bcc76b64e564b54dfd",
"assets/assets/images/projects/disneyplus/womens/63.jpeg": "e86b8334e915821e723c506ad1790e28",
"assets/assets/images/projects/disneyplus/womens/8.jpeg": "888796819267ebd3de11036b9dfd56c0",
"assets/assets/images/projects/disneyplus/womens/22.jpeg": "e31960e58757e7392ba46bd7b6210b17",
"assets/assets/images/projects/disneyplus/womens/59.jpeg": "e3affac5b4e58952093744262cb3af84",
"assets/assets/images/projects/disneyplus/womens/18.jpeg": "96934aa9f54bba2a4baf69b6d711310b",
"assets/assets/images/projects/disneyplus/womens/38.jpeg": "68522d35dd48b31c733141806aa249bf",
"assets/assets/images/projects/disneyplus/womens/4.jpeg": "2ba2e44e049cad0bd48e53c9afc5d05d",
"assets/assets/images/projects/disneyplus/womens/55.jpeg": "5823089109aea46c5a3f50b3d6cd8f4c",
"assets/assets/images/projects/disneyplus/womens/14.jpeg": "16c7d6c0e15ac8e46d056479ed621554",
"assets/assets/images/projects/disneyplus/womens/43.jpeg": "c636cf1a9a55df5e941e83fd3820cf70",
"assets/assets/images/projects/disneyplus/womens/42.jpeg": "bcd3ef1d084ff30da205902478e899ad",
"assets/assets/images/projects/disneyplus/womens/15.jpeg": "058f3ae57b628a080b83be74e3674c01",
"assets/assets/images/projects/disneyplus/womens/54.jpeg": "b4dac79e4f4899025f51ca6e958dd650",
"assets/assets/images/projects/disneyplus/womens/5.jpeg": "eaa3dbbfe6a0c3d1b253334ed7e97240",
"assets/assets/images/projects/disneyplus/womens/39.jpeg": "252148b19ad7b43e8372d3164717724b",
"assets/assets/images/projects/disneyplus/womens/19.jpeg": "4be7c7d8b7827a7b16d8763ae662e91a",
"assets/assets/images/projects/disneyplus/womens/58.jpeg": "dbadeeec043069a8d960d128503112b5",
"assets/assets/images/projects/disneyplus/womens/23.jpeg": "b9711e3a52007f2c48f41eabb562edb7",
"assets/assets/images/projects/disneyplus/womens/62.jpeg": "a2dfca41adb17558683f8de39295ec9d",
"assets/assets/images/projects/disneyplus/womens/9.jpeg": "c3fc22a49c7d5bc8b4302f159fdf8125",
"assets/assets/images/projects/disneyplus/womens/35.jpeg": "ac75eca83176ebb4736bfcd36c3d203e",
"assets/assets/images/projects/disneyplus/womens/69.jpeg": "07eeb2c7edf4d9f8e1e4af7c37c4cfe8",
"assets/assets/images/projects/disneyplus/womens/2.jpeg": "33d435126a211b157b143be0f44655a9",
"assets/assets/images/projects/disneyplus/womens/28.jpeg": "7c4b1834289eb30c9b7e3f7962e729f7",
"assets/assets/images/projects/disneyplus/womens/53.jpeg": "29c1f6ca4a4bcc402c8e6a2ca804ee81",
"assets/assets/images/projects/disneyplus/womens/12.jpeg": "3aa7a5f4ed4cb979be23943d14006755",
"assets/assets/images/projects/disneyplus/womens/45.jpeg": "4c51301c2e0dd2e768b753df2e6e4334",
"assets/assets/images/projects/disneyplus/womens/32.jpeg": "bc2fb12643c6bde1006b0426dfedfb27",
"assets/assets/images/projects/disneyplus/womens/65.jpeg": "700a21305c60049c33c7487ccf5a7945",
"assets/assets/images/projects/disneyplus/womens/24.jpeg": "d69ec969a0a282e15924cf5454849952",
"assets/assets/images/projects/disneyplus/womens/49.jpeg": "8f11b1c93f638c8eff89ea75eb0cd82a",
"assets/assets/images/projects/disneyplus/womens/48.jpeg": "091497561a264183c7fc99acd2a5bd00",
"assets/assets/images/projects/disneyplus/womens/25.jpeg": "afc3e25fc8d83699ac77e67bdf12722c",
"assets/assets/images/projects/disneyplus/womens/72.jpeg": "c9afbdb5647d7097de9e9cc4f05a6887",
"assets/assets/images/projects/disneyplus/womens/64.jpeg": "f426e8e3c469ccc3442e5548ba3e4945",
"assets/assets/images/projects/disneyplus/womens/33.jpeg": "8ffd3b914debed7b5f533a4fa16e679a",
"assets/assets/images/projects/disneyplus/womens/44.jpeg": "decf53daa5914cf1333a1a882dee2340",
"assets/assets/images/projects/disneyplus/womens/13.jpeg": "b214325b4b7b3097f59fdbfd95a0d0d2",
"assets/assets/images/projects/disneyplus/womens/52.jpeg": "df28699e4ed0fbabd54722d126078ec3",
"assets/assets/images/projects/disneyplus/womens/29.jpeg": "ad8bed9793b9f4befe17e490a1877736",
"assets/assets/images/projects/disneyplus/womens/68.jpeg": "c9afbdb5647d7097de9e9cc4f05a6887",
"assets/assets/images/projects/disneyplus/womens/3.jpeg": "6ff1c5a29f86cff27d143b15e9b96d17",
"assets/assets/images/projects/disneyplus/kids/10.jpeg": "9e86474203c7e0aec1194ea9c88bd417",
"assets/assets/images/projects/disneyplus/kids/26.jpeg": "c4efba3cf3aac778b14258c5a18726c0",
"assets/assets/images/projects/disneyplus/kids/30.jpeg": "d47e0da18b3f47df4b5d5857d0e81ec1",
"assets/assets/images/projects/disneyplus/kids/27.jpeg": "34a7f5bbd711e3789bae0e00c3ee0f10",
"assets/assets/images/projects/disneyplus/kids/1.jpeg": "c5fff28bc9fb2244891054b2ab446cbc",
"assets/assets/images/projects/disneyplus/kids/11.jpeg": "a208f938f93d25d7a471cc328c0284e5",
"assets/assets/images/projects/disneyplus/kids/20.jpeg": "3b366e00fbcd47d41ac12c348b8dcf41",
"assets/assets/images/projects/disneyplus/kids/16.jpeg": "47e0e8bcf75820d4a9df2d06a9ffaceb",
"assets/assets/images/projects/disneyplus/kids/6.jpeg": "92648c1198a7647b37e952649dfbb82f",
"assets/assets/images/projects/disneyplus/kids/7.jpeg": "95718dd78711ad30bba18e3cb68f6405",
"assets/assets/images/projects/disneyplus/kids/17.jpeg": "40668100164fc0a72b71da6c85f82f46",
"assets/assets/images/projects/disneyplus/kids/21.jpeg": "96fff0189830f91f8eb511b1735d8c93",
"assets/assets/images/projects/disneyplus/kids/8.jpeg": "59fe0ca95cd0ee5aae96e6c7cb259c52",
"assets/assets/images/projects/disneyplus/kids/22.jpeg": "707f66a643e508dffc15ed5b0fc56b37",
"assets/assets/images/projects/disneyplus/kids/18.jpeg": "574d794a52bebca63ed289129b9b1434",
"assets/assets/images/projects/disneyplus/kids/4.jpeg": "01caadf23f7cbe18a7ca550f34be9565",
"assets/assets/images/projects/disneyplus/kids/14.jpeg": "d824cbaf4663f11b00771e8da632bdea",
"assets/assets/images/projects/disneyplus/kids/15.jpeg": "2b6dfe16298f9fa0a654328cd4b2b763",
"assets/assets/images/projects/disneyplus/kids/5.jpeg": "e946f2c2fd917e00af11853ef528ce40",
"assets/assets/images/projects/disneyplus/kids/19.jpeg": "645c36003d424d22ed993e42e8977750",
"assets/assets/images/projects/disneyplus/kids/23.jpeg": "03c44a64da856db09d16492221c6f37b",
"assets/assets/images/projects/disneyplus/kids/9.jpeg": "29221dfdf7516ec37accf57bd870ea46",
"assets/assets/images/projects/disneyplus/kids/2.jpeg": "f6638dd38550a56ccf66477869eefd91",
"assets/assets/images/projects/disneyplus/kids/28.jpeg": "8c88f0100ae4e8084f2cdfc3f10f9d34",
"assets/assets/images/projects/disneyplus/kids/12.jpeg": "6d6101bf323ae1ebe9c449a0f4a1c830",
"assets/assets/images/projects/disneyplus/kids/24.jpeg": "b27624734bcf589d0e95fdf3e7a73c84",
"assets/assets/images/projects/disneyplus/kids/25.jpeg": "7b53e0066badfef6c0971abb0d84dd08",
"assets/assets/images/projects/disneyplus/kids/13.jpeg": "ad2b9d615c39dcbe79765227f8cacda2",
"assets/assets/images/projects/disneyplus/kids/29.jpeg": "c66e6a5bc1f315a6e380c2e642f3abe4",
"assets/assets/images/projects/disneyplus/kids/3.jpeg": "fdab5f7f49379b30148bacd587293cd2",
"assets/assets/images/projects/disneyplus/disneyplus_designs.png": "084289a49e4ec07af37d41eb0b919123",
"assets/assets/images/projects/disneyplus/disneyplus_home.png": "7c3f46edc91974a22db6ecab11e49cbd",
"assets/assets/images/projects/disneyplus/3.jpeg": "f4f8adcec2a5d7e789dfc1f9c077a7b3",
"assets/assets/images/cmu_cert.png": "522cfd8c2bf621d86dbbca32c7624377",
"assets/assets/images/circle.png": "663d5187ada8666bfa87120d1665605f",
"assets/assets/images/right-arrow.png": "62a7bab73a0fe40acd3f4555adfcab91",
"assets/assets/images/android_basics_cert.png": "3279aee63a95e1b4df4e4999364f8749",
"assets/assets/images/works.png": "5c6f8eb3a22f703781aad6c2528cf0cd",
"assets/assets/images/david_legend.png": "bac667358275697e63db4c888a736df9",
"assets/assets/images/1.webp": "33e547bfbb7356c941f1214563f54ffe",
"assets/assets/images/dev_meditate.png": "742e79b9b388e0a9304a12eb0f8f6291",
"assets/assets/images/down-arrow-2.png": "de203dedb01f2871b4ebbec490c20a6c",
"assets/assets/images/google_play.png": "7c42f3803d546db3d393106501dba541",
"assets/assets/images/skills.png": "2bd1870ebedbbd39a41827675a2846c3",
"assets/assets/images/up-arrow.png": "d0c6457f5704962b99f0e6aa3e9b18e7",
"assets/assets/images/skills1.png": "77752281625f377820cdc5de7e66512c",
"assets/assets/images/maps.png": "97e3b95eddc853f3c3d347e299cf7bc1",
"assets/assets/images/skills2.png": "5849f99db0aaf1026199cd184087deae",
"assets/assets/fonts/visuelt/VisueltPro-Black.ttf": "691b6f9aa3ee625e3cd8da2f8849a126",
"assets/assets/fonts/visuelt/VisueltPro-ExtraLight.ttf": "90bfa0766e43260710e3c6ac0f78c9e9",
"assets/assets/fonts/visuelt/VisueltPro-Regular.ttf": "0f8cd2494eb8c5e3a33352b2dd38fd61",
"assets/assets/fonts/visuelt/VisueltPro-Bold.ttf": "18acd33c965a455418d4204f0f334ea8",
"assets/assets/fonts/visuelt/VisueltPro-Thin.ttf": "82d7b5b67c24f00acb08f2dccf1fd03b",
"assets/assets/fonts/visuelt/VisueltPro-Medium.ttf": "cf4dbc20776a2b309fe30a9bbfe7de0a",
"assets/assets/fonts/visuelt/VisueltPro-Light.ttf": "2a1df2ff00c2611bf1b7fdeeaeebfa59",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
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
