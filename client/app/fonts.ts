import { Roboto_Condensed, Aladin, Bungee, PT_Serif} from "next/font/google";

export const aladin = Aladin({ 
  subsets: ["latin"], weight: "400" });

export const robotoCondensed = Roboto_Condensed({ 
  subsets: ["latin"], weight: ["300", "400"] });

export const bungee = Bungee({
  subsets: ["latin"], weight: "400"
})

export const ptSerif = PT_Serif({
  subsets: ["latin"], weight: ["400", "700"]
})