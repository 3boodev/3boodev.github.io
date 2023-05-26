import 'package:flutter/material.dart';
import 'package:url_launcher/url_launcher.dart';

// Colors
const Color kPrimaryColor = Colors.teal;

// Social Media
const kSocialIcons = [
  "https://img.icons8.com/metro/208/ffffff/facebook-new--v2.png",
  "https://img.icons8.com/ios-glyphs/480/ffffff/instagram-new.png",
  "https://img.icons8.com/android/480/ffffff/twitter.png",
  "https://img.icons8.com/metro/308/ffffff/linkedin.png",
  "https://img.icons8.com/material-rounded/384/ffffff/github.png",
  "https://img.icons8.com/ios-filled/500/ffffff/medium-monogram--v1.png"
];

const kSocialLinks = [
  "https://www.facebook.com/abdalla.android.33360",
  "https://www.instagram.com/abdelsamadabdalla/",
  "https://twitter.com/AbdallaElborgy",
  "https://www.linkedin.com/in/abdullah-abdelsamad-8a5739140/",
  "https://github.com/3boodev",
  "https://medium.com/@a.abdelsamad.al"
];

// URL Launcher
void launchURL(String _url) async =>
    await canLaunch(_url) ? await launch(_url) : throw 'Could not launch $_url';

// Community
final kCommunityLogo = [
  'assets/bns.png',
  'assets/flutterIsl.png',
  'assets/dsc.png'
];

final kCommunityLinks = [
  "http://www.bsu.edu.eg/",
  "https://www.facebook.com/groups/FlutterEgypt",
  "https://gdg.community.dev/gdg-beni-suef/"
];

// Tools & Tech
final kTools = [
  "Flutter",
  "Dart",
  "JAVA",
  "Kotlin",
  "Lumen",
  "Strapi",
  "MongoDB",
];

// services
final kServicesIcons = [
  "assets/services/app.png",
  "assets/services/ui.png",
  "assets/services/rapid.png",
  "assets/services/blog.png",
  "assets/services/open.png",
];

final kServicesTitles = [
  "Full App Development",
  "UI/UX Designing",
  "Rapid API",
  "Awesome DashBoards",
  "Open Source - GitHub",
];

final kServicesDescriptions = [
  "- Develop Mobile Apps (Android - IOS) \n- Integrate Diff 3rd Party Solutions \n- APIs Using [Deno - Lumen]",
  "- Modern UI/UX Designing\n- Adobe XD\n- Mobile & Web designs\n- Interactive UI designs\n- Responsiveness\n- Promo Videos and more..!",
  "- Rapid API via Lumen\n- Working REST\n- Quick & Working APIs \n- Secure Data Saver",
  "- Awesome DashBoards\n- Response DashBoards \n- SEO friendly\n- Contain Every Thing and more..!",
  "- Open source GitHub Projects\n- Awesome README.md\n- Well documented\n- Header images and more...!",
];

final kServicesLinks = [
  "https://nafezly.com/u/Abdallah_Elshafay",
  "https://github.com/3boodev",

  "https://github.com/3boodev",
  "https://medium.com/@a.abdelsamad.al",
  "https://github.com/3boodev"
];

// projects
final kProjectsBanner = [
  "assets/projects/medkitB.png",
  "assets/projects/hereiamB.png",
  "assets/projects/covidB.png",
  "assets/projects/driveitB.png",
  "assets/projects/getfitB.png",
  "assets/projects/restcafeB.png",
  "assets/projects/setelbanatB.png",
];

final kProjectsIcons = [
  "assets/projects/medkit.png",
  "assets/projects/hereiam.png",
  "assets/projects/covid.png",
  "assets/projects/driveit.png",
  "assets/projects/getfit.png",
  "assets/projects/restcafe.png",
  "assets/projects/setelbanat.png",
];

final kProjectsTitles = [
  "Dawak3ndna",
  "TripTo",
  "COVID-19",
  "Drive-It",
  "Get-Fit",
  "Rest-Cafe",
  "Set-Elbanat",
];

final kProjectsDescriptions = [
  "A Phramacy app developed using Flutter powered with Firebase as database with Doctor and Patient panels.",
  "TripTO App for visitor's Tourists for Egypt to show them several Services such Meusums , Hotels and so on. ",
  "Covid-19 statistics for Warning Areas and Save Areas around whole World.",
  "Drive-It App like Uber for Drivers and Clients for serve Users to arrive their Destinations.",
  "Do Exercise and workout from your home using GitFit app that developed using Flutter",
  "Ordering and Deliver food app and on-site Serve app from Resturants using Rest-Cafe Application",
  "Beauty app and ordering things for Beauty Centers. ",
];

final kProjectsLinks = [
  "https://play.google.com/store/apps/details?id=com.tico.dwak3ndna",
  "https://play.google.com/store/apps/details?id=com.ticoo.tripto",
  "https://github.com/3boodev",
  "https://github.com/3boodev",
  "https://github.com/3boodev",
  "https://github.com/3boodev",
  "https://github.com/3boodev",
];

// Contact
final kContactIcons = [
  Icons.home,
  Icons.phone,
  Icons.mail,
];

final kContactTitles = [
  "Location",
  "Phone",
  "Email",
];

final kContactDetails = [
  "Elnozha - Cairo,Egypt",
  "(+20) 155 2252349",
  "a.abdelsamad.al@gmail.com"
];

final kContactLinks = [
  "https://www.google.com.eg/maps/@30.110497,31.3598704,14.06z?entry=ttu",
  "https://wa.me/1552252349",
  "a.abdelsamad.al@gmail.com"
];
