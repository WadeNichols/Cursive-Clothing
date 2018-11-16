import React from "react";

//product pictures imports
import fauxParka from "./assets/mens/fauxParka.jpg";
import versusWatch from "./assets/mens/versusWatch.jpg";
import stripedPolo from "./assets/mens/stripedPolo.jpg";
import stamfordPants from "./assets/mens/stamfordPants.jpg";
import lacosteShoes from "./assets/mens/lacosteShoes.jpg";
import rayBan from "./assets/mens/rayBan.jpg";
import pomegranate from "./assets/mens/pomegranate.jpg";
import plumPolo from "./assets/mens/plumPolo.jpg";
import penguinButton from "./assets/mens/penguinButton.jpg";
import navigatorGlasses from "./assets/mens/navigatorGlasses.jpg";
import messengerBag from "./assets/mens/messengerBag.jpg";
import leatherCoat from "./assets/mens/leatherCoat.jpg";
import lacoste from "./assets/mens/lacoste.jpg";
import laceUp from "./assets/mens/laceUp.jpg";
import hugoBoss from "./assets/mens/hugoBoss.jpg";
import greyDerby from "./assets/mens/greyDerby.jpg";
import denimPants from "./assets/mens/denimPants.jpg";
import camoPants from "./assets/mens/camoPants.jpg";
import bossWatch from "./assets/mens/bossWatch.jpg";
import pendleton from "./assets/mens/pendleton.jpg";
import bevyCoat from "./assets/mens/bevyCoat.jpg";
import bermanPants from "./assets/mens/bermanPants.jpg";
import armaniExchange from "./assets/mens/armaniExchange.jpg";
import chukkaBoots from "./assets/mens/chukkaBoots.jpg";
import shirtShirt from "./assets/mens/shirtShirt.jpg";

