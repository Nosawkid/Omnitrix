// src/data/aliens.js

import activeImg from "../assets/images/active.webp";
import inactiveImg from "../assets/images/inactive.jpg";
import heatblastImg from "../assets/images/heat-blast.png";
import chosenHeatBlast from "../assets/images/chosenheatblast.webp";
import wildmuttImg from "../assets/images/wild-mutt.webp";
import chosenWildMutt from "../assets/images/wild-mutt-chosen.webp";
import diamondheadImg from "../assets/images/diamondhead.webp";
import chosenDiamondheadImg from "../assets/images/chosen-diamond-head.png";
import xlr8Img from "../assets/images/xlr8.webp";
import chosenXlr8Img from "../assets/images/chosen-xlr8.webp";
import greyMatterImg from "../assets/images/grey-matter.webp";
import chosenGreyMatterImg from "../assets/images/chosen-greymatter.webp";
import fourArmsImg from "../assets/images/four-arms.webp";
import chosenFourArmsImg from "../assets/images/chosen-four-arms.webp";
import stinkflyImg from "../assets/images/stinkfly.webp";
import chosenStinkflyImg from "../assets/images/chosen-stinkfly.webp";
import ripjawsImg from "../assets/images/ripjaws.webp";
import chosenRipjawsImg from "../assets/images/chosen-ripjaws.webp";
import upgradeImg from "../assets/images/upgrade.png";
import chosenUpgradeImg from "../assets/images/chosen-upgrade.webp";
import ghostfreakImg from "../assets/images/ghostfreak.webp";
import chosenGhostfreakImg from "../assets/images/chosen-ghostfreak.webp";
import cannonboltImg from "../assets/images/cannonbolt.webp";
import chosenCannonboltImg from "../assets/images/chosen-cannonbolt.webp";
import wildvineImg from "../assets/images/wildvine.webp";
import chosenWildvineImg from "../assets/images/chosen-wildvine.webp";

const aliens = [
  { alienName: "Active State", alienImage: [activeImg] },
  { alienName: "Heatblast", alienImage: [heatblastImg, chosenHeatBlast] },
  { alienName: "Wildmutt", alienImage: [wildmuttImg, chosenWildMutt] },
  {
    alienName: "Diamondhead",
    alienImage: [diamondheadImg, chosenDiamondheadImg],
  },
  { alienName: "XLR8", alienImage: [xlr8Img, chosenXlr8Img] },
  {
    alienName: "Grey Matter",
    alienImage: [greyMatterImg, chosenGreyMatterImg],
  },
  { alienName: "Four Arms", alienImage: [fourArmsImg, chosenFourArmsImg] },
  { alienName: "Stinkfly", alienImage: [stinkflyImg, chosenStinkflyImg] },
  { alienName: "Ripjaws", alienImage: [ripjawsImg, chosenRipjawsImg] },
  { alienName: "Upgrade", alienImage: [upgradeImg, chosenUpgradeImg] },
  { alienName: "Ghostfreak", alienImage: [ghostfreakImg, chosenGhostfreakImg] },
  { alienName: "Cannonbolt", alienImage: [cannonboltImg, chosenCannonboltImg] },
  { alienName: "Wildvine", alienImage: [wildvineImg, chosenWildvineImg] },
  { alienName: "Inactive", alienImage: [inactiveImg] },
];

export default aliens;