const MensClothing = () => {
  return (
    <div className="items-container">
      {/* coats */}
      <div className="coats">
        <a
          href="https://www.nordstromrack.com/shop/product/2156593/andrew-marc-bevy-coat?color=CHARCOAL"
          target="_blank"
        >
          <img src={bevyCoat} />
          <p>
            Price: $99.97
            <br />
            Andrew Marc Bevy Coat
          </p>
        </a>
        <a
          href="https://shop.nordstrom.com/s/original-penguin-insulated-parka-with-faux-fur-trim/5007912?country=US&currency=USD&mrkgcl=760&mrkgadid=3313961121&utm_content=51369790750&utm_term=pla-373014422115&utm_channel=shopping_acq_p&sp_source=google&sp_campaign=954518070&rkg_id=0&adpos=1o34&creative=226491526210&device=c&matchtype=&network=g&gclid=EAIaIQobChMIqLzZp_PX3gIVmh-tBh04IQQVEAkYIiABEgJ2mPD_BwE"
          target="_blank"
        >
          <img src={fauxParka} />
          <p>
            Price: $275.00 <br />
            ORIGINAL PENGUIN Insulated Parka with Faux Fur Trim
          </p>
        </a>
        <a
          href="https://www.nordstromrack.com/shop/product/2566245/pendleton-wool-hybrid-blazer?color=BLACK"
          target="_blank"
        >
          <img src={pendleton} />
          <p>
            Price: $179.97
            <br />
            PENDLETON Wool Hybrid Blazer
          </p>
        </a>
        <a
          href="https://www.nordstromrack.com/shop/product/2437185/belstaff-woodbridge-leather-jacket?color=BLK"
          target="_blank"
        >
          <img src={leatherCoat} />
          <p>
            Price: $764.97 <br />
            Belstaff Woodbridge Leather Jacket
          </p>
        </a>
      </div>
      {/* shirts */}
      <div className="coats">
        <a
          href="https://www.nordstromrack.com/shop/product/2576651?cm_mmc=feeds-_-adlucent-_-google-_-pla&utm_source=adlucent&utm_medium=feeds&utm_content=google&utm_campaign=pla&utm_channel=shopping_acq_p&sid=545650&aid=%5BADL%5D%20%5BPLA%5D%20%5BShopping%5D%20-%20Categories%20-%20Brand%20-%20%5BDesktop%5D&gclid=EAIaIQobChMIqLzZp_PX3gIVmh-tBh04IQQVEAkYAiABEgIa7vD_BwE&color=TRUE%20BLACK"
          target="_blank"
        >
          <img src={penguinButton} />
          <p>
            Price: $39.97 <br />
            Original Penguin Waffle Textured Long Sleeve
            <br /> Classic Fit Shirt
          </p>
        </a>
        <a
          href="https://www.nordstromrack.com/shop/product/2655715?cm_mmc=feeds-_-adlucent-_-google-_-pla&utm_source=adlucent&utm_medium=feeds&utm_content=google&utm_campaign=pla&utm_channel=shopping_acq_p&sid=545650&aid=%5BADL%5D%20%5BPLA%5D%20%5BShopping%5D%20-%20Categories%20-%20Brand%20-%20%5BDesktop%5D&gclid=EAIaIQobChMIqLzZp_PX3gIVmh-tBh04IQQVEAkYByABEgIoXvD_BwE&color=POMEGRANATE"
          target="_blank"
        >
          <img src={pomegranate} />
          <p>
            Price: $34.97 <br />
            Original Penguin Gingham Long Sleeve Slim Fit Shirt
          </p>
        </a>
        <a
          href="https://www.nordstromrack.com/shop/product/2655673?cm_mmc=feeds-_-adlucent-_-google-_-pla&utm_source=adlucent&utm_medium=feeds&utm_content=google&utm_campaign=pla&utm_channel=shopping_acq_p&sid=545650&aid=%5BADL%5D%20%5BPLA%5D%20%5BShopping%5D%20-%20Categories%20-%20Brand%20-%20%5BDesktop%5D&gclid=EAIaIQobChMIqLzZp_PX3gIVmh-tBh04IQQVEAkYGCABEgK3lfD_BwE&color=PLUM%20WINE"
          target="_blank"
        >
          <img src={plumPolo} />
          <p>
            Price: $24.97 <br />
            Original Penguin Contrast Piped Polo
          </p>
        </a>
        <a
          href="https://www.nordstromrack.com/shop/product/2655677/original-penguin-striped-colorblock-polo?color=VINTAGE%20INDIGO"
          target="_blank"
        >
          <img src={stripedPolo} />
          <p>
            Price: $24.97 <br />
            Original Penguin Striped Colorblock Polo
          </p>
        </a>
      </div>
      {/* pants */}
      <div className="coats">
        <a
          href="https://www.nordstromrack.com/shop/product/2599072/union-denim-cargo-joggers?color=KNOLL%20GREE"
          target="_blank"
        >
          <img src={denimPants} />
          <p>
            Price: $34.97 <br />
            UNION DENIM Cargo Joggers
          </p>
        </a>
        <a
          href="https://www.nordstromrack.com/shop/product/2154753/sovereign-code-berman-pants?color=CHARCOAL"
          target="_blank"
        >
          <img src={bermanPants} />
          <p>
            Price: $29.97 <br />
            Sovereign Code Berman Pants
          </p>
        </a>
        <a
          href="https://www.nordstromrack.com/shop/product/1800677/volcom-stamford-pant?color=MUSHROOMstam"
          target="_blank"
        >
          <img src={stamfordPants} />
          <p>
            Price: $29.97 <br />
            Volcom Stamford Pant
          </p>
        </a>
        <a
          href="https://www.nordstromrack.com/shop/product/2594343/g-star-raw-rovic-qane-camo-3-d-tapered-jeans?color=NIGHT%2FBLACK%20AO"
          target="_blank"
        >
          <img src={camoPants} />
          <p>
            Price: $79.97 <br />
            G-STAR RAW Rovic Qane Camo 3D Tapered Jeans
          </p>
        </a>
      </div>
      {/* shoes */}
      <div className="coats">
        <a
          href="https://www.nordstromrack.com/shop/product/2251784/hawke-co-ilan-lace-up-shoe?color=BLACK"
          target="_blank"
        >
          <img src={laceUp} />
          <p>
            Price: $29.97 <br />
            Hawke & Co. Ilan Lace-Up Shoe
          </p>
        </a>
        <a
          href="https://www.nordstromrack.com/shop/product/2603826/lacoste-sherbrooke-318-leather-derby?color=BLACK%2FOFFWHITE"
          target="_blank"
        >
          <img src={lacosteShoes} />
          <p>
            Price: $79.97 <br />
            Lacoste Sherbrooke 318 Leather Derby
          </p>
        </a>
        <a
          href="https://www.nordstromrack.com/shop/product/2584105/hawke-co-josh-textured-derby?color=GREY"
          target="_blank"
        >
          <img src={greyDerby} />
          <p>
            Price: $29.97 <br />
            Hawke & Co. Josh Textured Derby
          </p>
        </a>
        <a
          href="https://www.nordstromrack.com/shop/product/2309392/steve-madden-ledge-chukka-boot?color=BLACK"
          target="_blank"
        >
          <img src={chukkaBoots} />
          <p>
            Price: $49.00 <br />
            Steve Madden Ledge Chukka Boot
          </p>
        </a>
      </div>
      {/* accessories */}
      <div className="coats">
        <a
          href="https://www.nordstromrack.com/shop/product/2383929/ray-ban-52-mm-wayfarer-sunglasses?color=BLACK"
          target="_blank"
        >
          <img src={rayBan} />
          <p>
            Price: $59.97 <br />
            Ray-Ban 52mm Wayfarer Sunglasses
          </p>
        </a>
        <a
          href="https://www.nordstromrack.com/shop/product/2435652/joes-jeans-56-mm-navigator-sunglasses?color=GUNMETAL"
          target="_blank"
        >
          <img src={navigatorGlasses} />
          <p>
            Price: $19.97 <br />
            Joe's Jeans 56mm Navigator Sunglasses
          </p>
        </a>
        <a
          href="https://www.nordstromrack.com/shop/product/2654673/versus-versace-tokoy-r-analog-quartz-bracelet-watch-42-mm?color=BLACK"
          target="_blank"
        >
          <img src={versusWatch} />
          <p>
            Price: $64.97 <br />
            Versus Versace Tokoy R Analog Quartz Bracelet Watch, 42mm
          </p>
        </a>
        <a
          href="https://www.nordstromrack.com/shop/product/2679812/boss-mens-pilot-vintage-leather-strap-watch-44-mm?color=BLACK"
          target="_blank"
        >
          <img src={bossWatch} />
          <p>
            Price: $94.97 <br />
            BOSS Men's Pilot Vintage Leather Strap Watch, 44mm
          </p>
        </a>
      </div>
      {/* accessories2 */}
      <div className="coats">
        <a
          href="https://www.nordstromrack.com/shop/product/2329152/ax-armani-exchange-mens-high-road-dress-bracelet-watch-46-mm?color=SILVER"
          target="_blank"
        >
          <img src={armaniExchange} />
          <p>
            Price: $79.97 <br />
            AX ARMANI EXCHANGE Men's High Road Dress Bracelet Watch, 46mm
          </p>
        </a>
        <a
          href="https://www.nordstromrack.com/shop/product/644651/hugo-boss-mens-hugo-dark-blue-eau-de-toilette-spray-2-5-fl-oz?color=NO%20COLOR"
          target="_blank"
        >
          <img src={hugoBoss} />
          <p>
            Price: $34.97 <br />
            HUGO BOSS Men's Hugo Dark Blue Eau de Toilette Spray - 2.5 fl. oz.
          </p>
        </a>
        <a
          href="https://www.nordstromrack.com/shop/product/2639818/lacoste-lacoste-red-eau-de-toilette-125-ml?color=NO%20COLOR"
          target="_blank"
        >
          <img src={lacoste} />
          <p>
            Price: $34.97 <br />
            Lacoste Lacoste Red Eau de Toilette - 125ml.
          </p>
        </a>
        <a
          href="https://www.nordstromrack.com/shop/product/2205405/cole-haan-smooth-leather-messenger-bag?color=BLACK"
          target="_blank"
        >
          <img src={messengerBag} />
          <p>
            Price: $119.97 <br />
            Cole Haan Smooth Leather Messenger Bag
          </p>
        </a>
      </div>
    </div>
  );
};

export default MensClothing;
